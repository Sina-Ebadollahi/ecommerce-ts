import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// redux
import { mainReducer } from './Redux/AllReducers'
import { Provider } from 'react-redux'

  ReactDOM.render(
    <React.StrictMode>
      {/* <GlobalContextProvider> */}
      <Provider store={mainReducer}>
        <App />
      </Provider>
      {/* </GlobalContextProvider> */}
    </React.StrictMode>,
    document.getElementById('root')
  );

