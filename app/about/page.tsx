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
          Routinea vznikla z jednoho prostého poznatku: studenti často vědí, co mají dělat, ale
          největší problém je začít.
        </p>
        <p className="mt-3 max-w-3xl text-stone-700">
          Velké úkoly, stres z výkonu a spousta informací mohou udělat první krok opravdu
          složitým. Proto jsme přišli s jiným přístupem – ne jak dělat víc, ale jak začít
          snadněji.
        </p>
        <p className="mt-3 max-w-3xl text-stone-700">
          Routinea je založená na jednoduché myšlence: když odstraníme překážky na začátku,
          práce se bude dít samovolně.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="card">
          <h2 className="text-xl font-semibold text-stone-900">Důvěra</h2>
          <p className="mt-2 text-sm text-stone-700">
            Vycházíme z reálných zkušeností studentů a ze známých principů práce s
            pozorností a strukturou.
          </p>
        </article>
        <article className="card">
          <h2 className="text-xl font-semibold text-stone-900">Empatie</h2>
          <p className="mt-2 text-sm text-stone-700">
            Nevěříme, že problém je „nedostatek disciplíny“. Často jde spíš o chybějící
            strukturu, která pomůže udělat první krok.
          </p>
        </article>
        <article className="card">
          <h2 className="text-xl font-semibold text-stone-900">Jednoduchost</h2>
          <p className="mt-2 text-sm text-stone-700">
            Routinea nabízí klidný, přehledný systém, který pomáhá proměnit „měl/a bych začít“
            na „už pracuji“.
          </p>
        </article>
      </section>

      <section className="card">
        <h2 className="text-2xl font-semibold text-stone-900">Proč nejde jen o disciplínu, ale o strukturu</h2>
        <p className="mt-3 text-stone-700">
          Problém není disciplína, ale začátek. Velký a nejasný úkol odrazuje, malý a jasný
          krok naproti tomu umožní začít. Routinea tak nepomáhá jen výkonu, ale i prvnímu
          kroku.
        </p>
      </section>
    </div>
  );
}
