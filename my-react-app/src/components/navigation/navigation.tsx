import { NavLink } from "react-router-dom";
import Contact from "./contact";
import { useCursorStore } from "../../store/useCursorStore";
import { motion } from "framer-motion";

export default function Navigation() {
    return (
        <motion.div
            className="flex flex-col items-start gap-4 w-[10vw]"
            initial={{ opacity: 0, filter: "blur(5px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <NavButton title="HOME" link="/" />
            <NavButton title="WORKS" link="/Works" />
            <NavButton title="GALLERY" link="/Gallery" />
            <Contact />
        </motion.div>
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
                className={`group w-[7vw] relative text-[0.8rem] tracking-widest font-light
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
