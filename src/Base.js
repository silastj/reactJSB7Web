import React from 'react';
import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';

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
import Erro from './components/Erro';
import Privada from './pages/Privada';
import Login from './pages/Login';


const isLogged = false;

function Base(){
    return(
        <BrowserRouter>
            <header>
                <h1>Meu Site Legal</h1>          
            <nav>
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/quem-somos">Quem Somos</Link></li>
                    <li><Link to="/privada">Privada</Link></li>
                    {/* <li><Link to="/categoria/esporte">Esporte</Link></li>
                    <li><Link to="/categoria/comida">Comida</Link></li>
                    <li><Link to="/categoria/filme">Filme</Link></li> */}
                    <li><Link to="/categoria?tipo=esporte">Esporte</Link></li>
                    <li><Link to="/categoria?tipo=comida">Comida</Link></li>
                    <li><Link to="/categoria?tipo=filme">Filme</Link></li>
                </ul>
            </nav>
            </header>
            <hr/>

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route  path="/login">
                    <Login/>
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
                
                {/* <Route path="/categoria/:cat">
                    <Categoria/>
                </Route>  */}
                <Route path="/quem-somos">
                    <Redirect to="/sobre"/>
                </Route>
                <Route path="/privada">
                   {isLogged ? <Privada/> : <Redirect to="/login" />}
                </Route>
                <Route path="/categoria/">
                    <Categoria/>
                </Route>    
                <Route path="*">
                    <Erro/>
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