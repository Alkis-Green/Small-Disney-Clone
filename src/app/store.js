import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './Movie/MovieSlice';

export const store = configureStore({
  reducer: {
    movie: movieReducer
  },
});
