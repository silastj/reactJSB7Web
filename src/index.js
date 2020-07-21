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
import New from './useStateA';
import Campos from './campo';
import SearchBox from './components/SearchBox';
import Lista from './lista';


ReactDOM.render(
    <React.StrictMode>   
      <Lista/>
      <SearchBox type="text" frasePadrao="Faça a sua busca..."/>
      <SearchBox type="text" frasePadrao="Digite o seu CPF..."/>
      <SearchBox type="text" />      

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
