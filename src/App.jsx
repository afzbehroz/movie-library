// src/App.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFavorites, saveFavorites, addToFavorites, removeFromFavorites } from "./favoritesSlice";
import SearchBar from "./SearchBar";
import FavoritesList from "./FavoritesList";
import Navbar from "./Navbar";  // Import the new Navbar component
import { Routes, Route } from "react-router-dom";
import Profile from "./routes/Profile";  // Import Profile page

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
      {/* Use the new Navbar component */}
      <Navbar />

      {/* Add routing for navigation between pages */}
      <Routes>
        <Route 
          path="/" 
          element={viewFavorites ? (
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
        />
        {/* Add Profile page route */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
