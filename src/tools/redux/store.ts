import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { persistReducer } from 'redux-persist';
import { profileSlice } from './profile';
import { initSlice } from './init';

const reducers = combineReducers({
  profile: profileSlice.reducer,
  init: initSlice.reducer,
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
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
