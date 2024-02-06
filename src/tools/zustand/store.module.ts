import axios from 'axios';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import ServiceUrls from '../config/ServiceUrls';

export type UserInfo = {
  isAuthorized: boolean;
  userId: string;
  username: string;
  token: string;
};

export interface LoginPersistStore {
  isAuthorized: boolean;
  userId: string;
  username: string;
  token: string;
  login: (user: UserInfo) => void | null;
  logout: () => void | null;
}

const useLoginStore = create<LoginPersistStore>()(
  persist(
    devtools((set, get) => ({
      isAuthorized: false, // store state
      userId: '', // store state
      username: '',
      token: '',

      // 로그인
      login: (user: UserInfo) =>
        set({
          isAuthorized: user.isAuthorized,
          userId: user.userId,
          username: user.username,
          token: user.token,
        }),
      // 로그아웃
      logout: () =>
        set({
          isAuthorized: false,
          userId: '',
          username: '',
          token: '',
        }),
      //   fetchDate: async () => {
      //     const result = await axios(`${ServiceUrls().localUrl}/member/sign-in`);
      //     return result.data;
      //   },
    })),
    {
      name: 'auth-store', // 저장소 key값
      storage: createJSONStorage(() => localStorage), // 저장소
      version: 1.0, // version 정보
    },
  ),
);

export default useLoginStore;
