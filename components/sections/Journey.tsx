"use client";
import dynamic from "next/dynamic";
import { Timeline } from "@/components/ui/timeline";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useMobile } from "@/hooks/use-mobile";

const StarsCanvas = dynamic(() => import("@/components/ui/star-background").then(mod => mod.StarsCanvas), {
    ssr: false,
});

export default function Journey() {
    const isMobile = useMobile();
    const data = [
        {
            title: "Nov 2022 – Oct 2024",
            content: (
                <div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 mb-4 font-orbitron">TUMO: Exploration & Learning</h3>
                    <p className="text-neutral-300 font-poppins text-lg leading-relaxed mb-4">
                        Began and completed a comprehensive journey at TUMO Center for Creative Technologies, developing foundational skills in technology, digital design, and problem-solving.
                    </p>
                </div>
            ),
        },
        {
            title: "Oct 2024",
            content: (
                <div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400 mb-4 font-orbitron">ICT Specialization Begins</h3>
                    <p className="text-neutral-300 font-poppins text-lg leading-relaxed mb-4">
                        Started focusing on ICT subjects to build stronger computing and programming skills.
                    </p>
                </div>
            ),
        },
        {
            title: "2023 – 2024",
            content: (
                <div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 font-orbitron">Professional Web Development</h3>
                    <p className="text-neutral-300 font-poppins text-lg leading-relaxed mb-4">
                        Studied web development through TUMO School and self-learning, gaining hands-on experience with web technologies and practical projects.
                    </p>
                </div>
            ),
        },
        {
            title: "2024 – 2025",
            content: (
                <div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 mb-4 font-orbitron">Competitions & Hackathons</h3>
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-white font-semibold text-lg mb-2">STEAM Barleti Program</h4>
                            <p className="text-neutral-300 text-base">Participated in an interdisciplinary Science, Technology, Engineering, Arts & Mathematics program, enhancing problem-solving and teamwork skills.</p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold text-lg mb-2">JunctionX (International Hackathon)</h4>
                            <p className="text-neutral-300 text-base">Competed on a global level, gaining experience in collaborative tech projects.</p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold text-lg mb-2">GameJam3 (48h Challenge)</h4>
                            <p className="text-neutral-300 text-base">Developed a functional prototype under tight deadlines, improving rapid development and project management skills.</p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "2024 – 2025",
            content: (
                <div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-rose-400 mb-4 font-orbitron">Leadership Recognition</h3>
                    <p className="text-neutral-300 font-poppins text-lg leading-relaxed mb-4">
                        Acknowledged for active participation and contribution in academic and extracurricular tech programs.
                    </p>
                </div>
            ),
        },
        {
            title: "2024",
            content: (
                <div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500 mb-4 font-orbitron">The Birth of MoneyRush</h3>
                    <p className="text-neutral-300 font-poppins text-lg leading-relaxed mb-4">
                        Founded MoneyRush, an educational app gamifying personal finance for young people.
                    </p>
                </div>
            ),
        },
        {
            title: "June 2025",
            content: (
                <div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 mb-4 font-orbitron">MoneyRush won Third Place</h3>
                    <p className="text-neutral-300 font-poppins text-lg leading-relaxed mb-2">
                        <strong>Prize:</strong> €500 + Incubation Support from METINC
                    </p>
                    <p className="text-neutral-300 font-poppins text-base leading-relaxed">
                        MoneyRush teaches financial literacy through interactive gameplay. Players learn budgeting, saving, investing, and planning, supported by a virtual AI advisor and personalized content. Recognized as an innovative tool for youth financial education.
                    </p>
                </div>
            ),
        },
        {
            title: "2025 – Present",
            content: (
                <div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan to-accent-green mb-4 font-orbitron">Active Roles & Expertise</h3>
                    <div className="text-neutral-300 font-poppins text-lg leading-relaxed mb-8 space-y-4">
                        <p>Balancing multiple high-impact roles:</p>
                        <ul className="list-disc pl-5 space-y-2 text-base">
                            <li><strong className="text-white">Student:</strong> Hermann Gmeiner ICT School (Year 2 of 4)</li>
                            <li><strong className="text-white">Founder:</strong> Lead Developer of MoneyRush</li>
                            <li><strong className="text-white">Developer:</strong> Independent Web Developer (15+ client projects)</li>
                        </ul>
                        <div className="mt-4">
                            <h4 className="text-white font-semibold mb-2">Technical Expertise:</h4>
                            <p className="text-sm text-neutral-400">Web development (React, Next.js, TypeScript), Design (Figma, Adobe XD)</p>
                        </div>
                    </div>
                </div>
            ),
        }
    ];

    return (
        <section id="journey" className="w-full relative">
            <div className="relative z-10">
                <Timeline data={data} />
            </div>
        </section>
    );
}
