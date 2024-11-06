import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFavorites, saveFavorites, addToFavorites, removeFromFavorites } from "./favoritesSlice";
import SearchBar from "./SearchBar";
import FavoritesList from "./FavoritesList";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Profile from "./routes/Profile";

const App = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.list);  // Get favorites list from Redux state
 
  // Load favorites from localStorage when the app mounts
  useEffect(() => {
    dispatch(loadFavorites());
  }, [dispatch]);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    dispatch(saveFavorites(favorites));
  }, [favorites, dispatch]);

  return (
    <div>
      {/* Render the Navbar component */}
      <Navbar />

      {/* Set up routing for navigation between pages */}
      <Routes>
        <Route
          path="/"
          element={
            <SearchBar
              favorites={favorites}
              addToFavorites={(movie) => dispatch(addToFavorites(movie))}
              removeFromFavorites={(imdbID) => dispatch(removeFromFavorites(imdbID))}
            />
          }
        />
        {/* Route for the Favorites List */}
        <Route path="/favorites" element={<FavoritesList />} />
        {/* Route for the Profile page */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
