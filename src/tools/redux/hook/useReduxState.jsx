// hooks/useReduxState.js
import { useContext, useEffect, useState } from 'react';
import ReduxContext from '../context/ReduxContext.jsx';

// State
export default function useReduxState() {
  const store = useContext(ReduxContext);
  const [state, setState] = useState(store.getState());
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });
    return () => {
      unsubscribe();
    };
  }, [store]);

  return state;
}
