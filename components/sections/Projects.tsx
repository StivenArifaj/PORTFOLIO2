"use client";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { projects } from "@/lib/projects-data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
    return (
        <section id="projects" className="relative py-20 lg:py-32 min-h-screen bg-background text-foreground overflow-hidden">
            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 bg-gradient-to-r from-accent-cyan to-accent-green bg-clip-text text-transparent">
                        My Creations
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-poppins">
                        A showcase of innovative projects merging design and technology.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="relative h-full rounded-[2.5rem] border border-white/5 bg-neutral-900/50 backdrop-blur-sm overflow-hidden"
                        >
                            <GlowingEffect
                                spread={40}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                            />

                            <div className="relative z-10 h-full flex flex-col p-6">
                                {/* Project Image Area */}
                                <div className="relative h-56 w-full rounded-[2rem] overflow-hidden mb-6 bg-neutral-950 group">
                                    {/* Placeholder or real image */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 transition-transform duration-500 group-hover:scale-105" />
                                    {/* If images are available, uncomment: */}
                                    {/* <Image src={project.image} fill alt={project.title} className="object-cover" /> */}

                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                                        <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 text-sm">View Details</span>
                                    </div>
                                </div>

                                <div className="flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-2xl font-bold text-white font-orbitron">{project.title}</h3>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.slice(0, 3).map(tag => (
                                            <span key={tag} className="text-xs px-2 py-1 rounded-md bg-neutral-800 text-neutral-400 border border-neutral-700">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-poppins flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex items-center gap-4 mt-auto">
                                        <Link href={project.liveUrl} target="_blank" className="flex-1">
                                            <Button className="w-full rounded-full bg-white text-black hover:bg-neutral-200 font-semibold gap-2">
                                                Live Demo <ArrowUpRight className="w-4 h-4" />
                                            </Button>
                                        </Link>
                                        <Link href={project.githubUrl} target="_blank">
                                            <Button variant="outline" size="icon" className="rounded-full border-neutral-700 bg-black/40 text-white hover:bg-white/10 w-10 h-10">
                                                <Github className="w-4 h-4" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
