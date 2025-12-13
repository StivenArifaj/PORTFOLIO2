"use client";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Project } from "@/lib/projects-data";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

export function ProjectCard({ project }: { project: Project }) {
    return (
        <CardSpotlight className="h-full flex flex-col p-8 bg-neutral-950/50 backdrop-blur-sm border-neutral-800 rounded-3xl">
            <div className="relative z-20 flex-1 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1 text-xs font-semibold tracking-wide text-accent-cyan bg-accent-cyan/10 rounded-full border border-accent-cyan/20">
                        {project.category}
                    </span>
                    <div className="flex gap-3 relative z-30">
                        {project.githubUrl && (
                            <Link href={project.githubUrl} target="_blank" className="text-neutral-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
                                <Github className="w-5 h-5" />
                            </Link>
                        )}
                        {project.liveUrl && project.liveUrl !== '#' && (
                            <Link href={project.liveUrl} target="_blank" className="text-neutral-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
                                <ExternalLink className="w-5 h-5" />
                            </Link>
                        )}
                    </div>
                </div>

                <h3 className="text-2xl font-bold font-orbitron text-white mb-3 group-hover:text-accent-cyan transition-colors">
                    {project.title}
                </h3>

                <p className="text-neutral-400 leading-relaxed mb-6 text-sm line-clamp-3 flex-grow">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tag, i) => (
                        <span key={i} className="text-xs text-neutral-500 bg-neutral-900 border border-neutral-800 px-2 py-1 rounded-md">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </CardSpotlight>
    );
}
