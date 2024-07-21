import { useState } from "react";
import { worksData } from "../data/Works-b";
import { motion, AnimatePresence } from "framer-motion";

const Works = () => {
  const [activePeriod, setActivePeriod] = useState("");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  
  type PeriodColorsType = {
    "PERÍODO DE TRANSICIÓN": string;
    "PERÍODO DE MADUREZ": string;
    "PERÍODO SOCRÁTICO": string;
    "OBRAS DE LA VEJEZ": string;
  };

  const periodColors: PeriodColorsType = {
    "PERÍODO DE TRANSICIÓN": "rgba(255, 0, 0, 0.5)",
    "PERÍODO DE MADUREZ": "rgba(0, 255, 0, 0.5)",
    "PERÍODO SOCRÁTICO": "rgba(0, 0, 255, 0.5)",
    "OBRAS DE LA VEJEZ": "rgba(0, 255, 255, 0.5)",
  };

  function getBackgroundColor(period: keyof PeriodColorsType): string {
    return periodColors[period];
  }
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
        {filteredWorks.map((work) => (
          <motion.div
            key={work.id} // Asegúrate de usar un identificador único aquí
            layoutId={work.id.toString()} // Framer Motion necesita que layoutId sea un string
            onClick={() => setSelectedId(work.id)}
            style={{
              flex: "0 1 300px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              borderRadius: "10px",
              background: getBackgroundColor(
                work.period as keyof PeriodColorsType
              ),
            }}
          >
            <h3>{work.name}</h3>
            <p>{work.brief_summary}</p>
          </motion.div>
        ))}
        <AnimatePresence>
          {selectedId &&
            filteredWorks
              .filter((work) => work.id === selectedId)
              .map((item) => (
                <motion.div
                  layoutId={item.id.toString()}
                  key={item.id}
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(128,128,128)",
                  }}
                >
                  <motion.div
                    style={{
                      width: "300px", // Define un ancho fijo
                      height: "400px", // Define un alto fijo
                      padding: "20px",
                      background: getBackgroundColor(
                        item.period as keyof PeriodColorsType
                      ),
                      borderRadius: "10px",
                    }}
                  >
                    <motion.h5>{item.period}</motion.h5>
                    <motion.h2>{item.name}</motion.h2>
                    <motion.p>{item.brief_summary}</motion.p>
                    <motion.button onClick={() => setSelectedId(null)}>
                      Cerrar
                    </motion.button>
                  </motion.div>
                </motion.div>
              ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Works;
