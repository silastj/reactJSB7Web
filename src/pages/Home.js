import React from 'react';
import { useHistory } from 'react-router-dom';

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