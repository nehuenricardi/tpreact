import React, { useEffect, useState } from "react";
import Adivinanza from "./Adivinanza";
import "./AdivinanzaContainer.css";

function AdivinanzaContainer() {
  const [adivinanzas, setAdivinanzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function obtenerAdivinanzas() {
      try {
        const response = await fetch("/adivinanzas.json");
        if (!response.ok) {
          throw new Error("No se pudieron cargar las adivinanzas");
        }
        const data = await response.json();
        setAdivinanzas(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    obtenerAdivinanzas();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="adivinanza-container">
      <div className="titulo-adivinanzas">Adivinanzas</div>
      {adivinanzas.map((adivinanza) => (
        <Adivinanza
          key={adivinanza.numero}
          numero={adivinanza.numero}
          pregunta={adivinanza.pregunta}
          respuesta={adivinanza.respuesta}
        />
      ))}
    </div>
  );
}

export default AdivinanzaContainer;
