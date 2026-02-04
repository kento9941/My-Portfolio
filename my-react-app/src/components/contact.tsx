import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useCursorStore } from "../store/useCursorStore";

export default function Contact() {
    const [open, setOpen] = useState(false);
    const set = useCursorStore((state) => state.setCursorType);
    return (
        <div>
            {/* accordion button */}
            <div
                className={`group w-[10vw] relative text-[1rem] tracking-widest font-light cursor-pointer mb-3
                ${open ? "text-white" : "text-[#ffffff77] transition-colors duration-500 hover:text-white"}`}
                onClick={() => setOpen(!open)}
                onMouseEnter={() => set("hover")}
                onMouseLeave={() => set("default")}
            >
                Contact
                <span className={`absolute bottom-0 left-0 h-[1px] bg-white
                    ${open ? "w-full" : "w-0 transition-all duration-500 ease-out group-hover:w-full"}`} />
            </div>

            {/* icons */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1}}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="overflow-hidden"
                    >
                        <div className="flex flex-col items-start gap-2 text-[0.8rem] text-white font-extralight">
                            <Icon name="LinkedIn" brand="fa-brands fa-linkedin" url="https://www.linkedin.com/in/kento-kawazoe/" />
                            <Icon name="Instagram" brand="fa-brands fa-instagram" url="https://www.instagram.com/kent_origami/" />
                            <Icon name="GitHub" brand="fa-brands fa-github" url="https://github.com/kento9941" />
                            <Email />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

type Props = {
    name: string,
    brand: string,
    url: string,
}

function Icon({name, brand, url} : Props) {
    const set = useCursorStore((state) => state.setCursorType);
    return (
        <a href={url}  target="_blank" rel="noopener noreferrer" onMouseEnter={() => set("hover")} onMouseLeave={() => set("default")}>
            <i className={`${brand} pe-[0.5rem]`} aria-hidden="true" />{name}
        </a>
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
        <button onClick={copy} className="relative cursor-pointer" onMouseEnter={() => set("hover")} onMouseLeave={() => set("default")}>
            <i className="fa-regular fa-envelope pe-[0.5rem]" />kento9941@gmail.com
            {copied && (
                <span className="absolute top-[-1.5rem] right-0 text-[#ffffffaa] pointer-events-none">
                    Copied!
                </span>
            )}
        </button>
    )
}
