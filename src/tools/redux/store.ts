import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import profile, { profileSlice } from './profile';

// export default configureStore({
//   reducer: {
//     profile: profileSlice.reducer,
//   },
// });
const store = configureStore({
  reducer: {
    profile: profileSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
// Export a hook that can be reused to resolve types

export default store;
