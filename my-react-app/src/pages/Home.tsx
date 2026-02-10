import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
    const { scrollY } = useScroll();
    const [home, setHome] = useState(true);
    const [about, setAbout] = useState(false);

    useEffect(() => {
        return scrollY.on("change", (latest) => {
            if (latest > window.innerHeight * 0.2) {
                setHome(false);
                setAbout(true);
            }
            if (latest < window.innerHeight * 0.25) {
                setHome(true);
                setAbout(false);
            }
        });
    }, [scrollY]);
    return (
        <motion.main exit={{ opacity: 0, filter: "blur(5px)" }} transition={{ duration: 0.8, ease: "easeOut" }}>
            {/* landing section */}
            <section className="relative w-screen h-screen">
                <AnimatePresence>
                {home && (
                    <div>
                        {/* title */}
                        <motion.div
                            initial={{ opacity: 0, filter: "blur(10px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, filter: "blur(10px)" }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="absolute top-[60vh] left-[15vw] flex flex-col items-center justify-center w-[80vw] h-[25vh] leading-none">
                                <div className="flex flex-row items-end justify-between w-full h-[15vh] p-2">
                                    <h1 className="text-[3rem] font-thin">PORTFOLIO</h1>
                                    <h1 className="text-[1rem] font-light">KENTO KAWAZOE</h1>
                                </div>
                                <div className="w-full h-[10vh] p-2 pl-4">
                                    <h2 className="font-[1rem] font-light">Web Design, Frontend, Backend</h2>
                                </div>
                            </div>
                        </motion.div>

                        {/* texts */}
                        <div className="absolute left-[75vw] h-full flex flex-row text-[0.7rem] tracking-[0.1rem] font-light gap-5">
                            <motion.div
                                    className="w-[0.5px] h-[150vh] bg-[#f8f4e9]"
                                    style={{ transformOrigin: "50% 0%" }}
                                    initial={{ scaleY: 0 }}
                                    animate={{ scaleY: 1 }}
                                    exit={{ scaleY: 0, transition: { duration: 1 } }}
                                    transition={{ duration: 1.6, delay: 0.4, ease: "easeInOut" }}
                            />
                            <div className="relative pt-[20vh] flex flex-col overflow-hidden gap-1">
                                <motion.p
                                    initial={{ opacity: 0, y: "100%" }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: "100%", transition: {duration: 1, delay: 0.6 } }}
                                    transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                                >
                                    A Japanese student developer
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: "100%" }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: "100%", transition: {duration: 1, delay: 0.5 } }}
                                    transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
                                >
                                    and designer based in
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: "100%" }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: "100%", transition: {duration: 1, delay: 0.4 } }}
                                    transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                                >
                                    Adelaide, Australia.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: "100%" }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: "100%", transition: {duration: 1, delay: 0.3 } }}
                                    transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
                                >
                                    A full stack engineer focused
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: "100%" }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: "100%", transition: {duration: 1, delay: 0.2 } }}
                                    transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
                                >
                                    on frontend experiences and
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: "100%" }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: "100%", transition: {duration: 1, delay: 0.1 } }}
                                    transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
                                >
                                    creative innovation.
                                </motion.p>
                                <motion.p
                                    className="absolute bottom-[2vh] text-[1rem]"
                                    initial={{ opacity: 0, y: "100%" }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: "100%", transition: {duration: 1, delay: 0 } }}
                                    transition={{ duration: 1, delay: 2, ease: "easeOut" }}
                                >
                                    About Me
                                </motion.p>
                            </div>
                        </div>

                        {/* lines */}
                        <motion.div
                            className="absolute top-[75vh] left-[0vw] w-[100vw] h-[0.5px] bg-white"
                            style={{ transformOrigin: "100% 50%" }}
                            initial={{ x: "-100vw", scaleX: 1.5 }}
                            animate={{ x: 0, scaleX: 1 }}
                            exit={{ x: "-100vw" }}
                            transition={{
                                x: { duration: 0.8, ease: "easeOut" },
                                scaleX: { duration: 1.6, delay: 0.4, ease: "easeInOut" },
                            }}
                        />
                        <motion.div
                            className="absolute top-[77vh] left-[75vw] w-[20vw] h-[4px] bg-[#f8f4e9]"
                            style={{ transformOrigin: "0% 50%" }}
                            initial={{ x: "100vw", scaleX: 1.5 }}
                            animate={{ x: 0, scaleX: 1 }}
                            exit={{ x: "100vw", scaleX: 1.5 }}
                            transition={{
                                x: { duration: 0.8, ease: "easeOut" },
                                scaleX: { duration: 1.6, delay: 0.6, ease: "easeInOut" },
                            }}
                        />

                        {/* <div className="relative w-full h-full pt-[30vh] flex flex-row items-center justify-between">
                            <div className="relative w-[30vw] h-full">
                            {show && (
                                <div>
                                    
                                    <motion.div
                                        className="absolute top-[10vh] right-[10vw] w-auto h-[30vh] overflow-hidden"
                                        animate={{
                                            y: [0, -5, 0],
                                        }}
                                        transition={{
                                            y: {
                                                duration: 5.3,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            },
                                        }}
                                    >
                                        <motion.img
                                            src="/mother-and-child.jpeg"
                                            alt="Origami"
                                            className="h-full object-contain"
                                            initial={{ opacity: 0, scaleX: 0, filter: "grayscale(60%) sepia(40%)" }}
                                            animate={{ opacity: 1, scaleX: 1, filter: "grayscale(60%) sepia(40%)" }}
                                            whileHover={{ filter: "grayscale(0%) sepia(0%)" }}
                                            transition={{ duration: 0.5, delay: 1 }}
                                            onMouseEnter={() => set("Origami")}
                                            onMouseLeave={() => set("default")}
                                        />
                                    </motion.div>
                                </div>
                            )}
                            </div>
                        </div> */}
                    </div>
                )}
                </AnimatePresence>
            </section>
            <section className="h-screen"></section>
        </motion.main>
    )
}
