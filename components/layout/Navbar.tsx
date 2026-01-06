"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { LiquidGlassNavbar } from "@/components/ui/liquid-glass-navbar";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-neutral-950/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-2"}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="relative w-20 h-20 flex items-center justify-center">
                    <Link href="#" className="absolute w-48 h-48 flex items-center justify-center">
                        <Image
                            src="/logo.png"
                            alt="Stiven Arifaj Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </Link>
                </div>
                <div className="hidden md:block">
                    {scrolled ? (
                        <div className="flex gap-8">
                            {['About', 'Startup', 'Projects', 'Skills', 'Contact'].map(item => (
                                <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold text-white hover:text-white transition-all duration-300 uppercase tracking-wider drop-shadow-md hover:[text-shadow:0_0_10px_rgba(255,255,255,1),0_0_20px_rgba(255,255,255,0.9),0_0_30px_rgba(255,255,255,0.7),0_0_50px_rgba(255,255,255,0.5)]">
                                    {item}
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <LiquidGlassNavbar>
                            <div className="flex gap-8">
                                {['About', 'Startup', 'Projects', 'Skills', 'Contact'].map(item => (
                                    <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold text-white hover:text-white transition-all duration-300 uppercase tracking-wider drop-shadow-md hover:[text-shadow:0_0_10px_rgba(255,255,255,1),0_0_20px_rgba(255,255,255,0.9),0_0_30px_rgba(255,255,255,0.7),0_0_50px_rgba(255,255,255,0.5)]">
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        </LiquidGlassNavbar>
                    )}
                </div>
                {/* Mobile Menu simplified */}
                <div className="md:hidden">
                    {/* ... */}
                </div>
            </div>
        </nav>
    )
}
