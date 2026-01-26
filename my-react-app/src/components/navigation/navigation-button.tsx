import { NavLink } from "react-router-dom";

type Props = {
    title: string;
    link: string;
};

export default function NavButton({title, link}: Props) {
    return (
        <NavLink to={link}>
            {({isActive}) => (
            <div
                className={`group w-[10vw] relative text-[1.2rem] tracking-widest font-light
                ${isActive ? "text-white" : "text-[#ffffff77] transition-colors duration-500 hover:text-white"}`}
            >
                {title}
                <span className={`absolute bottom-0 left-0 h-[1px] bg-white
                    ${isActive ? "w-full" : "w-0 transition-all duration-500 ease-out group-hover:w-full"}`} />
            </div>
            )}
        </NavLink>
    )
}
