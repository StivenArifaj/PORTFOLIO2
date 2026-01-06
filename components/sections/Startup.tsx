"use client";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, Wallet, ArrowRight } from "lucide-react";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position
            } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position
            } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position
            } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none opacity-60">
            <svg
                className="w-full h-full text-slate-500 dark:text-neutral-600"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + (path.id % 5) * 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

import { useMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";

export default function Startup() {
    const isMobile = useMobile();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section id="startup" className="py-20 lg:py-32 relative overflow-hidden bg-background">
            {/* Background Paths usage */}
            <div className="absolute inset-0 z-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 bg-gradient-to-r from-accent-cyan to-accent-green bg-clip-text text-transparent">
                        MoneyRush FinCity
                    </h2>
                    <p className="text-xl text-neutral-200 max-w-2xl mx-auto font-poppins">
                        Founded MoneyRush, a gamified financial literacy platform empowering the next generation.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
                    {/* Phone Mockup with Glowing Effect */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="relative w-[300px] h-[600px] rounded-[3rem] bg-neutral-900 border-8 border-neutral-800 shadow-2xl overflow-hidden group shrink-0"
                    >
                        <GlowingEffect
                            spread={60}
                            glow={true}
                            disabled={false}
                            proximity={100}
                            inactiveZone={0.01}
                            borderWidth={3}
                        />

                        {/* Screen Content */}
                        <div className="absolute inset-0 bg-neutral-950 overflow-hidden">
                            {/* iPhone Notch */}
                            <div className="w-32 h-7 bg-black absolute top-0 left-1/2 transform -translate-x-1/2 rounded-b-2xl z-20 pointer-events-none" />

                            {/* Mobile: Static screenshot (fast) - Default Fallback */}
                            {(!mounted || isMobile) ? (
                                <div className="w-full h-full relative">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src="/screenshots/moneyrush-1.png"
                                        alt="MoneyRush App Screenshot"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ) : (
                                /* Desktop: Live Website Iframe - Only if mounted AND desktop */
                                <iframe
                                    src="https://moneyrush.vercel.app"
                                    className="w-full h-full border-0 bg-white"
                                    title="MoneyRush FinCity Demo"
                                    loading="lazy"
                                />
                            )}
                        </div>
                    </motion.div>

                    {/* Details */}
                    <div className="space-y-8 max-w-xl">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="px-3 py-1 rounded-full bg-accent-green/10 text-accent-green border border-accent-green/20 text-sm font-semibold">
                                Founder & Lead Dev
                            </span>
                            <span className="px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 text-sm font-semibold">
                                2023 - Present
                            </span>
                        </div>

                        <h3 className="text-3xl font-bold text-white font-orbitron">Gamifying Financial Education</h3>
                        <p className="text-neutral-300 leading-relaxed text-lg">
                            Designed and built a comprehensive ecosystem where teenagers learn finance through living inside an virtual city and making decisions that an adult would make in their financial life. MoneyRush bridges the gap between financial theory and practical application in an engaging, age-appropriate way.
                        </p>

                        <ul className="space-y-4 pt-2">
                            {[
                                "A proven platform especially in the Albanian market.",
                                "This platform won 3-rd place in one of biggest Albanian Startup competition STARTUP CITY 7 , in its very first year.",
                                "Tech Stack: React Native, Firebase, Node.js",
                                "Features: Real-time Stock Sim, Budgeting, City Builder"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-neutral-300">
                                    <CheckCircle2 className="w-5 h-5 text-accent-green shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Link href="https://moneyrush.vercel.app" target="_blank" className="inline-block mt-6">
                            <button className="group relative px-8 py-4 rounded-full font-semibold transition-all overflow-hidden">
                                {/* Liquid glass layers */}
                                <div className="absolute inset-0 bg-white/10 backdrop-blur-xl" />
                                <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-white/20 to-white/15" />
                                <div className="absolute inset-0 shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_0_20px_rgba(255,255,255,0.2)] rounded-full pointer-events-none group-hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_0_30px_rgba(255,255,255,0.3)]" />

                                {/* Content */}
                                <span className="relative z-10 flex items-center gap-2 text-white">
                                    Visit FinCity
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
