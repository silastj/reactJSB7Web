=> Criação de Componentes de 4 formas:

(1)
 function Title() {
    return (
      <div>
      <h1>OLá Amós</h1>
      </div>
    );
  }

//   OU

(2) 
class Title extends React.Component {
    render() {
    return<h1>Novo {this.props.name}</h1>
    }
}

// OU

(3)
const Title = React.createClass({
    render: function() {
        return (
            <h1>Olá,?ha>
        )
    }
})

export default Title;

// OU

(4)
let Title = () => {
    return <h1>Olá </h1>;
};

export default App;

// OU

(4/1)
let App = () => <h1>Olá</h1>;

export default App;

=> JSX
Obs: Olhar no html / css / img

import React from 'react';

function formarNome(usuario){
  return usuario.nome+" "+usuario.sobrenome;
}



function App() {
  let name = "Silas Santos";
  let img = 'http://www.google.com.br/google.jpg';

  let usuario = {
    nome:'Amós Silas',
    sobrenome: 'Santos'
  };

  
  return (
    <div>
      <img src={img}/>
      <h1>Usuario: {formarNome(usuario)}</h1>
      <h2>App é do: {name}</h2>
    </div>
  );
}

export default App;


=>COMPONENTES E PROPS

import React from "react";

function Avatar(props){
    return(
        <>
            <img src={props.url} alt={props.name}/>
            <span>{props.name}</span>
        </>
    )
}

function Navatar(){
    let user = {
        url: "https://www.google.com.br/google.jpg",
        name: 'Silas S'
    }
    return(
        <>
        <Navatar url={user.url} name={user.name}/>
        </>
    )
}

function Bemvindo(props){
    return (
        <h1>Bem-vindo! meu nome é:{props.nome} idade:{props.idade}</h1>
    )
}

function ComponentesProps(){
    return(
        <>      
        <Avatar url="https://www.google.com.br/google.jpg" name="Amós Silas"/>
        <Bemvindo nome="SIlas" idade="90"/>
        <Bemvindo nome="Amós" idade="34"/>
        <Bemvindo nome="Santos" idade="50"/>     
        </> 
    )
}
export default ComponentesProps;

=> CSS ou Stylesheet

Class é agora ClassName
className="avatar"
import './App.css'; no arquivo que for renderizar


=> Stylesheet pode ser usado da forma default

<img src={img} style={{marginLeft:"100px",maxWidth:50, height:50, objectFit:"contain", borderRadius:"50%",border:"1px solid red"}}/>


=> StyledComponents (biblioteca)
npm install styled-components --save

Após instalação vou chamar ele no arquivo que vou
colocar o styled

import styled from 'styled-components';

Exemplo ABAIXO:

const Site = styled.div`
width:400px;
height:400px;
background-color:#00ff00;
`;

const Letra = styled.h1`
font-size:14px;
color:#000550;
`;

function Button(){
    return (
        <Site>
            <Letra>Olá</Letra>
        </Site>
    )
}
=> Mostrando 3 botoes com cores diferente usando props

const Letra = styled.button`
font-size:14px;
// Passamos uma função para ele pegar a variação das cores e por default deixamos
// a cor orange
color:${props => props.color || 'orange'};
background-color: ${props => props.ativo == true ? '#0000ff' : '#ccc'}
`;

function Button(){
    return (
        <Site>
            <Letra color="red">Clique01</Letra>
            <Letra color="pink">Clique02</Letra>
            <Letra color="green">Clique03</Letra>
            <Letra >Clique03</Letra>
            <Letra ativo={true}>Clique03</Letra>
            <Letra ativo={false}>Clique03</Letra>
        </Site>
    )
}


=> Extends styled / extendendo um button que está pronto e pegando os css dele!

const Btn = styled.button`
    width:100px;
    height:48px;
    background-color:red;
`;

const BtnP = styled(Btn)`

`;

function BtnA(){
    return (
        <>
        <Btn></Btn>
        <BtnP></BtnP>
        </>
    )
}

=> useState ( React hooks )
Podemos modificar o valor diferente da props

Podemos fazer de duas formas: criando a função externa no proprio bloco ou 
Criaremos a função no proprio botao

