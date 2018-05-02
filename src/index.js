import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import store from './store.js';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  document.getElementById('root') );
registerServiceWorker();
