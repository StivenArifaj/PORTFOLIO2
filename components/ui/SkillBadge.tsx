"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
    name: string;
    index?: number;
}

export function SkillBadge({ name, index = 0 }: SkillBadgeProps) {
    return (
        <motion.span
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-full 
                 bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/20
                 text-[var(--text-primary)] transition-all duration-300
                 hover:bg-[var(--accent-cyan)]/20 hover:border-[var(--accent-cyan)]/40
                 hover:shadow-[0_0_15px_var(--glow-cyan-subtle)]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.3,
                delay: index * 0.05,
                ease: "easeOut",
            }}
            whileHover={{ scale: 1.05 }}
        >
            {/* Green dot indicator */}
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)]" />
            {name}
        </motion.span>
    );
}
