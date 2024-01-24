import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import profile, { profileSlice } from './profile.js';

export default configureStore({
  reducer: {
    profile: profileSlice.reducer,
  },
});
