import React from 'react';
import { Helmet } from 'react-helmet-async';  // Import Helmet for SEO

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type }, isFavorite, addToFavorites, removeFromFavorites }) => {
  const handleFavoriteClick = (e) => {
    e.stopPropagation();  // Prevent the click from bubbling up to the card
    if (isFavorite && removeFromFavorites) {
      removeFromFavorites(imdbID);  // Remove from favorites if already a favorite
    } else if (addToFavorites) {
      addToFavorites({ imdbID, Year, Poster, Title, Type });  // Add to favorites if not already a favorite
    }
  };

  return (
    <div 
      className="movie p-6 border border-gray-300 rounded-lg shadow-lg transition-transform duration-200 transform hover:scale-105 bg-white text-gray-800 cursor-pointer"
      onClick={() => console.log("Toggle details here")}  // Add more detail toggling logic if needed
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
        onClick={handleFavoriteClick}  // Handle adding/removing from favorites based on context
        className={`mt-4 px-4 py-2 rounded text-white ${isFavorite ? 'bg-red-500' : 'bg-green-500'}`}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default MovieCard;
