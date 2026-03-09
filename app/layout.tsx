import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import "@/app/globals.css";
import { TopNav } from "@/components/top-nav";
import { SiteFooter } from "@/components/site-footer";
import { AnalyticsConfig } from "@/components/analytics-config";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});
const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://routinea.example"),
  title: {
    default: "Routinea | Pro dny, kdy nevíte, jak začít",
    template: "%s | Routinea",
  },
  description:
    "Routinea pomáhá studentům zvládnout start do učení pomocí jemné struktury, mikrokroků a tichých rituálů.",
  alternates: {
    languages: {
      cs: "https://routinea.example",
      en: "https://routinea.example/en",
    },
  },
  openGraph: {
    title: "Routinea",
    description:
      "Pro dny, kdy nevíte, jak začít. Program a workshopy pro školy a studenty.",
    url: "https://routinea.example",
    siteName: "Routinea",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "/og-routinea.svg",
        width: 1200,
        height: 630,
        alt: "Routinea - jemná cesta k startu studia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Routinea",
    description: "Pro dny, kdy nevíte, jak začít.",
    images: ["/og-routinea.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${manrope.variable} ${ibmMono.variable}`}>
      <body className="min-h-screen bg-gradient-to-b from-cream-50 to-cream-100">
        <AnalyticsConfig />
        <TopNav />
        <main id="content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
