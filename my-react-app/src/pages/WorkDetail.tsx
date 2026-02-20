import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { projects } from "../components/projects";

export default function WorkDetail() {
    const { id } = useParams();
    const data = projects.find((p) => p.id === id);

    return (
        <motion.main
            className="relative w-screen min-h-screen flex flex-col pt-[15vh] pb-[50vh] pl-[20vw] pr-[5vw]"
            initial={{ opacity: 0, filter: "blur(3px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="absolute top-[30vh] left-[20vw] w-[75vw] h-[0.5px] bg-white" />

            <div className="flex flex-col">
                <div className="h-[15vh] flex items-end text-[3rem] font-thin mb-10">
                    <h1>{data?.title}</h1>
                </div>

                <div className="flex flex-row gap-[3rem] text-[1rem] font-light mb-8">
                    <a
                        href={data?.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                    >
                        GitHub
                        <span>
                            <svg width="1rem" height="1rem" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.353478" y1="71.3571" x2="71.0642" y2="0.646433" stroke="white" strokeWidth="3"/>
                                <line x1="21.707" y1="0.5" x2="71.707" y2="0.5" stroke="white" strokeWidth="3"/>
                                <line x1="71.207" y1="50" x2="71.207" stroke="white" strokeWidth="3"/>
                            </svg>
                        </span>
                    </a>
                    {data?.demo &&
                    (
                        <a
                            href={data?.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2"
                        >
                            Demo
                            <span>
                                <svg width="1rem" height="1rem" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.353478" y1="71.3571" x2="71.0642" y2="0.646433" stroke="white" strokeWidth="3"/>
                                    <line x1="21.707" y1="0.5" x2="71.707" y2="0.5" stroke="white" strokeWidth="3"/>
                                    <line x1="71.207" y1="50" x2="71.207" stroke="white" strokeWidth="3"/>
                                </svg>
                            </span>
                        </a>
                    )}
                </div>

                <div className="flex flex-row items-start justify-between font-light mb-[30vh]">
                    <div className="w-[35vw] flex flex-col gap-8">
                        <div className="flex flex-col items-start justify-between gap-2">
                            <h2 className="text-[1.2rem]">TOOLS</h2>
                            <div className="w-full text-[0.8rem] flex flex-wrap gap-2">
                                {data?.techs.map((val) => (
                                    <p className="w-fit h-fit p-1 px-5 border border-white rounded-full">{val}</p>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-row items-start justify-between">
                            <div className="flex flex-col items-start justify-between gap-2">
                                <h2 className="text-[1.2rem]">DURATION</h2>
                                <p className="text-[1rem]">{data?.duration}</p>
                            </div>

                            <div className="flex flex-col items-start justify-between gap-2">
                                <h2 className="text-[1.2rem]">ROLES</h2>
                                <p className="text-[1rem]">{data?.roles}</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[35vw] flex flex-col items-start justify-between gap-2">
                        <h2 className="text-[1.2rem]">SUMMARY</h2>
                        <p className="text-[1rem]">{data?.summary}</p>
                    </div>
                </div>

                <div className="w-full flex flex-col items-center justify-start gap-[10vh]">
                    <div className="relative w-[60vw] h-[80vh] flex items-center justify-center">
                        <img
                            src="/black-bg.jpg"
                            className="absolute inset-0 w-full h-full object-contain"
                        />
                        <img
                            src={data?.image1}
                            alt={data?.title}
                            className="z-10 w-full h-full object-contain p-10"
                        />
                    </div>

                    <div className="relative w-[60vw] h-[80vh] flex items-center justify-center">
                        <img
                            src="/grey-bg.jpg"
                            className="absolute inset-0 w-full h-full object-contain"
                        />
                        <img
                            src={data?.image2}
                            alt={data?.title}
                            className="z-10 w-full h-full object-contain p-10"
                        />
                    </div>

                    <div className="relative w-[60vw] h-[80vh] flex items-center justify-center">
                        <img
                            src="/colorful-bg.png"
                            className="absolute inset-0 w-full h-full object-contain"
                        />
                        <img
                            src={data?.image3}
                            alt={data?.title}
                            className="z-10 w-full h-full object-contain p-10"
                        />
                    </div>

                    <div className="relative w-[60vw] h-[80vh] flex items-center justify-center">
                        <img
                            src="/white-bg.jpg"
                            className="absolute inset-0 w-full h-full object-contain"
                        />
                        <img
                            src={data?.image4}
                            alt={data?.title}
                            className="z-10 w-full h-full object-contain p-10"
                        />
                    </div>
                </div>
            </div>
        </motion.main>
    )
}
