import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { errorMiddleware } from './middlewares/error.middleware';
import routes from './routes';

const app: Application = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Routes
app.use('/api/v1', routes);

// Health Check
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ status: 'success', message: 'Welcome to QuranLingo Backend API' });
});

// Error Handling Middleware
app.use(errorMiddleware);

export default app;
