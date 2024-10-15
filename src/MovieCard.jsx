import React, { useState, useEffect } from "react";

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type }, isFavorite, addToFavorites, removeFromFavorites }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    if (!movieDetails) {
      fetchMovieDetails(imdbID); // Fetch details if they haven't been fetched yet
    }
    setShowDetails(!showDetails); // Toggle the visibility
  };

  const fetchMovieDetails = async (id) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=b6003d8a&i=${id}`);
    const data = await response.json();
    setMovieDetails(data);
  };

  // Handle favorite button click and stop event propagation
  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // Stop the click from bubbling up to the card
    if (isFavorite) {
      removeFromFavorites(imdbID);  // Remove from favorites
    } else {
      addToFavorites({ imdbID, Year, Poster, Title, Type });  // Add to favorites
    }
  };

  return (
    <div 
      className="movie p-6 border border-gray-300 rounded-lg shadow-lg transition-transform duration-200 transform hover:scale-105 bg-white text-gray-800 cursor-pointer"
      onClick={toggleDetails} // Toggles movie details when the card is clicked
    >
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

      {/* Toggle movie details on click */}
      {showDetails && movieDetails && (
        <div className="text-left mt-4 space-y-2">
          <p><strong className="text-gray-900">Genre:</strong> {movieDetails.Genre}</p>
          <p><strong className="text-gray-900">Plot:</strong> {movieDetails.Plot}</p>
          <p><strong className="text-gray-900">Director:</strong> {movieDetails.Director}</p>
        </div>
      )}

      {/* Favorite button */}
      <button
        onClick={handleFavoriteClick}  // Separate click event handler for favorites
        className={`mt-4 px-4 py-2 rounded text-white ${isFavorite ? 'bg-red-500' : 'bg-green-500'}`}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default MovieCard;
