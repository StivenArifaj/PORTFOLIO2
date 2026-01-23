"use client";

import { useEffect, useRef } from 'react';
import { Bot } from 'lucide-react';
import { useMobile } from '@/hooks/use-mobile';

export default function SplineRobot() {
    const isMobile = useMobile();
    const viewerRef = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // DESKTOP: Load Spline Script Immediately
    useEffect(() => {
        if (isMobile) return;

        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://unpkg.com/@splinetool/viewer@1.9.59/build/spline-viewer.js';
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                try {
                    document.body.removeChild(script);
                } catch (e) {
                    // Ignore if script already removed
                }
            }
        };
    }, [isMobile]);

    // MOBILE: Lightweight animated icon (0% CPU) - Early return
    if (isMobile) {
        return (
            <div className="w-full h-full flex items-center justify-center relative">
                <div className="relative">
                    {/* Glowing ring */}
                    <div className="absolute inset-0 w-48 h-48 rounded-full bg-gradient-to-br from-accent-cyan/30 to-accent-blue/20 blur-xl animate-pulse" />

                    {/* Robot icon container */}
                    <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/10 flex items-center justify-center shadow-2xl">
                        <Bot className="w-24 h-24 text-accent-cyan" strokeWidth={1.5} />
                    </div>

                    {/* Orbit ring */}
                    <div className="absolute inset-[-20px] border border-accent-cyan/20 rounded-full animate-spin" style={{ animationDuration: '10s' }} />
                </div>
            </div>
        );
    }

    // DESKTOP: Spline Viewer
    return (
        <div ref={containerRef} className="w-full h-full flex items-center justify-center relative overflow-hidden">
            {/* @ts-ignore */}
            <spline-viewer
                ref={viewerRef}
                loading-anim-type="spinner-small-dark"
                url="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    background: 'transparent'
                }}
            />
        </div>
    );
}
