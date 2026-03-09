export const navItems = [
  { label: "Domů", href: "/" },
  { label: "Pro školy", href: "/for-schools" },
  { label: "Workshopy", href: "/workshops" },
  { label: "O značce", href: "/about" },
  { label: "Kontakt", href: "/contact" },
];

export const valuePills = [
  "šetrná struktura",
  "mikrokroky",
  "klidný start",
  "podpora pozornosti",
];

export const problemPoints = [
  {
    title: "Zaseknutý moment",
    description:
      "Úkol je jasný, ale tělo chce zmizet. Bez první mikroakce se mozek chytá úniku.",
  },
  {
    title: "Spirála studu",
    description:
      "Každé odkládání zesílí pocit viny, ale vina dál zvyšuje odklad. Ztrácí se jistota.",
  },
  {
    title: "Nedostatek jasnosti",
    description:
      "Když je plán složitý a nároky vysoké, začne tlak převládat nad zájmem a student se zasekne.",
  },
];

export const whatRoutineaCards = [
  {
    title: "Program, ne produkt",
    description:
      "Routinea je krátký rámec, který školám pomáhá rozvíjet startovací návyk u studentů bez tlakové logiky výkonu.",
  },
  {
    title: "Externí struktura",
    description:
      "Nízkodemandingový plán, který dává studentům jistotu: co udělat hned, jak poznat úspěch prvního kroku.",
  },
  {
    title: "Podpora smyslů",
    description:
      "Jednoduché návyky, haptické i vizuální opory a krátké rutiny usnadňují opětovné naladění na práci.",
  },
];

export const workshopPreviews = [
  {
    title: "AI a pozornost",
    hook: "Když algoritmus drží pozornost, škola ji musí zase připnout na učení.",
    students: "Pochopí, jak rozpoznat digitální rozptylení.",
    teachers: "Dostanou nástroje pro práci se zástavou času a úloh.",
  },
  {
    title: "Kritické myšlení v éře krátkého videa",
    hook: "Lepší než zakazovat je naučit žáky klást správné otázky.",
    students: "Cvičí rychlé hodnocení důvěryhodnosti obsahu.",
    teachers: "Získají aktivní scénáře do moderní hodiny.",
  },
  {
    title: "Startovací návyky před zkouškou",
    hook: "Rychlý start je často jen tři kroky od dokončení.",
    students: "Získají strukturu první 10 minut u studia.",
    teachers: "Vidí menší chaos, větší jistotu a menší „úzké hrdlo“ při zkouškách.",
  },
];

export const faqs = [
  {
    q: "Není Routinea jen „další motivace“?",
    a: "Ne. Neřešíme disciplínu skrze vůli. Nabízíme systém minimální zátěže: jasný start, mikrokroky a pravidelné opětování.",
  },
  {
    q: "Pro koho je to určené?",
    a: "Především pro studenty 18–24, ale i učitele, školní poradce a rodiče, kteří chtějí mít školu pro starosti a odklad přístupnější.",
  },
  {
    q: "Jak často školám pomáháte?",
    a: "Ne vždy musíme být často. Jeden workshop, následná komunikace s učiteli a lehký plán na 4 týdny bývá často dostačující.",
  },
  {
    q: "Může to nahradit školního psychologa?",
    a: "Ne. Routinea není klinická služba ani terapie. Je to program podpořené struktury, který lze bezpečně kombinovat s jinou podporou.",
  },
  {
    q: "Je to kompatibilní s distančním prostředím?",
    a: "Ano. Dílčí formáty i workshopové bloky pracují i online se stejným cílem: pomoci studentům začít hned.",
  },
  {
    q: "Dostanou studenti něco konkrétního?",
    a: "Dostanou jednoduché praktiky, které lze použít hned. Od prvního kroku na práci přes krátkou plánovací strukturu až po odpočinek bez výčitek.",
  },
  {
    q: "Co když se škola bojí stigma?",
    a: "To je často důvod, proč projekt funguje: komunikujeme jazykem normálního života. Nevoláme po diagnózách ani nálepkách.",
  },
  {
    q: "Potřebujeme školní dokumentaci?",
    a: "Stačí kontakt školního zástupce a krátký popis cílové třídy. Většinu materiálů dodáme jako jednoduchý návod.",
  },
];

