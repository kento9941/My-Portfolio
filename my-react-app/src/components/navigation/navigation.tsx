import Contact from "../contact/contact";
import NavButton from "./navigation-button";

export default function Navigation() {
    return (
        <div className="flex flex-col items-start gap-5 w-[20vw]">
            <NavButton title="Home" link="/" />
            <NavButton title="About" link="/About" />
            <NavButton title="Works" link="/Works" />
            <NavButton title="Origami" link="/Origami" />
            <Contact />
        </div>
    )
}
