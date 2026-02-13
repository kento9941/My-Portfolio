import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useCursorStore, type CursorType } from "../store/useCursorStore";

type Props = {
    src: string,
    classname: string,
    hover: CursorType
}

export default function ParallaxImage({ src, classname, hover="default" }: Props) {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(
        scrollYProgress,
        [0, 1],
        [`-15%`, `15%`]
    );

    const set = useCursorStore((state) => state.setCursorType);

    return (
        <div
            ref={ref}
            className={`${classname}`}
            onMouseEnter={() => set(hover)}
            onMouseLeave={() => set("default")}
        >
            <motion.img
                src={src}
                className="w-full object-cover"
                style={{ y }}
            />
        </div>
    );
}
