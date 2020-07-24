import React from 'react';
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