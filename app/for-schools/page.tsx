import { LeadForm } from "@/components/lead-form";
import { schoolOutcomes, schoolTopics } from "@/lib/content";

export const metadata = {
  title: "Pro školy",
};

export default function ForSchoolsPage() {
  return (
    <div className="section-shell">
      <section>
        <p className="chip">Pro školy, poradce, vedení</p>
        <h1 className="section-heading mt-4">Proč školám Routinea funguje</h1>
        <p className="mt-3 max-w-3xl text-stone-700">
          Routinea se zaměřuje na moment, kdy student „ví, že má začít“, ale je pro něj
          těžké udělat první krok. Ve školním prostředí se to často projeví odkládáním
          úkolů, stresem nebo zahlcením.
          Routinea proto nabízí jednoduché pracovní bloky, které studentům pomáhají vrátit
          první mikrokrok a začít pracovat.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="card">
          <h2 className="text-2xl font-semibold text-stone-900">Možné formáty spolupráce</h2>
          <p className="mt-4 text-sm text-stone-700">
            Krátká prezentace nebo workshop pro studenty zaměřený na moment začátku práce s
            úkolem a jednoduché strategie, jak udělat první krok.
          </p>
          <p className="mt-3 text-sm text-stone-700">
            Formát lze přizpůsobit podle potřeb školy – od kratší přednášky až po
            interaktivní setkání se studenty.
          </p>
        </article>
        <article className="card">
          <h2 className="text-2xl font-semibold text-stone-900">Pilotní workshop</h2>
          <p className="mt-4 text-sm text-stone-700">
            Routinea momentálně nabízí pilotní workshop pro studenty zaměřený na začátek práce s
            úkoly, studijní přetížení a jednoduché pracovní strategie.
          </p>
        </article>
      </section>

      <section className="card">
        <h2 className="text-2xl font-semibold text-stone-900">Výsledky</h2>
        <div className="mt-4 grid gap-3">
          <div>
            <h3 className="text-sm font-semibold text-stone-900">Pro studenty</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-stone-700">
              {schoolOutcomes.students.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-stone-900">Pro učitele</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-stone-700">
              {schoolOutcomes.teachers.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="card">
        <h2 className="text-2xl font-semibold text-stone-900">Témata workshopu</h2>
        <div className="mt-4 grid gap-2 text-sm text-stone-700 md:grid-cols-2">
          {schoolTopics.map((topic) => (
            <p className="rounded-xl border border-stone-200 bg-cream-50 p-3" key={topic}>
              {topic}
            </p>
          ))}
        </div>
      </section>

      <LeadForm
        title="Požádat o školní workshop"
        source="for-schools"
        submitLabel="Odeslat poptávku"
        roleLabel="Funkce ve škole"
      />
    </div>
  );
}
