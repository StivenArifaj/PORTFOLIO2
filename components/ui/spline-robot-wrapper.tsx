"use client";

import { useMobile } from "@/hooks/use-mobile";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Lazy load the actual heavy robot component
const SplineRobotContent = dynamic(() => import("@/components/ui/spline-robot-content"), {
    ssr: false,
    loading: () => null,
});

export default function SplineRobotWrapper() {
    const isMobile = useMobile();

    // On mobile, delay loading slightly or use intersection observer deeply
    // But for now, just render it. The optimizations are inside the content.
    return (
        <Suspense fallback={null}>
            <SplineRobotContent />
        </Suspense>
    );
}
