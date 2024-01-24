import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-grid-layout/css/styles.css';
import { Provider } from 'react-redux';
import 'react-resizable/css/styles.css';
import App from './App';
import store from './tools/redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement, // 여기 HTMLElement 넣어주면 끝
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
