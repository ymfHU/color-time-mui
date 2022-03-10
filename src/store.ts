import { configureStore } from '@reduxjs/toolkit';
import colorListReducer from './stores/colorListSlice';

export const store = configureStore({
  reducer: {
    colorListStore: colorListReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
