import React from 'react';
import { connect} from 'react-redux';





function Login(props){

    const handleAmos = () => {
        props.setName('Amós');
    };


    return(
       <div>
             <h1>Vamos logar? Login</h1>
             O nome é: {props.name}
             <br/><br/>

             <button onClick={handleAmos}>Trocar nome para Amós</button>
       </div>
    );
}

const mapStateToProps = (state) => {
    return {
        name: state.usuario.name
    }
}

const mapDispatchToProps = dispatch => ({
    setName: (newName) =>  dispatch ({
        type: 'SET_NAME',
        payload: {name: newName }
    })
});

export default connect(mapStateToProps,mapDispatchToProps )(Login);