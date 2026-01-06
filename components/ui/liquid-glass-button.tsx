"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface LiquidGlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function LiquidGlassButton({ children, className, ...props }: LiquidGlassButtonProps) {
    return (
        <button
            className={cn(
                "relative px-8 py-4 rounded-full font-semibold text-white/90 transition-all duration-300 isolate flex items-center justify-center",
                "bg-white/25 hover:bg-white/30 backdrop-blur-[0px]",
                "[text-shadow:0_2px_4px_rgba(0,0,0,0.1)]", // Approximate text-shadow: 0 2px 4px rgb(0 0 0 / 10%)
                "shadow-[0_6px_6px_rgba(0,0,0,0.2),0_0_20px_rgba(0,0,0,0.1)]", // Base shadow
                "hover:shadow-[0_0_50px_rgba(255,255,255,0.8)]", // Shining hover effect
                "active:scale-95", // Add some click feedback
                // Before pseudo-element for glass distortion
                "before:absolute before:inset-0 before:rounded-[inherit] before:backdrop-blur-[0px] before:-z-10",
                "before:[filter:url(#lg-dist)]",
                // After pseudo-element for outline shine
                "after:absolute after:inset-0 after:rounded-[inherit] after:pointer-events-none",
                "after:shadow-[inset_2px_2px_1px_0_rgba(255,255,255,0.5),inset_-1px_-1px_1px_1px_rgba(255,255,255,0.5)]",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
