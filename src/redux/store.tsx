// store.ts
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/theme.slice';

const rootReducer = combineReducers({
  theme: themeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
