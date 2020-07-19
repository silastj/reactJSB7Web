import React from 'react';
import styled from 'styled-components';


const Site = styled.div`
width:400px;
height:400px;
background-color:#00ff00;
`;

const Letra = styled.button`
font-size:14px;
// Passamos uma função para ele pegar a variação das cores e por default deixamos
// a cor orange
color:${props => props.color || 'orange'};
background-color: ${props => props.ativo === true ? '#0000ff' : '#ccc'}
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

export default Button;