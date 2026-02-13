import { motion } from "framer-motion";

export default function Home() {

    return (
        <motion.main
            className="overflow-x-hidden"
            exit={{ opacity: 0, filter: "blur(5px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <section className="relative w-screen h-[120vh]">
                {/* title */}
                <motion.div
                    initial={{ opacity: 0, filter: "blur(5px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="absolute top-[60vh] left-[15vw] flex flex-col items-center justify-center w-[70vw] h-[25vh] leading-none">
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
                <div className="absolute left-[70vw] h-full flex flex-row text-[0.7rem] tracking-[0.1rem] font-light gap-5">
                    <div className="relative pt-[20vh] flex flex-col overflow-hidden gap-1">
                        <motion.p
                            initial={{ opacity: 0, y: "100%" }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
                        >
                            A Japanese student developer
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: "100%" }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
                        >
                            and designer based in
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: "100%" }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
                        >
                            Adelaide, Australia.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: "100%" }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.3, ease: "easeOut" }}
                        >
                            A full stack engineer focused
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: "100%" }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.4, ease: "easeOut" }}
                        >
                            on frontend experiences and
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: "100%" }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
                        >
                            creative innovation.
                        </motion.p>
                    </div>
                </div>

                {/* lines */}
                <motion.div
                    className="absolute top-[75vh] left-[0vw] w-[100vw] h-[0.5px] bg-white"
                    style={{ transformOrigin: "100% 50%" }}
                    initial={{ x: "-100vw" }}
                    animate={{ x: 0 }}
                    transition={{ x: { duration: 0.8, ease: "easeOut" } }}
                />
                <motion.div
                    className="absolute top-[77vh] left-[60vw] w-[35vw] h-[4px] bg-[#f8f4e9]"
                    style={{ transformOrigin: "0% 50%" }}
                    initial={{ x: "100vw", scaleX: 1.5 }}
                    animate={{ x: 0, scaleX: 1 }}
                    transition={{
                        x: { duration: 0.8, ease: "easeOut" },
                        scaleX: { duration: 1.6, delay: 0.6, ease: "easeInOut" },
                    }}
                />
            </section>
        </motion.main>
    )
}
