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
          Routinea řeší moment, kdy student „ví, že má začít“, ale tělo i hlava ho
          zablokují. V prostředí školy pak narůstá stres, zpoždění úkolů i vyhoření.
          Nabízíme lehké pracovní bloky, které pomáhají vrátit první mikrokrok.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="card">
          <h2 className="text-2xl font-semibold text-stone-900">Workshop formáty</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm text-stone-700">
            <li>
              <strong>45min talk:</strong> diagnostika začátku, mikrootázky a školní
              doporučení pro třídní i předmětové hodiny.
            </li>
            <li>
              <strong>60–90min workshop:</strong> interaktivní cvičení s žáky, praktický
              model startu a reflexe s učitelem.
            </li>
            <li>
              <strong>Follow-up:</strong> krátké nastavení školního rituálu a doporučení
              pro opakované použití.
            </li>
          </ul>
        </article>
        <article className="card">
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
        </article>
      </section>

      <section className="card">
        <h2 className="text-2xl font-semibold text-stone-900">Témata pro workshopy</h2>
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
