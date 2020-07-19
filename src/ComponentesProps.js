import React from "react";
import Button from './buttom';

function Avatar(props){
    return(
        <div className="avatar">
            <img src={props.url} alt={props.name}/>
            <span>{props.name}</span>
        </div>
    )
}


function Navatar(){
    let user = {
        url: "https://www.google.com.br/google.jpg",
        name: 'Silas S'
    }
    return(
        <div>
          
        <Navatar url={user.url} name={user.name}/>
        </div>
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
        <Button/>  
        </> 
    )
}
export default ComponentesProps;