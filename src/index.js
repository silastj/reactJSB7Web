import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Btn from './Btn';
import './App.css';
import Title from './title';
import ComponentesProps from './ComponentesProps';
import * as serviceWorker from './serviceWorker';
import Button from './buttom';

ReactDOM.render(
  <React.StrictMode>   
    <Btn/> 
    <Button/>
    <App />
    <ComponentesProps/>
    <Title name="Amós Silas Santos"/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
