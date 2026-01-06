"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-cyan via-accent-green to-accent-cyan origin-left z-[100] pointer-events-none"
            style={{ scaleX: scrollYProgress }}
        />
    );
}
