"use client";

import { useMemo, useState } from "react";
import { WorkshopThemeTag, workshopThemes } from "@/lib/content";

const categories: Array<"Vše" | WorkshopThemeTag> = ["Vše", "Trendy", "Educational", "Exam season"];

export default function WorkshopsPage() {
  const [active, setActive] = useState<"Vše" | WorkshopThemeTag>("Vše");

  const visibleWorkshops = useMemo(() => {
    if (active === "Vše") return workshopThemes;
    return workshopThemes.filter((item) => item.tags.includes(active));
  }, [active]);

  return (
    <div className="section-shell">
      <section>
        <p className="chip">Tématický katalog</p>
        <h1 className="section-heading mt-4">Workshopy Routinea</h1>
        <p className="mt-3 text-stone-700">
          Aktuálně nabízíme aktuální i školně relevantní bloky - vždy s jasnou strukturou,
          jednoduchými cíli a praktickými kroky, které mohou studenti i učitelé snadno znovu použít.
        </p>
      </section>

      <nav aria-label="Filtry témat">
        <ul className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <li key={category}>
              <button
                type="button"
                onClick={() => setActive(category)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active === category
                    ? "bg-stone-900 text-white"
                    : "border border-stone-300 bg-white text-stone-700 hover:bg-stone-100"
                }`}
                aria-pressed={active === category}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <section className="grid gap-4 md:grid-cols-2">
        {visibleWorkshops.map((topic) => (
          <article className="card" key={topic.title}>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {topic.tags.map((tag) => (
                <span className="chip" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="mt-3 text-xl font-semibold text-stone-900">{topic.title}</h2>
            <p className="mt-2 text-sm text-stone-700">{topic.hook}</p>
            <div className="mt-4 grid gap-2 text-sm">
              <p>
                <span className="font-semibold text-stone-900">Co se naučí studenti:</span>{" "}
                {topic.students}
              </p>
              <p>
                <span className="font-semibold text-stone-900">Co získají učitelé:</span>{" "}
                {topic.teachers}
              </p>
              {topic.kit ? (
                <p>
                  <span className="font-semibold text-stone-900">Možná integrace Kit:</span>{" "}
                  {topic.kit}
                </p>
              ) : null}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
