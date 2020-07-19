import React from 'react';

function formarNome(usuario){
  return usuario.nome+" "+usuario.sobrenome;
}



function App() {
  let name = "Silas Santos";
  // let img = 'http://www.google.com.br/google.jpg';

  let usuario = {
    nome:'Amós Silas',
    sobrenome: 'Santos'
  };
  
  return (
    <div>
      {/* <img src={img} style={{marginLeft:"100px",maxWidth:50, height:50, objectFit:"contain", borderRadius:"50%",border:"1px solid red"}}/> */}
      <h1>Usuario: {formarNome(usuario)}</h1>
      <h2>App é do: {name}</h2>
    </div>
  );
}

export default App;
