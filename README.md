
# Movie Library

A simple movie library application built with React, Redux Toolkit, and Vite. This app allows users to search for movies via OMDb API, view movie details, and add/remove favorites.

## Features
- Search movies by title.
- View details of selected movies.
- Add movies to favorites and manage your favorites list.
- Mobile-friendly, responsive design.
- SEO optimized with meta tags, sitemap, and robots.txt.
- Google Analytics integrated to track favorite additions.
- End-to-end testing with Cypress.

## Tech Stack
- **React**: Frontend library.
- **Redux Toolkit**: State management.
- **Vite**: Development server and build tool.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Cypress**: End-to-end testing.
- **React Router**: For routing between pages.
- **React Helmet Async**: For handling SEO-related tasks.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/afzbehroz/movie-library.git
   ```
2. Navigate to the project directory:
   ```bash
         cd movie-library
                    ```
3.Install dependencies:
```bash
npm install
```
## Running the App
To run the development server locally, use the following command:
```bash
npm run dev
```
You can now open your browser and view the app at http://localhost/.
## Building for Production
To create a production build of the app, run:
```bash
npm run build
```
This will generate the production-ready files in the dist directory.

## Deployment
1. Once the build is complete, you can deploy the app to Vercel or any other static hosting service.
2. Make sure to set up the proper environment variables and paths for the API requests.

## API Used
This project uses the OMDB API to fetch movie data.

To get started, register for an API key at OMDB API and add it to your project.


##Google Analytics Integration
The app is set up with Google Analytics to track events like adding a movie to the favorites list. You can view your analytics dashboard on the Google Analytics site.

##SEO
The app uses react-helmet-async for SEO purposes, including adding metadata and descriptions. It also includes a robots.txt file and a sitemap.xml for search engine indexing.

## Technologies Used
React: A JavaScript library for building user interfaces.
Redux Toolkit: For state management.
Vite: A build tool for fast development.
TailwindCSS: For styling and responsive design.
Cypress: For end-to-end testing.
Google Analytics: For user action tracking.

##Testing
To run end-to-end tests with Cypress, use the following command:
```bash
npm run test
```
Ensure Cypress is correctly installed and configured to run the tests.
