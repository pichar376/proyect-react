import React,{Component} from "react"

export  class Evento extends Component{
  constructor(props){
    super(props)
    this.state={
      contador:0,
    }
  this.sumar=this.sumar.bind(this);
  this.restar=this.restar.bind(this);
  }
  sumar(e){
    console.log("sumando")
   this. setState({
      contador:this.state.contador+1,
    });
  }
    restar(e){
    console.log("restando")
    console.log(e)
    console.log(e.target)
   this. setState({
      contador:this.state.contador-1,
    });
  }
  render(){
    return(
      <div><h2>Eventos en componentes de Clase</h2>
        
        <nav><button onClick={this.sumar}>+</button><button onClick={this.restar}>-</button></nav>
      <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

export  class Evento7 extends Component{
  state={
      contador:0,
    }
  
  sumar=(e)=>{
    console.log("sumando")
   this.setState({
      contador:this.state.contador+1,
    });
  }
    restar=(e)=>{
    console.log("restando")
    console.log(e)
    console.log(e.target)
   this.setState({
      contador:this.state.contador-1,
    });
  }
  render(){
    return(
      <div><h2>Eventos en componentes de Clase</h2>
        
        <nav><button onClick={this.sumar}>+</button><button onClick={this.restar}>-</button></nav>
      <h3>{this.state.contador}</h3>
      </div>
    );
  }
}
