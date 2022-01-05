import { element } from "prop-types";
import React,{Component} from "react"
import data from  "../helpers/data.json"

function ElementoLista(props){
  return(
    <ul>
      <a href={props.el.web}>{props.el.name}</a>
    </ul>
  )
}
export default class  RenderizadoElements extends Component {
  constructor(props){
    super(props);
    this.state={
      seasons:["primavera","verano","otonio","invierno"],  }
  }
render(){
  console.log(data)
  return(
    <div>
      <h2>renderizado de elelmentos</h2>
      <h2>estaciones del anio</h2>
     <ul>
       {this.state.seasons.map((el,index)=>
         <li key={index}>{el}</li>
       )}
     </ul>
    <h3>Frameworks</h3>
     <ul>
       {data.Frameworks.map((el)=><ElementoLista key={el.id} el={el}  />)} 
     </ul> 
    </div>
  )
}
}
