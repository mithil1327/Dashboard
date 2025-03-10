import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Academics from "./pages/Academics";
import Performance from "./pages/Performance";

function App_layout() {
  return (
    <div>
      <Routes>
        <Route path="/Dashboard" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Academics" element={<Academics />} />
        <Route path="/Performance" element={<Performance />} />
      </Routes>
    </div>
  );
}

export default App_layout;