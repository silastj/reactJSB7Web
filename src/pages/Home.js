import React from 'react';
import { useHistory } from 'react-router-dom';
// import { connect} from 'react-redux';
import { useSelector, useDispatch} from 'react-redux';


function Home(props) {
    let history = useHistory();

    const dispatch = useDispatch();

    const name = useSelector(state => state.usuario.name);
    const contador = useSelector(state => state.usuario.contador);

    

    const handleButton = () => {
        // Replace é mudar o historico para sobre
        setTimeout(()=> {
            history.replace('/sobre');
        }, 2000)
        
    };

    const handleSilas = () => {
        dispatch({
            type: "SET_NAME",
            payload: {name: 'Silas'}
        });
    };

    const FunctionSomar = () => {
        dispatch({
            type:'INCREMENTER_CONTADOR'
        })
    };

    return(
        <div>
            <h4>Página Home</h4>
            {/* NOME: {props.name}<br/>
            CONTAGEM: {props.contador} */}

            NOME: {name}<br/>
            CONTAGEM: {contador}




            <button onClick={handleSilas}>Setar nome para Silas</button>
            <button onClick={FunctionSomar}>Mais 1</button>

            <br/>
            <br/>
            <button onClick={handleButton}>Ir para a página SOBRE</button>
        </div>
    );
}

export default Home;

// const mapStateToProps = (state) => {
//     return {
//         name: state.usuario.name,
//         contador: state.usuario.contador
//     }
// };

// const mapDispatchToProps = (dispatch) => {
//     return{
//         setName: (newName) => dispatch({
//             type: 'SET_NAME',
//             payload: { name:newName}
//         }),
//         somar: () => dispatch({
//             type: 'INCREMENTER_CONTADOR'
//         })
//     }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Home);


