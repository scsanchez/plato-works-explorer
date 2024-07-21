import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { PlatoBiography } from "./components/Plato-biography";
import Works from "./components/Works-cards";
import { motion, AnimatePresence } from "framer-motion";
import { Home } from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: "transparent",

          padding: "10px",
          marginBottom: "20px",
        }}
      >
        {/* Tus Links aquí */}
        <Link to="/" style={{ marginRight: "10px", color: "white" }}>
          Home
        </Link>
        <Link to="/biography" style={{ marginRight: "10px", color: "white" }}>
          Biography
        </Link>
        <Link to="/works" style={{ marginRight: "10px", color: "white" }}>
          Works
        </Link>
      </div>
      <RouteContainer />
    </BrowserRouter>
  );
}

function RouteContainer() {
  const location = useLocation(); // Hook para acceder a la ubicación actual

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/biography" element={<PlatoBiography />} />
        <Route
          path="/works"
          element={
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
            >
              <Works />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
