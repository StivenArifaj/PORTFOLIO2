"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { useMobile } from "@/hooks/use-mobile";

// Client-Only import for WaveBackground to avoid hydration mismatches
import dynamic from "next/dynamic";
const WaveBackground = dynamic(() => import("@/components/ui/wave-background").then(mod => mod.Waves), {
    ssr: false,
});

export default function Hero() {
    const isMobile = useMobile();
    const tagline = "Software Engineer | Founder | Creative Developer";

    return (
        <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
            {/* Wave Background behind everything */}
            <div className="absolute inset-0 z-0">
                <WaveBackground backgroundColor="#030014" strokeColor="rgba(156, 178, 255, 0.5)" />
            </div>

            <motion.div
                initial={{ opacity: isMobile ? 0.8 : 0.5, y: isMobile ? 30 : 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: isMobile ? 0.1 : 0.3,
                    duration: isMobile ? 0.4 : 0.8,
                    ease: "easeInOut",
                }}
                viewport={{ once: true }}
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

                {/* Main Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8 items-center pointer-events-auto">
                    <Link href="#projects">
                        <LiquidGlassButton className="w-48 h-14">
                            View Work
                        </LiquidGlassButton>
                    </Link>

                    <Link href="#contact">
                        <LiquidGlassButton className="w-48 h-14">
                            Contact Me
                        </LiquidGlassButton>
                    </Link>
                </div>

                {/* Scroll Down Button - Premium Liquid Glass Style (Clean) */}
                <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    onClick={() => {
                        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group mt-12 w-14 h-14 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:bg-white/10 hover:border-accent-cyan/50 hover:shadow-[0_0_25px_rgba(46,230,255,0.4)] transition-all duration-300 pointer-events-auto"
                    aria-label="Scroll to next section"
                >
                    <ArrowDown className="w-6 h-6 text-white/70 group-hover:text-accent-cyan transition-colors animate-bounce" />
                </motion.button>
            </motion.div>
        </section>
    );
}
