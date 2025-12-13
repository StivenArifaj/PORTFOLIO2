"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Waves as WaveBackground } from "@/components/ui/wave-background";
import { LampContainer } from "@/components/ui/lamp";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

export default function Hero() {
    const tagline = "Software Engineer | Founder | Creative Developer";

    return (
        <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
            {/* Wave Background behind everything */}
            <div className="absolute inset-0 z-0">
                <WaveBackground />
            </div>

            {/* Lamp Container Overlaying Top/Center */}
            {/* We position LampContainer to cover the screen but let Waves show through via transparency */}
            <LampContainer className="relative z-10 min-h-screen w-full bg-transparent">
                <motion.div
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="flex flex-col items-center gap-6"
                >
                    {/* Animated Shiny Text for Name */}
                    <div className="z-10 flex min-h-[4rem] items-center justify-center">
                        <div className="group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                                <span className="text-4xl md:text-7xl font-bold font-orbitron tracking-tight">STIVEN ARIFAJ</span>
                            </AnimatedShinyText>
                        </div>
                    </div>

                    <p className="text-xl md:text-2xl text-neutral-300 font-poppins max-w-2xl mx-auto text-center mt-4">
                        {tagline}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8 items-center">
                        <Link href="#projects">
                            <Button
                                variant="outline"
                                className="w-48 h-14 rounded-full border-neutral-700 bg-black/50 text-white backdrop-blur-md hover:bg-white/10"
                            >
                                View Work
                            </Button>
                        </Link>

                        <Link href="#contact">
                            <div className="relative w-48 h-14 rounded-full overflow-hidden group">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                    borderWidth={2}
                                />
                                <div className="absolute inset-[2px] rounded-full bg-neutral-950 flex items-center justify-center z-20">
                                    <span className="text-white font-semibold">Contact Me</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </motion.div>
            </LampContainer>

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
