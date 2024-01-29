import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice'
import colorReducer from './slices/colorSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    color: colorReducer,
  },
});
