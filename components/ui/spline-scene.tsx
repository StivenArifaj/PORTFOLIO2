'use client'

import Spline from '@splinetool/react-spline'
import { Suspense } from 'react'

export default function SplineScene({ scene, className }: { scene: string, className?: string }) {
    return (
        <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-neutral-500">Loading 3D Scene...</div>}>
            <Spline scene={scene} className={className} />
        </Suspense>
    )
}
