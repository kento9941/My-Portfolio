import { NavLink } from "react-router-dom";
import Contact from "./contact";
import { useCursorStore } from "../store/useCursorStore";

export default function Navigation() {
    return (
        <div className="flex flex-col items-start gap-4 w-[20vw]">
            <NavButton title="HOME" link="/" />
            <NavButton title="WORKS" link="/Works" />
            <NavButton title="PLAYGROUND" link="/Playground" />
            <Contact />
        </div>
    )
}

type Props = {
    title: string;
    link: string;
};

function NavButton({title, link}: Props) {
    const set = useCursorStore((state) => state.setCursorType);
    return (
        <NavLink to={link}>
            {({isActive}) => (
            <div
                className={`group w-[10vw] relative text-[0.9rem] tracking-widest font-light
                ${isActive ? "text-white" : "text-[#ffffff77] transition-colors duration-500 hover:text-white"}`}
                onMouseEnter={() => set("hover")}
                onMouseLeave={() => set("default")}
            >
                {title}
                <span className={`absolute bottom-0 left-0 h-[1px] bg-white
                    ${isActive ? "w-full" : "w-0 transition-all duration-500 ease-out group-hover:w-full"}`} />
            </div>
            )}
        </NavLink>
    )
}
