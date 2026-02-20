# 📖 QuranLingo Backend

**Learn to understand the Qur'an — word by word.**

QuranLingo is an open-source language-learning platform designed to help users understand the Qur'an in its original Arabic. Instead of traditional translation-heavy approaches, QuranLingo uses a structured, progressive curriculum that teaches the most frequently occurring Quranic words through a spaced-repetition system — enabling learners to build genuine comprehension over time.

This repository contains the **backend API** powering the QuranLingo platform.

---

## 🎯 What Problem Does This Solve?

Over 80% of the world's Muslims do not speak Arabic, yet the Qur'an was revealed in Arabic. Most people rely entirely on translations, which often lose the depth, nuance, and beauty of the original text.

QuranLingo addresses this by teaching the **~300 most frequent words** in the Qur'an — which make up roughly **70-80% of its total text**. By learning these words in context with real Quranic examples, a learner can go from 0% to meaningful comprehension in a structured, achievable journey.

---

## 📚 Curriculum Structure

The curriculum is organized into **3 progressive phases** with a total of **21 chapters**:

### Phase 1: Foundation (0% → 50% comprehension) — 7 Chapters
> Learn the most frequent structural words that form the backbone of every verse.

| # | Chapter | What You'll Learn |
|---|---------|-------------------|
| 1 | Demonstrative Pronouns | This, That, These, Those, He who, Those who |
| 2 | Personal Pronouns | I, You, He, She, We, They |
| 3 | Question Words | Who? What? Why? Where? How? When? |
| 4 | Conjunctions & Linkers | And, Or, But, Then, So that |
| 5 | Negation Words | No, Not, Never, Without |
| 6 | Time & Place Words | When, Where, Before, After, Day, Night |
| 7 | Sentence Architect | Putting it all together with structural patterns |

### Phase 2: Expansion (50% → 85% comprehension) — 12 Chapters
> Build vocabulary through thematic word families — names of Allah, actions, emotions, and more.

| # | Chapter | What You'll Learn |
|---|---------|-------------------|
| 1 | Divine Attributes | Names and qualities of Allah (Rabb, Rahmān, etc.) |
| 2 | Prophetic Vocabulary | Words used in stories of the Prophets |
| 3 | Faith & Belief | Imān, Taqwā, Tawbah, and core spiritual concepts |
| 4–12 | Thematic Expansions | Actions, nature, morality, society, and more |

### Phase 3: Mastery (85% → 100% comprehension) — 2 Chapters
> Final review and mastery of high-impact words to complete the journey.

| # | Chapter | What You'll Learn |
|---|---------|-------------------|
| 1 | The Core Challenge | Focused review of the most high-impact words |
| 2 | Final Mastery | Complete your Quranic vocabulary journey |

### Word Format

Each word in the curriculum includes:

```json
{
  "arabic": "هٰذَا",
  "transliteration": "Hādhā",
  "translations": {
    "en": "This (masc.)",
    "ur": "یہ (مذکر)",
    "ur_en": "Yeh (muzakkar)"
  },
  "gender": "male",
  "examples": [
    {
      "arabic": "قَالُواْ هَٰذَا ٱلَّذِي رُزِقْنَا مِن قَبْلُ",
      "translation": "They will say, 'This is what we were provided with before'",
      "ref": "2:25"
    }
  ]
}
```

> All translations are provided in **English**, **Urdu**, and **Romanized Urdu** for accessibility across South Asian and global audiences.

---

## 🏗️ Architecture

This project follows a strict **layered architecture**:

```
Route → Controller → Service → Repository → Database Model
```

| Layer | Location | Responsibility |
|-------|----------|----------------|
| **Routes** | `src/routes/` | Define API endpoints, map to controllers |
| **Controllers** | `src/controllers/` | Handle HTTP req/res, validation, error handling |
| **Services** | `src/services/` | Business logic, transformations, token generation |
| **Repositories** | `src/repositories/` | Direct database operations (find, create, update) |
| **Models** | `src/models/` | Mongoose schemas and TypeScript interfaces |
| **Middlewares** | `src/middlewares/` | Auth guards, error handling, token extraction |
| **Constants** | `src/constants/` | Curriculum data (phases, chapters, words) |

### Project Structure

```
src/
├── app.ts                    # Express app setup & middleware registration
├── server.ts                 # Server entry point & MongoDB connection
├── config/                   # Shared type definitions
├── constants/                # 📖 Curriculum data
│   ├── index.ts              # Central export for all phases
│   ├── shared.ts             # SRS intervals & shared constants
│   ├── phase-one/            # 7 chapters (Foundation)
│   ├── phase-two/            # 12 chapters (Expansion)
│   └── phase-three/          # 2 chapters (Mastery)
├── controllers/              # Request handlers
├── middlewares/               # Auth & error middleware
├── models/                   # Mongoose schemas
├── repositories/             # Database queries
├── routes/                   # API route definitions
├── services/                 # Business logic
└── utils/                    # Utility functions (UUID generation)
```

---

## 🔌 API Endpoints