const Input = styled.input`
    width:400px;
    height:20px;
    font-size:16px;
    padding:10px;
    border:1px solid;
`;

function Campos(){

    const [ texto, setTexto ] = useState('');
    const [ password, setPassword ] = useState('');


    const handleInput = (e) => {
            setTexto(e.target.value);
        }   

    return (
        <>       
            <Input type="text" value={texto} onChange={handleInput}/>
            <p>Quantidade de Caracteres:{texto.length} </p>

            <Input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <p>Quantidade de Caracteres:{password.length} </p>
        </>
    );
}

export default Campos;


=> Condicional de Exibição

3 formas ou mais de fazer:

const [ logado, setLogado] = useState('');

(1)
 {email.length > 0 &&
    <p>{email.length}Caractere{email.length > 1 ? 's' : ''}</p>
 }

(2)
{logado == true &&
    <button>Sair</button>
}
{
logado == false &&
    <button>Logar</button>
}

(3)  
{logado ? <button>Sair</button> : <button>Logar</button>}


=> HOOK useEffect(ciclo de vida) ou EffectHook

Similar ao useState, mas com inicio meio e fim... quando ele é criado utilizado e destruido

import React, { useState, useEffect } from 'react';

Recebemos a função useEffect ela tras dois parametros:

A primeira a função que vai executar e a segunda o observador

 const [contagem, setContagem ] = useState(0);

