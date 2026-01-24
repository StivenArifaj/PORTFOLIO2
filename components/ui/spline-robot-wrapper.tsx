"use client";

import { useMobile } from "@/hooks/use-mobile";
import { InteractiveRobotSpline } from "@/components/ui/interactive-3d-robot";

export default function SplineRobotWrapper() {
    // Scene URL - now served locally for faster loading
    const ROBOT_SCENE_URL = "/spline/robot-scene.splinecode";

    return (
        <div className="w-full h-full min-h-[500px] flex items-center justify-center relative">
            <InteractiveRobotSpline
                scene={ROBOT_SCENE_URL}
                className="w-full h-full"
            />
        </div>
    );
}
