import { useState } from "react";
import { worksData } from "../data/Works-b";

const Works = () => {
  const [activePeriod, setActivePeriod] = useState("");

  // Objeto que asocia períodos con colores
  const periodColors = {
    "PERÍODO DE TRANSICIÓN": "#f0e68c", // Ejemplo de color, ajusta según necesidad
    "PERÍODO DE MADUREZ": "#add8e6",
    "PERÍODO SOCRÁTICO": "#98fb98",
    "OBRAS DE LA VEJEZ": "#ffb6c1",
  };

  // Filtra las obras basado en el periodo activo
  const filteredWorks = worksData.filter(
    (work) => activePeriod === "" || work.period === activePeriod
  );

  return (
    <div>
      <div
        style={{
          padding: "20px",
          display: "flex", // Añadido para habilitar flexbox
          justifyContent: "space-evenly", // Añadido para separar los elementos
          alignContent: "center",
        }}
      >
        {/* Botones para seleccionar el periodo */}
        <button onClick={() => setActivePeriod("")}>Todos</button>
        <button onClick={() => setActivePeriod("PERÍODO SOCRÁTICO")}>
          Periodo Socrático
        </button>

        <button onClick={() => setActivePeriod("PERÍODO DE TRANSICIÓN")}>
          Periodo de Transición
        </button>
        <button onClick={() => setActivePeriod("PERÍODO DE MADUREZ")}>
          Periodo de Madurez
        </button>

        <button onClick={() => setActivePeriod("OBRAS DE LA VEJEZ")}>
          Obras de la Vejez
        </button>
      </div>

      {/* Muestra las obras filtradas */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {filteredWorks.map((work, index) => (
          <div
            key={index}
            style={{
              flex: "0 1 300px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              borderRadius: "10px",
              // Asigna el color del período sin importar si "Todos" está seleccionado
              backgroundColor: periodColors[work.period] || "transparent",
            }}
          >
            <h3>{work.name}</h3>
            <p>{work.brief_summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
