# Streamify 🎬

**Streamify is a movie watching web application that allows users to explore,
watch trailers, and interact with movies through comments and favorites.**

---

## Features

### Home Page

- Browse **trending movies**, **popular movies**, and **recently viewed movies**
- "**View More**" option for each category

### Movie Details Page

- Click on a movie to open a detailed page showing:
  - **Description**
  - **Genre**
  - **Cast**
  - **Similar movies**
  - **Watch trailer**

### Movie Interaction

- **Watch movie** (currently redirects to external link — note: insecure link)
- **Add comments** on movies
- **Comment reactions** (like/dislike)

### Favorites

- **Add movies to favorites**
- **Remove movies from favorites**
- **View favorite movies listing**

---

## Setup / Clone Project

1. Register an account on [TMDB](https://www.themoviedb.org/?language=vi)
2. Clone the repository:
   ```bash
   git clone https://github.com/your-username/streamify.git
   cd streamify
   ```
3. Install dependencies:
   npm install
4. Copy .env.example to .env and fill in your API keys:
5. Start the development server:
   npm start

### Clone project

- Register an account on [TMDB](https://www.themoviedb.org/?language=vi)
- In file .env.example fill the environment variable match then rename to .env

### Preview

![Preview 1](https://res.cloudinary.com/annnn/image/upload/v1642508485/Screenshot_2022-01-18_191806_elqyem.png)
![Preview 2](https://res.cloudinary.com/annnn/image/upload/v1642508509/Screenshot_2022-01-18_191834_hyysjs.png)
![Preview 3](https://res.cloudinary.com/annnn/image/upload/v1642508518/Screenshot_2022-01-18_191932_hbvc4d.png)

### Technology

- FE: ReactJs, Redux Toolkit, Swiper, Javasrcipt
- BE: Firebase (Authentication, Firestore database)
- APIs: TMDB API
