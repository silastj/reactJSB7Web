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
    const [ texto, setTexto ] =  useState('');
    return(
        <>
        <InputText
         placeholder={props.frasePadrao ?? 'Frase Padrão'}
         type="text"
         value={texto}
         onChange={(e)=>setTexto(e.target.value)}
         />
         <p>{texto}</p>
        </>
    );
}



export default SearchBox;