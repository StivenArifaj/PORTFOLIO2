"use client";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, Wallet, ArrowRight } from "lucide-react";


import { useMobile } from "@/hooks/use-mobile";
import { useEffect, useRef, useState } from "react";

export default function Startup() {
    const isMobile = useMobile();
    const iframeRef = useRef<HTMLDivElement>(null);
    const [shouldLoadIframe, setShouldLoadIframe] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoadIframe(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "300px" }
        );
        if (iframeRef.current) observer.observe(iframeRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="startup" className="py-12 lg:py-20 relative overflow-hidden min-h-screen flex items-center">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-20"
                >
                    <source src="/videos/blackhole.webm" type="video/webm" />
                </video>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 bg-gradient-to-r from-accent-cyan to-accent-green bg-clip-text text-transparent">
                        MoneyRush FinCity
                    </h2>
                    <p className="text-lg text-neutral-200 max-w-2xl mx-auto font-poppins">
                        Founded MoneyRush, a gamified financial literacy platform empowering the next generation.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
                    {/* Phone Mockup with Glowing Effect */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="relative w-[280px] h-[550px] rounded-[2.5rem] bg-neutral-900 border-8 border-neutral-800 shadow-2xl overflow-hidden group shrink-0"
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
                            <div className="w-28 h-6 bg-black absolute top-0 left-1/2 transform -translate-x-1/2 rounded-b-xl z-20 pointer-events-none" />

                            {/* Desktop & Mobile: Live Website Iframe */}
                            <div ref={iframeRef} className="w-full h-full">
                                {!shouldLoadIframe ? (
                                    <div className="w-full h-full relative animate-pulse bg-neutral-900" />
                                ) : (
                                    <iframe
                                        src="https://moneyrush.vercel.app"
                                        className="w-full h-full border-0 bg-white"
                                        title="MoneyRush FinCity Demo"
                                        loading="lazy"
                                    />
                                )}
                            </div>
                        </div>
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
                            Designed and built a comprehensive ecosystem where teenagers learn finance through living inside an virtual city and making decisions that an adult would make in their financial life. MoneyRush bridges the gap between financial theory and practical application in an engaging, age-appropriate way.
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

                        <Link href="https://moneyrush.vercel.app" target="_blank" className="inline-block mt-4">
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
