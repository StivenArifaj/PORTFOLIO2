'use client';

import { Suspense, lazy } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));

interface InteractiveRobotSplineProps {
    scene: string;
    className?: string;
    onLoad?: () => void;
}

export function InteractiveRobotSpline({ scene, className, onLoad }: InteractiveRobotSplineProps) {
    return (
        <Suspense
            fallback={
                <div className={`w-full h-full flex items-center justify-center bg-transparent text-white ${className}`}>
                    <div className="w-12 h-12 border-2 border-accent-cyan/30 border-t-accent-cyan rounded-full animate-spin" />
                </div>
            }
        >
            <Spline
                scene={scene}
                className={className}
                onLoad={onLoad}
            />
        </Suspense>
    );
}
