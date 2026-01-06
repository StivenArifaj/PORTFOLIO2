"use client";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";
import { motion } from "framer-motion";

const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "postgresql",
    "firebase",
    "vercel",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "figma",
    "unity",
    "blender",
    "python",
    "csharp"
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 lg:py-32 overflow-hidden bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                            Skills <span className="text-muted-foreground">&</span> Tools
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 font-poppins leading-relaxed">
                            My technical stack is built on modern, scalable technologies. I specialize in the React ecosystem but love exploring 3D web experiences and game development.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {['Frontend Architecture', '3D Web Experiences', 'Full-Stack Development', 'UI/UX Design'].map((skill, i) => (
                                <span key={i} className="relative px-4 py-2 rounded-full text-sm text-white overflow-hidden">
                                    {/* Liquid glass layers */}
                                    <span className="absolute inset-0 bg-white/5 backdrop-blur-xl" />
                                    <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/15 to-white/10" />
                                    <span className="absolute inset-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] rounded-full pointer-events-none" />

                                    <span className="relative z-10">{skill}</span>
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center justify-center relative min-h-[400px] w-full"
                    >
                        <div className="relative w-full max-w-lg aspect-square">
                            <IconCloud iconSlugs={slugs} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
