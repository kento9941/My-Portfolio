import NavButton from "./navigation-button";

export default function Navigation() {
    return (
        <div className="flex flex-col items-center justify-between h-[30vh]">
            <NavButton title="Home" link="/" />
            <NavButton title="About" link="/About" />
            <NavButton title="Works" link="/Works" />
            <NavButton title="Origami" link="/Origami" />
        </div>
    )
}