Primeiro parametro é afuncao logo enseguida do observador de variavel.
    useEffect(() => {
        document.title = 'Contagem:' + contagem;

//Obeservador

    }, [contagem]);
    
    function aumentarNumeros(){
        setContagem(contagem +1);
    } 

    return (
        <>    
        <H1>Contagem: {contagem}</H1>   
        <Button onClick={aumentarNumeros}>Clique</Button>

Por final nos temos tres forma de fazer:
(1) Quando for iniciado a pág
(2) Quando quer observar uma variavel
(3) Quando o componente é destruido e dá um return


useEffect(() => {
    if(contagem === 0){
        document.title = "Começou:";
    }else {
        document.title = 'Contagem:' + contagem;       
    }

    return() => {
        
    };

}, [contagem]);


=> SEPARANDO OS COMPONENTES

Criamos dentro da pasta SRC uma pasta components
e criamos um arquivo com a letra inicial Maiscula
obs: se não tiver frase ele traz uma frase default

import React,{useState} from 'react';
import styled from 'styled-components';

const InputText = styled.input`
    border:2px solid #000;
    border-radius:5px;
    padding:15px;
    font-size:17px;
    width:300px;
`;

function SearchBox(props) {
    return(
        <>
        <InputText placeholder={props.frasePadrao ?? 'Frase Padrão'}/>
        </>
    );
}

NO ARQUIVO QUE RENDERIZA Podemos criar diversos componentes conforme abaixo:

importamos ele:

import SearchBox from './components/SearchBox';


<SearchBox type="text" frasePadrao="Faça a sua busca..."/>
      <SearchBox type="text" frasePadrao="Digite o seu CPF..."/>
      <SearchBox type="text" />



=> TROCANDO DADOS ENTRE COMPONENTES

Troca de informções
NO arquivo final onde renderiza

Podemos alterar e incluir algo no componente e fazer a comunicação com a tela e o componente
ou vice e versa

    


=> EXIBIÇÃO DE LISTA

Recendo uma lista de um array

import React, { useState, useEffect } from "react";


function Lista() {

    const [ list, setList] = useState([]);

        useEffect(()=> {
            setList([
                {title: "Comprar o bolo", done:false},
                {title: "Pegar o cachorro no Petshop", done:true},
                {title: "Gravar aula", done:false}
            ]);
        }, []);

    return(

        <>
            <h1>Lista de Tarefas:</h1>
               <ul>
                    {list.map((item, index)=> (                  
                      <li key={index}>{item.title}</li>                    
                    ))}            
               </ul> 
            
        </>
    )
}

export default Lista;

Ou podemos fazer uma condicção abaixo:
       <h1>Tarefas feitas?</h1>
               <ul>
                   {list.map((item,index)=> (
                       <li key={index}>
                            {item.done &&
                            <del>{item.title}</del>
                            }
                           {!item.done &&
                           item.title
                           }
                       </li>
                   ))}
               </ul>


=>ADICIONANDO NOVOS INTENS

uauau criamos uma função e adicionamos um evento de keyUp

function SearchBox(props) {
    const [ texto, setTexto ] =  useState('');

    function handleKeyUp(e){
        if(e.keyCode === 13){
            if(props.onEnter){
                props.onEnter( texto );                
            }
            setTexto('');
        }
    }

    return(
        <>
        <InputText
         placeholder={props.frasePadrao ?? 'Frase Padrão'}
         type="text"
         value={texto}
         onKeyUp={handleKeyUp}
         onChange={(e)=>setTexto(e.target.value)}
         />
         <p>{texto}</p>
        </>
    );
}



export default SearchBox;

DENTRA DA FUNÇÃO LISTA E  JUNTO COM O USEEFECT, CRIAMOS OUTRA FUNCAO ARMAZENDO A LIST EM OUTRA VARIAVEL
E SETANDO ELA NOVAMENTE NO RETURN

 function addAction(newItem){
            let newList = [...list, {title:newItem, done:false}];
            setList(newList);
        }

PASSAMOS NO COMPONENTE UMA FUNCAO

 <SearchBox type="text" frasePadrao="Faça a sua busca..."
            onEnter={addAction}/>

E ABAIXO PASSAMOS O MAP PARA DESCARREGAR A LISTA

<ul>
    {list.map((item, index)=> (                                          
        <li key={index}>{item.title} é falso? R= {item.done.toString()}</li>                    
    ))}            
</ul> 

<h1>Tarefas feitas?</h1>
<ul>
    {list.map((item,index)=> (
        <li key={index}>
            {item.done &&
            <del>{item.title}</del>
            }
            {!item.done &&
            item.title
            }
        </li>
    ))}
</ul>
        

=> MARCAR UM ITEM COMO FEITO OU NÃO FEITO



Adicinamos uma fução anonima no li e pegamos o index de parametro
  <Li key={index} onClick={()=>handleToggleDone(index)}>

  

Criamos a função passando o parametro na função armazemos o array list em uma variavel
e invertemos com ! negação ( tracamos o false por true e vice versa) e setamos novamente o setList

function handleToggleDone(index){
    let newList = [ ...list ];

    newList[index].done = !newList[index].done;

    setList(newList);
}


=>LocalStorage

Para setar um item no localStorage:
Digititando no especionar aba console

localStorage.setItem('name','Silas');
Abaixo criamos um função a const está pegando os dados do localstorage
useeffect está monitorando as alterações e setando no localstorage
e no return tem o evento onchange que seta a variavel name e pega o valor do evento target


function Local(){

    const [ name, setName ] = useState(localStorage.getItem('name'));

    useEffect(()=> {

        localStorage.setItem('name', name);
    }, [name]);

    return(
        <>
        <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
        Nome Alterado:{name};


        </>
    );
}



=> MODAL

Criei dois arquivos (  Modal.js / Modal2.js )



const ModalBackGround = styled.div`
    position:fixed;
    left:0;
    top:0;
    right:0;
    bottom:0;
    z-index:90;
    background-color:rgba(0,0,0,0.7);
    display:flex;
    justify-content:center;
    align-items:center;
`;
const ModalArea = styled.div`
    background-color:#ffffff;
    padding:10px;
`;


function Modal(props) {
   
    const handleBackgroundClick = () =>{
        props.setVisible(false);
    }


    return(
        <>
            {props.visible === true &&
                <ModalBackGround onClick={handleBackgroundClick}>
                <ModalArea>
                {props.children} 
                </ModalArea>
            </ModalBackGround>           
            }
               
        </>  
     
    );

    
}


export default Modal;


Modal2.js

import Modal from './Modal';

const Button = styled.button`
    width:100px;
`;




function ModalOne() {

    const [modalVisible, setModalVisible] = useState(false);

    const handleButtonClick = () => {
        setModalVisible(true);
    }

    return(
            <>
            <Button onClick={handleButtonClick}>Modal</Button>
            <Modal visible={modalVisible} setVisible={setModalVisible}>            
                    <h1>Testando 123...</h1>          
            </Modal> 
           
            </>
    );
}

export default ModalOne;

=> ROUTER ( ROTAS )

$ npm install react-router-dom

Usuaremos o Base.js como base hehe ( ele é bem separado)

import {BrowserRouter, Switch, Route, Link } from 'react-router-dom';

Precisamos criar dentro da tag abaixo o conteudo para funcionar o router
  <BrowserRouter>

  TROCANDO DE PAG , a rota será dentro da tag SWITCH
  <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/sobre">
                    <Sobre/>
                </Route>
</Switch>

Obs: o exact é a mesma coisa que exact={true}
Podemos colocar nas outras rotas o exact mas não tem necessidade

=> PARAMETROS NA URL

iremos criar o Categoria.js

import React from 'react';
import { useParams } from 'react-router-dom';


function Categoria() {

    let {cat} = useParams();

    return(
        <div>
            <h4>Página Categoria</h4>
            <p>Exibindo itens da categoria: {cat}</p>
        </div>
    );
}

export default Categoria;

Na Base criamos mais links abaixo:

<li><Link to="/categoria/esporte">Esporte</Link></li>
<li><Link to="/categoria/comida">Comida</Link></li>
<li><Link to="/categoria/filme">Filme</Link></li>


E criamos essa rota

<Route path="/categoria/:cat">
    <Categoria/>
</Route>     

Obs: chamamos o useParams() e declaramos o cat e chamamos o useParams() e passamos ele no retorno
Mas na base.js passamos tambem o {cat}

<Route path="/categoria/:cat">
    <Categoria/>
</Route>    


=> ROUTER QUERY( Paracido com parametros, outra forma de fazer)

Chamamos 
import { useParams, useLocation } from 'react-router-dom';

// Criacao do hook 
function useQuery(){
    return new URLSearchParams(useLocation().search );
}
// Criacao do hook 

function Categoria() {

    // let {cat} = useParams();

    let query = useQuery();

    let cat = query.get('tipo');

    return(
        <div>
            <h4>Página Categoria</h4>
            <p>Exibindo itens da categoria: {cat}</p>
        </div>
    );
}

export default Categoria;

Já na base mudamos os links

<li><Link to="/categoria?tipo=esporte">Esporte</Link></li>
<li><Link to="/categoria?tipo=comida">Comida</Link></li>
<li><Link to="/categoria?tipo=filme">Filme</Link></li>


=> ROUTER: Erro 404
Ele segue a ordem das routas de cima para baixo
Criamos um componente novo e criamos uma rota nova com path="*"
 <Route path="*">
    <Erro/>
 </Route>      


=> ROUTER: Redirect ( Redirecionamento duas formas destintas( uma forma de ação e outra de condição )
import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
FORMA DE AÇÃO:
Criaremos um route e redirecionamos para outra page conforme baixo:
<Route path="/quem-somos">
    <Redirect to="/sobre"/>
</Route>

FORMA DE CONDIÇÃO:
Na pagina HOME
import { useHistory } from 'react-router-dom';

Criei um button uma função e armazei o hook useHistory em uma variavel e lá modifiquei em replace para a pagina sobre, com um tempo de 2 segundos usando setTimeout


function Home() {

    let history = useHistory();

    const handleButton = () => {
        // Replace é mudar o historico para sobre
        setTimeout(()=> {
            history.replace('/sobre');
        }, 2000)
        
    };

    return(
        <div>
            <h4>Página Home</h4>
            <button onClick={handleButton}>Ir para a página SOBRE</button>
        </div>
    );
}

export default Home;

=> Router: Rotas Privadas (Controle de acesso)
Teremos páginas publica que tera acesso publico para todos usuarios
Teremos páginas privadas para pessoas que fez o login

Criaremos um const que não está logado:

const isLogged = false;

Criaremos uma rota com a condição abaixo:

<Route path="/privada">
    {isLogged ? <Privada/> : <Redirect to="/login" />}
</Route>

Temos outra forma de criar a rota privada , porem mais complexa usando o:
children e .... rest e antes criando um component de rota privada.<PrivateRoute>























