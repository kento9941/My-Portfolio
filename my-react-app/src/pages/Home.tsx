"use client";

import Navigation from "../components/navigation";

export default function Home() {
    return (
        <main className="relative w-screen h-screen">
            {/* logo */}
            <img src="/logo.svg" alt="logo" className="absolute top-[6vh] left-[4vw] w-10 h-10 " />

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
            <div className="absolute top-[17vh] left-[3vw]">
                <Navigation />
            </div>

            {/* monologue */}
            <div className="absolute bottom-[3vh] right-[2vw] w-[25vw] font-extralight text-[0.7rem] tracking-[0.1rem] pointer-events-none">
                <p className="mb-2">Currently a student at Adelaide University, exploring the evolving landscape of web design.</p>
                <p className="mb-2">Through constant trial and error and deep reflection, I am honing my ability to transform complex ideas into meaningful, sophisticated interfaces.</p>
            </div>
        </main>
    )
}
