import Link from "next/link";
import {
  faqs,
  problemPoints,
  whatRoutineaCards,
  workshopPreviews,
  valuePills,
} from "@/lib/content";
import { LeadForm } from "@/components/lead-form";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function HomePage() {
  return (
    <div>
      <ScrollReveal startVisible={true}>
        <section className="section-shell pt-20 md:pt-24">
        <div className="mx-auto grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="chip">Routinea · Calm Start</p>
            <h1 className="section-heading mt-4 max-w-3xl">
              Pro dny, kdy nevíte, jak začít.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-stone-700">
              Studentům pomáháme překonat blok za blokem. Jemná struktura, mikrokroky a
              jednoduché rituály, které rozbíjejí pocit „zaseknutí“ bez medicínských
              nálepek.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/for-schools"
                className="rounded-xl bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                data-track-action="hero-cta-schools"
              >
                Pro školy
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-stone-900 px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                data-track-action="hero-cta-contact"
              >
                Get Help Starting
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {valuePills.map((pill) => (
                <span className="chip" key={pill}>
                  {pill}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-5 -top-8 h-28 w-28 rounded-full bg-brand-100 blur-2xl" aria-hidden="true" />
            <div className="absolute right-0 -top-12 h-24 w-24 rounded-full bg-brand-200 blur-2xl" aria-hidden="true" />
            <div className="card relative overflow-hidden">
              <img
                src="/hero-abstract.svg"
                alt="Abstraktní vizualizace startu"
                className="h-full w-full rounded-4xl border border-stone-200 object-cover"
              />
              <div className="mt-4 rounded-3xl bg-brand-50 p-4 text-sm text-stone-700">
                <p className="font-semibold text-stone-900">Rychlý návod na start</p>
                <p>
                  2 minuty, 3 kroky, bez cílové úzkosti: co udělám teď, co po 5 minutách
                  a jak poznám, že jsem to zvládl.
                </p>
              </div>
            </div>
          </div>
        </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delayMs={120}>
        <section id="problem" className="section-shell">
        <div className="mx-auto max-w-3xl">
          <h2 className="section-heading">Proč je začít s učením tak těžké</h2>
          <p className="mt-3 text-stone-700">
            Věříme, že problém není v špatné vůli. Často je to kombinace přetížení,
            nejasného kroku a vnitřního tlaku.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {problemPoints.map((item) => (
            <article className="card" key={item.title}>
              <h3 className="text-lg font-semibold text-stone-900">{item.title}</h3>
              <p className="mt-2 text-sm text-stone-700">{item.description}</p>
            </article>
          ))}
        </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delayMs={160}>
        <section id="what-is-routinea" className="section-shell">
        <h2 className="section-heading">Co je Routinea</h2>
        <p className="max-w-3xl text-stone-700">
          Routinea je program a návykový rámec pro školy i žáky. Není to aplikace pro
          „zlepšení disciplíny“, ale lehká struktura, která pomáhá udělat první krok
          a pokračovat.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {whatRoutineaCards.map((card) => (
            <article className="card" key={card.title}>
              <h3 className="text-lg font-semibold text-stone-900">{card.title}</h3>
              <p className="mt-2 text-sm text-stone-700">{card.description}</p>
            </article>
          ))}
        </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delayMs={200}>
        <section id="kit" className="section-shell">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <h2 className="section-heading">Kit (volitelný doplněk)</h2>
            <p className="mt-3 text-stone-700">
              Týmový Kit je jednoduchý set fyzických prvků a rutinního protokolu:
              startovací karta, jednota nástrojů pro přepnutí pozornosti a malé připomínky
              do denního rytmu. Není nutností, ale často pomáhá rozběhnout změnu rychleji.
            </p>
          </div>
          <aside className="card">
            <h3 className="text-lg font-semibold text-stone-900">Pro školy</h3>
            <p className="mt-2 text-sm text-stone-700">
              Vždy nabízíme i „bez Kit“ verzi. Nejprve nastavíme systém, ať není nic
              násilně vázané na produkt.
            </p>
          </aside>
        </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delayMs={240}>
        <section id="workshops-preview" className="section-shell">
        <h2 className="section-heading">Workshopy náhled</h2>
        <p className="max-w-2xl text-stone-700">
          Trendy a vzdělávací témata pro školní prostředí, která studentům pomáhají vrátit
          startovací energii.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {workshopPreviews.map((workshop) => (
            <article className="card" key={workshop.title}>
              <p className="text-sm font-semibold uppercase text-brand-600">{workshop.title}</p>
              <h3 className="mt-2 text-lg font-semibold text-stone-900">{workshop.hook}</h3>
              <p className="mt-3 text-sm text-stone-700">
                <span className="font-medium text-stone-900">Student:</span>{" "}
                {workshop.students}
              </p>
              <p className="mt-1 text-sm text-stone-700">
                <span className="font-medium text-stone-900">Učitel:</span>{" "}
                {workshop.teachers}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <Link
            href="/workshops"
            className="inline-flex rounded-xl bg-stone-900 px-4 py-2 text-sm font-semibold text-white"
          >
            Všechny workshopy
          </Link>
        </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delayMs={280}>
        <section id="for-schools" className="section-shell bg-soft-routinea rounded-4xl">
        <h2 className="section-heading">Pro školy</h2>
        <p className="max-w-3xl text-stone-700">
          Chcete, aby žáci zvládli začít rychleji i před zkouškami? Pojďme nastavit workshopový
          formát, který respektuje reálné podmínky školního programu.
        </p>
        <div className="mt-4">
          <LeadForm
            title="Poptávka workshopu"
            source="home"
            includeSchool
            submitLabel="Požádat o workshop"
            roleLabel="Kdo naváže spolupráci"
          />
        </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delayMs={320}>
        <section id="faq" className="section-shell">
        <h2 className="section-heading">Často kladené otázky</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.slice(0, 8).map((faq) => (
            <details className="card" key={faq.q}>
              <summary className="cursor-pointer text-lg font-semibold text-stone-900">
                {faq.q}
              </summary>
              <p className="mt-2 text-sm text-stone-700">{faq.a}</p>
            </details>
          ))}
        </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delayMs={360}>
        <section className="section-shell">
        <h2 className="section-heading">Proč nejde jen o disciplínu, ale o strukturu</h2>
        <p className="max-w-3xl text-stone-700">
          Když je struktura přetížující, přidává odpor. Když je struktura lehká a opakovatelná,
          přidává odvahu. Cílem Routinea je odvahu vrátit, krok po kroku.
        </p>
        </section>
      </ScrollReveal>
    </div>
  );
}
