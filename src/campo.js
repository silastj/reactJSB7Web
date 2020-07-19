import React, { useState } from 'react';
import styled from 'styled-components';

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