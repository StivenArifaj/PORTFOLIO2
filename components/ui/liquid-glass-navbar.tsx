"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LiquidGlassNavbarProps {
    children: React.ReactNode;
    className?: string;
}

export function LiquidGlassNavbar({ children, className }: LiquidGlassNavbarProps) {
    return (
        <div className={cn("relative isolate", className)}>
            <div className="relative flex items-center justify-between rounded-[2rem] overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,2.2)] shadow-[0_6px_6px_rgba(0,0,0,0.2),0_0_20px_rgba(0,0,0,0.1)]">
                {/* Glass Layers */}
                <div className="absolute inset-0 z-0 backdrop-blur-[0px] [filter:url(#lg-dist)] isolate" />
                <div className="absolute inset-0 z-10 bg-white/25" />
                <div className="absolute inset-0 z-20 rounded-[inherit] overflow-hidden shadow-[inset_1px_1px_0_rgba(255,255,255,0.75),inset_0_0_5px_rgba(255,255,255,0.75)] pointer-events-none" />

                {/* Content */}
                <div className="relative z-30 flex items-center justify-between w-full px-8 py-3">
                    {children}
                </div>
            </div>
        </div>
    );
}
