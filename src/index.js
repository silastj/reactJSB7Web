import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import * as serviceWorker from './serviceWorker';
import Base from './Base';





ReactDOM.render(
    <React.StrictMode>  
      <Base/>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
