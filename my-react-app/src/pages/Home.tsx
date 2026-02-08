"use client";

import { motion } from "framer-motion";
import Roles from "../components/roles";

export default function Home() {
    return (
        <motion.main
            className="relative w-screen h-screen flex flex-row items-center justify-center"
            exit={{ opacity: 0, filter: "blur(5px)" }}
            transition={{ duration: 0.8 }}
        >
            {/* roles */}
            <div className="w-[35vw] flex items-center justify-end pr-10">
                <Roles/>
            </div>

            {/* title */}
            <div className="flex flex-col items-start justify-center text-[6rem] font-thin overflow-hidden pl-10 leading-none">
                <motion.h1
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    KENTO
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                >
                    KAWAZOE
                </motion.h1>
                <motion.p
                    className="text-[1rem] font-light mt-2 ml-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                >
                    A Japanese Student Developer Based In Adelaide, Australia
                </motion.p>
            </div>

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
        </motion.main>
    )
}
