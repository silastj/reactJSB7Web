import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Btn from './Btn';
import './App.css';
import Title from './title';
import ComponentesProps from './ComponentesProps';
import * as serviceWorker from './serviceWorker';
import Button from './buttom';
import New from './useStateA';
import Campos from './campo';
import SearchBox from './components/SearchBox';
import Lista from './lista';
import Local from './components/LocalStorage';
import ModalOne from './components/Modal2';




ReactDOM.render(
    <React.StrictMode>  
      <ModalOne/>
      <Local/> 
      <Lista/>
      <Campos/>
      <New/>
      <Btn/> 
      <Button/>
      <App />
      <ComponentesProps/>
      <Title name="Amós Silas Santos"/>



    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
