import { motion } from "framer-motion"
import { useCursorStore } from "../store/useCursorStore"

export default function Gallery() {
    const set = useCursorStore((state) => state.setCursorType);
    return (
        <motion.main
            className="relative w-screen pt-[40vh] pb-[20vh] pl-[20vw]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="absolute top-[15vh] left-[20vw] w-[70vw] h-[15vh] flex flex-row items-end justify-between">
                <h1 className="text-[3rem] font-thin">Origami Gallery</h1>
                <a
                    className="flex flex-row items-end justify-center text-[1rem] font-light mb-1"
                    href="https://www.instagram.com/kent_origami/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => set("hover")}
                    onMouseLeave={() => set("default")}
                >
                    <i className="fa-brands fa-instagram fa-2x pe-[0.5rem]" aria-hidden="true" />@kent_origami
                </a>
            </div>

            <div className="absolute top-[30vh] left-[20vw] w-[70vw] h-[0.5px] bg-white"/>

            <div className="flex flex-row gap-[10vw]">
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
        <div className="w-[30vw] flex flex-col items-start justify-start">
            <img src={url} alt={title} className="w-full object-contain" />
            <h2 className="mt-2 text-[1.2rem] font-light">{title}</h2>
            <div className="flex flex-row items-start justify-start mt-1 text-[0.8rem] font-light">
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
