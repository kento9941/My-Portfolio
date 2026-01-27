import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Playground from "./pages/Playground";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Works" element={<Works />} />
        <Route path="/Playground" element={<Playground />} />
      </Routes>
    </BrowserRouter>
  );
}
