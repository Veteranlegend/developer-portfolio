import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/contact";
import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";

export const revalidate = 3600;

export default async function Home() {
  const projects = await client.fetch(PROJECTS_QUERY, {}, { next: { tags: ["projects"] } });

  return (
    <>
      <Sidebar />

      <main className="relative z-10 xl:pl-44 2xl:pl-52">
        <Hero />
        <Projects projects={projects} />
        <Skills />
        <About />
        <Contact />
      </main>
    </>
  );
}