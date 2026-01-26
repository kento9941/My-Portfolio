import Navigation from "../components/navigation/navigation";
import MouseEffectScene from "../shaders/mouse-effect-scene";

export default function Home() {
    return (
        <main className="relative w-screen h-screen">
            {/* background */}
            <div className="absolute inset-0 z-0">
                <MouseEffectScene />
            </div>

            {/* title */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <div className="flex flex-col justify-center items-center text-white font-thin select-none">
                    <h1 className="text-[4rem] tracking-widest">
                        Kento Kawazoe
                    </h1>
                    <h2 className="text-[1rem] tracking-[0.7rem]">
                        Developer & Designer
                    </h2>
                </div>
            </div>

            {/* navigation */}
            <div className="absolute top-[40vh] left-[4vw]">
                <Navigation />
            </div>
        </main>
    )
}
