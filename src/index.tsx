/* eslint-disable import/prefer-default-export */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-grid-layout/css/styles.css';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CookiesProvider } from 'react-cookie';
import { persistStore } from 'redux-persist';
import 'react-resizable/css/styles.css';
import App from './App';
import { store } from './tools/redux/store';

// export const persistor = persistStore(store);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement, // 여기 HTMLElement 넣어주면 끝
);
// {
//   /* <Provider store={store}> */
// }
// {
//   /* <PersistGate loading={null} persistor={persistor}> */
// }
// {
//   /* </PersistGate> */
// }
// {
//   /* </Provider> */
// }
const queryClient = new QueryClient();
root.render(
  <CookiesProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </CookiesProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
