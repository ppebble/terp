// hooks/useReduxDispatch.js
import { useContext } from 'react';
import ReduxContext from '../context/ReduxContext.jsx';

// Dispatch
export default function useReduxDispatch() {
  const store = useContext(ReduxContext);
  return store.dispatch;
}
