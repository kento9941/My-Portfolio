import { NavLink } from "react-router-dom";
import Contact from "./contact";
import { useCursorStore } from "../../store/useCursorStore";
import { motion } from "framer-motion";

export default function Navigation() {
    return (
        <>
            <motion.div
                className="lg:hidden pt-3 ml-[5vw] mr-[5vw] pl-[1vw] pr-[1vw] w-[90vw] h-[clamp(3rem,6vh,4rem)] flex flex-row items-center justify-between border-[#888888aa] border-b-[0.5px] bg-[#111111]"
                initial={{ opacity: 0, filter: "blur(5px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="flex flex-row items-center gap-5">
                    <NavButton title="HOME" link="/" />
                    <NavButton title="WORKS" link="/Works" />
                    <NavButton title="GALLERY" link="/Gallery" />
                </div>
                <Contact />
            </motion.div>

            <motion.div
                className="hidden lg:flex lg:flex-col lg:items-start lg:gap-4 lg:w-[10vw]"
                initial={{ opacity: 0, filter: "blur(5px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <NavButton title="HOME" link="/" />
                <NavButton title="WORKS" link="/Works" />
                <NavButton title="GALLERY" link="/Gallery" />
                <Contact />
            </motion.div>
        </>
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
                className={`group lg:w-[clamp(3.5rem,7vw,10rem)] relative text-[clamp(0.6rem,1vw,1.5rem)] tracking-widest font-light
                ${isActive ? "text-white" : "text-[#ffffff77] transition-colors duration-500 hover:text-white"}`}
                onMouseEnter={() => set("hover")}
                onMouseLeave={() => set("default")}
            >
                {title}
                <span className={`hidden lg:block lg:absolute lg:bottom-0 lg:left-0 lg:h-[0.5px] lg:bg-white
                    ${isActive ? "lg:w-full" : "lg:w-0 lg:transition-all lg:duration-500 lg:ease-out lg:group-hover:w-full"}`} />
            </div>
            )}
        </NavLink>
    )
}
