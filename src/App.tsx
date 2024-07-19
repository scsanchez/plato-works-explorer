import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { PlatoBiography } from "./components/Plato-biography";
import  Works  from "./components/Works-cards";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: "#f0f0f0",
          padding: "10px",
          marginBottom: "20px",
        }}
      >
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>
        <Link to="/biography" style={{ marginRight: "10px" }}>
          Biography
        </Link>
        <Link to="/works" style={{ marginRight: "10px" }}>
          Works
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/biography" element=<PlatoBiography/> />
        <Route path="/works" element=<Works/>  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
