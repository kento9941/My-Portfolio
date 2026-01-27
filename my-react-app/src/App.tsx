import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Playground from "./pages/Playground";
import Cursor from "./components/cursor";
import MouseEffectScene from "./shaders/mouse-effect-scene";

export default function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* mouse effect background */}
      <div className="fixed inset-0 -z-10 bg-black">
        <MouseEffectScene />
      </div>

      <BrowserRouter>
        {/* custom cursor */}
        <Cursor />

        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Works" element={<Works />} />
            <Route path="/Playground" element={<Playground />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
