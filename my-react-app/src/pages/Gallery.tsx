import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react";
import { useCursorStore } from "../store/useCursorStore"

const item = {
    initial: { y: "1rem", opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.2, 1, 0.3, 1] as const
        }
    },
};

export default function Gallery() {
    const set = useCursorStore((state) => state.setCursorType);

    const containerRef = useRef(null);
    
    const { scrollYProgress } = useScroll();

    const yLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);  // faster
    const yRight = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);   // default

    return (
        <motion.main
            className="relative w-screen flex flex-col items-center pt-[5vh] pb-[10vh] lg:pt-[15vh] lg:pb-[25vh] lg:pl-[10vw]"
            initial={{ opacity: 0, filter: "blur(3px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(3px)", transition: { duration: 0.8, ease: "easeOut" } }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
            <div className="w-[80vw] lg:w-[70vw] h-[15vh] sm:landscape:h-[30vh] md:landscape:h-[30vh] lg:landscape:h-[15vh] flex flex-row items-end justify-between">
                <h1 className="text-[clamp(1rem,1.5vw,2rem)] font-light mb-1">Origami Gallery</h1>
                <a
                    className="flex items-end justify-center text-[clamp(0.8rem,1vw,1.5rem)] font-light mb-1"
                    href="https://www.instagram.com/kent_origami/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => set("hover")}
                    onMouseLeave={() => set("default")}
                >
                    @kent_origami
                </a>
            </div>

            <div className="w-[80vw] lg:w-[70vw] h-[1px] bg-[#888888aa]"/>

            <div
                ref={containerRef}
                className="hidden md:flex md:flex-row md:pt-[clamp(1rem,7.5vh,3rem)] md:gap-[10vw]"
            >
                <motion.div
                    style={{ y: yLeft }}
                    className="w-[30vw] flex flex-col gap-10"
                >
                    <Origami url="girl_and_dog.webp" title="Girl and Dog" designer="Kento Kawazoe" folder="Kento Kawazoe" load="eager" />
                    <Origami url="shape_of_love.webp" title="Shape of Love" designer="Kento Kawazoe" folder="Kento Kawazoe" load={undefined} />
                    <Origami url="mother_and_child.webp" title="Mother and Child" designer="Kento Kawazoe" folder="Kento Kawazoe" load="eager" />
                    <Origami url="prayer.webp" title="Prayer" designer="Kento Kawazoe" folder="Kento Kawazoe" load="eager" />
                    <Origami url="snail.webp" title="Snail" designer="Kento Kawazoe" folder="Kento Kawazoe" load={undefined} />
                    <Origami url="dragon.webp" title="Dragon Head" designer="Kento Kawazoe" folder="Kento Kawazoe" load={undefined} />
                </motion.div>

                <motion.div
                    style={{ y: yRight }}
                    className="w-[30vw] flex flex-col gap-10"
                >
                    <Origami url="gecko.webp" title="Gecko and Fly on a Wall" designer="Herman van Goubergen" folder="Kento Kawazoe" load="lazy" />
                    <Origami url="locust.webp" title="Longheaded Locust" designer="Satoshi Kamiya" folder="Kento Kawazoe" load="lazy" />
                    <Origami url="dreaming_bear.webp" title="Dreaming Bear" designer="Giang Dinh" folder="Kento Kawazoe" load={undefined} />
                    <Origami url="samothrace.webp" title="Winged Victory of Samothrace" designer="Takashi Hojo" folder="Kento Kawazoe" load={undefined} />
                    <Origami url="gabriel.webp" title="Gabriel" designer="Takashi Hojo" folder="Kento Kawazoe" load="lazy" />
                </motion.div>
            </div>

            <div className="md:hidden w-[70vw] flex flex-col pt-[5vh] gap-10">
                <Origami url="girl_and_dog.webp" title="Girl and Dog" designer="Kento Kawazoe" folder="Kento Kawazoe" load="eager" />
                <Origami url="mother_and_child.webp" title="Mother and Child" designer="Kento Kawazoe" folder="Kento Kawazoe" load="eager" />
                <Origami url="prayer.webp" title="Prayer" designer="Kento Kawazoe" folder="Kento Kawazoe" load="eager" />
                <Origami url="snail.webp" title="Snail" designer="Kento Kawazoe" folder="Kento Kawazoe" load={undefined} />
                <Origami url="shape_of_love.webp" title="Shape of Love" designer="Kento Kawazoe" folder="Kento Kawazoe" load={undefined} />
                <Origami url="dragon.webp" title="Dragon Head" designer="Kento Kawazoe" folder="Kento Kawazoe" load={undefined} />
                <Origami url="dreaming_bear.webp" title="Dreaming Bear" designer="Giang Dinh" folder="Kento Kawazoe" load={undefined} />
                <Origami url="samothrace.webp" title="Winged Victory of Samothrace" designer="Takashi Hojo" folder="Kento Kawazoe" load={undefined} />
                <Origami url="gabriel.webp" title="Gabriel" designer="Takashi Hojo" folder="Kento Kawazoe" load={undefined} />
                <Origami url="gecko.webp" title="Gecko and Fly on a Wall" designer="Herman van Goubergen" folder="Kento Kawazoe" load={undefined} />
                <Origami url="locust.webp" title="Longheaded Locust" designer="Satoshi Kamiya" folder="Kento Kawazoe" load="lazy" />
            </div>

            <div className="cursive w-full h-auto overflow-hidden flex items-center justify-center mt-[clamp(3rem,10vh,5rem)] text-[clamp(1rem,1.5vw,2rem)] lg:-translate-x-[5vw] md:-translate-y-[25vh] md:text-[clamp(1.5rem,2vw,2.5rem)] md:font-thin">
                <motion.h1 
                    className="flex gap-[clamp(0.05rem,0.2vw,0.2rem)]"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false }}
                    transition={{ 
                        staggerChildren: 0.02,
                        delayChildren: 0.2,
                    }}
                >
                    <motion.span variants={item}>T</motion.span>
                    <motion.span variants={item}>h</motion.span>
                    <motion.span variants={item}>a</motion.span>
                    <motion.span variants={item}>n</motion.span>
                    <motion.span variants={item}>k</motion.span>
                    <motion.span className="w-[clamp(0.5rem,0.8vw,1rem)]" variants={item}> </motion.span>
                    <motion.span variants={item}>y</motion.span>
                    <motion.span variants={item}>o</motion.span>
                    <motion.span variants={item}>u</motion.span>
                    <motion.span className="w-[clamp(0.5rem,0.8vw,1rem)]" variants={item}> </motion.span>
                    <motion.span variants={item}>f</motion.span>
                    <motion.span variants={item}>o</motion.span>
                    <motion.span variants={item}>r</motion.span>
                    <motion.span className="w-[clamp(0.5rem,0.8vw,1rem)]" variants={item}> </motion.span>
                    <motion.span variants={item}>v</motion.span>
                    <motion.span variants={item}>i</motion.span>
                    <motion.span variants={item}>s</motion.span>
                    <motion.span variants={item}>i</motion.span>
                    <motion.span variants={item}>t</motion.span>
                    <motion.span variants={item}>i</motion.span>
                    <motion.span variants={item}>n</motion.span>
                    <motion.span variants={item}>g.</motion.span>
                </motion.h1>
            </div>
            <div className="cursive w-full h-auto overflow-hidden flex items-center justify-center mt-[clamp(1rem,1vh,2rem)] text-[clamp(0.6rem,0.8vw,1.2rem)] lg:-translate-x-[5vw] md:-translate-y-[25vh] md:text-[clamp(0.8rem,1vw,1.5rem)] md:font-thin">
                <motion.h1 
                    className="flex gap-[clamp(0.05rem,0.1vw,0.2rem)] ml-[clamp(3rem,10vw,10rem)]"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false }}
                    transition={{ 
                        staggerChildren: 0.02,
                        delayChildren: 0.35,
                    }}
                >
                    <motion.span variants={item}>C</motion.span>
                    <motion.span variants={item}>r</motion.span>
                    <motion.span variants={item}>e</motion.span>
                    <motion.span variants={item}>a</motion.span>
                    <motion.span variants={item}>t</motion.span>
                    <motion.span variants={item}>e</motion.span>
                    <motion.span variants={item}>d</motion.span>
                    <motion.span className="w-[clamp(0.3rem,0.4vw,0.8rem)]" variants={item}> </motion.span>
                    <motion.span variants={item}>b</motion.span>
                    <motion.span variants={item}>y</motion.span>
                    <motion.span className="w-[clamp(0.3rem,0.4vw,0.8rem)]" variants={item}> </motion.span>
                    <motion.span variants={item}>K</motion.span>
                    <motion.span variants={item}>e</motion.span>
                    <motion.span variants={item}>n</motion.span>
                    <motion.span variants={item}>t</motion.span>
                    <motion.span variants={item}>o</motion.span>
                    <motion.span className="w-[clamp(0.3rem,0.4vw,0.8rem)]" variants={item}> </motion.span>
                    <motion.span variants={item}>K</motion.span>
                    <motion.span variants={item}>a</motion.span>
                    <motion.span variants={item}>w</motion.span>
                    <motion.span variants={item}>a</motion.span>
                    <motion.span variants={item}>z</motion.span>
                    <motion.span variants={item}>o</motion.span>
                    <motion.span variants={item}>e</motion.span>
                </motion.h1>
            </div>
        </motion.main>
    )
}

type Props = {
    url: string,
    title: string,
    designer: string,
    folder: string,
    load: "eager" | "lazy" | undefined,
}

function Origami({ url, title, designer, folder, load }: Props) {
    return (
        <div className="w-full md:w-[30vw] flex flex-col items-start justify-start">
            <img src={url} alt={title} className="w-full object-contain opacity-[90%] will-change-[opacity] transform-gpu" loading={load} decoding="async" />
            <h2 className="mt-2 text-[clamp(1rem,1.2vw,1.5rem)] font-light">{title}</h2>
            <div className="flex flex-row items-start justify-start mt-1 text-[clamp(0.8rem,1vw,1.5rem)] font-light">
                <div className="flex flex-col items-start justify-start">
                    <p>Designer</p>
                    <p>Folder</p>
                </div>
                <div className="flex flex-col items-start justify-start">
                    <p>: {designer}</p>
                    <p>: {folder}</p>
                </div>
            </div>
        </div>
    )
}
