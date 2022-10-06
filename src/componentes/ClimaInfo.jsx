import estilos from "./climaInfo.module.css";

function ClimaInfo({ weather }) {
  return (
    <>
      <div className={estilos.divClimaInfo}>
        <div className={estilos.ciudad}>
          {weather?.location.name} - {weather?.location.country}{" "}
        </div>
        <div>
          <img
            className={estilos.icon}
            src={`http:${weather?.current.condition.icon}`}
            alt={weather?.current.condition.text}
          />
          <div>
            <div>
              {weather?.current.condition.text} {weather?.current.temp_c}°
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <iframe
        className={estilos.divMapa}
        title="mapa"
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d62481.139390819466!2d${weather?.location.lon}!3d${weather?.location.lat}6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1664462868118!5m2!1ses-419!2sar`}
        width="300"
        height="300"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}

export default ClimaInfo;
