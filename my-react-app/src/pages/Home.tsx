"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Roles from "../components/roles";

export default function Home() {
    const [show, setShow] = useState<boolean>(false);
    return (
        <main className="relative w-screen h-screen">
            {/* title */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <div className="flex flex-col justify-center items-center text-white font-thin select-none">
                    <h1 className="text-[3rem] tracking-widest">
                        Kento Kawazoe
                    </h1>
                    <h2 className="text-[1rem] tracking-[0.7rem]">
                        Portfolio
                    </h2>
                </div>
            </div>

            <motion.div className="absolute flex flex-col items-center justify-center top-0 right-15 w-[18vw] h-full">
                <div className="h-[33%] flex items-end justify-center">
                {/* monologue 1 */}
                {show && (
                    <motion.div
                        className="ml-3 text-[0.7rem] tracking-[0.1rem] pointer-events-none select-none"
                        initial={{
                            opacity: 0,
                            scale: 1.2,
                            filter: "blur(30px)",
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            filter: "blur(0px)",
                        }}
                        transition={{
                            duration: 1,
                            ease: "anticipate"
                        }}
                    >
                        <p>A Japanese student at Adelaide University and an aspiring developer, designer, and artist.</p>
                    </motion.div>
                )}
                </div>

                {/* roles */}
                <Roles show={show} setShow={setShow} />

                <div className="h-[33%] flex items-start justify-center">
                {/* monologue 2 */}
                {show && (
                    <motion.div
                        className="ml-3 text-[0.7rem] tracking-[0.1rem] pointer-events-none select-none"
                        initial={{
                            opacity: 0,
                            scale: 1.2,
                            filter: "blur(30px)",
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            filter: "blur(0px)",
                        }}
                        transition={{
                            duration: 1,
                            ease: "anticipate"
                        }}
                    >
                        <p>While I personally enjoy frontend development, I have hands-on experience across the full-stack. Currently, I am deep-diving into WebGL, Three.js, and 3D modeling to bring digital expression to the next level.</p>
                    </motion.div>
                )}
                </div>
            </motion.div>
        </main>
    )
}
