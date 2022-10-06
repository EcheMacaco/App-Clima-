import { useState } from "react";
import estilos from "./formulario.module.css";

function Formulario({onChangeCity}) {
  const [city, setCity] = useState("");



  function onChange(e) {
    const value = e.target.value;
    if (value !== "" ) {
      setCity(value);
      
    }
  }

  function handleSubmit (e){
    e.preventDefault();
   onChangeCity(city)
   
  }



  

  return (
    <form onSubmit={handleSubmit}>
      <input className={estilos.inputClima} type="search" placeholder="Elige una ciudad" onChange={onChange} />
     
    </form>
  );
}

export default Formulario;
