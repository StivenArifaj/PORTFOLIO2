"use client";
import React from 'react';
import dynamic from 'next/dynamic';
const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-neutral-900/20 rounded-3xl animate-pulse" />
});
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { MapPin, GraduationCap, Code2 } from "lucide-react";

class SplineErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
    constructor(props: { children: React.ReactNode }) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error: any) {
        return { hasError: true };
    }
    componentDidCatch(error: any, errorInfo: any) {
        console.error("Spline Error:", error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return (
                <div className="h-full w-full flex items-center justify-center bg-neutral-900/10 rounded-3xl border border-white/5">
                    <p className="text-neutral-500 text-sm">3D Robot Unavailable</p>
                </div>
            );
        }
        return this.props.children;
    }
}

export default function About() {
    const cards = [
        { title: "Location", value: "Albania", icon: <MapPin className="w-6 h-6 mb-2 text-accent-cyan" /> },
        { title: "Field", value: "Software Engineering", icon: <GraduationCap className="w-6 h-6 mb-2 text-accent-green" /> },
        { title: "Focus", value: "Web Dev & 3D", icon: <Code2 className="w-6 h-6 mb-2 text-purple-400" /> }
    ];

    return (
        <section id="about" className="py-20 lg:py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500">
                            Who I Am
                        </h2>

                        <p className="text-lg md:text-xl text-muted-foreground mb-8 font-poppins leading-relaxed">
                            I'm a passionate Web Developer, Designer, and 3D Creator dedicated to crafting sleek, functional, and innovative digital experiences. I specialize in merging logic and design to create engaging and interactive products.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {cards.map((item, idx) => (
                                <div key={idx} className="relative h-32 rounded-2xl bg-neutral-900/50 backdrop-blur-sm border border-white/5 overflow-hidden group">
                                    <GlowingEffect
                                        spread={40}
                                        glow={true}
                                        disabled={false}
                                        proximity={64}
                                        inactiveZone={0.01}
                                    />
                                    <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center">
                                        {item.icon}
                                        <span className="text-xs text-neutral-400 mb-1 uppercase tracking-wider">{item.title}</span>
                                        <span className="text-md font-semibold text-white">{item.value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Spline Robot Scene */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="h-[500px] w-full flex items-center justify-center relative"
                    >
                        {/* Fallback/Placeholder if Spline fails to load or during loading */}

                        <SplineErrorBoundary>
                            <Spline className="w-full h-full" scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" />
                        </SplineErrorBoundary>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
