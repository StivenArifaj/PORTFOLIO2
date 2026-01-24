// @ts-nocheck
'use client';

import { useEffect, useState, useRef } from 'react';

interface InteractiveRobotSplineProps {
    scene: string;
    className?: string;
    onLoad?: () => void;
}

export function InteractiveRobotSpline({ scene, className, onLoad }: InteractiveRobotSplineProps) {
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);
    const viewerRef = useRef<HTMLElement>(null);
    const [floorHidden, setFloorHidden] = useState(false);

    // Load the Spline viewer script
    useEffect(() => {
        if (document.querySelector('script[src="/spline/spline-viewer.js"]')) {
            setIsScriptLoaded(true);
            return;
        }

        const script = document.createElement('script');
        script.src = '/spline/spline-viewer.js';
        script.type = 'module';
        script.onload = () => setIsScriptLoaded(true);
        document.body.appendChild(script);
    }, []);

    // Poll for _spline to be available and hide floor
    useEffect(() => {
        if (!isScriptLoaded || floorHidden) return;

        let intervalId: NodeJS.Timeout;
        let attempts = 0;
        const maxAttempts = 50; // 50 * 200ms = 10 seconds max

        const checkAndHideFloor = () => {
            attempts++;

            const viewer = viewerRef.current;
            if (!viewer) return;

            try {
                const splineEngine = (viewer as any)._spline;
                if (splineEngine) {
                    const internalScene = splineEngine._scene || splineEngine.scene;
                    if (internalScene && internalScene.traverse) {
                        // Scene is ready, hide the floor
                        internalScene.traverse((obj: any) => {
                            if (obj.name === 'Plane') {
                                console.log('✓ Floor hidden successfully (attempt ' + attempts + ')');
                                obj.visible = false;
                            }
                        });

                        setFloorHidden(true);
                        clearInterval(intervalId);
                        if (onLoad) onLoad();
                        return;
                    }
                }
            } catch (err) {
                console.error('Error checking scene:', err);
            }

            // Stop after max attempts
            if (attempts >= maxAttempts) {
                console.warn('Could not hide floor after ' + maxAttempts + ' attempts');
                clearInterval(intervalId);
            }
        };

        // Start polling every 200ms
        intervalId = setInterval(checkAndHideFloor, 200);

        // Also try immediately
        checkAndHideFloor();

        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [isScriptLoaded, floorHidden, onLoad]);

    if (!isScriptLoaded) {
        return (
            <div className={className + " flex items-center justify-center"}>
                <div className="w-12 h-12 border-2 border-accent-cyan/30 border-t-accent-cyan rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <div className={className + " relative"}>
            {/* Loading spinner - shows until floor is hidden (scene ready) */}
            {!floorHidden && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-12 h-12 border-2 border-accent-cyan/30 border-t-accent-cyan rounded-full animate-spin" />
                </div>
            )}
            {/* @ts-ignore */}
            <spline-viewer
                ref={viewerRef}
                url={scene}
                loading-anim-type="none"
                class="w-full h-full"
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
}
