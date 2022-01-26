import React from 'react';
import "./Estilos.css"
import myStylesMod from"./Estilos.module.css"
import "./Estilos.scss"



export default function Estilos(){
  let myStyles={
    borderRadius:".5rem",
    padding:"3rem",
margin:"3rem auto",
maxWidth:"50%"
  }
  return(
    <section className="estilos">
      <h2>
Estilos CSS en React
    </h2>
    <h3 className="bg-react"style={{borderRadius:"3rem"}}>Estilos en hoja CSS Externa</h3>
    <h3 className='bg-react' style={{borderRadius:"2.5rem",margin:"1rem"}}>Estilos en linea</h3><h3  className="bg-react"style={myStyles}>Estilos en Linea con un objeto style </h3>
      <h3 className={myStylesMod.error}>Estilos de modulo error</h3>
      <h3 className={myStylesMod.sucsess}>Estilois de modulo sucsess</h3>
      <h3 className="bg-sass">Estilos de SASS</h3>
    </section>
  )

}