# Portfolio React

A personal portfolio website built with **React** and **Vite**, showcasing projects, skills, and contact information.  
The application is fully responsive, supports **dark/light mode**, and is deployed using **GitHub Pages**.

## 🚀 Tech Stack

- **React 18**
- **Vite**
- **React Router DOM**
- **CSS Modules**
- **classnames**
- **React Scroll**
- **ESLint**

## ✨ Features

- Single Page Application (SPA)
- Client-side routing with React Router
- Projects list with dynamic routes (`/projects/:id`)
- Dark / Light mode:
  - Detects system color scheme
  - Saves user preference in `localStorage`
- Responsive layout
- Smooth scrolling navigation
- Reusable components (NavBar, Footer, Dark Mode Button)

## 📂 Project Structure

src/
├── components/ # Reusable UI components
├── pages/ # Application pages
├── utils/ # Utility functions and data
│ ├── data.js # Projects data
│ └── detectDarkMode.js
├── hooks/ # Custom hooks
├── assets/ # Images and icons
├── css_modules/ # CSS Modules
├── App.jsx
└── main.jsx

## 🧭 Routes

- `/` — Home page
- `/projects` — Projects list
- `/projects/:id` — Project details page
- `/contacts` — Contact page

## 🌓 Dark Mode Logic

- Automatically detects system theme using `matchMedia`
- Applies theme on initial load
- Updates theme when system settings change
- Allows manual toggle with a button
- Persists selected theme in `localStorage`

Install dependencies:
npm install

Run the project locally:
npm run dev

Build for production:
npm run build

Preview production build:
npm run preview

🌐 Deployment

The project is deployed using GitHub Pages.

npm run deploy

📌 Purpose

This project was created as a personal portfolio to demonstrate frontend development skills, including React fundamentals, routing, state management, and UI theming.