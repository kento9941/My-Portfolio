import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Playground from "./pages/Playground";
import Cursor from "./components/cursor";
import MouseEffectScene from "./shaders/mouse-effect-scene";
import Navigation from "./components/navigation/navigation";

export default function App() {
  return (
    <div className="relative w-full h-screen select-none">
      {/* mouse effect background */}
      <div className="fixed inset-0 -z-10 bg-black w-screen h-screen">
        <MouseEffectScene />
      </div>

      <BrowserRouter>
        {/* custom cursor */}
        <Cursor />

        <header>
          {/* navigation */}
          <div className="fixed top-[10vh] left-[3vw] z-50">
            <Navigation />
          </div>
        </header>

        <div className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Works" element={<Works />} />
            <Route path="/Playground" element={<Playground />} />
          </Routes>
        </div>
      </BrowserRouter>

      <footer className="fixed bottom-[0.8rem] left-[3vw] w-screen h-[1rem] text-[0.7rem] font-light">
        <p>Ⓒ Kento Kawazoe</p>
      </footer>
    </div>
  );
}
