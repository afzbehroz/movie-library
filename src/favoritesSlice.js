// src/favoritesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to load favorites from localStorage
export const loadFavorites = createAsyncThunk('favorites/loadFavorites', async () => {
  const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  return storedFavorites;
});

// Async thunk to save favorites to localStorage
export const saveFavorites = createAsyncThunk('favorites/saveFavorites', async (favorites) => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
  return favorites;
});

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    list: [],  // Store the list of favorite movies
    status: 'idle',  // Status of async operations
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.list.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.list = state.list.filter(movie => movie.imdbID !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadFavorites.fulfilled, (state, action) => {
        state.list = action.payload;  // Update the state with the loaded favorites
      })
      .addCase(saveFavorites.fulfilled, (state) => {
        state.status = 'saved';  // Optional status update
      });
  }
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
