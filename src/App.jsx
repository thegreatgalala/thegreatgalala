import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Eventreg from "./pages/Eventreg";
import Team from "./pages/Team";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:events" element={<Events />} />
        <Route path="/:events/:eventName" element={<Eventreg />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
