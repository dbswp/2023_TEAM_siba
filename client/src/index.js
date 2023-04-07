import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/App';
import reportWebVitals from '../src/reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { NavermapsProvider } from 'react-naver-maps';
import { NAVER_MAP_API } from './kakaoLoginData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavermapsProvider ncpClientId={NAVER_MAP_API}>
      <App />
    </NavermapsProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
