import { useState, useEffect } from "react";
import Formulario from "./Formulario";
import ClimaInfo from "./ClimaInfo";
import estilos from "./appClima.module.css";
import Loading from "./Loading";
import MensajeError from "./MensajeError";

function AppClima() {
  const [mensajeError, setMensajeError] =useState(false)
  const [clima, setClima] = useState(null);

  useEffect(() => {
    loadInfo();
  }, [""]);

  useEffect(() => {
    document.title = `Clima | ${clima?.location.name ?? ""}`;
  }, [clima]);

 

  async function loadInfo(city = "buenos aires") {
    try {
      const request = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      );
      const json = await request.json();
      setClima(json);
            
      if (json.error.code>1){
        setClima(null)
        loadInfo(city ="buenos aires")
        setMensajeError(true)
      }
    
    } catch (err) {

    }
  }

  function handleChangeCity(city) {
    setClima(null);
    loadInfo(city);
    setMensajeError(false)
  }


let componente ;
if (mensajeError){
  componente =  <MensajeError />
}
else{
  componente= null
}
  return (
    <div className={estilos.divApp}>
      {componente}
           <Formulario error={mensajeError} onChangeCity={handleChangeCity} />
              {clima ? <ClimaInfo weather={clima} /> : <Loading />}
          </div>
  );
}

export default AppClima;
