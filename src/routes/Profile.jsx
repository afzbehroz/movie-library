// src/routes/Profile.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';  // Import Helmet for SEO
import { removeFromFavorites } from '../favoritesSlice';  // Import the Redux action
import MovieCard from '../MovieCard';  // Adjust the import based on your file structure

function Profile() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.list);  // Access Redux state for favorites

  // Function to handle removing from favorites
  const handleRemoveFavorite = (imdbID) => {
    dispatch(removeFromFavorites(imdbID));  // Dispatch the action to remove a favorite
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Helmet for SEO */}
      <Helmet>
        <title>Your Favorite Movies</title>
        <meta name="description" content="View and manage your favorite movies." />
      </Helmet>

      <h1 className="text-3xl font-bold">Your Favorite Movies</h1>
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              isFavorite={true}
              removeFromFavorites={handleRemoveFavorite}  // Only remove from favorites in Profile
            />
          ))}
        </div>
      ) : (
        <p>You have no favorite movies yet.</p>
      )}
    </div>
  );
}

export default Profile;
