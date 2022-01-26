import React from "react";
import logo from './logo.svg';
import './App.css';
import Componente from "./components/Componente.js";
import Propiedades from "./components/Propiedades.js";
import Estado from "./components/Estado.js";
import RenderizadoCondicional from "./components/renderizadoCondicional";
import RenderizadoElements from "./components/renderizadoElements";
import {Evento,Evento7,MasSobreEventos,} from "./components/Eventos"
import AjaxApis from "./components/ajaxApis"
import ContadorHooks from "./components/ContadorHook"
 import Example from "./components/prueba"  
import RelojHook from "./components/RelojHooks"
import ScrollHook from "./components/ScrollHooks"
import ApiHook from "./components/ApisHooks"
import HookPerson from "./components/HooksPerson"
import Referencias from "./components/Referencias"
import Formularios from "./components/Formularios"
import Estilos from "./components/Estilos"






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
<Propiedades cadena ="esta es ua cadena" 
numero= {19}
booleano= {false}
arreglo={[1,2,3,4]}
objeto={{nombre:"ernesto",
edad:35,nacimiento:86}}
function={(num)=>num*num}
elementoReact={<i>esto es un elemento de react</i>}
componenteReact={<Componente mesage="soy un componente pasado com props"/>}
/>

<Estado/>
<hr/>
<RenderizadoCondicional/>

<hr/>
<RenderizadoElements/>
<hr/>
<Evento/>
<hr/>
<Evento7/>
<hr/>
< MasSobreEventos/>
<hr/>

<AjaxApis/>
<hr/>
 <ScrollHook/> 
<hr/>
 <RelojHook/>  
<hr/>
<ContadorHooks/>
<hr/>
<Example/>
<hr/>
<ApiHook/>
<hr/>
<HookPerson/>
<hr/>
<Referencias/>
<hr/>
<Formularios/>
<hr/>
<Estilos/>
<br/>
<br/>
<br/>
<br/>

</section>
      </header>
      
      </div>
  );
}

export default App;
