import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/contact";
import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";

export const revalidate = 3600;

export default async function Home() {
  const [projects, settings] = await Promise.all([
    client.fetch(PROJECTS_QUERY, {}, { next: { tags: ["projects"] } }),
    client.fetch(SITE_SETTINGS_QUERY, {}, { next: { tags: ["siteSettings"] } }),
  ]);

  return (
    <>
      <Sidebar />

      <main className="relative z-10 xl:pl-44 2xl:pl-52">
        <Hero data={settings} />
        <Projects projects={projects} />
        <Skills skillGroups={settings?.skillGroups ?? []} />
        <About data={settings} />
        <Contact data={settings} />
      </main>
    </>
  );
}
