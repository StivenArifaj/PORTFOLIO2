"use client";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { projects } from "@/lib/projects-data";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, ChevronDown, ChevronUp, X, ChevronLeft, ChevronRight, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useCallback } from "react";

// Screenshot Gallery Modal for Mobile Apps
function ScreenshotGallery({
    screenshots,
    projectTitle,
    isOpen,
    onClose
}: {
    screenshots: string[];
    projectTitle: string;
    isOpen: boolean;
    onClose: () => void;
}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, [screenshots.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    }, [screenshots.length]);

    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl w-full bg-neutral-950 rounded-none p-6 border border-neutral-800"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <Smartphone className="w-6 h-6 text-accent-cyan" />
                        <h3 className="text-xl font-bold text-white font-orbitron">{projectTitle}</h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors"
                    >
                        <X className="w-5 h-5 text-white" />
                    </button>
                </div>

                {/* Main Screenshot */}
                <div className="relative flex items-center justify-center mb-6 h-[60vh]">
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors border border-neutral-700"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>

                    <div className="relative w-auto h-full aspect-[9/19.5] mx-auto rounded-none overflow-hidden shadow-2xl">
                        <Image
                            src={screenshots[currentIndex]}
                            alt={`${projectTitle} screenshot ${currentIndex + 1}`}
                            fill
                            className="object-contain"
                            quality={100}
                            priority
                        />
                    </div>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors border border-neutral-700"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                </div>

                {/* Thumbnail Strip */}
                <div className="flex gap-2 overflow-x-auto pb-2 justify-center">
                    {screenshots.map((screenshot, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`relative w-12 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all bg-black ${index === currentIndex
                                ? 'border-accent-cyan scale-110'
                                : 'border-neutral-700 opacity-60 hover:opacity-100'
                                }`}
                        >
                            <Image
                                src={screenshot}
                                alt={`Thumbnail ${index + 1}`}
                                fill
                                className="object-contain p-1"
                                sizes="50px"
                            />
                        </button>
                    ))}
                </div>

                {/* Counter */}
                <p className="text-center text-neutral-400 mt-4 text-sm">
                    {currentIndex + 1} / {screenshots.length}
                </p>
            </motion.div>
        </motion.div>
    );
}

