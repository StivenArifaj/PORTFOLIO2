"use client";
import { Timeline } from "@/components/ui/timeline";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function Journey() {
    const data = [
        {
            title: "2024",
            content: (
                <div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan to-accent-green mb-4 font-orbitron">MoneyRush FinCity</h3>
                    <p className="text-neutral-400 font-poppins text-lg leading-relaxed mb-8">
                        Founded MoneyRush, creating a gamified financial capability platform.
                        Presented at international startup summits and achieved +55% MoM user growth.
                        Mentored by industry experts and built a comprehensive React Native ecosystem.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative h-24 rounded-2xl bg-neutral-900 overflow-hidden border border-white/10 group">
                            <GlowingEffect spread={20} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                            <div className="relative z-10 flex items-center justify-center h-full text-white font-semibold">Founder</div>
                        </div>
                        <div className="relative h-24 rounded-2xl bg-neutral-900 overflow-hidden border border-white/10 group">
                            <GlowingEffect spread={20} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                            <div className="relative z-10 flex items-center justify-center h-full text-white font-semibold">Lead Dev</div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "2022-2023",
            content: (
                <div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-4 font-orbitron">AlbaBuild & Maralago</h3>
                    <p className="text-neutral-400 font-poppins text-lg leading-relaxed mb-8">
                        Developed complex web platforms for construction and real estate sectors.
                        Mastered Next.js and Tailwind CSS while delivering high-performance production applications.
                    </p>
                    <div className="relative h-32 rounded-2xl bg-neutral-900 overflow-hidden border border-white/10 group">
                        <GlowingEffect spread={20} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                        <div className="relative z-10 flex items-center justify-center h-full text-neutral-300">Full Stack Development</div>
                    </div>
                </div>
            ),
        },
        {
            title: "2019-2021",
            content: (
                <div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-4 font-orbitron">Early Beginnings</h3>
                    <p className="text-neutral-400 font-poppins text-lg leading-relaxed mb-8">
                        Started coding journey at TUMO Center. Learned the fundamentals of logic, design, and 3D modeling.
                        Built first games and websites, igniting the passion for digital creation.
                    </p>
                </div>
            )
        }
    ];

    return (
        <section id="journey" className="bg-background w-full">
            <Timeline data={data} />
        </section>
    );
}
