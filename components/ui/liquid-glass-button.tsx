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
                "relative px-8 py-4 rounded-full font-semibold text-white/95 transition-all duration-300 isolate flex items-center justify-center",
                "bg-white/10 hover:bg-white/15 backdrop-blur-md",
                "[text-shadow:0_1px_2px_rgba(0,0,0,0.2)]",
                "shadow-[0_8px_32px_rgba(0,0,0,0.15)]",
                "hover:shadow-[0_8px_40px_rgba(255,255,255,0.15),0_0_60px_rgba(156,178,255,0.2)]",
                "active:scale-95",
                "border border-white/20",
                // Before pseudo-element for subtle glass distortion
                "before:absolute before:inset-0 before:rounded-[inherit] before:backdrop-blur-sm before:-z-10",
                "before:[filter:url(#lg-dist)]",
                // After pseudo-element for premium inner glow
                "after:absolute after:inset-0 after:rounded-[inherit] after:pointer-events-none",
                "after:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),inset_0_-1px_1px_rgba(255,255,255,0.1)]",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
