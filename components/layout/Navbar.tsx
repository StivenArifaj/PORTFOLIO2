"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { LiquidGlassNavbar } from "@/components/ui/liquid-glass-navbar";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ['About', 'Startup', 'Projects', 'Skills', 'Contact'];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Detect active section
            const sections = ['hero', 'about', 'startup', 'projects', 'skills', 'journey', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "bg-transparent py-2"}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="relative w-20 h-20 flex items-center justify-center">
                        <Link href="#hero" className="absolute w-48 h-48 flex items-center justify-center">
                            <Image
                                src="/logo.png"
                                alt="Stiven Arifaj Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        {scrolled ? (
                            <div className="relative isolate">
                                <div className="relative rounded-full overflow-hidden">
                                    {/* Liquid glass layers */}
                                    <div className="absolute inset-0 bg-white/5 backdrop-blur-xl" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5" />
                                    <div className="absolute inset-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-1px_1px_rgba(0,0,0,0.2)] rounded-full pointer-events-none" />

                                    {/* Content */}
                                    <div className="relative flex gap-2 px-6 py-2.5">
                                        {navItems.map(item => (
                                            <Link
                                                key={item}
                                                href={`#${item.toLowerCase()}`}
                                                className={`relative px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 overflow-hidden group ${activeSection === item.toLowerCase()
                                                        ? 'text-white'
                                                        : 'text-neutral-300 hover:text-white'
                                                    }`}
                                            >
                                                {/* Active state glass background */}
                                                {activeSection === item.toLowerCase() && (
                                                    <>
                                                        <span className="absolute inset-0 bg-white/10 backdrop-blur-md" />
                                                        <span className="absolute inset-0 bg-gradient-to-r from-accent-cyan/20 to-accent-green/20" />
                                                        <span className="absolute inset-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] rounded-full" />
                                                    </>
                                                )}
                                                {/* Hover state */}
                                                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                                                <span className="relative z-10">{item}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <LiquidGlassNavbar>
                                <div className="flex gap-8">
                                    {navItems.map(item => (
                                        <Link
                                            key={item}
                                            href={`#${item.toLowerCase()}`}
                                            className={`text-sm font-semibold transition-all duration-300 uppercase tracking-wider drop-shadow-md hover:[text-shadow:0_0_10px_rgba(255,255,255,1),0_0_20px_rgba(255,255,255,0.9),0_0_30px_rgba(255,255,255,0.7),0_0_50px_rgba(255,255,255,0.5)] ${activeSection === item.toLowerCase()
                                                ? 'text-accent-cyan'
                                                : 'text-white hover:text-white'
                                                }`}
                                        >
                                            {item}
                                        </Link>
                                    ))}
                                </div>
                            </LiquidGlassNavbar>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2.5 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10 transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 md:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="absolute right-0 top-0 bottom-0 w-64 bg-neutral-950 border-l border-white/10 p-6 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex flex-col gap-6 mt-20">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={`#${item.toLowerCase()}`}
                                            onClick={handleNavClick}
                                            className={`block text-lg font-semibold uppercase tracking-wider transition-all duration-300 ${activeSection === item.toLowerCase()
                                                ? 'text-accent-cyan'
                                                : 'text-white hover:text-accent-cyan'
                                                }`}
                                        >
                                            {item}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
