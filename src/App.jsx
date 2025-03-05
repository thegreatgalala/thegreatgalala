import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Eventreg from "./pages/Eventreg";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/viewevent/:eventname" element={<Eventreg />} />
      </Routes>
    </Router>
  );
}

export default App;
