import { configureStore } from '@reduxjs/toolkit';
import { animalsName, animalsReducer } from './animalsSlice';
import { languagesName, languagesReducer } from './languageSlice';

export const store = configureStore({
  reducer: {
    [animalsName]: animalsReducer,
    [languagesName]: languagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
