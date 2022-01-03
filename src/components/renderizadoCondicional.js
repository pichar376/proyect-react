import { render } from "@testing-library/react"
import React,{Component} from "react"

function Login(){
  return(
    <h2>
      login
    </h2>
  )
}
function Logout(){
  return(
    <h2>
      logout
    </h2>
  )
}

export default class RenderizadoCondicional extends Component {

  constructor(props){
    super(props)

    this.state={
      session:true,
    }
}
  render(){
    return(
      <div>
        <h3>
          renderizado condicional
        </h3>
        {this.state.session?<Login/>:<Logout/>}
      </div>
    );
  }
}