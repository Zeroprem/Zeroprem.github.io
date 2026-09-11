import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Credentials } from "@/components/sections/Credentials";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Impact } from "@/components/sections/Impact";
import { ResumeCta } from "@/components/sections/ResumeCta";
import { Skills } from "@/components/sections/Skills";
import { Work } from "@/components/sections/Work";

export default function Home() {
  return (
    <main id="main" className="flex-1">
      <Hero />
      <About />
      <Impact />
      <Experience />
      <Work />
      <Skills />
      <Credentials />
      <ResumeCta />
      <Contact />
    </main>
  );
}
