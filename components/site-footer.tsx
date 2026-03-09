import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-stone-200 bg-cream-100">
      <div className="mx-auto grid max-w-page gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="text-sm font-semibold text-stone-900">Routinea</p>
          <p className="mt-2 max-w-xs text-sm text-stone-600">
            Pro školy, studenty i rodiče, kteří už vědí, že problém není lenost, ale
            chybějící začáteční struktura.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-stone-900">Rychlé odkazy</p>
          <ul className="mt-2 space-y-2 text-sm">
            <li><Link href="/for-schools" className="text-stone-700 underline-offset-4 hover:underline">Pro školy</Link></li>
            <li><Link href="/workshops" className="text-stone-700 underline-offset-4 hover:underline">Workshopy</Link></li>
            <li><Link href="/contact" className="text-stone-700 underline-offset-4 hover:underline">Kontakt</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-stone-900">Kontakt</p>
          <p className="mt-2 text-sm text-stone-700">info@routinea.example</p>
          <p className="text-sm text-stone-700">Brno, Česká republika</p>
          <div className="mt-3 flex gap-3 text-sm">
            <a href="#" aria-label="Instagram placeholder" className="rounded-full border border-stone-300 px-2 py-1">IG</a>
            <a href="#" aria-label="LinkedIn placeholder" className="rounded-full border border-stone-300 px-2 py-1">IN</a>
          </div>
        </div>
      </div>
      <p className="border-t border-stone-200 px-4 py-4 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} Routinea. Všechna práva vyhrazena.
      </p>
    </footer>
  );
}
