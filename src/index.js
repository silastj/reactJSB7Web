import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import * as serviceWorker from './serviceWorker';
import Base from './Base';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './reducers/index';


const store = createStore(Reducers);



ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>  
      <Base/>
    </React.StrictMode>
  </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
