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
    title: "Systém, ne jen produkt",
    description:
      "Routinea kombinuje jednoduché pracovní principy, fyzické nástroje a podporující prostředí. Společně pomáhají snížit bariéru začátku práce a proměnit záměr v první konkrétní krok.",
  },
  {
    title: "Externí struktura",
    description:
      "Přehledné kroky a malé pracovní bloky dávají studentům jasnou orientaci: co udělat hned a jak poznat, že první krok je hotový.",
  },
  {
    title: "Podpora smyslů",
    description:
      "Jednoduché haptické a vizuální prvky pomáhají přepnout pozornost a znovu se naladit na práci.",
  },
];

export const workshopPreviews = [
  {
    title: "Jak začít, když víš, co máš dělat, ale nejde to?",
    hook: "Moment mezi „měl/a bych začít“ a „už pracuji“ je často největší překážka práce.",
    students:
      "Pochopí, proč je začátek práce psychologicky náročný, a vyzkouší jednoduché mikro-kroky, které pomáhají nastartovat první pracovní blok.",
    teachers:
      "Jednoduchý model, jak studentům pomoci začít pracovat i bez tlaku na výkon nebo disciplínu.",
  },
  {
    title: "Mikro-kroky vs. velké plány",
    hook: "Velké plány často vypadají dobře na papíře, ale mozek je v praxi odkládá.",
    students:
      "Naučí se rozdělit velký úkol na první malý krok, který je možné začít během několika minut.",
    teachers:
      "Jednoduchou strukturu, kterou mohou použít při zadávání úkolů nebo projektů.",
  },
  {
    title: "Zkouškový režim bez paniky",
    hook: "Zkouškové období často zvyšuje stres a odkládání práce.",
    students:
      "Vyzkouší krátké startovací rutiny, které pomáhají začít pracovat i ve stresu.",
    teachers:
      "Praktický model, jak studenty podpořit během náročného období bez dalšího tlaku.",
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
    title: "Jak začít, když víš, co máš dělat, ale nejde to?",
    hook: "Moment mezi „měl/a bych začít“ a „už pracuji“ je často největší překážka práce.",
    students:
      "Pochopí, proč je začátek práce psychologicky náročný, a vyzkouší jednoduché mikro-kroky, které pomáhají nastartovat první pracovní blok.",
    teachers:
      "Jednoduchý model, jak studentům pomoci začít pracovat i bez tlaku na výkon nebo disciplínu.",
    tags: ["Educational"],
    kit: "Ukázka aktivačních karet, které pomáhají spustit první pracovní krok.",
  },
  {
    title: "Mikro-kroky vs. velké plány",
    hook: "Velké plány často vypadají dobře na papíře, ale mozek je v praxi odkládá.",
    students:
      "Naučí se rozdělit velký úkol na první malý krok, který je možné začít během několika minut.",
    teachers:
      "Jednoduchou strukturu, kterou mohou použít při zadávání úkolů nebo projektů.",
    tags: ["Educational"],
  },
  {
    title: "Zkouškový režim bez paniky",
    hook: "Zkouškové období často zvyšuje stres a odkládání práce.",
    students:
      "Vyzkouší krátké startovací rutiny, které pomáhají začít pracovat i ve stresu.",
    teachers:
      "Praktický model, jak studenty podpořit během náročného období bez dalšího tlaku.",
    tags: ["Exam season"],
    kit: "Aktivační karta pro rychlý start pracovního bloku.",
  },
  {
    title: "Přetížený mozek a informační chaos",
    hook: "Studenti dnes pracují s obrovským množstvím informací a podnětů.",
    students:
      "Jak snížit informační chaos a zaměřit se na jeden jasný krok práce.",
    teachers:
      "Krátká cvičení, která lze využít na začátku hodiny pro rychlé přepnutí pozornosti.",
    tags: ["Educational"],
  },
  {
    title: "Algoritmy, pozornost a schopnost soustředit se",
    hook: "Digitální prostředí je navržené tak, aby udrželo naši pozornost co nejdéle.",
    students:
      "Lépe porozumí tomu, jak algoritmy pracují s jejich pozorností, a jak si vytvořit jednoduché hranice při práci.",
    teachers:
      "Srozumitelný způsob, jak otevřít téma digitální pozornosti ve výuce.",
    tags: ["Trendy"],
  },
  {
    title: "Proč je začít někdy nejtěžší část práce?",
    hook: "Odkládání práce často není lenost, ale reakce mozku na nejistý nebo velký úkol.",
    students:
      "Pochopí mechanismy odkládání a vyzkouší jednoduchý postup, jak překonat první bariéru práce.",
    teachers:
      "Jasný jazyk, kterým mohou studentům vysvětlit problém začátku práce bez stigmatizace.",
    tags: ["Educational"],
  },
];

export const schoolTopics = [
  "Jak začít, když víš, co máš dělat, ale nejde to?",
  "Proč je začít někdy nejtěžší část práce?",
  "Mikro-kroky vs. velké plány",
  "Zkouškový režim bez paniky",
  "Přetížený mozek a informační chaos",
  "Algoritmy, pozornost a schopnost soustředit se",
];

export const schoolOutcomes = {
  students: [
    "větší jistota při začátku práce s úkolem",
    "více malých startů během týdne díky jednoduchým krokům",
    "lepší orientace v prvních minutách práce",
  ],
  teachers: [
    "jednoduché postupy, jak studentům pomoci začít pracovat",
    "praktické principy využitelné přímo v hodině",
    "nový způsob, jak se studenty mluvit o začátku práce a studijním přetížení",
  ],
};
