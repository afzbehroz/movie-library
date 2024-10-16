import React from "react";
import MovieCard from "./MovieCard";  // Reuse the existing MovieCard component

const FavoritesList = ({ favorites, removeFromFavorites }) => {
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Favorite Movies</h2>
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
        <p className="text-gray-500">No favorite movies added yet.</p>
      )}
    </div>
  );
};

export default FavoritesList;
