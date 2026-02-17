import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    // console.log("process.env.MONGO_URI", process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/quranlingo');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};
