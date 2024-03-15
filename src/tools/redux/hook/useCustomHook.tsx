import { useDispatch } from 'react-redux';

import type { AppDispatch } from '../store';

// // 그냥 useDispatch와 useSelector를 쓰지말고 이걸 불러서 사용하자.
export const useAppDispatch: () => AppDispatch = useDispatch;
