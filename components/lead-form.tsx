"use client";

import { FormEvent, useState } from "react";

type LeadFormProps = {
  title: string;
  source: string;
  submitLabel?: string;
  roleLabel?: string;
};

type LeadStatus = "idle" | "loading" | "success" | "error";

export function LeadForm({
  title,
  source,
  submitLabel = "Odeslat",
  roleLabel = "Role",
}: LeadFormProps) {
  const [status, setStatus] = useState<LeadStatus>("idle");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const toText = (value: FormDataEntryValue | null) => String(value ?? "").trim();
    const honeypot = toText(form.get("honeypot"));
    if (honeypot.trim()) {
      setStatus("success");
      setMessage("Děkujeme, formulář byl přijat.");
      return;
    }

    setStatus("loading");
    setMessage("");
    setError("");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        source,
        name: toText(form.get("name")),
        email: toText(form.get("email")),
        phone: toText(form.get("phone")),
        school: toText(form.get("school")),
        role: toText(form.get("role")),
        message: toText(form.get("message")),
        hp: honeypot,
      }),
    });

    if (!response.ok) {
      const data = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;
      setStatus("error");
      setError(
        data?.error ??
          "Nepodařilo se odeslat formulář. Zkuste to prosím za chvíli."
      );
      return;
    }

    setStatus("success");
    setMessage("Děkujeme, ozveme se do 2 pracovních dnů.");
    event.currentTarget.reset();
  }

  return (
    <section aria-labelledby={`${title.toLowerCase().replace(/\s+/g, "-")}-form`} className="rounded-4xl border border-brand-100 bg-cream-50 p-6 shadow-soft">
      <h2 id={`${title.toLowerCase().replace(/\s+/g, "-")}-form`} className="text-2xl font-semibold text-stone-900">
        {title}
      </h2>
      <p className="mt-1 text-sm text-brand-700">
        Vyplňte formulář a vrátíme se s návrhem formátu do 2 pracovních dnů.
      </p>
      <form onSubmit={onSubmit} className="mt-5 grid gap-4" noValidate>
        <label className="grid gap-1 text-sm">
          <span className="font-medium text-stone-700">Jméno</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className="rounded-xl border border-stone-300 px-3 py-2 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="font-medium text-stone-700">E-mail</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className="rounded-xl border border-stone-300 px-3 py-2 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="font-medium text-stone-700">Telefon (nepovinné)</span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            className="rounded-xl border border-stone-300 px-3 py-2 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="font-medium text-stone-700">{roleLabel}</span>
          <input
            type="text"
            name="role"
            autoComplete="organization-title"
            className="rounded-xl border border-stone-300 px-3 py-2 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="font-medium text-stone-700">Zpráva</span>
          <textarea
            name="message"
            required
            rows={5}
            className="min-h-24 resize-y rounded-xl border border-stone-300 px-3 py-2 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
            placeholder="Co by vám v pracovně s učením pomohlo nejvíc?"
          />
        </label>
        <label className="sr-only" aria-hidden="true">
          <span>Netop</span>
          <input type="text" name="honeypot" autoComplete="off" tabIndex={-1} />
        </label>
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-xl bg-stone-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-stone-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:cursor-not-allowed disabled:bg-stone-500"
          data-track-action="lead-form-submit"
          data-track-source={source}
        >
          {status === "loading" ? "Odesílám..." : submitLabel}
        </button>
      </form>
      {status === "success" ? (
        <p className="mt-3 text-sm font-medium text-brand-700">{message}</p>
      ) : null}
      {status === "error" ? (
        <p className="mt-3 text-sm font-medium text-brand-900">{error}</p>
      ) : null}
    </section>
  );
}
