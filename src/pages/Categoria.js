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