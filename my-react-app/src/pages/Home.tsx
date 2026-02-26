import { motion } from "framer-motion";
import { useState } from "react";
import { useCursorStore } from "../store/useCursorStore";
import ParallaxImage from "../components/parallax-image";
import { NavLink } from "react-router-dom";

export default function Home() {
    const set = useCursorStore((state) => state.setCursorType);
    return (
        <motion.main
            className="overflow-x-hidden pb-[10vh]"
            exit={{ opacity: 0, filter: "blur(1px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* about */}
            <motion.section
                className="relative w-screen pt-[15vh] pl-[10vw] flex flex-col lg:pl-[15vw] lg:flex-row lg:items-center lg:gap-[10vw]"
                initial={{ opacity: 0, filter: "blur(1px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
                <div className="w-[80vw] lg:w-[35vw] lg:h-[clamp(20rem,60vh,40rem)] flex flex-col items-start justify-between font-light leading-none">
                    <div>
                        <div className="text-[clamp(3rem,6.5vw,7rem)] md:text-[clamp(4rem,7vw,8rem)] font-light lg:font-thin">
                            <h1>KENTO</h1>
                            <h1>KAWAZOE</h1>
                        </div>
                        <div className="text-zinc-300 text-[clamp(0.8rem,1.2vw,1.5rem)] pl-1 lg:pl-2">
                            Web Developer / Designer
                        </div>
                    </div>
                    <div className="pl-1 mt-[10vh] lg:pl-2 flex flex-col items-start justify-start text-[clamp(0.8rem,1.2vw,1.5rem)] leading-tight">
                        <p>For business inquiries, email me at</p>
                        <Email />
                    </div>
                </div>

                <div className="lg:h-[clamp(20rem,60vh,40rem)] flex flex-col items-start justify-end">
                    <div className="h-[15vh] flex items-end text-[clamp(1rem,1.5vw,2rem)] font-light mb-1">
                        <h1>ABOUT ME</h1>
                    </div>

                    <div className="w-[80vw] lg:w-[35vw] h-[1px] bg-[#888888aa]"/>

                    <div className="w-[80vw] lg:w-[35vw] flex flex-col pt-[5vh] lg:pt-[clamp(1rem,7.5vh,3rem)] text-[clamp(0.7rem,1vw,1.2rem)] tracking-[0.1rem] font-light gap-1 leading-[clamp(1.1rem,3vh,1.4rem)]">
                        <p>I am currently in my final year of a Bachelor of Information Technology at Adelaide University.</p>
                        <p>My main focus is web development, and I have worked on several full-stack personal projects. I enjoy exploring new technologies and experimenting with creative ideas.</p>
                        <p>Outside of programming, I create origami art, play basketball, tennis, and chess.</p>
                    </div>
                </div>
            </motion.section>

            {/* motivation */}
            <motion.section
                className="relative w-screen pt-[5vh] pl-[10vw] lg:pt-[clamp(5rem,15vh,10rem)] lg:pl-[15vw] flex flex-col lg:flex-row lg:items-center lg:gap-[10vw]"
                initial={{ opacity: 0, filter: "blur(1px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <div className="lg:h-[clamp(20rem,60vh,40rem)] flex flex-col items-start justify-start">
                    <div className="h-[15vh] flex items-end text-[clamp(1rem,1.5vw,2rem)] font-light mb-1">
                        <h1>MOTIVATION</h1>
                    </div>

                    <div className="w-[80vw] lg:w-[35vw] h-[1px] bg-[#888888aa]"/>

                    <div className="w-[80vw] lg:w-[35vw] flex flex-col pt-[5vh] lg:pt-[clamp(1rem,7.5vh,3rem)] text-[clamp(0.7rem,1vw,1.2rem)] tracking-[0.1rem] font-light gap-1 leading-[clamp(1.1rem,3vh,1.4rem)]">
                        <p>I'm a full-stack developer with a growing focus on frontend development.</p>
                        <p>While I'm still exploring where I want my career to evolve, I've discovered that building user interfaces is what excites me the most.</p>
                        <p>That's why I'm currently dedicating my energy to improving both my technical execution and design sensitivity on the frontend.</p>
                    </div>
                </div>

                <ParallaxImage
                    src="/me.webp"
                    classname="mt-[5vh] w-[80vw] aspect-[8/5] lg:w-[35vw] lg:aspect-[8/5] flex items-center justify-center overflow-hidden"
                    hover="default"
                />
            </motion.section>

            {/* skills */}
            <motion.section
                className="relative w-screen pt-[5vh] pl-[10vw] lg:pt-[clamp(2rem,5vh,5rem)] lg:pl-[15vw] flex flex-col"
                initial={{ opacity: 0, filter: "blur(1px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >

                <div className="w-[80vw] lg:w-[75vw] flex flex-col items-start justify-start">
                    <div className="h-[15vh] flex items-end text-[clamp(1rem,1.5vw,2rem)] font-light mb-1">
                        <h1>SKILLS</h1>
                    </div>

                    <div className="w-[80vw] lg:w-[75vw] h-[1px] bg-[#888888aa]"/>

                    <div className="mt-[5vh] w-[80vw] lg:w-[75vw] flex flex-col items-start justify-start gap-10 lg:flex-row lg:items-start lg:justify-between">
                        <div className="flex flex-col w-[80vw] lg:w-[25vw] gap-3 font-light">
                            <h2 className="text-[clamp(1rem,1.5vw,2rem)]">FRONTEND</h2>
                            <div className="w-full text-[clamp(0.8rem,1.2vw,1rem)] flex flex-wrap gap-2">
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-[#888888aa] rounded-full">TypeScript</p>
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-[#888888aa] rounded-full">React.js</p>
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-[#888888aa] rounded-full">Next.js</p>
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-[#888888aa] rounded-full">Tailwind CSS</p>
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-[#888888aa] rounded-full">Motion</p>
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-[#888888aa] rounded-full">React Three Fiber</p>
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-[#888888aa] rounded-full">Zustand</p>
                            </div>
                        </div>
                        <div className="flex flex-col w-[80vw] lg:w-[20vw] gap-3 font-light">
                            <h2 className="text-[clamp(1rem,1.5vw,2rem)]">BACKEND</h2>
                            <div className="w-full text-[clamp(0.8rem,1.2vw,1rem)] flex flex-wrap gap-2">
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-[#888888aa] rounded-full">TypeScript</p>
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-[#888888aa] rounded-full">Node.js</p>
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-[#888888aa] rounded-full">Python</p>
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-[#888888aa] rounded-full">Java</p>
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-[#888888aa] rounded-full">FastAPI</p>
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-[#888888aa] rounded-full">SQL</p>
                            </div>
                        </div>
                        <div className="flex flex-col w-[80vw] lg:w-[20vw] gap-3 font-light">
                            <h2 className="text-[clamp(1rem,1.5vw,2rem)]">TOOLS</h2>
                            <div className="w-full text-[clamp(0.8rem,1.2vw,1rem)] flex flex-wrap gap-2">
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-[#888888aa] rounded-full">Windows</p>
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-[#888888aa] rounded-full">VSCode</p>
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-[#888888aa] rounded-full">Cursor</p>
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-[#888888aa] rounded-full">Git</p>
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-[#888888aa] rounded-full">Figma</p>
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-[#888888aa] rounded-full">Blender</p>
                            </div>
                        </div>
                    </div>

                    <div className="ml-auto flex flex-col items-end justify-center gap-4 mt-[15vh]">
                        <NavLink
                            to="/Works"
                            className="flex flex-row items-center justify-center gap-2 text-[clamp(1rem,1.5vw,2rem)] font-light"
                            onMouseEnter={() => set("hover")}
                            onMouseLeave={() => set("default")}
                        >
                            <span>WORKS</span>
                            <span>
                                <svg width="clamp(1rem,1.5vw,2rem)" height="clamp(1rem,1.5vw,2rem)" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.204656" y1="50.2071" x2="100.205" y2="50.2071" stroke="white" strokeWidth="4"/>
                                    <line x1="65.4073" y1="15.2028" x2="100.763" y2="50.5581" stroke="white" strokeWidth="4"/>
                                    <line x1="65.4073" y1="85.2064" x2="100.763" y2="49.851" stroke="white" strokeWidth="4"/>
                                </svg>
                            </span>
                        </NavLink>
                        <NavLink
                            to="/Gallery"
                            className="flex flex-row items-center justify-center gap-2 text-[clamp(1rem,1.5vw,2rem)] font-light"
                            onMouseEnter={() => set("hover")}
                            onMouseLeave={() => set("default")}
                        >
                            <span>GALLERY</span>
                            <span>
                                <svg width="clamp(1rem,1.5vw,2rem)" height="clamp(1rem,1.5vw,2rem)" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.204656" y1="50.2071" x2="100.205" y2="50.2071" stroke="white" strokeWidth="4"/>
                                    <line x1="65.4073" y1="15.2028" x2="100.763" y2="50.5581" stroke="white" strokeWidth="4"/>
                                    <line x1="65.4073" y1="85.2064" x2="100.763" y2="49.851" stroke="white" strokeWidth="4"/>
                                </svg>
                            </span>
                        </NavLink>
                    </div>
                </div>
            </motion.section>
        </motion.main>
    )
}

function Email() {
    const [copied, setCopied] = useState(false);
    const set = useCursorStore((state) => state.setCursorType);

    const copy = async () => {
        await navigator.clipboard.writeText("kento9941@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
    };

    return (
        <button onClick={copy} className="relative cursor-pointer font-light italic" onMouseEnter={() => set("hover")} onMouseLeave={() => set("default")}>
            kento9941@gmail.com
            {copied && (
                <span className="absolute bottom-[-1.5rem] right-0 text-[#ffffffaa] pointer-events-none">
                    Copied!
                </span>
            )}
        </button>
    )
}
