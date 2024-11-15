import React, { useState } from "react";
import "./Adivinanza.css";

function Adivinanza({ numero, pregunta, respuesta }) {
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);

  return (
    <div className="adivinanza">
      <h3>Adivinanza {numero}</h3>
      <p>{pregunta}</p>
      <button onClick={() => setMostrarRespuesta(!mostrarRespuesta)}>👁️</button>
      <p className={`respuesta ${mostrarRespuesta ? "mostrar" : ""}`}>
        {respuesta}
      </p>
    </div>
  );
}

export default Adivinanza;
