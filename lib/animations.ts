import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

// Animation presets for reusable animations
export const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
};

export const fadeInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
};

export const fadeInRight = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
};

export const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
};

// Stagger presets for list animations
export const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

export const staggerItem = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

// GSAP scroll trigger helpers
export function createScrollFadeIn(
    element: HTMLElement | string,
    trigger: HTMLElement | string
) {
    return gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger,
                start: "top 80%",
                end: "top 50%",
                toggleActions: "play none none reverse",
            },
        }
    );
}

export function createScrollScale(
    element: HTMLElement | string,
    trigger: HTMLElement | string
) {
    return gsap.fromTo(
        element,
        { scale: 0.8, opacity: 0 },
        {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
                trigger,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        }
    );
}

export function createParallax(
    element: HTMLElement | string,
    speed: number = 0.5
) {
    return gsap.to(element, {
        y: `${speed * 100}%`,
        ease: "none",
        scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        },
    });
}

// Magnetic effect for interactive elements
export function createMagneticEffect(element: HTMLElement, strength: number = 0.3) {
    const handleMouseMove = (e: MouseEvent) => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = (e.clientX - centerX) * strength;
        const deltaY = (e.clientY - centerY) * strength;

        gsap.to(element, {
            x: deltaX,
            y: deltaY,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = () => {
        gsap.to(element, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)",
        });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseleave", handleMouseLeave);
    };
}

// Easing functions
export const easings = {
    smooth: [0.25, 0.46, 0.45, 0.94],
    bouncy: [0.68, -0.55, 0.265, 1.55],
    snappy: [0.4, 0, 0.2, 1],
};
