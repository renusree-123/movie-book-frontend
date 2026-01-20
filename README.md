# 🎬📚 Movie–Book Explorer

Movie–Book Explorer is a full-stack web application that allows users to search and explore movies and books in one place.  
The project uses public APIs to fetch real-time data and provides a clean, interactive user interface.

---

## 🚀 Live Demo

### 🌐 Deployed Links

- **Frontend:** https://movie-book-frontend-ojmv.vercel.app/ 
- **Backend:** https://movie-book-backend.vercel.app  

---

## ✨ Features

- 🔍 Search movies using **TMDB API**
- 📖 Search books using **Google Books API**
- ⭐ Display ratings, descriptions, and details
- 📄 Pagination support for large results
- ❤️ Favorites list to save items
- 🌗 Dark / Light mode toggle
- 🎨 Clean and responsive UI
- ⚡ Fast API integration

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- JavaScript
- Axios
- React Router
- CSS / Tailwind (if used)

### Backend
- Node.js
- Express.js
- Axios
- CORS
- TMDB API
- Google Books API

### Deployment
- Frontend: **Vercel**
- Backend: **Vercel**

---

## 📁 Project Structure

movie-book-explorer
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   │   ├── Navbar.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── MovieList.jsx
│   │   │   ├── BookList.jsx
│   │   │   ├── Favorites.jsx
│   │   │   └── Pagination.jsx
│   │   │
│   │   ├── pages
│   │   │   ├── Home.jsx
│   │   │   └── FavoritesPage.jsx
│   │   │
│   │   ├── services
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── .env
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
│
├── backend
│   ├── api
│   │   └── index.js
│   │
│   ├── package.json
│   ├── vercel.json
│   └── .env
│
└── README.md
API Endpoints
BOOK API:GET /books?q=atomic habits&page=1

MOVIE API:GET /movies?q=avatar&page=1

