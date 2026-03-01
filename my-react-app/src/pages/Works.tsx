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
            className="relative w-screen h-full overflow-x-auto landscape:w-full landscape:min-h-screen flex justify-start items-center pt-[15vh] pl-[15vw] pr-[15vw] landscape:justify-start landscape:items-start landscape:pt-[40vh] landscape:pb-[30vh] landscape:pl-[15vw]"
            exit={{ opacity: 0, filter: "blur(3px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="hidden landscape:flex landscape:flex-col landscape:w-[40vw] landscape:h-auto landscape:gap-[40vh]">
                <motion.div
                    initial={{ opacity: 0, filter: "blur(3px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Link
                        key="1"
                        to="/Works/1"
                        className="relative w-[40vw] aspect-[2/1] flex items-center justify-center"
                        onMouseEnter={() => set("View")}
                        onMouseLeave={() => set("default")}
                    >
                        <motion.img
                            src="black_bg.webp"
                            className="absolute inset-0 w-full h-full object-cover"
                            onViewportEnter={() => setFocus(works[0])}
                            viewport={{ amount: "some", margin: "-50% 0px -50% 0px" }}
                        />
                        <video
                            src="/sms_optimized.mp4"
                            className="w-[35vw] z-10"
                            preload="auto"
                            autoPlay
                            muted
                            loop
                            playsInline
                            disablePictureInPicture
                            controls={false}
                        />
                    </Link>
                </motion.div>
                
                <Link
                    key="2"
                    to="/Works/2"
                    className="relative w-[40vw] aspect-[2/1] flex items-center justify-center"
                    onMouseEnter={() => set("View")}
                    onMouseLeave={() => set("default")}
                >
                    <motion.img
                        src="beige_bg.webp"
                        className="absolute inset-0 w-full h-full object-cover"
                        onViewportEnter={() => setFocus(works[1])}
                        viewport={{ amount: "some", margin: "-50% 0px -50% 0px" }}
                    />
                    <video
                        src="/ms_optimized.mp4"
                        className="w-[35vw] z-10"
                        preload="auto"
                        autoPlay
                        muted
                        loop
                        playsInline
                        disablePictureInPicture
                        controls={false}
                    />
                </Link>

                <Link
                    key="3"
                    to="/Works/3"
                    className="relative w-[40vw] aspect-[2/1] flex items-center justify-center"
                    onMouseEnter={() => set("View")}
                    onMouseLeave={() => set("default")}
                >
                    <motion.img
                        src="plant_bg.webp"
                        className="absolute inset-0 w-full h-full object-cover"
                        onViewportEnter={() => setFocus(works[2])}
                        viewport={{ amount: "some", margin: "-50% 0px -50% 0px" }}
                    />
                    <video
                        src="/portfolio1_optimized.mp4"
                        className="w-[35vw] z-10"
                        preload="auto"
                        autoPlay
                        muted
                        loop
                        playsInline
                        disablePictureInPicture
                        controls={false}
                    />
                </Link>

                <motion.a
                    href="https://openprocessing.org/sketch/2655027"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-[40vw] aspect-[2/1] flex items-center justify-center"
                    onMouseEnter={() => set("View")}
                    onMouseLeave={() => set("default")}
                >
                    <motion.img
                        src="flower_bg.webp"
                        className="absolute inset-0 w-full h-full object-cover"
                        onViewportEnter={() => setFocus(works[3])}
                        viewport={{ amount: "some", margin: "-50% 0px -50% 0px" }}
                    />
                    <img
                        loading="lazy"
                        src="/flower.webp"
                        alt="Polygon Flower"
                        className="w-[32vw] z-10"
                    />
                </motion.a>
            </div>

            <div className="landscape:hidden flex flex-row overflow-x-auto flex-shrink-0 h-[70vh] gap-[40vw]">
                <motion.div
                    className="h-[70vh] flex items-end"
                    onViewportEnter={() => setFocus(works[0])}
                    viewport={{ amount: "some", margin: "-50% 0px -50% 0px" }}
                    initial={{ opacity: 0, filter: "blur(3px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <Link key="1" to="/Works/1" className="relative w-[70vw] aspect-[2/1] flex items-center justify-center">
                        <img
                            src="black_bg.webp"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <video
                            src="/sms_optimized.mp4"
                            className="w-[35vw] z-10"
                            preload="auto"
                            autoPlay
                            muted
                            loop
                            playsInline
                            disablePictureInPicture
                            controls={false}
                        />
                    </Link>
                </motion.div>
                
                <motion.div
                    className="h-[70vh] flex items-end"
                    onViewportEnter={() => setFocus(works[1])}
                    viewport={{ amount: "some", margin: "-50% 0px -50% 0px" }}
                >
                    <Link key="2" to="/Works/2" className="relative w-[70vw] aspect-[2/1] flex items-center justify-center">
                        <img
                            src="beige_bg.webp"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <video
                            src="/ms_optimized.mp4"
                            className="w-[35vw] z-10"
                            preload="auto"
                            autoPlay
                            muted
                            loop
                            playsInline
                            disablePictureInPicture
                            controls={false}
                        />
                    </Link>
                </motion.div>

                <motion.div
                    className="h-[70vh] flex items-end"
                    onViewportEnter={() => setFocus(works[2])}
                    viewport={{ amount: "some", margin: "-50% 0px -50% 0px" }}
                >
                    <Link key="3" to="/Works/3" className="relative w-[70vw] aspect-[2/1] flex items-center justify-center">
                        <img
                            src="plant_bg.webp"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <video
                            src="/portfolio1_optimized.mp4"
                            className="w-[35vw] z-10"
                            preload="auto"
                            autoPlay
                            muted
                            loop
                            playsInline
                            disablePictureInPicture
                            controls={false}
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
                        className="relative w-[70vw] aspect-[2/1] flex items-center justify-center"
                    >
                        <img
                            src="flower_bg.webp"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <img
                            loading="lazy"
                            src="/flower.webp"
                            alt="Polygon Flower"
                            className="w-[55vw] z-10"
                        />
                    </a>
                </motion.div>
            </div>

            <motion.div
                className="fixed top-[5vh] left-[10vw] w-[80vw] landscape:top-[15vh] landscape:left-[60vw] landscape:w-[35vw] flex flex-col"
                initial={{ opacity: 0, filter: "blur(3px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <div className="w-[80vw] landscape:w-[35vw] h-[15vh] flex flex-row items-end justify-between">
                    <h1 className="text-[clamp(1rem,1.5vw,2rem)] font-light mb-1">WORKS</h1>
                    <a
                        className="flex items-end justify-center text-[clamp(0.8rem,1vw,1.5rem)] font-light mb-1"
                        href="https://github.com/kento9941"
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => set("hover")}
                        onMouseLeave={() => set("default")}
                    >
                        /kento9941
                    </a>
                </div>

                <div className="w-[80vw] landscape:w-[35vw] h-[1px] bg-[#888888aa]" />

                <div className="mt-[5vh] landscape:mt-[15vh]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={focus.id}
                            className="flex flex-col w-[80vw] landscape:w-[35vw] whitespace-normal"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                            <p className="text-[clamp(0.7rem,1vw,1.2rem)] lg:text-[clamp(1rem,1.2vw,1.5rem)] font-light tracking-widest mb-2">( {focus.id} )</p>
                            <h2 className="text-[clamp(1rem,1.5vw,2rem)] lg:text-[clamp(1.2rem,2vw,2rem)] font-light">{focus.title}</h2>
                            <h3 className="text-[clamp(0.7rem,1vw,1.2rem)] lg:text-[clamp(1rem,1.2vw,1.5rem)] font-light">{focus.sub}</h3>
                            <p className="text-[clamp(0.7rem,1vw,1.2rem)] lg:text-[clamp(1rem,1.2vw,1.5rem)] font-light mt-5">{focus.description}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </motion.main>
    )
}
