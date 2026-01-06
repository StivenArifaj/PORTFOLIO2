import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/layout/Navbar";
import ScrollFixer from "@/components/utils/ScrollFixer";

// Dynamically import sections below the fold
const About = dynamic(() => import("@/components/sections/About"), {
  ssr: true,
});
const Startup = dynamic(() => import("@/components/sections/Startup"), {
  ssr: true,
});
const Projects = dynamic(() => import("@/components/sections/Projects"), {
  ssr: true,
});
const Skills = dynamic(() => import("@/components/sections/Skills"), {
  ssr: true,
});
const Journey = dynamic(() => import("@/components/sections/Journey"), {
  ssr: true,
});
const Contact = dynamic(() => import("@/components/sections/Contact"), {
  ssr: true,
});
const Footer = dynamic(() => import("@/components/layout/Footer"), {
  ssr: true,
});

export default function Home() {
  return (
    <main className="bg-background min-h-screen selection:bg-[#004D61]/30 selection:text-white">
      <ScrollFixer />
      <Navbar />
      <Hero />
      <About />
      <Startup />
      <Projects />
      <Skills />
      <Journey />
      <Contact />
      <Footer />
    </main>
  );
}