### Public Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/v1/users/register` | Register a new user |
| `POST` | `/api/v1/users/login` | Login (sets httpOnly cookie) |

### Protected Routes (require authentication)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/v1/users/logout` | Logout & invalidate tokens |
| `GET` | `/api/v1/users/:id` | Get user profile |
| `GET` | `/api/v1/curriculum` | Get full curriculum overview (phases + chapters) |
| `GET` | `/api/v1/curriculum/:phaseId/:chapterId` | Get chapter with all words |
| `POST` | `/api/v1/progress/read-word` | Record a word as read |
| `GET` | `/api/v1/progress/history` | Get user's word reading history |
| `GET` | `/api/v1/progress/summary` | Get progress summary |

### Admin Routes (require authentication)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/v1/phases/create` | Create a phase |
| `POST` | `/api/v1/chapters/create` | Create a chapter |
| `POST` | `/api/v1/words/create` | Create a word |
| `POST` | `/api/v1/words/create-bulk` | Bulk create words |

> Full request/response examples available in [`apiDoc.json`](./apiDoc.json)

---

## 🔐 Authentication

QuranLingo uses **JWT tokens stored in httpOnly cookies** for authentication:

- **Login** → Server sets a signed JWT as an `httpOnly`, `secure`, `sameSite: strict` cookie
- **Token Extractor** (global middleware) → Decodes the cookie on every request, attaches user info to `req.user`
- **Auth Guard** (per-route middleware) → Blocks unauthenticated requests with `401`
- **Token Versioning** → Each user has a `tokenVersion`. On logout or password change, the version is bumped, instantly invalidating all previously issued tokens

---

## 🚀 Local Setup

### Prerequisites

- **Node.js** v18+ ([download](https://nodejs.org/))
- **MongoDB** — either a local instance or a [MongoDB Atlas](https://www.mongodb.com/atlas) cluster
- **Git** ([download](https://git-scm.com/))

### 1. Clone the repository

```bash
git clone https://github.com/your-username/QuranLingo_Backend.git
cd QuranLingo_Backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?appName=quarlingo
NODE_ENV=development
JWT_SECRET=your_super_secret_key_change_me
```

> ⚠️ Replace `MONGO_URI` with your own MongoDB connection string. Never commit your `.env` file.

### 4. Start the development server

```bash
npm run dev
```

The server will start at `http://localhost:5000` with hot-reloading via nodemon.

### 5. Verify it's working

```bash
curl http://localhost:5000/
```

Expected response:
```json
{ "status": "success", "message": "Welcome to QuranLingo Backend API" }
```

### Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `npm run dev` | Start dev server with hot-reload |
| `build` | `npm run build` | Compile TypeScript to JavaScript |
| `start` | `npm start` | Run compiled production build |

---

## 🤝 Contributing

We welcome contributions from the community! Whether it's fixing a bug, adding new curriculum content, improving the API, or enhancing documentation — every contribution matters.

### How to Contribute

1. **Fork** this repository
2. **Clone** your fork locally
3. **Create a branch** for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make your changes** following the architecture guidelines below
5. **Test** your changes locally (`npm run dev`)
6. **Commit** with a clear message:
   ```bash
   git commit -m "feat: add new chapter to phase 2"
   ```
7. **Push** to your fork and open a **Pull Request**

### Architecture Guidelines

This project enforces a strict layered architecture. **Any deviation is a violation.**

```
Route → Controller → Service → Repository → Database Model
```

- **Routes**: Only import from controllers. No business logic.
- **Controllers**: Only import from services. Extract and validate `req` data before passing to services.
- **Services**: Only import from repositories. No access to `req` or `res`.
- **Repositories**: Only place where Mongoose models are imported and used.

### Adding New Curriculum Content

The curriculum data lives in `src/constants/`. To add a new chapter:

1. Create a new file in the appropriate phase folder (e.g., `src/constants/phase-two/chapterThirteen.ts`)
2. Follow the existing format — each word needs `arabic`, `transliteration`, `translations` (en, ur, ur_en), and optionally `gender` and `examples`
3. Export the chapter and add it to the phase's `index.ts`
4. Update `src/constants/index.ts` if adding a new phase

### Commit Message Convention

| Prefix | Use for |
|--------|---------|
| `feat:` | New features |
| `fix:` | Bug fixes |
| `docs:` | Documentation changes |
| `refactor:` | Code restructuring |
| `content:` | Curriculum/word additions |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Node.js** | Runtime |
| **Express 5** | HTTP framework |
| **TypeScript** | Type safety |
| **MongoDB** | Database |
| **Mongoose** | ODM (Object Data Modeling) |
| **JWT** | Authentication tokens |
| **bcryptjs** | Password hashing |
| **cookie-parser** | Cookie handling |
| **helmet** | Security headers |
| **cors** | Cross-origin resource sharing |
| **morgan** | Request logging |
| **nodemon** | Hot-reload in development |

---

## 📄 License

This project is open source under the [ISC License](./LICENSE).

---

<p align="center">
  <strong>بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</strong><br>
  <em>In the name of Allah, the Most Gracious, the Most Merciful</em>
</p>