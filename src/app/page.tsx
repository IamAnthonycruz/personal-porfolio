import AboutSection from "@/components/About";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import ContactSection from "@/sections/Contact";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <TapeSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
