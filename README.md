# App Clima

**App Clima** es una aplicación web desarrollada en React que permite consultar el estado del clima actual de una ciudad determinada. Utiliza una API externa para obtener la información meteorológica y presenta una interfaz simple e interactiva para el usuario.

## Características

- Consulta del clima actual por ciudad.
- Visualización de datos como ubicación, temperatura y condición climática.
- Gestión de errores para ciudades inexistentes.
- Indicador de carga mientras se obtiene la información.
- Diseño modular con componentes reutilizables.
- Estilos personalizados utilizando módulos CSS.


## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/EcheMacaco/App-Clima-.git
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar la aplicación:

```bash
npm start
```

Esto abrirá la app en `http://localhost:3000`.

## Componentes Principales

### `App.js`

Punto de entrada que renderiza el componente principal `AppClima`.

### `AppClima.jsx`

- Maneja el estado general de la app (clima, errores).
- Llama a la API y gestiona la lógica de carga y errores.
- Renderiza los componentes `Formulario`, `ClimaInfo`, `Loading` y `MensajeError`.

### `Formulario.jsx`

- Permite ingresar el nombre de una ciudad.
- Llama a la función de cambio de ciudad (`onChangeCity`) pasada por props.

### `ClimaInfo.jsx`

- Muestra los datos meteorológicos como ciudad, país, temperatura, estado del clima, humedad y velocidad del viento.

### `Loading.jsx`

- Componente de carga que se muestra mientras se obtienen los datos.

### `MensajeError.jsx`

- Muestra un mensaje si la ciudad ingresada no existe o hay un error en la búsqueda.

## Variables de Entorno

La app utiliza dos variables de entorno:

- `REACT_APP_URL`: URL base de la API (por ejemplo, `https://api.weatherapi.com/v1/current.json?`)
- `REACT_APP_KEY`: clave de API para autenticación.

Estas se definen en el archivo `.env`.

## Dependencias

- React
- CSS Modules
- [WeatherAPI](https://www.weatherapi.com/) para los datos climáticos.

## Licencia

Este proyecto no especifica licencia.
