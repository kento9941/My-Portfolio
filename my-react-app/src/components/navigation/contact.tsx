import { useState } from "react";
import { useCursorStore } from "../../store/useCursorStore";

export default function Contact() {
    return (
        <div className="flex flex-col items-start gap-2 pt-5 text-[1.2rem] text-white font-extralight">
            <Icon brand="fa-brands fa-linkedin" url="https://www.linkedin.com/in/kento-kawazoe/" />
            <Icon brand="fa-brands fa-instagram" url="https://www.instagram.com/kent_origami/" />
            <Icon brand="fa-brands fa-github" url="https://github.com/kento9941" />
        </div>
    )
}

type Props = {
    brand: string,
    url: string,
}

function Icon({brand, url} : Props) {
    const set = useCursorStore((state) => state.setCursorType);
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" onMouseEnter={() => set("hover")} onMouseLeave={() => set("default")}>
            <i className={`${brand} pe-[0.5rem]`} aria-hidden="true" />
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
