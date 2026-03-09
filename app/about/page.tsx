export const metadata = {
  title: "O značce",
};

export default function AboutPage() {
  return (
    <div className="section-shell">
      <section>
        <p className="chip">Brand story</p>
        <h1 className="section-heading mt-4">Příběh Routinea</h1>
        <p className="mt-3 max-w-3xl text-stone-700">
          Vycházíme z reálných příběhů studentů a škol. Viděli jsme, že velké cíle je
          někdy odrazují, protože první krok je skrytě nejnáročnější. Routinea proto staví
          na lehkosti, ne na výkonové soutěži.  
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="card">
          <h2 className="text-xl font-semibold text-stone-900">Důvěřitelnost</h2>
          <p className="mt-2 text-sm text-stone-700">
            Vycházíme z ověřitelných postupů a běžných školních zkušeností. Komunikujeme
            srozumitelně, bez zbytečných odborných škatulek.
          </p>
        </article>
        <article className="card">
          <h2 className="text-xl font-semibold text-stone-900">Empatie</h2>
          <p className="mt-2 text-sm text-stone-700">
            Nehodnotíme studenty podle „síly disciplíny“. Podporujeme vztah mezi úkolem a
            jemnou strukturou, která se dá udělat dnes, i znovu zítra.
          </p>
        </article>
        <article className="card">
          <h2 className="text-xl font-semibold text-stone-900">Praktická stylizace</h2>
          <p className="mt-2 text-sm text-stone-700">
            Vizuálně jasný, klidný a moderní jazyk pro školy, který působí profesionálně a
            zároveň lidsky.
          </p>
        </article>
      </section>

      <section className="card">
        <h2 className="text-2xl font-semibold text-stone-900">Proč nejde jen o disciplínu, ale o strukturu</h2>
        <p className="mt-3 text-stone-700">
          Disciplína bez opory působí jako další tlak. Struktura bez přetížení naopak dává
          prostor: „můžu začít, tedy zvládnu to“. Cílem není „vydržíš celou hodinu“.
          Cílem je „vydržíš první krok“.
        </p>
      </section>
    </div>
  );
}
