#FindMyFilm 🍿

FindMyFilm is a sleek and responsive web application built with React that allows users to discover, search for, and save their favorite movies. Using the The Movie Database (TMDb) API, it provides a user-friendly interface to browse the latest releases and find details about any film.

✨ Features
🎬 Browse Movies: View a beautifully arranged grid of popular and upcoming movies.

🔍 Powerful Search: Quickly find any movie by title with a real-time search feature.

❤️ Favorites System: Add movies to a personal favorites list to keep track of what you want to watch.

🗑️ Manage Favorites: Easily remove movies from your favorites list.

📱 Responsive Design: A fully responsive layout that looks great on desktop, tablets, and mobile devices.

🛠️ Technologies Used
This project was built using a modern frontend stack:

Framework: React

Build Tool: Vite

State Management: React Context API

API: The Movie Database (TMDb) API

Styling: CSS

🚀 Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
Make sure you have Node.js and npm installed on your machine.

npm

Bash

npm install npm@latest -g
Installation
Get a free API Key from https://www.themoviedb.org/signup.

Clone the repo

Bash

git clone https://github.com/your-username/your-repository-name.git
Navigate into the project directory

Bash

cd your-repository-name
Install NPM packages

Bash

npm install
Enter your API key
Create a .env file in the root of the project and add your TMDB API key.

VITE_API_KEY = 'YOUR_API_KEY'
Run the development server

Bash

npm run dev
The application will be available at http://localhost:5173.

📂 Project Structure
The project follows a standard React application structure to keep the code organized and maintainable.

/src
├── /assets         # Static files like images and fonts
├── /components     # Reusable components (MovieCard, NavBar, etc.)
├── /contexts       # React Context for global state (MovieContext)
├── /css            # CSS stylesheets for components and pages
├── /pages          # Top-level page components (Home, Favorites)
└── /services       # API call logic (api.js)
