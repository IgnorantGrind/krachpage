// import 'react-app-polyfill/ie9';
// import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom/client';
// import { CookiesProvider } from "react-cookie";

import GlobalContextProvider from './contexts/GlobalContext'
import CookieContextProvider from './contexts/CookieContext'
import App from './App';

// fetch config data and load app

const root = ReactDOM.createRoot(document.getElementById('root'));

fetch('config.json')
  .then((response) => response.json())
  .then((data) => {
    root.render(
      <GlobalContextProvider
        config={data}
      >
        {/*<CookiesProvider>*/}
          <CookieContextProvider>
            <App />
          </CookieContextProvider>
        {/*</CookiesProvider>*/}
      </GlobalContextProvider>
    );
  })
  .catch((err) => {
    console.log('Failed to fetch config.json: ', err);
  });
