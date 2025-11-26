import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation"
import Home from "./Pages/Home";
import Prelim from "./Pages/Prelim";
import Midterm from "./Pages/Midterm";
import Finals from "./Pages/Finals";
import About from "./Pages/about";
import Skills from "./Pages/skills";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prelim" element={<Prelim />} />
        <Route path="/midterm" element={<Midterm />} />
        <Route path="/finals" element={<Finals />} />
          <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
}

export default App;
