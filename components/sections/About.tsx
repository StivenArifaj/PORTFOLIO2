"use client";
import React from 'react';
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { MapPin, GraduationCap, Code2 } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";
import dynamic from "next/dynamic";
const SplineRobot = dynamic(() => import("@/components/ui/spline-robot"), {
    ssr: false,
    loading: () => <div className="w-full h-full flex items-center justify-center"><div className="w-12 h-12 border-2 border-accent-cyan/30 border-t-accent-cyan rounded-full animate-spin" /></div>
});

export default function About() {
    const isMobile = useMobile();

    const cards = [
        { title: "Location", value: "Albania", icon: <MapPin className="w-6 h-6 mb-2 text-accent-cyan" /> },
        { title: "Field", value: "Software Engineering", icon: <GraduationCap className="w-6 h-6 mb-2 text-accent-green" /> },
        { title: "Focus", value: "Web Dev & Software Development", icon: <Code2 className="w-6 h-6 mb-2 text-purple-400" /> }
    ];

    return (
        <section id="about" className="py-20 lg:py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: isMobile ? 0.3 : 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
                            Who I Am
                        </h2>

                        <p className="text-lg md:text-xl text-neutral-200 mb-8 font-poppins leading-relaxed">
                            I'm a passionate Software Engineer, Web Developer, and System Designer dedicated to
                            crafting sleek, functional, and innovative digital experiences. I specialize
                            in merging logic and design to create engaging and interactive products.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {cards.map((item, idx) => (
                                <div key={idx} className="relative isolate">
                                    <div className={`relative h-32 rounded-2xl overflow-hidden transition-all duration-300 ${isMobile
                                            ? 'bg-white/10 backdrop-blur-sm border border-white/10'
                                            : 'shadow-[0_6px_6px_rgba(0,0,0,0.2),0_0_20px_rgba(0,0,0,0.1)]'
                                        }`}>
                                        {/* Liquid Glass Layers - Simplified on mobile */}
                                        {!isMobile && (
                                            <>
                                                <div className="absolute inset-0 z-0 backdrop-blur-[0px] [filter:url(#lg-dist)] isolate" />
                                                <div className="absolute inset-0 z-10 bg-white/25" />
                                                <div className="absolute inset-0 z-20 rounded-[inherit] overflow-hidden shadow-[inset_1px_1px_0_rgba(255,255,255,0.75),inset_0_0_5px_rgba(255,255,255,0.75)] pointer-events-none" />
                                            </>
                                        )}

                                        {/* Glowing Effect - Desktop only */}
                                        {!isMobile && (
                                            <GlowingEffect
                                                spread={60}
                                                glow={true}
                                                disabled={false}
                                                proximity={120}
                                                inactiveZone={0.01}
                                                borderWidth={2}
                                            />
                                        )}

                                        {/* Content */}
                                        <div className="relative z-30 flex flex-col items-center justify-center h-full p-4 text-center">
                                            {item.icon}
                                            <span className="text-xs text-neutral-300 mb-1 uppercase tracking-wider">{item.title}</span>
                                            <span className="text-md font-semibold text-white">{item.value}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Spline Robot (Web Component) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="h-[500px] w-full flex items-center justify-center relative z-20 pointer-events-auto"
                    >
                        {/* Spline Robot Component */}
                        <SplineRobot />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
