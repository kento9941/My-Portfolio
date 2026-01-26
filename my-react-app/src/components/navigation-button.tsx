import { Link } from "react-router-dom";

type Props = {
    title: string;
    link: string;
};

export default function NavButton({title, link}: Props) {
    return (
        <Link to={link}>
            <div className="group relative text-[1.2rem] text-[#ffffff77] font-medium transition-colors duration-500 hover:text-white">
                {title}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 ease-out group-hover:w-full" />
            </div>
        </Link>
    )
}
