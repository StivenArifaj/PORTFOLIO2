"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Trophy, Briefcase, Code2, Award } from "lucide-react";

interface StatCounterProps {
    end: number;
    suffix?: string;
    duration?: number;
    icon: React.ReactNode;
    label: string;
}

function StatCounter({ end, suffix = "", duration = 2, icon, label }: StatCounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let startTime: number | null = null;
            const animate = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

                setCount(Math.floor(progress * end));

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);
        }
    }, [isInView, end, duration]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative group"
        >
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-accent-cyan/50 transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-4 rounded-full bg-gradient-to-br from-accent-cyan/20 to-accent-green/20 border border-accent-cyan/30">
                        {icon}
                    </div>
                    <div className="text-5xl font-bold font-orbitron bg-gradient-to-r from-accent-cyan to-accent-green bg-clip-text text-transparent mb-2">
                        {count}{suffix}
                    </div>
                    <p className="text-neutral-300 text-sm uppercase tracking-wider font-semibold">
                        {label}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default function Stats() {
    return (
        <section id="stats" className="py-20 lg:py-32 bg-gradient-to-b from-background via-neutral-950 to-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-green rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                        By The Numbers
                    </h2>
                    <p className="text-xl text-neutral-300 max-w-2xl mx-auto font-poppins">
                        Delivering impact through code, one project at a time.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <StatCounter
                        end={15}
                        suffix="+"
                        icon={<Code2 className="w-8 h-8 text-accent-cyan" />}
                        label="Projects Delivered"
                    />
                    <StatCounter
                        end={500}
                        suffix="€"
                        icon={<Trophy className="w-8 h-8 text-accent-green" />}
                        label="Prize Won"
                    />
                    <StatCounter
                        end={3}
                        suffix="rd"
                        icon={<Award className="w-8 h-8 text-[#FF6B9D]" />}
                        label="Startup City Rank"
                    />
                    <StatCounter
                        end={100}
                        suffix="%"
                        icon={<Briefcase className="w-8 h-8 text-[#A78BFA]" />}
                        label="Client Satisfaction"
                    />
                </div>
            </div>
        </section>
    );
}
