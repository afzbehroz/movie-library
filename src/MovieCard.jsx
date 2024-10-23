import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const API_URL = "https://www.omdbapi.com?apikey=b6003d8a"; // Ensure you have your API key here

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type }, isFavorite, addToFavorites, removeFromFavorites }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [details, setDetails] = useState(null); // State to store fetched movie details
  const [loading, setLoading] = useState(false); // State to manage loading status

  // Function to fetch movie details when a movie is clicked
  const fetchMovieDetails = async () => {
    setLoading(true);
    const response = await fetch(`${API_URL}&i=${imdbID}`); // Fetch full details by movie ID
    const data = await response.json();
    setDetails(data); // Set the movie details in state
    setLoading(false);
  };

  // Toggle details view and fetch details if they haven't been fetched yet
  const toggleDetails = () => {
    if (!showDetails && !details) {
      fetchMovieDetails();
    }
    setShowDetails(!showDetails); // Toggle visibility of details
  };

  // Function to handle favorite toggle
  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (isFavorite && removeFromFavorites) {
      removeFromFavorites(imdbID);
    } else if (addToFavorites) {
      addToFavorites({ imdbID, Year, Poster, Title, Type });
    }
  };

  return (
    <div 
      className="movie p-6 border border-gray-300 rounded-lg shadow-lg transition-transform duration-200 transform hover:scale-105 bg-white text-gray-800 cursor-pointer"
      onClick={toggleDetails} // Toggle details on click
    >
      <Helmet>
        <title>{Title} ({Year}) - Movie Details</title>
        <meta name="description" content={`Details about the movie "${Title}" (${Year}), type: ${Type}.`} />
      </Helmet>
      
      <div className="mb-2 text-gray-700">
        <p className="font-medium">{Year}</p>
      </div>

      <div className="flex justify-center mb-4">
        <img 
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} 
          alt={Title} 
          className="rounded-md max-w-full h-auto"
        />
      </div>

      <div>
        <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">{Type}</span>
        <h3 className="text-xl font-semibold mt-2 text-gray-900">{Title}</h3>
      </div>

      {/* Favorite button */}
      <button
        onClick={handleFavoriteClick}  // Handle adding/removing from favorites
        className={`mt-4 px-4 py-2 rounded text-white ${isFavorite ? 'bg-red-500' : 'bg-green-500'}`}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>

      {/* Loading indicator */}
      {loading && <p className="mt-4 text-gray-500">Loading...</p>}

      {/* Movie details section, shown based on state */}
      {showDetails && details && (
        <div className="mt-4 text-gray-700">
          <p><strong>Plot:</strong> {details.Plot || "No plot available."}</p>
          <p><strong>Actors:</strong> {details.Actors || "No actors available."}</p>
          <p><strong>Director:</strong> {details.Director || "No director available."}</p>
          <p><strong>Runtime:</strong> {details.Runtime || "No runtime available."}</p>
          <p><strong>Genre:</strong> {details.Genre || "No genre available."}</p>
          <p><strong>IMDB Rating:</strong> {details.imdbRating || "No rating available."}</p>
        </div>
      )}

      {/* Message when details are not yet available */}
      {showDetails && !details && !loading && (
        <p className="mt-4 text-gray-500">No details available for this movie.</p>
      )}
    </div>
  );
};

export default MovieCard;
