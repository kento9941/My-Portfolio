import NavButton from "./navigation-button";

export default function Navigation() {
    return (
        <div className="flex flex-col items-center justify-start w-[10vw]">
            <NavButton title="Home" link="/" />
        </div>
    )
}
