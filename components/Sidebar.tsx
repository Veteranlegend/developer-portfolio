"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home", sectionId: "home" },
  { label: "Projects", href: "#projects", sectionId: "projects" },
  { label: "Skills", href: "#skills", sectionId: "skills" },
  { label: "Profile", href: "#about", sectionId: "about" },
  { label: "Connect", href: "#contact", sectionId: "contact" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .map((item) => ({
          id: item.sectionId,
          element: document.getElementById(item.sectionId),
        }))
        .filter(
          (item): item is { id: string; element: HTMLElement } =>
            item.element !== null
        );

      if (sections.length === 0) return;

      const viewportCenter = window.innerHeight / 2;

      let closestSection = "home";
      let smallestDistance = Number.POSITIVE_INFINITY;

      for (const section of sections) {
        const rect = section.element.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestSection = section.id;
        }
      }

      setActiveSection(closestSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <aside className="fixed left-8 top-1/2 z-50 hidden -translate-y-1/2 xl:block">
      <nav className="rounded-2xl border border-white/10 bg-black/30 px-5 py-6 backdrop-blur-md">
        <div className="space-y-5">
          {navItems.map((item) => {
            const isActive = activeSection === item.sectionId;

            return (
              <a
                key={item.label}
                href={item.href}
                className={`group flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.28em] transition ${
                  isActive
                    ? "text-emerald-300"
                    : "text-gray-500 hover:text-emerald-300"
                }`}
              >
                <span
                  className={`h-px rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-16 bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.75)]"
                      : "w-9 bg-white/25 group-hover:w-14 group-hover:bg-emerald-400"
                  }`}
                />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}