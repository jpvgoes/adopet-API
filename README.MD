# TypeScript Node.js API

A robust and scalable RESTful API built with TypeScript and Node.js, following best practices for maintainability and performance. This project demonstrates a modular structure using controllers, routes, entities, and type definitions, suitable for managing pet-related data.

---

## 🚀 Features

- Modular architecture with controllers, routers, and entities
- TypeScript for type safety
- Enum and type definitions for domain modeling
- Example endpoints for pet management
- SQLite database integration with TypeORM
- Ready for extension and production use

---

## 🛠 Tech Stack

- **Node.js**
- **TypeScript**
- **Express.js**
- **TypeORM**
- **SQLite**

---

## 📦 Project Structure

```
API-TypeScript/
├── src/
│   ├── app.ts                # App entry point
│   ├── config/
│   │   ├── dataSource.ts     # TypeORM data source config
│   │   └── database.sqlite   # SQLite database file
│   ├── controller/
│   │   └── PetController.ts  # Pet-related request handlers
│   ├── entities/
│   │   └── PetEntity.ts      # Pet entity definition
│   ├── routes/
│   │   ├── index.ts          # Main router
│   │   └── petRouter.ts      # Pet routes
│   └── types/
│       ├── EnumEspecie.ts    # Enum for pet species
│       └── TipoPet.ts        # Type for pet
├── server.ts                 # Server bootstrap
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript config
├── .gitignore                # Git ignore rules
└── README.md                 # Project documentation
```

---

## 🏁 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd API-TypeScript
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up the database

- The project uses SQLite by default. The database file will be created automatically in `src/config/database.sqlite` when you run the app.
- If you want to use a different database, update the TypeORM config in `src/config/dataSource.ts`.

### 4. Configure environment variables (optional)

- You can create a `.env` file in the project root to override default settings (e.g., port, database path).
- Example:

```
PORT=3000
DATABASE_PATH=src/config/database.sqlite
```

### 5. Run the development server

```bash
npm run dev
```

Or, to build and run in production:

```bash
npm run build
npm start
```

---

## 📚 Usage

- The API will be available at `http://localhost:3000` by default.
- Use tools like [Postman](https://www.postman.com/) to test endpoints (see `Adopet.postman_collection.json` for examples).

---

## 📖 API Endpoints (Examples)

- `GET /pets` — List all pets
- `POST /pets` — Add a new pet
- `GET /pets/:id` — Get pet by ID
- `PUT /pets/:id` — Update pet by ID
- `DELETE /pets/:id` — Remove pet by ID

> For full details, see the route, controller, and entity files in `src/routes/`, `src/controller/`, and `src/entities/`.

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
