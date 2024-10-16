import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";  // Import SearchBar component
import FavoritesList from "./FavoritesList";  // Import FavoritesList component

const App = () => {
  const [viewFavorites, setViewFavorites] = useState(false);  // State to toggle between search and favorites
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  // Add to favorites and update localStorage
  const addToFavorites = (movie) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = [...prevFavorites, movie];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));  // Update localStorage
      return updatedFavorites;
    });
  };

  // Remove from favorites and update localStorage
  const removeFromFavorites = (imdbID) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter((movie) => movie.imdbID !== imdbID);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));  // Update localStorage
      return updatedFavorites;
    });
  };

  return (
    <div>
      {/* Toggle between SearchBar and FavoritesList */}
      <div className="flex justify-center my-4">
        <button
          onClick={() => setViewFavorites(false)}
          className={`mx-2 px-4 py-2 rounded ${!viewFavorites ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Search Movies
        </button>
        <button
          onClick={() => setViewFavorites(true)}
          className={`mx-2 px-4 py-2 rounded ${viewFavorites ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          View Favorites
        </button>
      </div>

      {viewFavorites ? (
        <FavoritesList
          favorites={favorites}
          removeFromFavorites={removeFromFavorites}
        />
      ) : (
        <SearchBar
          favorites={favorites}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
        />
      )}
    </div>
  );
};

export default App;
