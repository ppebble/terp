/* eslint-disable no-param-reassign */
/// <reference types="redux-persist" />
import {
  combineReducers,
  configureStore,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import axios from 'axios';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import ServiceUrls from '../config/ServiceUrls';

/*
     1. action .. action은 object / type(필수,String) | payload(param, 선택)
     함수를 통해 액션을 생성하여 액션 객체를 return
        (createA('a') => return(type:type, params:'a'))
      type의 경우 언더바와 대문자로 표현
    2. reducer . . 액션이 적용되어 수정되거나 아닌 결과를 만들어내는 함수
    Pure func: 같은 input에 같은 출력
    Immutable: original state와 new State가 별도의 객체로 만들어져야함
      > redux는 reducer를 통해 state가 달라진 여부를 Immutable방식으로 인지
        funtion reduceName(prevState, action){
          return newState;
        }
    3. store : createStore(reducer)
        store.getState() > state를 가져오는함수
        store.dispatch(action), 
        store.dispatch(createAction()):액션을 인자로 넣어 store의 상태 변경
        const unsubscribe = store.subscribe(()=>{]})
          :subscribe()는 state변경이 생겼을 때 안에있는 콜백함수실행(return=unsubscribe)
          unsubscribe()하면 subscribe로 실행했던 함수가 이후에 제거됨
        store.replaceReducer: 원래 가지고있던 reducer를 다른 reducer로 변경
    */
export interface ProfileAttributes {
  empNo: string;
  userId: string;
  userName: string;
  userEmail: string;
  tel: string;
  position: string;
  spot: string;
  task: string;
  techGrade: string;
  scienceTechCertify: string;
  locDetail: string;
  hiredate: string;
  leavedate: string;
}
/**
 * 비동기  처리
 */
export const fetchProfile = createAsyncThunk<
  ProfileAttributes[]
  // { rejectValue: AxiosKnownErr }
>('getProfile/fetchProfile', async thunkAPI => {
  try {
    const { data } = await axios.get(`${ServiceUrls().localUrl}/member`);
    return data;
  } catch (e) {
    return false;
  }
});

type SliceState = {
  error: null | string | unknown;
  loading: boolean;
  data: ProfileAttributes[];
  value: { isAuthorized: false; userId: ''; username: ''; token: '' };
};
const initialState: SliceState = {
  value: { isAuthorized: false, userId: '', username: '', token: '' },
  error: null,
  loading: false,
  data: [],
};
export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: state => {
      state.value = initialState.value;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProfile.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchProfile.fulfilled, (state, { payload }) => {
        state.error = null;
        state.loading = false;
        state.data = payload;
      })
      .addCase(fetchProfile.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });
  },
});

// export const perStore = configureStore({
//   reducer: persistReducer(persistConfig, reducers),
// });

export const { login, logout } = profileSlice.actions;
// export const { getMember } = profileSlice.actions;
export default profileSlice.reducer;
