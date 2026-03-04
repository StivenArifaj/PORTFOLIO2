"use client";
import dynamic from "next/dynamic";
import { useRef, useState, useEffect } from "react";

const About = dynamic(() => import("@/components/sections/About"), {
    ssr: false,
});
const Skills = dynamic(() => import("@/components/sections/Skills"), {
    ssr: false,
});
const Stats = dynamic(() => import("@/components/sections/Stats"), {
    ssr: false,
});
const Contact = dynamic(() => import("@/components/sections/Contact"), {
    ssr: false,
});
const StarsCanvas = dynamic(
    () => import("@/components/ui/star-background").then(m => m.StarsCanvas),
    { ssr: false }
);

function LazySection({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "300px" }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    return <div ref={ref}>{visible ? children : null}</div>;
}

export function ClientStarsCanvas() {
    return <StarsCanvas />;
}
export function ClientAbout() {
    return <LazySection><About /></LazySection>;
}
export function ClientSkills() {
    return <LazySection><Skills /></LazySection>;
}
export function ClientStats() {
    return <LazySection><Stats /></LazySection>;
}
export function ClientContact() {
    return <LazySection><Contact /></LazySection>;
}
