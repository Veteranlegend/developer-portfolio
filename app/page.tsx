import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Sidebar />

      <main className="relative z-10 xl:pl-44 2xl:pl-52">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
    </>
  );
}