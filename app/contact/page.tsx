import { LeadForm } from "@/components/lead-form";

export const metadata = {
  title: "Kontakt",
};

export default function ContactPage() {
  return (
    <div className="section-shell">
      <section className="grid gap-8 md:grid-cols-2 md:items-start">
        <div>
          <p className="chip">Napište nám</p>
          <h1 className="section-heading mt-4">Kontakt</h1>
          <p className="mt-3 text-stone-700">
            Jsme k dispozici pro školy i studenty. Pokud řešíte konkrétní školní kontext
            nebo chcete hned start, napište zprávu a ozveme se.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-stone-700">
            <li>Email: inforoutinea@gmail.com</li>
            <li>Telefon: +420 123 456 789</li>
            <li>Lokace: Brno, Česká republika</li>
          </ul>
        </div>
        <LeadForm
          title="Kontaktní formulář"
          source="contact"
          submitLabel="Odeslat zprávu"
          roleLabel="Pozice / role"
        />
      </section>
    </div>
  );
}
