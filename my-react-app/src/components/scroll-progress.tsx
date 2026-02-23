import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 150,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <motion.div
            style={{
                position: "fixed",
                originY: 0,
                top: 0,
                right: 0,
                width: "5px",
                height: "100%",
                backgroundColor: "#ffffff",
                scaleY,
                zIndex: 50,
            }}
        />
    )
}