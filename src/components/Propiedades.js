import React from "react";
import PropTypes from "prop-types"
export default function Propiedades(props){
  return (
        <div>
         <h2>{props.pordefecto}</h2>
         <ul>
           
           <li>{props.cadena}</li>
           <li>{props.numero}</li>
           <li>{props.booleano?"es correcto":"es falso"}</li>
           <li>{props.arreglo.join(",")}</li>
           <li>{props.objeto.nombre +" " +props.objeto.edad + " " +props.objeto.nacimiento}</li>
           <li>{props.elementoReact}</li>
           <li>{props.arreglo.map(props.function).join(",")}</li>
           <li>{props.componenteReact}</li>
         </ul>
   </div>
  );
}

Propiedades.defaultProps={
  pordefecto:"las props",
}
Propiedades.propTypes={
  numero:PropTypes.number,
};