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
                                <div className="relative flex items-center justify-between rounded-[2rem] overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,2.2)] shadow-[0_6px_6px_rgba(0,0,0,0.2),0_0_20px_rgba(0,0,0,0.1)]">
                                    {/* TRUE Liquid Glass Layers - Same as LiquidGlassNavbar */}
                                    <div className="absolute inset-0 z-0 backdrop-blur-[0px] [filter:url(#lg-dist)] isolate" />
                                    <div className="absolute inset-0 z-10 bg-white/25" />
                                    <div className="absolute inset-0 z-20 rounded-[inherit] overflow-hidden shadow-[inset_1px_1px_0_rgba(255,255,255,0.75),inset_0_0_5px_rgba(255,255,255,0.75)] pointer-events-none" />

                                    {/* Content */}
                                    <div className="relative z-30 flex items-center justify-between w-full px-8 py-3">
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

                    {/* Mobile Menu Button - TRUE Liquid Glass */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden relative isolate p-2.5 rounded-xl overflow-hidden text-white transition-all shadow-[0_6px_6px_rgba(0,0,0,0.2),0_0_20px_rgba(0,0,0,0.1)]"
                        aria-label="Toggle menu"
                    >
                        <div className="absolute inset-0 z-0 backdrop-blur-[0px] [filter:url(#lg-dist)] isolate" />
                        <div className="absolute inset-0 z-10 bg-white/25" />
                        <div className="absolute inset-0 z-20 rounded-[inherit] shadow-[inset_1px_1px_0_rgba(255,255,255,0.75),inset_0_0_5px_rgba(255,255,255,0.75)] pointer-events-none" />
                        <span className="relative z-30">{mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}</span>
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
                            className="absolute right-0 top-0 bottom-0 w-64 p-6 shadow-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* EXACT Liquid Glass Layers from Desktop */}
                            <div className="absolute inset-0 z-0 backdrop-blur-[0px] [filter:url(#lg-dist)] isolate" />
                            <div className="absolute inset-0 z-10 bg-white/25" />
                            <div className="absolute inset-0 z-20 rounded-[inherit] overflow-hidden shadow-[inset_1px_1px_0_rgba(255,255,255,0.75),inset_0_0_5px_rgba(255,255,255,0.75)] pointer-events-none" />

                            <div className="relative z-30 flex flex-col gap-6 mt-20">
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
                                            className={`block text-lg font-semibold uppercase tracking-wider transition-all duration-300 drop-shadow-sm ${activeSection === item.toLowerCase()
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
