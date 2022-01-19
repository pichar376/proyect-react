import React, { useEffect, useState } from "react";

function Reloj({hora}){
  return(
    <>
    <h3>{hora}</h3>
    </>
  )
}

export default function RelojHook(){
  const [hora,setHora]=useState(new Date().toLocaleTimeString());
  const [visible,setVisible]=useState(false);

  
   useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    let temporizador;
   if(visible){
     temporizador=setInterval(() => {
       setHora(new Date().toLocaleTimeString());
     }, 1000)

   }else{
     clearInterval(temporizador);

   }
  
  },[visible] )
  return(
    <>
    {visible&&<Reloj hora={hora}/>}

      <button onClick={()=>setVisible(true)}>iniciar</button>
      <button onClick={()=>setVisible(false)}>detener</button>
  
  
    </>
  );
}



