"use client";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

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

export default function Startup() {
    return (
        <section id="startup" className="py-12 lg:py-20 relative overflow-hidden min-h-screen flex items-center">
            {/* Background Paths usage */}
            <div className="absolute inset-0 z-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 bg-gradient-to-r from-accent-cyan to-accent-green bg-clip-text text-transparent">
                        Vale FinCity
                    </h2>
                    <p className="text-lg text-neutral-200 max-w-2xl mx-auto font-poppins">
                        Founded Vale, a gamified financial literacy platform empowering the next generation.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
                    {/* iPhone-style Vale preview */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 12 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-50px" }}
                        aria-label="Vale website shown in an iPhone mockup"
                        className="relative isolate w-[min(84vw,320px)] shrink-0 aspect-[9/19.5] rounded-[3.15rem] bg-gradient-to-br from-[#a9a9a9] via-[#292929] to-[#777] p-[2px] shadow-[0_30px_90px_-28px_rgba(0,0,0,0.9),0_0_34px_-18px_rgba(224,179,77,0.55)] lg:w-[320px]"
                    >
                        <GlowingEffect spread={45} glow disabled={false} proximity={90} inactiveZone={0.01} borderWidth={2} />
                        <div className="absolute inset-[7px] overflow-hidden rounded-[2.65rem] border border-white/10 bg-black">
                            <iframe
                                src="https://valegame.vercel.app/"
                                className="h-full w-full border-0 bg-white"
                                title="Vale FinCity website preview"
                                loading="lazy"
                            />

                            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-20 flex h-10 items-start justify-between px-6 pt-[11px] text-[10px] font-semibold tracking-wide text-white">
                                <span>9:41</span>
                                <svg viewBox="0 0 42 14" className="h-[13px] w-[38px] fill-current">
                                    <path d="M1 11h2V8H1v3Zm4 0h2V6H5v5Zm4 0h2V4H9v7Zm4 0h2V2h-2v9Z" />
                                    <path d="M19 5.2c2.8-2.7 7.2-2.7 10 0l-1.3 1.4a5.2 5.2 0 0 0-7.4 0L19 5.2Zm2.3 2.4a2 2 0 0 1 5.4 0L24 11l-2.7-3.4Z" />
                                    <rect x="33" y="3" width="7" height="9" rx="2" />
                                    <rect x="40.5" y="5.5" width="1" height="4" rx=".5" />
                                </svg>
                            </div>
                            <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[9px] z-30 h-[25px] w-[82px] -translate-x-1/2 rounded-full border border-white/[0.06] bg-[#050505] shadow-[0_1px_2px_rgba(255,255,255,0.08)]">
                                <span className="absolute right-[11px] top-[8px] h-[7px] w-[7px] rounded-full bg-[#141a22] ring-1 ring-[#24303b]" />
                            </div>
                            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-[5px] z-30 flex justify-center">
                                <span className="h-[4px] w-[92px] rounded-full bg-white/80 shadow-sm" />
                            </div>
                        </div>
                        <span aria-hidden="true" className="absolute -left-[3px] top-[18%] h-8 w-[3px] rounded-l bg-gradient-to-b from-[#777] to-[#303030]" />
                        <span aria-hidden="true" className="absolute -left-[3px] top-[25%] h-12 w-[3px] rounded-l bg-gradient-to-b from-[#777] to-[#303030]" />
                        <span aria-hidden="true" className="absolute -right-[3px] top-[23%] h-14 w-[3px] rounded-r bg-gradient-to-b from-[#777] to-[#303030]" />
                    </motion.div>

                    {/* Details */}
                    <div className="space-y-6 max-w-lg">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="px-3 py-1 rounded-full bg-accent-green/10 text-accent-green border border-accent-green/20 text-xs font-semibold">
                                Founder & Lead Dev
                            </span>
                            <span className="px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 text-xs font-semibold">
                                2023 - Present
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold text-white font-orbitron">Gamifying Financial Education</h3>
                        <p className="text-neutral-300 leading-relaxed text-base">
                            Designed and built a comprehensive ecosystem where teenagers learn finance through living inside an virtual city and making decisions that an adult would make in their financial life. Vale bridges the gap between financial theory and practical application in an engaging, age-appropriate way.
                        </p>

                        <ul className="space-y-3 pt-2">
                            {[
                                "A proven platform especially in the Albanian market.",
                                "This platform won 3-rd place in one of biggest Albanian Startup competition STARTUP CITY 7 , in its very first year.",
                                "Tech Stack: React Native, Firebase, Node.js",
                                "Features: Real-time Stock Sim, Budgeting, City Builder"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-neutral-300 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-accent-green shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Link href="https://valegame.vercel.app/" target="_blank" className="inline-block mt-4">
                            <button className="group relative px-6 py-3 rounded-full font-semibold transition-all duration-300 overflow-hidden text-sm border border-white/20 hover:shadow-[0_0_40px_rgba(156,178,255,0.4)]">
                                {/* Liquid glass layers */}
                                <div className="absolute inset-0 z-0 backdrop-blur-md [filter:url(#lg-dist)] isolate" />
                                <div className="absolute inset-0 z-10 bg-white/10" />
                                <div className="absolute inset-0 z-20 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),inset_0_-1px_1px_rgba(255,255,255,0.1)] pointer-events-none" />

                                {/* Content */}
                                <span className="relative z-30 flex items-center gap-2 text-white">
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
