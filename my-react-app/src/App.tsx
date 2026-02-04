import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Playground from "./pages/Playground";
import Cursor from "./components/cursor";
import MouseEffectScene from "./shaders/mouse-effect-scene";
import Navigation from "./components/navigation";

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

        <header>
          {/* logo */}
          <img src="/logo.svg" alt="logo" className="fixed top-[10vh] left-[3vw] w-12 h-12 z-50" />

          {/* navigation */}
          <div className="fixed top-[25vh] left-[3vw] z-50">
            <Navigation />
          </div>
        </header>

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
