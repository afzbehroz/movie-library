import React, { useEffect, useState } from "react";  // Import useState to manage viewFavorites
import { useDispatch, useSelector } from "react-redux";
import { loadFavorites, saveFavorites, addToFavorites, removeFromFavorites } from "./favoritesSlice";
import SearchBar from "./SearchBar";
import FavoritesList from "./FavoritesList";

const App = () => {
  const [viewFavorites, setViewFavorites] = useState(false);  // Add viewFavorites state
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.list);  // Get favorites from Redux state

  // Load favorites from localStorage on mount
  useEffect(() => {
    dispatch(loadFavorites());
  }, [dispatch]);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    dispatch(saveFavorites(favorites));
  }, [favorites, dispatch]);

  return (
    <div>
      {/* Toggle between SearchBar and FavoritesList */}
      <div className="flex justify-center my-4">
        <button
          onClick={() => setViewFavorites(false)}  // Switch to SearchBar view
          className={`mx-2 px-4 py-2 rounded ${!viewFavorites ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Search Movies
        </button>
        <button
          onClick={() => setViewFavorites(true)}  // Switch to FavoritesList view
          className={`mx-2 px-4 py-2 rounded ${viewFavorites ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          View Favorites
        </button>
      </div>

      {viewFavorites ? (
        <FavoritesList
          favorites={favorites}
          removeFromFavorites={(imdbID) => dispatch(removeFromFavorites(imdbID))}
        />
      ) : (
        <SearchBar
          favorites={favorites}
          addToFavorites={(movie) => dispatch(addToFavorites(movie))}
          removeFromFavorites={(imdbID) => dispatch(removeFromFavorites(imdbID))}
        />
      )}
    </div>
  );
};

export default App;
