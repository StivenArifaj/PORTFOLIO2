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
