import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CursorGlow } from "@/components/CursorGlow";
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
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
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
    </>
  );
}
