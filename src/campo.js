import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width:400px;
    height:20px;
    font-size:16px;
    padding:10px;
    border:1px solid;
`;
const Label = styled.label`
    font-size:16px;
    color:red;
`;
const H1 = styled.h1`
    font-size:36px;
    color:blue;
`;


function Campos(){
   

    const [ texto, setTexto ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ logado, setLogado] = useState(false);

    const [ valor1, setValor1 ] = useState('');
    const [ valor2, setValor2] = useState('');



    const handleInput = (e) => {
            setTexto(e.target.value);
        }   

    return (
        <>       
        <H1>Calculadora de Gorjeta</H1>
        <Label>Digite o valor Total R$?</Label><br/>
        <Input type="number" value={valor1} onChange={(e)=> setValor1(parseFloat(e.target.value))}/><br/>

        <Label>Valor da Gorjeta R$?</Label><br/>
        <Input type="number" value={valor2} onChange={(e)=> setValor2(parseFloat(e.target.value))}/><br/>

        {valor1 > 0 &&
                 <>
                 <p>Sub-total: R$ {valor1},00</p>
                 <p>Gorjeta ({valor2}%): R$ {(valor1/100) * valor2},00</p>
                 <h3>Total: R$ {valor1 + ((valor2/100) * valor1)},00</h3>
               </>
        }


            <Input type="text" value={texto} onChange={handleInput}/>
            <p>Quantidade de Caracteres:{texto.length} </p>

            <Input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <p>Quantidade de Caracteres:{password.length} </p>

            <Label>E-mail</Label><br/>
            <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

            {email.length > 0 &&
                <p>{email.length}Caractere{email.length > 1 ? 's' : ''}</p>
            }

            {logado === true &&
                <button>Sair</button>
            }
            {
            logado === false &&
                <button>Logar</button>
            }
            
            {/* {logado ? <button>Sair</button> : <button>Logar</button>} */}
        </>
    );
}

export default Campos;