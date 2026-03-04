import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollFixer from "@/components/utils/ScrollFixer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import {
  ClientAbout,
  ClientSkills,
  ClientStats,
  ClientContact,
} from "@/components/sections/ClientSections";

// SSR ON: text-heavy sections Google should crawl
const Startup = dynamic(() => import("@/components/sections/Startup"), {
  ssr: true,
});
const Projects = dynamic(() => import("@/components/sections/Projects"), {
  ssr: true,
});
const Journey = dynamic(() => import("@/components/sections/Journey"), {
  ssr: true,
});

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-[#004D61]/30 selection:text-white relative">
      <ScrollProgress />
      <ScrollFixer />
      <Navbar />
      <Hero />
      <ClientAbout />
      <Startup />
      <Projects />
      <ClientSkills />
      <ClientStats />
      <Journey />
      <ClientContact />
      <Footer />
    </main>
  );
}
