"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Link from "next/link";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

// Client-Only import for WaveBackground to avoid hydration mismatches
import dynamic from "next/dynamic";
const WaveBackground = dynamic(() => import("@/components/ui/wave-background").then(mod => mod.Waves), {
    ssr: false,
});

export default function Hero() {
    const tagline = "Software Engineer | Founder | Creative Developer";

    return (
        <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
            {/* Wave Background behind everything */}
            <div className="absolute inset-0 z-0">
                <WaveBackground />
            </div>

            {/* Lamp Removed for Debugging */}
            <motion.div
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative z-10 flex flex-col items-center gap-6 pointer-events-none"
            >
                {/* Animated Shiny Text for Name - Clean Layout */}
                <div className="z-10 flex w-full items-center justify-center pointer-events-auto">
                    <AnimatedShinyText className="inline-flex items-center justify-center transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                        <span className="text-4xl md:text-7xl font-bold font-orbitron tracking-tight text-center bg-gradient-to-r from-accent-cyan to-accent-green bg-clip-text text-transparent drop-shadow-sm">STIVEN ARIFAJ</span>
                    </AnimatedShinyText>
                </div>

                <p className="text-xl md:text-2xl text-accent-cyan/90 font-poppins max-w-2xl mx-auto text-center mt-4 tracking-wide font-medium drop-shadow-md pointer-events-auto">
                    {tagline}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8 items-center pointer-events-auto">
                    <Link href="#projects">
                        <LiquidGlassButton className="w-48 h-14 bg-gradient-to-r from-[#FF6B9D] to-[#FF8FAB] hover:shadow-[0_0_40px_rgba(255,107,157,0.6)]">
                            View Work
                        </LiquidGlassButton>
                    </Link>

                    <Link href="#contact">
                        <LiquidGlassButton className="w-48 h-14">
                            Contact Me
                        </LiquidGlassButton>
                    </Link>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
            >
                <ArrowDown className="text-neutral-400 animate-bounce w-8 h-8" />
            </motion.div>
        </section>
    );
}
