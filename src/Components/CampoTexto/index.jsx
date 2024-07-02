import { useState } from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {

 const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
 }
  
    
  const placeholderModificada = `${props.placeholder}...`

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input onChange={aoDigitado} value={props.valor} required={props.obrigatorio} placeholder={placeholderModificada} />
    </div>
  );
};

export default CampoTexto;
