import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Cursor from "./components/cursor";
import MouseEffectScene from "./shaders/mouse-effect-scene";
import Navigation from "./components/navigation/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  return (
    <div className="relative w-full h-screen select-none">
      {/* splash page */}
      <motion.div
        className="fixed inset-0 bg-black flex items-center justify-center text-[2rem] font-light z-[9999]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 2 }}
      >
        <motion.h1
          initial={{ opacity: 0, filter: "blur(5px)" }}
          animate={{ 
            opacity: [0, 1, 1, 0], 
            filter: ["blur(5px)", "blur(0px)", "blur(0px)", "blur(5px)"] 
          }}
          transition={{
            times: [0, 0.2, 0.8, 1],
            duration: 2.4,
            ease: "easeInOut",
          }}
        >
          Kento Kawazoe
        </motion.h1>
      </motion.div>

      {/* mouse effect background */}
      <div className="fixed inset-0 -z-10 bg-black w-screen h-screen">
        <MouseEffectScene />
      </div>

      <BrowserRouter>
        {/* custom cursor */}
        <Cursor />

        <header>
          {/* navigation */}
          <div className="fixed top-[12vh] left-[3vw] z-50">
            <Navigation />
          </div>
        </header>

        <div className="relative">
          <AnimatedRoutes />
        </div>
      </BrowserRouter>

      <footer className="fixed bottom-[0.8rem] left-[3vw] w-screen h-[1rem] text-[0.7rem] font-light">
        <p>Ⓒ Kento Kawazoe</p>
      </footer>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/Works" element={<Works />} />
      </Routes>
    </AnimatePresence>
  )
}
