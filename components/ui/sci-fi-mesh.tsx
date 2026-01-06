'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Environment, Float } from '@react-three/drei'
import * as THREE from 'three'

function CoreMesh() {
    const outerRef = useRef<THREE.Mesh>(null)
    const innerRef = useRef<THREE.Mesh>(null)
    const ringRef = useRef<THREE.Mesh>(null)

    useFrame((state) => {
        const time = state.clock.getElapsedTime()

        if (outerRef.current) {
            outerRef.current.rotation.x = time * 0.2
            outerRef.current.rotation.y = time * 0.3
        }
        if (innerRef.current) {
            innerRef.current.rotation.x = -time * 0.4
            innerRef.current.rotation.y = -time * 0.5
        }
        if (ringRef.current) {
            ringRef.current.rotation.x = Math.sin(time * 0.5) * 0.5
            ringRef.current.rotation.y = time * 0.8
        }
    })

    return (
        <group>
            {/* Outer Wireframe Sphere */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <mesh ref={outerRef}>
                    <icosahedronGeometry args={[2.5, 0]} />
                    <meshStandardMaterial
                        color="#2EE6FF"
                        wireframe
                        transparent
                        opacity={0.3}
                        emissive="#2EE6FF"
                        emissiveIntensity={0.5}
                    />
                </mesh>
            </Float>

            {/* Inner Solid Core */}
            <Float speed={3} rotationIntensity={1} floatIntensity={0.5}>
                <mesh ref={innerRef}>
                    <octahedronGeometry args={[1.2, 0]} />
                    <meshPhysicalMaterial
                        color="#7CFFB2"
                        roughness={0}
                        metalness={1}
                        emissive="#7CFFB2"
                        emissiveIntensity={0.8}
                        clearcoat={1}
                    />
                </mesh>
            </Float>

            {/* Orbital Ring */}
            <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
                <mesh ref={ringRef}>
                    <torusGeometry args={[3.5, 0.05, 16, 100]} />
                    <meshStandardMaterial
                        color="#ffffff"
                        emissive="#ffffff"
                        emissiveIntensity={1}
                    />
                </mesh>
            </Float>
        </group>
    )
}

export default function SciFiMesh() {
    return (
        <div className="w-full h-full relative z-20">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#2EE6FF" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7CFFB2" />
                <CoreMesh />
                <Environment preset="city" />
            </Canvas>
        </div>
    )
}
