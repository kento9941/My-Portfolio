import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useCursorStore } from "../store/useCursorStore";

const works = [
    {id: 0, title: "STRUDEL MUSIC SEQUENCER", sub: "Personal Project / Full Stack", description: "A browser-based music sequencer built to explore the intersection of web technology and music production."},
    {id: 1, title: "MENU SCANNER", sub: "Personal Project / Full Stack", description: "Menu Scanner is a web application that extracts text from menu images, translates it into the user's language, and retrieves representative dish images."},
    {id: 2, title: "PORTFOLIO 1", sub: "Personal Project / Full Stack", description: "My first portfolio, built with WordPress, CSS, and JavaScript."},
    {id: 3, title: "POLYGON FLOWER", sub: "Digital Art", description: "Randomly colored and shaped flower built with p5.js"},
]

export default function Works() {
    const [focus, setFocus] = useState(works[0]);
    const set = useCursorStore((state) => state.setCursorType);

    return(
        <motion.main
            className="relative w-full min-h-screen flex flex-row justify-start items-start pt-[40vh] pb-[30vh] pl-[15vw]"
            exit={{ opacity: 0, filter: "blur(5px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="w-[40vw] flex flex-col gap-[40vh]">
                <motion.img
                    initial={{ opacity: 0, filter: "blur(5px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    src="/sms.gif"
                    alt="Strudel Music Sequencer"
                    className="w-[40vw]"
                    onViewportEnter={() => setFocus(works[0])}
                    viewport={{ amount: "some", margin: "-50% 0px -50% 0px" }}
                    onMouseEnter={() => set("View")}
                    onMouseLeave={() => set("default")}
                />
                <motion.img
                    src="/ms.gif"
                    alt="Menu Scanner"
                    className="w-[40vw]"
                    onViewportEnter={() => setFocus(works[1])}
                    viewport={{ amount: "some", margin: "-50% 0px -50% 0px" }}
                    onMouseEnter={() => set("View")}
                    onMouseLeave={() => set("default")}
                />
                <motion.img
                    src="/portfolio1.gif"
                    alt="Portfolio 1"
                    className="w-[40vw]"
                    onViewportEnter={() => setFocus(works[2])}
                    viewport={{ amount: "some", margin: "-50% 0px -50% 0px" }}
                    onMouseEnter={() => set("View")}
                    onMouseLeave={() => set("default")}
                />
                <a
                    href="https://openprocessing.org/sketch/2655027"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <motion.img
                        src="/flower.jpg"
                        alt="Polygon Flower"
                        className="w-[40vw]"
                        onViewportEnter={() => setFocus(works[3])}
                        viewport={{ amount: "some", margin: "-50% 0px -50% 0px" }}
                        onMouseEnter={() => set("View")}
                        onMouseLeave={() => set("default")}
                    />
                </a>
            </div>

            <motion.div
                className="fixed top-[15vh] left-[60vw] w-[35vw] flex flex-col"
                initial={{ opacity: 0, filter: "blur(5px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="h-[15vh] flex items-end text-[3rem] font-thin">
                    <h1>WORKS</h1>
                </div>

                <div className="mt-[20vh]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={focus.id}
                            className="flex flex-col w-[35vw] whitespace-normal"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <h2 className="text-[1.2rem] font-light">{focus.title}</h2>
                            <h3 className="text-[0.8rem] font-light">{focus.sub}</h3>
                            <p className="text-[0.8rem] font-light mt-5">{focus.description}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>

            <motion.div
                className="fixed top-[30vh] left-[60vw] w-[35vw] h-[0.5px] bg-white"
                initial={{ opacity: 0, filter: "blur(5px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            />
        </motion.main>
    )
}
