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
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-neutral-950/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-2"}`}>
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
                        className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
