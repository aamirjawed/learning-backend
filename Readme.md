# 🛠️ Learning Backend – Node.js + Express API

This is a backend learning project built using Node.js, Express, and MongoDB. It includes user and task management features, API routing, and middleware.

## 🚀 Features

- RESTful API with Express
- Route-level middleware for error handling
- Environment-based configuration using dotenv
- Static file serving via Express
- Modular and scalable folder structure

---

## 🧰 Tech Stack

- Backend: Node.js, Express.js
- Database: MongoDB
- Middleware: Custom error handling, logging
- Tools: Postman, Git, Nodemon, dotenv

---


## 📁 Project Structure


learning-backend/
├── public/               # Public/static files (e.g., index.html)
├── src/
│   ├── controller/       # Route handlers (e.g., userController.js)
│   ├── middleware/       # Custom middleware (e.g., notFound.js, errorHandler.js)
│   ├── routes/           # Express route definitions (e.g., userRoutes.js)
│   ├── views/            # Template views (if using EJS)
│   └── app.js            # Main Express app setup
├── .env                  # Environment variables
├── .gitignore            # Git ignored files/folders
├── package.json          # Project metadata and dependencies
├── README.md             # Project documentation
└── server.js             # Entry point to start the Express server


