// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favoritesSlice';  // Import the slice we'll create next

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,  // Add the favorites reducer to the store
  },
});

export default store;
