import React from 'react';
import {BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import App from './App';
import Btn from './Btn';
import Button from './buttom';
import New from './useStateA';
import Campos from './campo';
import SearchBox from './components/SearchBox';
import Lista from './lista';
import Local from './components/LocalStorage';
import ModalOne from './components/Modal2';

import Title from './title';
import ComponentesProps from './ComponentesProps';
import Categoria from './pages/Categoria';


function Base(){
    return(
        <BrowserRouter>
            <header>
                <h1>Meu Site Legal</h1>          
            <nav>
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/categoria/esporte">Esporte</Link></li>
                    <li><Link to="/categoria/comida">Comida</Link></li>
                    <li><Link to="/categoria/filme">Filme</Link></li>
                </ul>
            </nav>
            </header>
            <hr/>

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/sobre">
                    <Sobre/>
                    <ModalOne/>
                    {/* <Local/>  */}
                    <Lista/>
                    <Campos/>
                    <New/>
                    <Btn/> 
                    <Button/>
                    <App />
                    <ComponentesProps/>
                    <Title name="Amós Silas Santos"/>
                </Route>
                <Route path="/categoria/:cat">
                    <Categoria/>
                </Route>          
            </Switch>


            <hr/>
            <footer>
                Todos os direitos reservados
            </footer>
        </BrowserRouter>

    );
}

export default Base;