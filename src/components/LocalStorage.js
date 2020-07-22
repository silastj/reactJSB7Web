import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

function LocalStorage(){

    const [ name, setName ] = useState(localStorage.getItem('name'));

    useEffect(()=> {

        localStorage.setItem('name', name);
    }, [name]);

    return(
        <>
        <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
        Nome Armazenado no LocalStorage:{name}


        </>
    );
}

export default LocalStorage;