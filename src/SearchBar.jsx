import React, { useState, useEffect } from "react";
import SearchIcon from "./assets/search.svg";
import MovieCard from "./MovieCard";  // Import MovieCard component

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const SearchBar = ({ favorites, addToFavorites, removeFromFavorites }) => {
  const [searchTerm, setSearchTerm] = useState("Lego");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    handleSearch();  // Perform the initial search for "Lego"
  }, []);

  const handleSearch = async () => {
    if (searchTerm.trim()) {
      const response = await fetch(`${API_URL}&s=${searchTerm}`);
      const data = await response.json();
      setMovies(data.Search || []);  // Handle case where no movies are found
    }
  };

  const isFavorite = (imdbID) => {
    return favorites.some((movie) => movie.imdbID === imdbID);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Movie Site</h1>

      <div className="flex justify-center items-center mb-8">
        <input
          className="border border-gray-400 p-2 rounded-l-md w-2/3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies..."
        />
        <img
          src={SearchIcon}
          alt="search"
          className="border border-l-0 border-gray-400 bg-gray-100 p-2 rounded-r-md cursor-pointer transition duration-300 hover:bg-gray-200"
          onClick={handleSearch}
        />
      </div>

      {/* Movie results */}
      {movies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <MovieCard 
              key={movie.imdbID} 
              movie={movie} 
              isFavorite={isFavorite(movie.imdbID)}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
            />
          ))}
        </div>
      ) : (
        <div className="empty my-4">
          <h2 className="text-xl text-gray-500">No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
