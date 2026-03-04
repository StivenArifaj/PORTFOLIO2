"use client";
import dynamic from "next/dynamic";

// SSR OFF: heavy client-only sections (WebGL, canvas, animations)
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

export function ClientStarsCanvas() {
    return <StarsCanvas />;
}
export function ClientAbout() {
    return <About />;
}
export function ClientSkills() {
    return <Skills />;
}
export function ClientStats() {
    return <Stats />;
}
export function ClientContact() {
    return <Contact />;
}
