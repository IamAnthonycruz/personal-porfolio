import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <TapeSection />
    </div>
  );
}
