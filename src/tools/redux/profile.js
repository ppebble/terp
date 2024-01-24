import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: { loading: false, error: null, data: [] },
  reducers: {
    /*
     1. action .. action은 object / type(필수,String) | payload(param, 선택)
     함수를 통해 액션을 생성하여 액션 객체를 return
        (createA('a') => return(type:type, params:'a'))
      type의 경우 언더바와 대문자로 표현
    */
    LOGIN: (state, action) => {
      Object.assign(state.value, action.payload);
    },
    GET_MEMBER: (state, action) => {
      Object.assign(state.value, action.payload);
    },
  },
});

export const { login } = profileSlice.actions;
export default profileSlice.reducer;
