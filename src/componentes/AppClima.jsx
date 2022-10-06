import { useState, useEffect } from "react";
import Formulario from "./Formulario";
import ClimaInfo from "./ClimaInfo";
import estilos from "./appClima.module.css";
import Loading from "./Loading";

function AppClima() {
  const [clima, setClima] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

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
        alert("Error en la búsqueda. Por favor intenta nuevamente")
      }
    } catch (err) {
    }
  }

  function handleChangeCity(city) {
    setClima(null);
    loadInfo(city);
  }

  return (
    <div className={estilos.divApp}>
      <Formulario onChangeCity={handleChangeCity} />
      {clima ? <ClimaInfo weather={clima} /> : <Loading />}
    </div>
  );
}

export default AppClima;
