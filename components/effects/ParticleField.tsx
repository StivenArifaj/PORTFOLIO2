"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    color: string;
}

interface ParticleFieldProps {
    className?: string;
    particleCount?: number;
    colors?: string[];
    minSize?: number;
    maxSize?: number;
    speed?: number;
}

export function ParticleField({
    className = "",
    particleCount = 50,
    colors = ["#2EE6FF", "#7CFFB2", "#ffffff"],
    minSize = 1,
    maxSize = 3,
    speed = 0.5,
}: ParticleFieldProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationFrameRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
            }
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Initialize particles
        const initParticles = () => {
            particlesRef.current = [];
            for (let i = 0; i < particleCount; i++) {
                particlesRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * (maxSize - minSize) + minSize,
                    speedX: (Math.random() - 0.5) * speed,
                    speedY: (Math.random() - 0.5) * speed,
                    opacity: Math.random() * 0.5 + 0.2,
                    color: colors[Math.floor(Math.random() * colors.length)],
                });
            }
        };
        initParticles();

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particlesRef.current.forEach((particle) => {
                // Update position
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                // Wrap around edges
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.globalAlpha = particle.opacity;
                ctx.fill();

                // Draw glow
                const gradient = ctx.createRadialGradient(
                    particle.x,
                    particle.y,
                    0,
                    particle.x,
                    particle.y,
                    particle.size * 3
                );
                gradient.addColorStop(0, particle.color);
                gradient.addColorStop(1, "transparent");
                ctx.fillStyle = gradient;
                ctx.globalAlpha = particle.opacity * 0.3;
                ctx.fill();
            });

            ctx.globalAlpha = 1;
            animationFrameRef.current = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameRef.current);
        };
    }, [particleCount, colors, minSize, maxSize, speed]);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 pointer-events-none ${className}`}
        />
    );
}
