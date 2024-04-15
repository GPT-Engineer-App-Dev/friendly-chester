import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Presidency from "./pages/Presidency.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/presidency" element={<Presidency />} />
      </Routes>
    </Router>
  );
}

export default App;
