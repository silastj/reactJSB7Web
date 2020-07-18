Criação de Componentes de 4 formas:

function Title() {
    return (
      <div>
      <h1>OLá Amós</h1>
      </div>
    );
  }

//   OU

class Title extends React.Component {
    render() {
    return<h1>Novo {this.props.name}</h1>
    }
}

// OU

const Title = React.createClass({
    render: function() {
        return (
            <h1>Olá,?ha>
        )
    }
})

export default Title;

// OU

let Title = () => {
    return <h1>Olá </h1>;
};

export default App;

// OU

let App = () => <h1>Olá</h1>;

export default App;