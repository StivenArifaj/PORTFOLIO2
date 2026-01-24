"use client";

import { useState, useEffect } from "react";
import { useMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";
import { X, Monitor } from "lucide-react";

export function DesktopRecommendation() {
    const isMobile = useMobile();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show after a short delay on mobile only
        if (isMobile) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, [isMobile]);

    if (!isMobile) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: -50, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: -20, x: "-50%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed top-32 left-1/2 z-[100] w-[90%] max-w-sm"
                >
                    <div className="relative isolate w-full rounded-2xl overflow-hidden shadow-[0_8px_16px_rgba(0,0,0,0.3)]">
                        {/* TRUE Liquid Glass Layers - Matching Navbar */}
                        <div className="absolute inset-0 z-0 backdrop-blur-[0px] [filter:url(#lg-dist)] isolate" />
                        <div className="absolute inset-0 z-10 bg-white/20" />
                        <div className="absolute inset-0 z-20 rounded-[inherit] shadow-[inset_1px_1px_0_rgba(255,255,255,0.6),inset_0_0_10px_rgba(255,255,255,0.4)] pointer-events-none" />

                        {/* Content */}
                        <div className="relative z-30 p-4 flex items-center gap-4">
                            <div className="p-2.5 rounded-full bg-black/20 text-white backdrop-blur-sm shadow-inner border border-white/10">
                                <Monitor className="w-5 h-5" />
                            </div>

                            <div className="flex-1">
                                <h4 className="text-white font-semibold text-sm font-orbitron tracking-wide mb-0.5">
                                    Experience Enhanced
                                </h4>
                                <p className="text-neutral-200 text-xs font-poppins">
                                    Open in desktop for the best experience.
                                </p>
                            </div>

                            <button
                                onClick={() => setIsVisible(false)}
                                className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
