"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-neutral-950/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="#" className="text-2xl font-bold font-orbitron text-white tracking-widest">SA.</Link>
                <div className="hidden md:flex gap-8">
                    {['About', 'Startup', 'Projects', 'Skills', 'Contact'].map(item => (
                        <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-neutral-400 hover:text-white transition-colors uppercase tracking-wider">
                            {item}
                        </Link>
                    ))}
                </div>
                {/* Mobile Menu simplified */}
                <div className="md:hidden">
                    {/* ... */}
                </div>
            </div>
        </nav>
    )
}
