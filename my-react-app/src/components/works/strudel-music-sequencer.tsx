import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useCursorStore } from "../../store/useCursorStore";

export default function StrudelMusicSequencer() {
    const [selected, setSelected] = useState(false);
    const set = useCursorStore((state) => state.setCursorType);
    return (
        <div>
            {/* preview */}
            <div className="w-[30vw] h-[60vh] flex flex-col items-center justify-center">
                <motion.div
                    className="w-[30vw] h-[35vh] flex items-center justify-center overflow-hidden"
                    layoutId="sms-container"
                    layout
                    transition={{ duration: 0.6 }}
                    onMouseEnter={() => set("hover")}
                    onMouseLeave={() => set("default")}
                    onClick={() => setSelected(true)}
                >
                    <motion.img
                        src="/sms.gif"
                        className="object-contain"
                        layoutId="sms-image"
                        layout
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        style={{ filter: "grayscale(100%) sepia(20%)" }}
                    />
                </motion.div>
                
                <div className="w-full h-auto flex flex-row items-center justify-between">
                    <h2 className="text-[1.2rem] font-light">
                        STRUDEL MUSIC SEQUENCER
                    </h2>
                    <h3 className="text-[0.7rem] font-light">
                        NOV 2025
                    </h3>
                </div>

                <div className="w-full h-auto text-[0.7rem] font-light tracking-wide">
                    <p>FRONTEND | BACKEND | UI/UX DESIGN</p>
                </div>
            </div>

            {/* details */}
            <AnimatePresence>
            {selected && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center">
                    {/* black background */}
                    <motion.div
                        className="fixed inset-0 bg-black"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        onClick={() => setSelected(false)}
                    />

                    {/* content */}
                    <div className="relative w-full min-h-full flex flex-row items-start justify-between px-[5vw]">
                        {/* left: text */}
                        <motion.div
                            className="w-[50vw] z-[60]"
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {/* back button */}
                            <div
                                className="relative group w-[10vw] text-[1.2rem] tracking-widest font-light text-white my-10 -ml-6 "
                                onMouseEnter={() => set("hover")}
                                onMouseLeave={() => set("default")}
                                onClick={() => setSelected(false)}
                            >
                                〈 BACK
                                <span className="absolute bottom-0 left-0 w-0 h-[1px] ml-[8px] bg-white transition-all duration-500 ease-out group-hover:w-full" />
                            </div>

                            {/* title */}
                            <div className="flex flex-row items-baseline justify-between">
                                <h2 className="text-[1.6rem] font-light tracking-widest leading-none">
                                    STRUDEL MUSIC SEQUENCER
                                </h2>
                            </div>
                            <p className="text-[0.8rem] font-light tracking-widest py-2 p-1">
                                FRONTEND | BACKEND | UI/UX DESIGN
                            </p>

                            {/* details */}
                            <div className="w-[50vw] flex flex-col items-center justify-center px-[2vw] border-t border-b border-white/60">
                                <div className="w-full flex flex-row items-start justify-between border-b border-white/40 py-5">
                                    <h4 className="text-[0.8rem] font-medium">TECHNOLOGIES</h4>
                                    <div className="w-[60%] text-[0.7rem] font-light flex flex-wrap justify-end">
                                        <p className="w-fit h-fit p-1 px-5 m-1 border border-white rounded-full">React.js</p>
                                        <p className="w-fit h-fit p-1 px-5 m-1 border border-white rounded-full">Strudel.js</p>
                                        <p className="w-fit h-fit p-1 px-5 m-1 border border-white rounded-full">D3.js</p>
                                        <p className="w-fit h-fit p-1 px-5 m-1 border border-white rounded-full">TypeScript</p>
                                        <p className="w-fit h-fit p-1 px-5 m-1 border border-white rounded-full">Tailwind CSS</p>
                                        <p className="w-fit h-fit p-1 px-5 m-1 border border-white rounded-full">Zustand</p>
                                    </div>
                                </div>

                                <div className="w-full flex flex-row items-start justify-between border-b border-white/40 py-5">
                                    <h4 className="text-[0.8rem] font-medium">DURATION</h4>
                                    <p className="text-[0.8rem] font-light">3 weeks (Oct ~ Nov 2025)</p>
                                </div>

                                <div className="w-full flex flex-row items-start justify-between py-5">
                                    <h4 className="text-[0.8rem] font-medium">SUMMARY</h4>
                                    <div className="w-[60%] text-[0.8rem] font-light">
                                        <p>
                                            A browser-based music sequencer built to explore the intersection of web technology and music production. 
                                            Leveraging Strudel.js and React, I developed a system that supports multi-instrument tracks with precise, per-note control over pitch and volume. 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>
                        </motion.div>

                        {/* right: image */}
                        <motion.div
                            className="w-[35vw] h-[80vh] flex items-center justify-center overflow-hidden"
                            layoutId="sms-container"
                            layout
                            transition={{ duration: 0.6 }}
                        >
                            <motion.img
                                src="/sms.gif"
                                layoutId="sms-image"
                                layout
                                className="object-contain z-[70]"
                                transition={{ duration: 0.6 }}
                                style={{ filter: "grayscale(0%) sepia(0%)" }}
                            />
                        </motion.div>
                    </div>
                </div>
            )}
            </AnimatePresence>
        </div>
    )
}
