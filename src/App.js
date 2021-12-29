import logo from './logo.svg';
import './App.css';

function App() {
  let nombre="ernes";
  let aut =false;
  let letra="letra";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor="nombre">nombre</label>
        <input type="text" id="nombre"/>
        <h1>{nombre}</h1>
        <p>{aut?"el usuario esta logueado":"el ususario no esta logueado"}</p>
        <p>{2 +2}</p>
        <ul>
          <li>{letra}</li>
        </ul>
        
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
      </header>
    </div>
  );
}

export default App;
