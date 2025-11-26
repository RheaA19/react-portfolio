import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation"
import Home from "./Pages/Home";
import Prelim from "./Pages/Prelim";
import Midterm from "./Pages/Midterm";
import Finals from "./Pages/Finals";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prelim" element={<Prelim />} />
        <Route path="/midterm" element={<Midterm />} />
        <Route path="/finals" element={<Finals />} />
      </Routes>
    </>
  );
}

export default App;