export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<{ title: string; screenshots: string[] } | null>(null);
    const [activeFilter, setActiveFilter] = useState<string>('all');

    const INITIAL_COUNT = 6;

    // Filter projects based on active filter
    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_COUNT);
    const hasMoreProjects = filteredProjects.length > INITIAL_COUNT;

    const categories = ['all', 'WEB APP', 'MOBILE APP', 'SAAS', 'UTILITY'];

    const openGallery = (title: string, screenshots: string[]) => {
        setSelectedProject({ title, screenshots });
        setGalleryOpen(true);
    };

    return (
        <section id="projects" className="py-24 relative overflow-hidden bg-background">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-bold mb-6 font-orbitron tracking-tighter">
                        MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-blue liquid-glass-text">CREATIONS</span>
                    </h2>
                    <p className="text-xl text-neutral-200 max-w-2xl mx-auto font-poppins">
                        A showcase of innovative projects merging design and technology.
                    </p>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                        {categories.map((category) => (
                            <motion.button
                                key={category}
                                onClick={() => {
                                    setActiveFilter(category);
                                    setShowAll(false);
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${activeFilter === category
                                        ? 'bg-gradient-to-r from-accent-cyan to-accent-green text-black shadow-[0_0_20px_rgba(46,230,255,0.5)]'
                                        : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                                    }`}
                            >
                                {category === 'all' ? 'All Projects' : category}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {displayedProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                layout
                                className="relative h-full rounded-[2.5rem] liquid-glass"
                            >
                                <GlowingEffect
                                    spread={60}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                    borderWidth={3}
                                />

                                <div className="relative z-10 h-full flex flex-col p-6">
                                    {/* Project Image Area */}
                                    <div
                                        className={`relative h-64 w-full rounded-[2rem] overflow-hidden mb-6 group cursor-pointer flex items-center justify-center ${project.id === 'mediflow'
                                            ? 'bg-gradient-to-br from-[#0D9488]/20 via-[#1E3A8A]/20 to-[#4F46E5]/20 border border-white/5'
                                            : 'bg-neutral-950'
                                            }`}
                                        onClick={() => {
                                            if (project.isMobileApp && project.screenshots) {
                                                openGallery(project.title, project.screenshots);
                                            } else {
                                                window.open(project.liveUrl, '_blank');
                                            }
                                        }}
                                    >
                                        {project.id === 'mediflow' ? (
                                            /* MediFlow Specific Montage */
                                            <div className="relative w-full h-full flex items-center justify-center isolate overflow-hidden">
                                                {/* Left Screen (Health Tracker) */}
                                                <div className="absolute left-[18%] w-[26%] h-[85%] -rotate-12 transition-all duration-500 group-hover:-translate-x-6 group-hover:-rotate-[15deg] z-10 opacity-80 blur-[0.5px] group-hover:blur-0 group-hover:opacity-100">
                                                    <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden border-[4px] border-neutral-900 bg-neutral-900 shadow-xl">
                                                        <Image
                                                            src="/Mediflow_Screenshots/Screenshot_20251227-220131.png"
                                                            fill
                                                            alt="Health Tracker"
                                                            className="object-cover"
                                                            sizes="(max-width: 768px) 30vw, 10vw"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Right Screen (Details) */}
                                                <div className="absolute right-[18%] w-[26%] h-[85%] rotate-12 transition-all duration-500 group-hover:translate-x-6 group-hover:rotate-[15deg] z-10 opacity-80 blur-[0.5px] group-hover:blur-0 group-hover:opacity-100">
                                                    <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden border-[4px] border-neutral-900 bg-neutral-900 shadow-xl">
                                                        <Image
                                                            src="/Mediflow_Screenshots/Screenshot_20251227-220201.png"
                                                            fill
                                                            alt="Details Screen"
                                                            className="object-cover"
                                                            sizes="(max-width: 768px) 30vw, 10vw"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Center Screen (Home - No Medicines) - Main Focus */}
                                                <div className="relative w-[30%] h-[95%] z-20 transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 drop-shadow-2xl">
                                                    <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden border-[6px] border-neutral-900 bg-neutral-900 shadow-2xl ring-1 ring-white/10">
                                                        {/* Notch approximation */}
                                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[20px] bg-neutral-900 rounded-b-[0.8rem] z-30"></div>
                                                        <Image
                                                            src="/Mediflow_Screenshots/Screenshot_20251227-220000.png"
                                                            fill
                                                            alt="Home Screen"
                                                            className="object-cover"
                                                            priority
                                                            sizes="(max-width: 768px) 35vw, 12vw"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            /* Standard Project Display */
                                            <Image
                                                src={project.image}
                                                fill
                                                alt={project.title}
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-contain md:object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        )}

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4 z-20">
                                            <span className={`px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-md border ${project.category === 'MOBILE APP'
                                                ? 'bg-purple-500/20 border-purple-500/40 text-purple-300'
                                                : project.category === 'SAAS'
                                                    ? 'bg-accent-cyan/20 border-accent-cyan/40 text-accent-cyan'
                                                    : project.category === 'UTILITY'
                                                        ? 'bg-orange-500/20 border-orange-500/40 text-orange-300'
                                                        : 'bg-accent-green/20 border-accent-green/40 text-accent-green'
                                                }`}>
                                                {project.category}
                                            </span>
                                        </div>

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 z-10">
                                            <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 text-sm font-semibold">
                                                {project.isMobileApp ? 'View Screenshots' : 'View Details'}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col flex-grow">
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="text-2xl font-bold text-white font-orbitron">{project.title}</h3>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.slice(0, 3).map(tag => (
                                                <span key={tag} className="text-xs px-2 py-1 rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700">
                                                    {tag}
                                                </span>
                                            ))}
                                            {project.tech.length > 3 && (
                                                <span className="text-xs px-2 py-1 rounded-md bg-neutral-800 text-neutral-400 border border-neutral-700">
                                                    +{project.tech.length - 3}
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-neutral-300 text-sm leading-relaxed mb-6 font-poppins flex-grow">
                                            {project.description}
                                        </p>

                                        <div className="flex items-center gap-4 mt-auto">
                                            {project.isMobileApp && project.screenshots ? (
                                                <Button
                                                    onClick={() => openGallery(project.title, project.screenshots!)}
                                                    className="flex-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 font-semibold gap-2"
                                                >
                                                    <Smartphone className="w-4 h-4" /> Watch Demo
                                                </Button>
                                            ) : (
                                                <Link href={project.liveUrl} target="_blank" className="flex-1">
                                                    <Button className="w-full rounded-full bg-white text-black hover:bg-neutral-200 font-semibold gap-2">
                                                        Live Demo <ArrowUpRight className="w-4 h-4" />
                                                    </Button>
                                                </Link>
                                            )}
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
                    </AnimatePresence>
                </div>

                {/* Show More / Show Less Button */}
                {hasMoreProjects && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-center mt-16"
                    >
                        <Button
                            onClick={() => setShowAll(!showAll)}
                            variant="outline"
                            className="rounded-full px-8 py-6 text-lg font-semibold border-2 border-accent-cyan/50 bg-transparent text-white hover:bg-accent-cyan/10 hover:border-accent-cyan transition-all duration-300 gap-3"
                        >
                            {showAll ? (
                                <>
                                    Show Less <ChevronUp className="w-5 h-5" />
                                </>
                            ) : (
                                <>
                                    Show More ({projects.length - INITIAL_COUNT} more projects) <ChevronDown className="w-5 h-5" />
                                </>
                            )}
                        </Button>
                    </motion.div>
                )}
            </div>

            {/* Screenshot Gallery Modal */}
            <AnimatePresence>
                {galleryOpen && selectedProject && (
                    <ScreenshotGallery
                        screenshots={selectedProject.screenshots}
                        projectTitle={selectedProject.title}
                        isOpen={galleryOpen}
                        onClose={() => {
                            setGalleryOpen(false);
                            setSelectedProject(null);
                        }}
                    />
                )}
            </AnimatePresence>
        </section >
    );
}
