import React from "react";
import logo from './logo.svg';
import './App.css';
import Componente from "./components/Componente.js";
import Propiedades from "./components/Propiedades.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section><img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       </section>
    
    
      <section>
<Componente mesage="ho soy un componente desde una funcion expresada"/>
<Propiedades cadena ="esta es una cadena" 
numero= {19}
booleano= {false}
arreglo={[1,2,3,4]}
objeto={{nombre:"ernesto",
edad:35,nacimiento:86}}
function={(num)=>num*num}
elementoReact={<i>esto es un elemento de react</i>}
componenteReact={<Componente mesage="soy un componente pasado com props"/>}
/>

      </section>
      </header>
      
      </div>
  );
}

export default App;
