/* eslint-disable no-param-reassign */
/// <reference types="redux-persist" />
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import ServiceUrls from '../config/ServiceUrls';

export interface InitAttributeType {
  idx: number;
  licenseName: string;
  uerId: string;
}
/**
 * 비동기  처리
 */
export const fetchInitData = createAsyncThunk<
  InitAttributeType[]
  // { rejectValue: AxiosKnownErr }
>('getProfile/fetchProfile', async thunkAPI => {
  try {
    const { data } = await axios.get(`${ServiceUrls().localUrl}/init`);
    return data;
  } catch (e) {
    return false;
  }
});

type SliceState = {
  initData: InitAttributeType[];
  error: null | string | unknown;
  loading: boolean;
};
const initialState: SliceState = {
  error: null,
  loading: false,
  initData: [],
};
export const initSlice = createSlice({
  name: 'init',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchInitData.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchInitData.fulfilled, (state, { payload }) => {
        state.error = null;
        state.loading = false;
        state.initData = payload;
      })
      .addCase(fetchInitData.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });
  },
});

// export const perStore = configureStore({
//   reducer: persistReducer(persistConfig, reducers),
// });

// export const { getMember } = profileSlice.actions;
export default initSlice.reducer;
