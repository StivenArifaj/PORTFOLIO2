"use client";

import { useEffect, useRef } from 'react';
import { Bot } from 'lucide-react';
import { useMobile } from '@/hooks/use-mobile';

export default function SplineRobotContent() {
    const viewerRef = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Load Spline Script
    useEffect(() => {
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
    }, []);

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
