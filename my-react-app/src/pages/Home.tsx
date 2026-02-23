import { motion } from "framer-motion";
import { useState } from "react";
import { useCursorStore } from "../store/useCursorStore";
import ParallaxImage from "../components/parallax-image";
import { NavLink } from "react-router-dom";

export default function Home() {
    const set = useCursorStore((state) => state.setCursorType);
    return (
        <motion.main
            className="overflow-x-hidden"
            exit={{ opacity: 0, filter: "blur(3px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* about */}
            <motion.section
                className="relative w-screen min-h-screen"
                initial={{ opacity: 0, filter: "blur(3px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="absolute top-[15vh] left-[15vw] w-[35vw] h-[70vh] flex flex-col items-start justify-start font-light leading-none">
                    <div className="text-[5rem] font-thin">
                        <h1>KENTO</h1>
                        <h1>KAWAZOE</h1>
                    </div>
                    <div className="text-[1rem] pl-2">
                        Web Developer / Designer
                    </div>
                    <div className="mt-auto pl-2 flex flex-col items-start justify-start text-[1rem] leading-tight">
                        <p>For business inquiries, email me at</p>
                        <Email />
                    </div>
                </div>

                <div className="absolute top-[30vh] left-[60vw] w-[35vw] h-[0.5px] bg-white"/>

                <div className="absolute top-[15vh] left-[60vw] h-[70vh] flex flex-col items-start justify-start">
                    <div className="h-[15vh] flex items-end text-[3rem] font-thin">
                        <h1>ABOUT ME</h1>
                    </div>

                    <div className="w-[35vw] flex flex-col pt-[7.5vh] text-[0.7rem] tracking-[0.1rem] font-light gap-5 leading-[1.2rem]">
                        <div>
                            <p>I am currently in my final year of a Bachelor of Information Technology at Adelaide University.</p>
                            <p>My main focus is web development, and I have worked on several full-stack personal projects. I enjoy exploring new technologies and experimenting with creative ideas.</p>
                            <p>Outside of programming, I create origami art, play basketball, tennis, and chess.</p>
                        </div>

                        <div>
                            <p>はじめまして、Kentoと申します。</p>
                            <p>オーストラリアのアデレード大学でITを専攻しているWebエンジニアです。</p>
                            <p>主にWebアプリケーション開発やWebサイト制作に力を入れており、新しい技術や表現にも積極的に挑戦しています。</p>
                            <p>プログラミング以外では、折り紙、バスケ、テニス、チェスが好きです。</p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* motivation */}
            <motion.section
                className="relative w-screen min-h-screen"
                initial={{ opacity: 0, filter: "blur(3px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <ParallaxImage
                    src="/me.jpeg"
                    classname="absolute top-[30vh] left-[60vw] w-[35vw] h-[45vh] flex items-center justify-center overflow-hidden"
                    hover="default"
                />

                <div className="absolute top-[30vh] left-[15vw] w-[35vw] h-[0.5px] bg-white"/>

                <div className="absolute top-[17vh] left-[15vw] h-[70vh] flex flex-col items-start justify-start">
                    <div className="h-[15vh] flex items-end text-[3rem] font-thin">
                        <h1>MOTIVATION</h1>
                    </div>

                    <div className="w-[35vw] flex flex-col pt-[7.5vh] text-[0.7rem] tracking-[0.1rem] font-light gap-5 leading-[1.2rem]">
                        <div>
                            <p>I'm a full-stack developer with a growing focus on frontend development.</p>
                            <p>While I'm still exploring where I want my career to evolve, I've discovered that building user interfaces is what excites me the most.</p>
                            <p>That's why I'm currently dedicating my energy to improving both my technical execution and design sensitivity on the frontend.</p>
                        </div>

                        <div>
                            <p>主にフルスタック開発をしていますが、フロントエンドにより強い関心があります。</p>
                            <p>キャリアの方向性は模索中ですが、これまでの個人開発やチーム開発を通して、ユーザー体験に関わる領域に最も魅力を感じるようになりました。</p>
                            <p>現在は、技術的な実装力とデザインへの理解の双方を高めることを目標に取り組んでいます。</p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* philosophy */}
            <motion.section
                className="relative w-screen min-h-[90vh]"
                initial={{ opacity: 0, filter: "blur(3px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <ParallaxImage
                    src="/architecture.png"
                    classname="absolute top-[30vh] left-[20vw] w-[24vw] h-[28vh] flex items-center justify-center overflow-hidden"
                    hover="default"
                />

                <div className="absolute top-[60vh] left-[20vw] w-[20vw] flex items-center justify-center text-[0.7rem] flex flex-col p-5">
                    <p className="italic">"God is in the details"</p>
                    <p className="pt-[0.5rem] pl-[4rem]">- Mies van der Rohe</p>
                </div>

                <div className="absolute top-[30vh] left-[60vw] w-[35vw] h-[0.5px] bg-white"/>

                <div className="absolute top-[15vh] left-[60vw] h-[70vh] flex flex-col items-start justify-start">
                    <div className="h-[15vh] flex items-end text-[3rem] font-thin">
                        <h1>PHILOSOPHY</h1>
                    </div>

                    <div className="w-[35vw] flex flex-col pt-[7.5vh] text-[0.7rem] tracking-[0.1rem] font-light gap-5 leading-[1.2rem]">
                        <div>
                            <p>For me, strong products are built to be robust, reliable, and thoughtful.</p>
                            <p>Aligned layouts, consistent typography, and carefully considered spacing.</p>
                            <p>I focus on creating interfaces where clarity, balance, and usability come first.</p>
                        </div>

                        <div>
                            <p>私にとって優れたプロダクトとは堅牢で信頼性があり、細部まで丁寧に設計されたものです。</p>
                            <p>整ったレイアウトやタイポグラフィ、余白などを大切にし、使いやすさを最優先にしたインターフェースを作ることを心がけています。</p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* skills */}
            <motion.section
                className="relative w-screen min-h-screen"
                initial={{ opacity: 0, filter: "blur(3px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="absolute top-[25vh] left-[15vw] w-[80vw] h-[0.5px] bg-white"/>

                <div className="absolute top-[10vh] left-[15vw] w-[80vw] flex flex-col items-start justify-start gap-10">
                    <div className="h-[15vh] flex items-end text-[3rem] font-thin overflow-hidden">
                        <h1>SKILLS</h1>
                    </div>

                    <div className="w-[75vw] flex flex-row items-start justify-between">
                        <div className="flex flex-col w-[25vw] gap-3  font-light">
                            <h2 className="text-[1.5rem]">FRONTEND</h2>
                            <div className="w-full text-[0.8rem] flex flex-wrap gap-2">
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-white rounded-full">TypeScript</p>
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-white rounded-full">React.js</p>
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-white rounded-full">Next.js</p>
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-white rounded-full">Tailwind CSS</p>
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-white rounded-full">Motion</p>
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-white rounded-full">React Three Fiber</p>
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-white rounded-full">Zustand</p>
                            </div>
                        </div>
                        <div className="flex flex-col w-[20vw] gap-3">
                            <h2 className="text-[1.5rem]">BACKEND</h2>
                            <div className="w-full text-[0.8rem] flex flex-wrap gap-2">
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-white rounded-full">TypeScript</p>
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-white rounded-full">Node.js</p>
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-white rounded-full">Python</p>
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-white rounded-full">Java</p>
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-white rounded-full">FastAPI</p>
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-white rounded-full">SQL</p>
                            </div>
                        </div>
                        <div className="flex flex-col w-[20vw] gap-3">
                            <h2 className="text-[1.5rem]">TOOLS</h2>
                            <div className="w-full text-[0.8rem] flex flex-wrap gap-2">
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-white rounded-full">Windows</p>
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-white rounded-full">VSCode</p>
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-white rounded-full">Cursor</p>
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-white rounded-full">Git</p>
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-white rounded-full">Figma</p>
                                <p className="w-fit h-fit p-1 px-5 m-1 border border-white rounded-full">Blender</p>
                            </div>
                        </div>
                    </div>

                    <div className="ml-auto flex flex-col items-end justify-center gap-4">
                        <NavLink
                            to="/Works"
                            className="flex flex-row items-center justify-center gap-2 text-[1rem] font-light"
                            onMouseEnter={() => set("hover")}
                            onMouseLeave={() => set("default")}
                        >
                            <span>WORKS</span>
                            <span>
                                <svg width="1.5rem" height="1rem" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.204656" y1="50.2071" x2="100.205" y2="50.2071" stroke="white" strokeWidth="3"/>
                                    <line x1="65.4073" y1="15.2028" x2="100.763" y2="50.5581" stroke="white" strokeWidth="3"/>
                                    <line x1="65.4073" y1="85.2064" x2="100.763" y2="49.851" stroke="white" strokeWidth="3"/>
                                </svg>
                            </span>
                        </NavLink>
                        <NavLink
                            to="/Gallery"
                            className="flex flex-row items-center justify-center gap-2 text-[1rem] font-light"
                            onMouseEnter={() => set("hover")}
                            onMouseLeave={() => set("default")}
                        >
                            <span>GALLERY</span>
                            <span>
                                <svg width="1.5rem" height="1rem" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.204656" y1="50.2071" x2="100.205" y2="50.2071" stroke="white" strokeWidth="3"/>
                                    <line x1="65.4073" y1="15.2028" x2="100.763" y2="50.5581" stroke="white" strokeWidth="3"/>
                                    <line x1="65.4073" y1="85.2064" x2="100.763" y2="49.851" stroke="white" strokeWidth="3"/>
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
