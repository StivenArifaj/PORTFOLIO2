"use client";
import React, { useState } from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { Button } from "@/components/ui/button";
import { Send, Mail, Github, Linkedin, Twitter, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";

export default function Contact() {
    const isMobile = useMobile();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: null, message: '' });

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/mbldvbvg', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
                form.reset();
            } else {
                setStatus({ type: 'error', message: 'Failed to send message. Please try emailing me directly.' });
            }
        } catch (error) {
            console.error('Formspree Error:', error);
            setStatus({ type: 'error', message: 'Failed to send message. Please try emailing me directly.' });
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setStatus({ type: null, message: '' }), 5000);
        }
    };

    return (
        <section id="contact" className="relative min-h-screen w-full flex items-center justify-center bg-[#030014] overflow-hidden py-20">
            {/* Canvas Reveal - Desktop only for performance */}
            {!isMobile && (
                <div className="absolute inset-0 w-full h-full">
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-[#030014]"
                        colors={[
                            [229, 156, 255], // Space Purple (#e59cff)
                            [156, 178, 255], // Space Blue (#9cb2ff)
                        ]}
                        dotSize={2}
                        opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                    />
                </div>
            )}

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: isMobile ? 1 : 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: isMobile ? 0.3 : 0.8 }}
                    viewport={{ once: true }}
                    className={`w-full max-w-4xl relative rounded-[2rem] p-8 md:p-12 overflow-hidden group ${isMobile
                        ? 'bg-white/10 backdrop-blur-sm border border-white/10'
                        : 'isolate shadow-[0_0_50px_rgba(42,14,97,0.4)] bg-[#0f0c29]/50'
                        }`}
                >
                    {/* Liquid Glass Layers - Desktop only */}
                    {!isMobile && (
                        <>
                            <div className="absolute inset-0 z-0 backdrop-blur-[0px] [filter:url(#lg-dist)] isolate" />
                            <div className="absolute inset-0 z-10 bg-white/25" />
                            <div className="absolute inset-0 z-20 rounded-[inherit] overflow-hidden shadow-[inset_1px_1px_0_rgba(255,255,255,0.75),inset_0_0_5px_rgba(255,255,255,0.75)] pointer-events-none" />
                            <div className="absolute inset-x-0 top-0 h-px z-30 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                        </>
                    )}

                    <div className="relative z-30 grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold font-orbitron text-white">Let's Build Something</h2>
                            <p className="text-neutral-300 font-poppins leading-relaxed">
                                Ready to bring your vision to life? Whether it's a new project or a coffee chat, I'm just a message away.
                            </p>

                            <div className="space-y-4 pt-6">
                                <a href="mailto:stivenarifaj1@gmail.com" className="group flex items-center gap-4 text-white hover:text-neutral-300 transition-colors">
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group-hover:bg-white/10 transition-all">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <span className="text-lg">stivenarifaj1@gmail.com</span>
                                </a>

                                <div className="flex gap-4 pt-4">
                                    <Link
                                        href="https://github.com/stivenarifaj"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-4 rounded-2xl bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all"
                                    >
                                        <Github className="w-5 h-5" />
                                    </Link>
                                    <Link
                                        href="https://linkedin.com/in/stivenarifaj"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-4 rounded-2xl bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </Link>
                                    <Link
                                        href="https://twitter.com/stivenarifaj"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-4 rounded-2xl bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all"
                                    >
                                        <Twitter className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-wider text-neutral-300 font-semibold ml-1">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all backdrop-blur-sm shadow-inner"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-wider text-neutral-300 font-semibold ml-1">Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all backdrop-blur-sm shadow-inner"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-wider text-neutral-300 font-semibold ml-1">Message</label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all backdrop-blur-sm resize-none shadow-inner"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            {/* Status Messages */}
                            <AnimatePresence>
                                {status.type && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className={`flex items-center gap-2 p-4 rounded-xl ${status.type === 'success'
                                            ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                                            : 'bg-red-500/10 border border-red-500/20 text-red-400'
                                            }`}
                                    >
                                        {status.type === 'success' ? (
                                            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                                        ) : (
                                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                        )}
                                        <span className="text-sm">{status.message}</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full mt-2 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 font-semibold py-6 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="animate-pulse">Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send className="w-4 h-4 ml-2" />
                                    </>
                                )}
                            </Button>

                            {/* Response Time Indicator */}
                            <p className="text-sm text-neutral-400 text-center mt-4 flex items-center justify-center gap-2">
                                <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                Usually responds within 24 hours
                            </p>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
