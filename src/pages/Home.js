import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect} from 'react-redux';

function Home(props) {

    let history = useHistory();

    const handleButton = () => {
        // Replace é mudar o historico para sobre
        setTimeout(()=> {
            history.replace('/sobre');
        }, 2000)
        
    };

    const handleSilas = () => {
        props.setName('Silas');
    };

    const FunctionSomar = () => {
        props.somar();
    };

    return(
        <div>
            <h4>Página Home</h4>
            NOME: {props.name}<br/>
            CONTAGEM: {props.contador}




            <button onClick={handleSilas}>Setar nome para Silas</button>
            <button onClick={FunctionSomar}>Mais 1</button>

            <br/>
            <br/>
            <button onClick={handleButton}>Ir para a página SOBRE</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        name: state.usuario.name,
        contador: state.usuario.contador
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        setName: (newName) => dispatch({
            type: 'SET_NAME',
            payload: { name:newName}
        }),
        somar: () => dispatch({
            type: 'INCREMENTER_CONTADOR'
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);


