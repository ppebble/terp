import React from 'react';
import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { persistReducer } from 'redux-persist';
import profile, { profileSlice } from './profile';

// export default configureStore({
//   reducer: {
//     profile: profileSlice.reducer,
//   },
// });

// const store = configureStore({
//   reducer: {
//     profile: profileSlice.reducer,
//   },
// });

const reducers = combineReducers({
  profile: profileSlice.reducer,
});
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['profile'],
};
export const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
// Export a hook that can be reused to resolve types

// export default store;
