import { motion } from "framer-motion";
import { useParams, NavLink, Link } from "react-router-dom";
import { projects } from "../components/projects";
import { useCursorStore } from "../store/useCursorStore";

export default function WorkDetail() {
    const { id } = useParams();
    const data = projects.find((p) => p.id === id);
    const nextData = projects.find((p) => p.id === data?.next)

    const set = useCursorStore((state) => state.setCursorType);

    return (
        <motion.main
            className="relative w-screen min-h-screen flex flex-col pt-[40vh] pl-[15vw] pr-[5vw]"
            exit={{ opacity: 0, filter: "blur(3px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.div
                className="fixed top-[30vh] left-[15vw] w-[80vw] h-[0.5px] bg-white"
                initial={{ opacity: 0, filter: "blur(3px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(3px)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            />

            <NavLink to="/Works">
                <motion.div
                    className="fixed top-[5vh] left-[15vw] text-[clamp(1rem,1.5vw,1.5rem)] font-light flex flex-row items-center gap-1"
                    initial={{ opacity: 0, filter: "blur(3px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(3px)" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    onMouseEnter={() => set("hover")}
                    onMouseLeave={() => set("default")}
                >
                    <span>
                        <svg width="clamp(1rem,1.5vw,1.5rem)" height="clamp(1rem,1.5vw,1.5rem)" viewBox="0 0 37 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.646447" y1="36.0018" x2="36.0018" y2="0.646455" stroke="white" strokeWidth="4" />
                            <line x1="0.353553" y1="35.6464" x2="35.7089" y2="71.0018" stroke="white" strokeWidth="4" />
                        </svg>
                    </span>
                    <span>BACK</span>
                </motion.div>
            </NavLink>

            <motion.div
                className="fixed top-[15vh] left-[15vw] w-[80vw] flex flex-row items-end justify-between"
                initial={{ opacity: 0, filter: "blur(3px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(3px)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="h-[15vh] flex items-end text-[clamp(2rem,4vw,4rem)] font-thin">
                    <h1>{data?.title}</h1>
                </div>
                <div className="flex flex-row items-end gap-[1rem] text-[clamp(1rem,1.5vw,1.5rem)] font-light mb-[clamp(0.5rem,1.2vh,0.8rem)]">
                    {data?.github &&
                    (
                        <a
                            href={data?.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1"
                            onMouseEnter={() => set("hover")}
                            onMouseLeave={() => set("default")}
                        >
                            GitHub
                            <span>
                                <svg width="clamp(1rem,1.5vw,1.5rem)" height="clamp(1rem,1.5vw,1.5rem)" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.353478" y1="71.3571" x2="71.0642" y2="0.646433" stroke="white" strokeWidth="4"/>
                                    <line x1="21.707" y1="0.5" x2="71.707" y2="0.5" stroke="white" strokeWidth="4"/>
                                    <line x1="71.207" y1="50" x2="71.207" stroke="white" strokeWidth="4"/>
                                </svg>
                            </span>
                        </a>
                    )}

                    {data?.demo &&
                    (
                        <a
                            href={data?.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1"
                            onMouseEnter={() => set("hover")}
                            onMouseLeave={() => set("default")}
                        >
                            Demo
                            <span>
                                <svg width="clamp(1rem,1.5vw,1.5rem)" height="clamp(1rem,1.5vw,1.5rem)" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.353478" y1="71.3571" x2="71.0642" y2="0.646433" stroke="white" strokeWidth="4"/>
                                    <line x1="21.707" y1="0.5" x2="71.707" y2="0.5" stroke="white" strokeWidth="4"/>
                                    <line x1="71.207" y1="50" x2="71.207" stroke="white" strokeWidth="4"/>
                                </svg>
                            </span>
                        </a>
                    )}
                </div>
            </motion.div>

            <motion.div
                className="flex flex-col min-h-[370vh] w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="w-full flex flex-col items-center justify-start gap-[10vh] pb-[40vh]">
                    <div className="relative w-[50vw] max-w-4xl aspect-video flex items-center justify-center">
                        <img
                            src={data?.bg1}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <img
                            src={data?.image1}
                            alt={data?.title}
                            className="z-10 w-full h-full object-contain p-10"
                        />
                    </div>

                    <div className="relative w-[50vw] max-w-4xl aspect-video flex items-center justify-center">
                        <img
                            src={data?.bg2}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <img
                            src={data?.image2}
                            alt={data?.title}
                            className="z-10 w-full h-full object-contain p-10"
                        />
                    </div>

                    <div className="relative w-[50vw] max-w-4xl aspect-video flex items-center justify-center">
                        <img
                            src={data?.bg3}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <img
                            src={data?.image3}
                            alt={data?.title}
                            className="z-10 w-full h-full object-contain p-10"
                        />
                    </div>

                    <div className="relative w-[50vw] max-w-4xl aspect-video flex items-center justify-center">
                        <img
                            src={data?.bg4}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <img
                            src={data?.image4}
                            alt={data?.title}
                            className="z-10 w-full h-full object-contain p-10"
                        />
                    </div>
                </div>

                <div className="h-[60vh] flex flex-row items-start justify-between font-light mt-auto mb-8">
                    <div className="w-[35vw] flex flex-col gap-8">
                        <div className="flex flex-col items-start justify-between gap-2">
                            <h2 className="text-[clamp(1.2rem,2vw,2rem)]">TOOLS</h2>
                            <div className="w-full text-[clamp(0.8rem,1vw,1rem)] flex flex-wrap gap-2">
                                {data?.techs.map((val) => (
                                    <p className="w-fit h-fit p-1 px-5 border border-white rounded-full">{val}</p>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-row items-start justify-between">
                            <div className="flex flex-col items-start justify-between gap-2">
                                <h2 className="text-[clamp(1.2rem,2vw,2rem)]">DURATION</h2>
                                <p className="text-[clamp(1rem,1.2vw,1.5rem)]">{data?.duration}</p>
                            </div>

                            <div className="flex flex-col items-start justify-between gap-2">
                                <h2 className="text-[clamp(1.2rem,2vw,2rem)]">ROLES</h2>
                                <p className="text-[clamp(1rem,1.2vw,1.5rem)]">{data?.roles}</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[35vw] h-full flex flex-col items-start justify-between gap-2">
                        <h2 className="text-[clamp(1.2rem,2vw,2rem)]">SUMMARY</h2>
                        <p className="text-[clamp(1rem,1.2vw,1.5rem)]">{data?.summary}</p>

                        <Link
                            key={nextData?.id}
                            to={`/Works/${nextData?.id}`}
                            onMouseEnter={() => set("hover")}
                            onMouseLeave={() => set("default")}
                            className="flex flex-row items-center justify-end text-[clamp(1.2rem,2vw,2rem)] font-light mt-auto ml-auto gap-2"
                        >
                            <span>{nextData?.title}</span>
                            <span>
                                <svg width="clamp(1.2rem,2vw,2rem)" height="clamp(1.2rem,2vw,2rem)" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.204656" y1="50.2071" x2="100.205" y2="50.2071" stroke="white" strokeWidth="4"/>
                                    <line x1="65.4073" y1="15.2028" x2="100.763" y2="50.5581" stroke="white" strokeWidth="4"/>
                                    <line x1="65.4073" y1="85.2064" x2="100.763" y2="49.851" stroke="white" strokeWidth="4"/>
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </motion.main>
    )
}
