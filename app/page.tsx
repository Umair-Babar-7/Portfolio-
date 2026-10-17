import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PortfolioEntrance } from "@/components/PortfolioEntrance";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CursorGlow } from "@/components/CursorGlow";
import { ExpertiseMarquee } from "@/components/ExpertiseMarquee";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Education } from "@/sections/Education";
import { Achievements } from "@/sections/Achievements";
import { TechStack } from "@/sections/TechStack";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <PortfolioEntrance>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <ExpertiseMarquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <TechStack />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </PortfolioEntrance>
  );
}
