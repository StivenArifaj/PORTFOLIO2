"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ScrollIndicatorProps {
    targetId?: string;
    className?: string;
}

export function ScrollIndicator({
    targetId = "about",
    className = "",
}: ScrollIndicatorProps) {
    const handleClick = () => {
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.button
            onClick={handleClick}
            className={`flex flex-col items-center gap-2 cursor-pointer group ${className}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            aria-label="Scroll to next section"
        >
            {/* Text label */}
            <span className="text-xs uppercase tracking-widest text-[var(--text-secondary)] font-medium opacity-60 group-hover:opacity-100 transition-opacity">
                Scroll
            </span>

            {/* Animated arrow container */}
            <motion.div
                className="relative flex flex-col items-center"
                animate={{ y: [0, 8, 0] }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                {/* Glow effect behind arrow */}
                <div
                    className="absolute w-8 h-8 rounded-full opacity-30 blur-md"
                    style={{
                        background:
                            "radial-gradient(circle, var(--accent-cyan) 0%, transparent 70%)",
                    }}
                />

                {/* Arrow icon */}
                <ChevronDown
                    className="w-6 h-6 text-[var(--accent-cyan)] relative z-10"
                    strokeWidth={2}
                />
            </motion.div>

            {/* Second arrow for depth */}
            <motion.div
                className="opacity-40"
                animate={{ y: [0, 8, 0] }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.15,
                }}
            >
                <ChevronDown
                    className="w-5 h-5 text-[var(--accent-cyan)]"
                    strokeWidth={1.5}
                />
            </motion.div>
        </motion.button>
    );
}
