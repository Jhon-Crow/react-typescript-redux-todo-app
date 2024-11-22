import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice.ts';

const store = configureStore({
   reducer: {
      todos: todoReducer,
   }
});

export type RootState = ReturnType<typeof store.getState>

export default store;