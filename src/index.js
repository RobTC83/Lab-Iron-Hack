// ARCHIVO DE ENTRADA
// 1. IMPORTACIONES


import React from 'react'; /*estoy instalando la librería, en el package.json puedes ver detalles */
import ReactDOM from 'react-dom'; /* genera entornos virtuales, o virtual DOMS para cada componente, sin que se renderice toda la aplicación */
import './index.css'; /* Importa la hoja de estilos */
import App from './App'; /* Importación de componentes */
// app.js va a contener todos los componentes hacia abajo.  Lo estamos importando

import reportWebVitals from './reportWebVitals'; /* Una función que permite hacer un monitoreo, que no veremos por ahora */


// 2. RENDERIZADO
//
ReactDOM.render(
  <React.StrictMode>
    <App /> 
  {/* Este viene de la importación de arriba */}
  </React.StrictMode>,
  document.getElementById('root')
); /* Vamos a invocar al componente hijo */

// 3. POR AHORA NO VEREMOS ESTA PARTE

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
