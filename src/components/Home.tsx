import { Link } from "react-router-dom";
import { useState } from "react";

import "./Home.css";

export const Home = () => {
  // Estado para manejar el texto del botón
  const [buttonText, setButtonText] = useState("Saber mas");

  // Función para cambiar el texto al hacer hover
  const handleMouseEnter = () => setButtonText("γνωθι σεαυτόν");

  // Función para restablecer el texto al salir del hover
  const handleMouseLeave = () => setButtonText("Conócete a ti mismo");

  return (
    <>
      <div>
        <Link
          to="/biography"
          className="typewrite-button"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {buttonText}
        </Link>
      </div>
    </>
  );
};
