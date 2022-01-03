import React,{Component} from "react"

export default class  RenderizadoElements extends Component {
  constructor(props){
    super(props);
    this.state={
      seasons:["primavera","verano","otonio","invierno"],  }
  }
render(){
  return(
    <div>
      <h2>renderizado de elelmentos</h2>
      <h2>estaciones del anio</h2>
     <ul>
       {this.state.seasons.map((el,index)=>
         <li key={index}>{el}</li>
       )}
     </ul>
    </div>
  )
}
}
