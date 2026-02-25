import { motion } from "framer-motion"
import { useCursorStore } from "../store/useCursorStore"

export default function Gallery() {
    const set = useCursorStore((state) => state.setCursorType);
    return (
        <motion.main
            className="relative w-screen flex flex-col items-center pt-[5vh] pb-[10vh] lg:pt-[15vh] lg:pb-[20vh] lg:pl-[10vw]"
            initial={{ opacity: 0, filter: "blur(3px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(3px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="w-[80vw] lg:w-[70vw] h-[15vh] flex flex-row items-end justify-between">
                <h1 className="text-[clamp(1.5rem,4vw,4rem)] font-light lg:font-thin">Origami Gallery</h1>
                <a
                    className="flex flex-row items-end justify-center text-[clamp(0.8rem,1.5vw,1.5rem)] font-light mb-1"
                    href="https://www.instagram.com/kent_origami/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => set("hover")}
                    onMouseLeave={() => set("default")}
                >
                    <i className="fa-brands fa-instagram fa-2x pe-[0.5rem]" aria-hidden="true" />
                    <span className="hidden md:block">@kent_origami</span>
                </a>
            </div>

            <div className="w-[80vw] lg:w-[70vw] h-[0.5px] bg-white"/>

            <div className="hidden md:flex md:flex-row md:pt-[clamp(1rem,7.5vh,3rem)] md:gap-[10vw]">
                <div className="w-[30vw] flex flex-col gap-10">
                    <Origami url="girl-and-dog.jpeg" title="Girl and Dog" designer="Kento Kawazoe" folder="Kento Kawazoe" />
                    <Origami url="prayer.jpeg" title="Prayer" designer="Kento Kawazoe" folder="Kento Kawazoe" />
                    <Origami url="dragon.jpeg" title="Dragon Head" designer="Kento Kawazoe" folder="Kento Kawazoe" />
                    <Origami url="samothrace.jpeg" title="Winged Victory of Samothrace" designer="Takashi Hojo" folder="Kento Kawazoe" />
                    <Origami url="gabriel.jpeg" title="Gabriel" designer="Takashi Hojo" folder="Kento Kawazoe" />
                </div>
                <div className="w-[30vw] flex flex-col gap-10">
                    <Origami url="mother-and-child.jpeg" title="Mother and Child" designer="Kento Kawazoe" folder="Kento Kawazoe" />
                    <Origami url="snail.jpeg" title="Snail" designer="Kento Kawazoe" folder="Kento Kawazoe" />
                    <Origami url="shape-of-love.jpeg" title="Shape of Love" designer="Kento Kawazoe" folder="Kento Kawazoe" />
                    <Origami url="dreaming-bear.jpeg" title="Dreaming Bear" designer="Giang Dinh" folder="Kento Kawazoe" />
                    <Origami url="gecko.jpeg" title="Gecko and Fly on a Wall" designer="Herman van Goubergen" folder="Kento Kawazoe" />
                    <Origami url="locust.jpeg" title="Longheaded Locust" designer="Satoshi Kamiya" folder="Kento Kawazoe" />
                </div>
            </div>

            <div className="md:hidden w-[70vw] flex flex-col pt-[5vh] gap-10">
                <Origami url="girl-and-dog.jpeg" title="Girl and Dog" designer="Kento Kawazoe" folder="Kento Kawazoe" />
                <Origami url="mother-and-child.jpeg" title="Mother and Child" designer="Kento Kawazoe" folder="Kento Kawazoe" />
                <Origami url="prayer.jpeg" title="Prayer" designer="Kento Kawazoe" folder="Kento Kawazoe" />
                <Origami url="snail.jpeg" title="Snail" designer="Kento Kawazoe" folder="Kento Kawazoe" />
                <Origami url="shape-of-love.jpeg" title="Shape of Love" designer="Kento Kawazoe" folder="Kento Kawazoe" />
                <Origami url="dragon.jpeg" title="Dragon Head" designer="Kento Kawazoe" folder="Kento Kawazoe" />
                <Origami url="dreaming-bear.jpeg" title="Dreaming Bear" designer="Giang Dinh" folder="Kento Kawazoe" />
                <Origami url="samothrace.jpeg" title="Winged Victory of Samothrace" designer="Takashi Hojo" folder="Kento Kawazoe" />
                <Origami url="gabriel.jpeg" title="Gabriel" designer="Takashi Hojo" folder="Kento Kawazoe" />
                <Origami url="gecko.jpeg" title="Gecko and Fly on a Wall" designer="Herman van Goubergen" folder="Kento Kawazoe" />
                <Origami url="locust.jpeg" title="Longheaded Locust" designer="Satoshi Kamiya" folder="Kento Kawazoe" />
            </div>
        </motion.main>
    )
}

type Props = {
    url: string,
    title: string,
    designer: string,
    folder: string,
}

function Origami({ url, title, designer, folder }: Props) {
    return (
        <motion.div
            className="w-full md:w-[30vw] flex flex-col items-start justify-start"
            initial={{ opacity: 0, filter: "blur(1px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
        >
            <img src={url} alt={title} className="w-full object-contain" />
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
        </motion.div>
    )
}
