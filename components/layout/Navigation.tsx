"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Startup", href: "#startup" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Journey", href: "#journey" },
    { name: "Contact", href: "#contact" },
];

export function Navigation() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll to show/hide navbar
    useEffect(() => {
        const handleScroll = () => {
            // Show navbar after scrolling past hero (roughly 80vh)
            const scrollY = window.scrollY;
            const threshold = window.innerHeight * 0.8;
            setIsVisible(scrollY > threshold);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Track active section using Intersection Observer
    useEffect(() => {
        const sections = navLinks.map((link) =>
            document.querySelector(link.href)
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`);
                    }
                });
            },
            {
                rootMargin: "-50% 0px -50% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const handleNavClick = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
                setIsMobileMenuOpen(false);
            }
        },
        []
    );

    const scrollToContact = useCallback(() => {
        const contact = document.querySelector("#contact");
        if (contact) {
            contact.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            {/* Desktop Navigation */}
            <AnimatePresence>
                {isVisible && (
                    <motion.nav
                        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <div className="max-w-7xl mx-auto">
                            <div
                                className="glass-strong flex items-center justify-between px-6 py-3 rounded-full"
                                style={{
                                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                                }}
                            >
                                {/* Logo */}
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                    }}
                                    className="text-xl font-bold gradient-text"
                                    style={{ fontFamily: "var(--font-heading)" }}
                                >
                                    SA
                                </a>

                                {/* Desktop Nav Links */}
                                <div className="hidden md:flex items-center gap-1">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            onClick={(e) => handleNavClick(e, link.href)}
                                            className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${activeSection === link.href
                                                    ? "text-[var(--accent-cyan)]"
                                                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                                                }`}
                                        >
                                            {link.name}
                                            {activeSection === link.href && (
                                                <motion.span
                                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--accent-cyan)]"
                                                    layoutId="activeIndicator"
                                                    transition={{ duration: 0.2 }}
                                                />
                                            )}
                                        </a>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <button
                                    onClick={scrollToContact}
                                    className="hidden md:flex btn btn-primary text-sm py-2 px-5"
                                >
                                    Let's Talk
                                </button>

                                {/* Mobile Menu Button */}
                                <button
                                    onClick={() => setIsMobileMenuOpen(true)}
                                    className="md:hidden p-2 text-[var(--text-primary)]"
                                    aria-label="Open menu"
                                >
                                    <Menu className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-[100] md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Backdrop */}
                        <motion.div
                            className="absolute inset-0 bg-[var(--bg-primary)]/95 backdrop-blur-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Menu Content */}
                        <motion.div
                            className="absolute inset-0 flex flex-col items-center justify-center p-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ delay: 0.1 }}
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="absolute top-6 right-6 p-2 text-[var(--text-primary)]"
                                aria-label="Close menu"
                            >
                                <X className="w-8 h-8" />
                            </button>

                            {/* Nav Links */}
                            <nav className="flex flex-col items-center gap-6">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className={`text-2xl font-medium transition-colors ${activeSection === link.href
                                                ? "gradient-text"
                                                : "text-[var(--text-primary)]"
                                            }`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + index * 0.05 }}
                                        style={{ fontFamily: "var(--font-heading)" }}
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}

                                {/* CTA Button */}
                                <motion.button
                                    onClick={scrollToContact}
                                    className="btn btn-primary mt-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    Let's Talk
                                </motion.button>
                            </nav>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
