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













