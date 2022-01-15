import propTypes from 'prop-types';
import  React,{useState} from 'react';

export default  function ContadorHooks(props) {
const [contador,setContador]=useState(0);
const sumar=()=>setContador(contador+1)
const restar=()=>setContador(contador-1)
return(
  <>
  <h2>contador hooks</h2>
  <p>contador de {props.titulo}</p>
  <nav>
    <button onClick={sumar}>+</button>
    <button onClick={restar}>-</button>
    <span>{contador}</span>
  </nav>
  </>
);
}

ContadorHooks.defaultProps={
  titulo:"clicks"
}