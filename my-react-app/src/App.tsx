import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Works";
import WorkDetail from "./pages/WorkDetail";
import Gallery from "./pages/Gallery";
import Cursor from "./components/cursor";
import MouseEffectScene from "./shaders/mouse-effect-scene";
import Navigation from "./components/navigation/navigation";
import { AnimatePresence } from "framer-motion";
import ScrollReset from "./components/scroll-reset";
import { useCursorStore } from "./store/useCursorStore";
import { useThemeStore } from "./store/useThemeStore";
import ToggleButton from "./components/toggle-button";

export default function App() {
  const { theme } = useThemeStore();

  return (
    <div className={`relative w-full h-screen select-none transition-colors duration-700 
      ${theme === "dark" ? "text-[#ffffffdc]" : "text-[#101010]"}`}
    >
      {/* mouse effect background */}
      <div className="hidden [@media(pointer:fine)]:block fixed inset-0 -z-50 bg-black w-screen h-screen">
        <MouseEffectScene />
      </div>

      {/* overlay */}
      <div className={`fixed inset-0 -z-10 bg-[#ffffff11] transition-colors duration-700 
        ${theme === "dark" ? "bg-[#ffffff11]" : "bg-[#ffffffdd] mix-blend-difference"}`}
      />
      <div className={theme === "light" ? "fixed inset-0 -z-10 bg-[#ffffffa0] duration-700" : "hidden"} />

      <BrowserRouter>
        <ScrollReset />
        <div className="hidden [@media(pointer:fine)]:block">
          <Cursor />
        </div>

        <header>
          {/* navigation */}
          <div className="fixed top-0 left-0 lg:top-[12vh] lg:left-[3vw] z-50">
            <Navigation />
          </div>

          <div className="fixed top-[clamp(3.5rem,7vh,10rem)] left-1/2 -translate-x-1/2 lg:top-[5vh] lg:right-[5vw] lg:left-auto lg:translate-x-0 z-50">
            <ToggleButton />
          </div>
        </header>

        <div className="relative">
          <AnimatedRoutes />
        </div>
      </BrowserRouter>

      <footer className="fixed bottom-[0.8rem] left-[3vw] w-screen h-[1rem] text-[clamp(0.5rem,0.8vw,1rem)] font-light">
        <p>Ⓒ Kento Kawazoe</p>
      </footer>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  const set = useCursorStore((state) => state.setCursorType);

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => set("default")}
    >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/Works" element={<Works />} />
        <Route path="/Works/:id" element={<WorkDetail />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
    </AnimatePresence>
  )
}
