import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useCursorStore } from "../store/useCursorStore";
import { Link } from "react-router-dom";

const works = [
    {id: 1, title: "STRUDEL MUSIC SEQUENCER", sub: "Personal Project / Full Stack", description: "A browser-based music sequencer built to explore the intersection of web technology and music production."},
    {id: 2, title: "MENU SCANNER", sub: "Personal Project / Full Stack", description: "Menu Scanner is a web application that extracts text from menu images, translates it into the user's language, and retrieves representative dish images."},
    {id: 3, title: "PORTFOLIO 1", sub: "Personal Project / Full Stack", description: "My first portfolio, built with WordPress, CSS, and JavaScript."},
    {id: 4, title: "POLYGON FLOWER", sub: "Digital Art", description: "Randomly colored and shaped flower built with p5.js"},
]

export default function Works() {
    const [focus, setFocus] = useState(works[0]);
    const set = useCursorStore((state) => state.setCursorType);

    return(
        <motion.main
            className="relative w-screen h-full overflow-x-auto lg:w-full lg:min-h-screen flex justify-start items-center pt-[15vh] pl-[15vw] pr-[15vw] lg:justify-start lg:items-start lg:pt-[40vh] lg:pb-[30vh] lg:pl-[15vw]"
            exit={{ opacity: 0, filter: "blur(3px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="hidden lg:flex lg:flex-col lg:w-[40vw] lg:h-auto lg:gap-[40vh]">
                <Link key="1" to="/Works/1">
                    <motion.img
                        initial={{ opacity: 0, filter: "blur(3px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        loading="eager"
                        src="/sms.gif"
                        alt="Strudel Music Sequencer"
                        className="w-[40vw]"
                        onViewportEnter={() => setFocus(works[0])}
                        viewport={{ amount: "some", margin: "-50% 0px -50% 0px" }}
                        onMouseEnter={() => set("View")}
                        onMouseLeave={() => set("default")}
                    />
                </Link>
                
                <Link key="2" to="/Works/2">
                    <motion.img
                        src="/ms.gif"
                        alt="Menu Scanner"
                        className="w-[40vw]"
                        onViewportEnter={() => setFocus(works[1])}
                        viewport={{ amount: "some", margin: "-50% 0px -50% 0px" }}
                        onMouseEnter={() => set("View")}
                        onMouseLeave={() => set("default")}
                    />
                </Link>

                <Link key="3" to="/Works/3">
                    <motion.img
                        loading="lazy"
                        src="/portfolio1.gif"
                        alt="Portfolio 1"
                        className="w-[40vw]"
                        onViewportEnter={() => setFocus(works[2])}
                        viewport={{ amount: "some", margin: "-50% 0px -50% 0px" }}
                        onMouseEnter={() => set("View")}
                        onMouseLeave={() => set("default")}
                    />
                </Link>

                <a
                    href="https://openprocessing.org/sketch/2655027"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <motion.img
                        loading="lazy"
                        src="/flower.webp"
                        alt="Polygon Flower"
                        className="w-[40vw]"
                        onViewportEnter={() => setFocus(works[3])}
                        viewport={{ amount: "some", margin: "-50% 0px -50% 0px" }}
                        onMouseEnter={() => set("View")}
                        onMouseLeave={() => set("default")}
                    />
                </a>
            </div>

            <div className="lg:hidden flex flex-row overflow-x-auto flex-shrink-0 h-[70vh] gap-[40vw]">
                <motion.div
                    className="h-[70vh] flex items-end pb-5"
                    onViewportEnter={() => setFocus(works[0])}
                    viewport={{ amount: "some", margin: "-50% 0px -50% 0px" }}
                >
                    <Link key="1" to="/Works/1">
                        <motion.img
                            initial={{ opacity: 0, filter: "blur(3px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            src="/sms.gif"
                            alt="Strudel Music Sequencer"
                            className="w-[70vw]"
                            onMouseEnter={() => set("View")}
                            onMouseLeave={() => set("default")}
                        />
                    </Link>
                </motion.div>
                
                <motion.div
                    className="h-[70vh] flex items-end pb-5"
                    onViewportEnter={() => setFocus(works[1])}
                    viewport={{ amount: "some", margin: "-50% 0px -50% 0px" }}
                >
                    <Link key="2" to="/Works/2">
                        <motion.img
                            src="/ms.gif"
                            alt="Menu Scanner"
                            className="w-[70vw]"
                            onMouseEnter={() => set("View")}
                            onMouseLeave={() => set("default")}
                        />
                    </Link>
                </motion.div>

                <motion.div
                    className="h-[70vh] flex items-end pb-5"
                    onViewportEnter={() => setFocus(works[2])}
                    viewport={{ amount: "some", margin: "-50% 0px -50% 0px" }}
                >
                    <Link key="3" to="/Works/3">
                        <motion.img
                            src="/portfolio1.gif"
                            alt="Portfolio 1"
                            className="w-[70vw]"
                            onMouseEnter={() => set("View")}
                            onMouseLeave={() => set("default")}
                        />
                    </Link>
                </motion.div>

                <motion.div
                    className="h-[70vh] flex items-end"
                    onViewportEnter={() => setFocus(works[3])}
                    viewport={{ amount: "some", margin: "-50% 0px -50% 0px" }}
                >
                    <a
                        href="https://openprocessing.org/sketch/2655027"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.img
                            src="/flower.jpg"
                            alt="Polygon Flower"
                            className="w-[70vw]"
                            onMouseEnter={() => set("View")}
                            onMouseLeave={() => set("default")}
                        />
                    </a>
                </motion.div>
            </div>

            <motion.div
                className="fixed top-[5vh] left-[10vw] w-[80vw] lg:top-[15vh] lg:left-[60vw] lg:w-[35vw] flex flex-col"
                initial={{ opacity: 0, filter: "blur(3px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <div className="w-[80vw] lg:w-[35vw] h-[15vh] flex flex-row items-end justify-between">
                    <h1 className="text-[clamp(1rem,1.5vw,2rem)] font-light mb-1">WORKS</h1>
                    <a
                        className="flex items-end justify-center text-[clamp(0.8rem,1vw,1.5rem)] font-light mb-1"
                        href="https://github.com/kento9941"
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => set("hover")}
                        onMouseLeave={() => set("default")}
                    >
                        /kent9941
                    </a>
                </div>

                <div className="w-[80vw] lg:w-[35vw] h-[1px] bg-[#888888aa]" />

                <div className="mt-[5vh] lg:mt-[15vh]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={focus.id}
                            className="flex flex-col w-[80vw] lg:w-[35vw] whitespace-normal"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                            <p className="text-[clamp(1rem,1.2vw,1.5rem)] font-light tracking-widest mb-2">( {focus.id} )</p>
                            <h2 className="text-[clamp(1.2rem,2vw,2rem)] font-light">{focus.title}</h2>
                            <h3 className="text-clamp(clamp(1rem,1.2vw,1.5rem)] font-light">{focus.sub}</h3>
                            <p className="text-[clamp(1rem,1.2vw,1.5rem)] font-light mt-5">{focus.description}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </motion.main>
    )
}
