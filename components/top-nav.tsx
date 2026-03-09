"use client";

import Link from "next/link";
import { navItems } from "@/lib/content";
import { SiteLogo } from "@/components/site-logo";
import { useEffect, useState } from "react";

export function TopNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-stone-200/30 bg-white/35"
          : "border-stone-200/70 bg-white/75"
      } backdrop-blur`}
    >
      <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:bg-brand-600 focus:px-3 focus:py-2 focus:text-white">
        Přeskočit na obsah
      </a>
      <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600">
          <SiteLogo />
        </Link>
        <nav aria-label="Hlavní navigace">
          <ul className="flex flex-wrap items-center gap-2 text-sm font-medium md:gap-4">
            {navItems.slice(1).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-3 py-2 text-stone-700 transition hover:bg-brand-50 hover:text-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
