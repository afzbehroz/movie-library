import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";  // Reuse MovieCard component for displaying favorites

const FavoritesList = () => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (imdbID) => {
    const updatedFavorites = favorites.filter((movie) => movie.imdbID !== imdbID);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));  // Update localStorage
  };

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Your Favorite Movies</h2>
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              isFavorite={true}
              removeFromFavorites={removeFromFavorites}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">You have no favorite movies yet.</p>
      )}
    </div>
  );
};

export default FavoritesList;
