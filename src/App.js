//import logo from './logo.svg';
import './App.css';
import Matematicas from './components/Matematicas';
import Contador from './components/Contador';
import Car from './components/Car';



const doblenumero = (numero) =>{
  var doble = numero * 2;
  console.log(doble);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Car Marca="Audi" Modelo="Q4" Aceleracion="20" VelocidadMaxima="240"/>
        <Car Marca="Pontiac" Modelo="Firebird" Aceleracion="40" VelocidadMaxima="280"/>

        {/* <Contador inicio="22"></Contador>
        <Contador inicio="44"></Contador>
        <Contador inicio="66"></Contador>
      
        <Matematicas numero="5" idhijo="1" metodoHPadre={doblenumero}/>
        <Matematicas numero="7" idhijo="2" metodoHPadre={doblenumero}/>
        <Matematicas numero="9" idhijo="3" metodoHPadre={doblenumero}/> */}

      </header>
    </div>
  );
}

export default App;
