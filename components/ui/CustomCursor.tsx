"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        },
        [cursorX, cursorY, isVisible]
    );

    const handleMouseEnter = useCallback(() => setIsVisible(true), []);
    const handleMouseLeave = useCallback(() => setIsVisible(false), []);
    const handleMouseDown = useCallback(() => setIsClicking(true), []);
    const handleMouseUp = useCallback(() => setIsClicking(false), []);

    useEffect(() => {
        // Check if it's a touch device
        const isTouchDevice =
            "ontouchstart" in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        // Add event listeners
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseenter", handleMouseEnter);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mousedown", handleMouseDown);
        document.addEventListener("mouseup", handleMouseUp);

        // Track hover state on interactive elements
        const handleElementHover = () => {
            const interactiveElements = document.querySelectorAll(
                'a, button, [role="button"], input, textarea, select, [data-cursor-hover]'
            );

            interactiveElements.forEach((el) => {
                el.addEventListener("mouseenter", () => setIsHovering(true));
                el.addEventListener("mouseleave", () => setIsHovering(false));
            });
        };

        handleElementHover();

        // MutationObserver to handle dynamically added elements
        const observer = new MutationObserver(handleElementHover);
        observer.observe(document.body, { childList: true, subtree: true });

        // Add custom cursor class to body
        document.body.classList.add("custom-cursor-active");

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mousedown", handleMouseDown);
            document.removeEventListener("mouseup", handleMouseUp);
            observer.disconnect();
            document.body.classList.remove("custom-cursor-active");
        };
    }, [
        handleMouseMove,
        handleMouseEnter,
        handleMouseLeave,
        handleMouseDown,
        handleMouseUp,
    ]);

    // Don't render on touch devices or server
    if (typeof window === "undefined") return null;

    return (
        <>
            {/* Main cursor dot */}
            <motion.div
                className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            >
                <motion.div
                    className="relative flex items-center justify-center"
                    style={{
                        transform: "translate(-50%, -50%)",
                    }}
                    animate={{
                        scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
                        opacity: isVisible ? 1 : 0,
                    }}
                    transition={{ duration: 0.15 }}
                >
                    {/* Outer glow ring */}
                    <motion.div
                        className="absolute rounded-full"
                        style={{
                            width: isHovering ? 50 : 40,
                            height: isHovering ? 50 : 40,
                            background: `radial-gradient(circle, rgba(46, 230, 255, 0.3) 0%, rgba(46, 230, 255, 0) 70%)`,
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Inner dot */}
                    <motion.div
                        className="rounded-full"
                        style={{
                            width: 12,
                            height: 12,
                            background:
                                "linear-gradient(135deg, #2EE6FF 0%, #7CFFB2 100%)",
                            boxShadow: `
                0 0 10px rgba(46, 230, 255, 0.8),
                0 0 20px rgba(46, 230, 255, 0.5),
                0 0 30px rgba(46, 230, 255, 0.3)
              `,
                        }}
                        animate={{
                            scale: isHovering ? 0.8 : 1,
                        }}
                        transition={{ duration: 0.15 }}
                    />
                </motion.div>
            </motion.div>

            {/* Trailing cursor (subtle) */}
            <motion.div
                className="pointer-events-none fixed top-0 left-0 z-[9998]"
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
            >
                <motion.div
                    className="rounded-full border border-cyan-400/30"
                    style={{
                        width: 30,
                        height: 30,
                        transform: "translate(-50%, -50%)",
                    }}
                    animate={{
                        scale: isHovering ? 1.8 : 1,
                        opacity: isVisible ? 0.5 : 0,
                        borderColor: isHovering
                            ? "rgba(124, 255, 178, 0.5)"
                            : "rgba(46, 230, 255, 0.3)",
                    }}
                    transition={{ duration: 0.3 }}
                />
            </motion.div>
        </>
    );
}
