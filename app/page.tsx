import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Startup from "@/components/sections/Startup";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Journey from "@/components/sections/Journey";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-background min-h-screen selection:bg-accent-cyan/30 selection:text-white">
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
