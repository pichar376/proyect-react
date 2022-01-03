import { render } from "@testing-library/react";
import React,{Component}from "react";
function EstadoAhijo(props){
  return(
    <h3>{props.contadorHijo}</h3>
  );

}
export default class Estado extends Component{
  constructor(props){
    super(props);
    this.state={
      contador:0,
    }
  
  /* setInterval (()=>{
    this.setState({
      contador:this.state.contador + 1
    });
  },1000); */
}
  render(){
    return (<div>
      <h2>
        el state
      </h2>
      <p>
       {this.state.contador}
      </p>
      <EstadoAhijo contadorHijo={this.state.contador} />
    </div>
    );
  }
  }