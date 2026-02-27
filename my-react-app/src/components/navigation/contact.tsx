import { useCursorStore } from "../../store/useCursorStore";

export default function Contact() {
    return (
        <>
            <div className="lg:hidden flex flex-row items-end justify-center gap-3 text-[clamp(1rem,1.5vw,1.5rem) font-extralight">
                <Icon brand="fa-brands fa-linkedin" url="https://www.linkedin.com/in/kento-kawazoe/" />
                <Icon brand="fa-brands fa-instagram" url="https://www.instagram.com/kent_origami/" />
                <Icon brand="fa-brands fa-github" url="https://github.com/kento9941" />
            </div>

            <div className="hidden lg:flex lg:flex-col lg:items-start lg:gap-2 lg:pt-5 lg:text-[clamp(1rem,1.5vw,1.5rem)] lg:font-extralight">
                <Icon brand="fa-brands fa-linkedin" url="https://www.linkedin.com/in/kento-kawazoe/" />
                <Icon brand="fa-brands fa-instagram" url="https://www.instagram.com/kent_origami/" />
                <Icon brand="fa-brands fa-github" url="https://github.com/kento9941" />
            </div>
        </>
    )
}

type Props = {
    brand: string,
    url: string,
}

function Icon({brand, url} : Props) {
    const set = useCursorStore((state) => state.setCursorType);
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => set("hover")}
            onMouseLeave={() => set("default")}
        >
            <i className={`${brand}`} aria-hidden="true" />
        </a>
    )
}
