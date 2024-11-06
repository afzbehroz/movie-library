import React from "react";
import { Helmet } from "react-helmet-async";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "./favoritesSlice";
import MovieCard from "./MovieCard";

const FavoritesList = () => {
  // Access the Redux state for the list of favorites
  const favorites = useSelector((state) => state.favorites.list);
  const dispatch = useDispatch();

  return (
    <div className="mt-8">
      {/* SEO setup using Helmet */}
      <Helmet>
        <title>Favorite Movies</title>
        <meta name="description" content="Your list of favorite movies." />
      </Helmet>

      <h2 className="text-3xl font-bold mb-4 text-gray-800">Favorite Movies</h2>
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Map through favorites and render each MovieCard */}
          {favorites.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              isFavorite={true}
              handleFavoriteClick={() => dispatch(removeFromFavorites(movie.imdbID))}  // Dispatch remove action
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