export type WorkshopThemeTag = "Trendy" | "Educational" | "Exam season";

export type WorkshopTheme = {
  title: string;
  hook: string;
  students: string;
  teachers: string;
  tags: WorkshopThemeTag[];
  kit?: string;
};

export const workshopThemes: WorkshopTheme[] = [
  {
    title: "AI a pozornost",
    hook: "Jak rozpoznat, kdy technologie pracuje za vás, a kdy vás odvede.",
    students: "Naučí se nastavit jednoduchá pravidla, když je pozornost přetížená.",
    teachers: "Nástroje pro bezpečnou integraci tématu do předmětu nebo hodin.",
    tags: ["Trendy", "Educational"],
    kit: "Krátký štít na digitální přestávku + tisknutelný checklist.",
  },
  {
    title: "Kritické myšlení v krátkých médiích",
    hook: "Od „sdílej to“ k „ověř to“ v pětiminutovém cyklu.",
    students: "Procvičí ověřování informací a odliší důkaz od dojmu.",
    teachers: "Metodiku pro krátké diskusní aktivity bez nutnosti dlouhého času.",
    tags: ["Educational", "Trendy"],
  },
  {
    title: "Algoritmy a soustředění",
    hook: "Přerušíme cyklus skákání mezi podněty a vrátíme studenty k jedné úloze.",
    students: "Dostanou tři pravidla, jak rychle znovu nastartovat práci.",
    teachers: "Dostanou scénář 10minutové rituálové fáze na začátek výuky.",
    tags: ["Trendy", "Educational"],
  },
  {
    title: "Zkouškové období: mikro-starty",
    hook: "Ranní stres řešíme tak, že nečekáme na motivaci.",
    students: "Prakticky nacvičí „jak začít“ u 20 nejvážnějších úloh.",
    teachers: "Snadně srovnatelné výsledky: víc odevzdávání a mírněji zvládnutý stres.",
    tags: ["Exam season", "Educational"],
    kit: "Kartičky s postupem „0–2–5 minut“ pro zkouškový režim.",
  },
  {
    title: "Dnešní pozornost: studium v éře TikToku",
    hook: "Krátká forma není problém, pokud umíme rámec.",
    students: "Naučí se přepnout z konzumace na tvorbu vlastní argumentace.",
    teachers: "Materiál, který lze použít v 45min bloku bez technologických nároků.",
    tags: ["Trendy", "Exam season"],
  },
  {
    title: "Studijní rutina pro první start",
    hook: "První 10 minut rozhoduje víc než deset hodin plánů.",
    students: "Pracují s jedním jasným cílem, který mají opakovatelný.",
    teachers: "Dostanou jednoduchý návod, jak žáka podpořit bez přísného dohledu.",
    tags: ["Educational"],
    kit: "Starter karta pro každý tým: struktura dne na 1 stránce.",
  },
];

export const schoolTopics = [
  "AI a pozornost",
  "Kritické myšlení v éře krátkého videa",
  "Algoritmy, pozornost a dopamin",
  "Zkouškový režim bez paniky",
  "Jak vést tiché přechody mezi předměty",
];

export const schoolOutcomes = {
  students: [
    "Méně začáteční úzkosti a méně studu ze zmeškaného kroku",
    "Více startů během týdne díky jednoduchému protokolu",
    "Zřetelnější soustředění na první 10 minut práce",
  ],
  teachers: [
    "Jasnější metody pro okamžitou podporu žáků v hodině",
    "Šablony na sdílení s rodiči bez složitých termínů",
    "Lepší spolupráce se školním týmem a poradenskou linkou",
  ],
};
