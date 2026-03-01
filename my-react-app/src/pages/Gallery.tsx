import { motion } from "framer-motion"
import { useCursorStore } from "../store/useCursorStore"

export default function Gallery() {
    const set = useCursorStore((state) => state.setCursorType);
    return (
        <motion.main
            className="relative w-screen flex flex-col items-center pt-[5vh] pb-[10vh] lg:pt-[15vh] lg:pb-[20vh] lg:pl-[10vw]"
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

            <div className="hidden md:flex md:flex-row md:pt-[clamp(1rem,7.5vh,3rem)] md:gap-[10vw]">
                <div className="w-[30vw] flex flex-col gap-10">
                    <Origami url="girl_and_dog.webp" title="Girl and Dog" designer="Kento Kawazoe" folder="Kento Kawazoe" load="eager" />
                    <Origami url="prayer.webp" title="Prayer" designer="Kento Kawazoe" folder="Kento Kawazoe" load="eager" />
                    <Origami url="dragon.webp" title="Dragon Head" designer="Kento Kawazoe" folder="Kento Kawazoe" load={undefined} />
                    <Origami url="samothrace.webp" title="Winged Victory of Samothrace" designer="Takashi Hojo" folder="Kento Kawazoe" load={undefined} />
                    <Origami url="gabriel.webp" title="Gabriel" designer="Takashi Hojo" folder="Kento Kawazoe" load="lazy" />
                </div>
                <div className="w-[30vw] flex flex-col gap-10">
                    <Origami url="mother_and_child.webp" title="Mother and Child" designer="Kento Kawazoe" folder="Kento Kawazoe" load="eager" />
                    <Origami url="snail.webp" title="Snail" designer="Kento Kawazoe" folder="Kento Kawazoe" load={undefined} />
                    <Origami url="shape_of_love.webp" title="Shape of Love" designer="Kento Kawazoe" folder="Kento Kawazoe" load={undefined} />
                    <Origami url="dreaming_bear.webp" title="Dreaming Bear" designer="Giang Dinh" folder="Kento Kawazoe" load={undefined} />
                    <Origami url="gecko.webp" title="Gecko and Fly on a Wall" designer="Herman van Goubergen" folder="Kento Kawazoe" load="lazy" />
                    <Origami url="locust.webp" title="Longheaded Locust" designer="Satoshi Kamiya" folder="Kento Kawazoe" load="lazy" />
                </div>
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
            <img src={url} alt={title} className="w-full object-contain opacity-[90%] will-change-[opacity] transform-gpu" loading={load} />
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
