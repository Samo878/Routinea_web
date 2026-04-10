"use client";

import { FormEvent, useCallback, useEffect, useId, useRef, useState } from "react";

const STORAGE_KEY = "routinea-newsletter-modal-state";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FOCUSABLE_SELECTOR = [
  'a[href]',
  'area[href]',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'button:not([disabled])',
  'iframe',
  'object',
  'embed',
  '[contenteditable="true"]',
  '[tabindex]:not([tabindex="-1"])',
].join(",");

type ModalStorageState = "seen" | "dismissed" | "submitted";
type SubmitStatus = "idle" | "loading" | "success" | "error";

function getFocusableElements(container: HTMLElement) {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
    (element) => !element.hasAttribute("disabled") && element.getAttribute("aria-hidden") !== "true"
  );
}

function persistModalState(nextState: ModalStorageState) {
  try {
    window.localStorage.setItem(STORAGE_KEY, nextState);
  } catch {
    // Ignore storage failures and keep the UI working for the current session.
  }
}

export function NewsletterModal() {
  const [isReady, setIsReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [message, setMessage] = useState("");
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const continueButtonRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const previousBodyOverflowRef = useRef("");
  const titleId = useId();
  const descriptionId = useId();
  const statusId = useId();

  useEffect(() => {
    setIsReady(true);

    try {
      const savedState = window.localStorage.getItem(STORAGE_KEY);
      if (!savedState) {
        window.localStorage.setItem(STORAGE_KEY, "seen");
        setIsOpen(true);
      }
    } catch {
      setIsOpen(true);
    }
  }, []);

  const closeModal = useCallback(
    (nextState: ModalStorageState = status === "success" ? "submitted" : "dismissed") => {
      persistModalState(nextState);
      setIsOpen(false);
    },
    [status]
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    previousFocusRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    previousBodyOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflowRef.current;

      try {
        previousFocusRef.current?.focus();
      } catch {
        // Ignore focus restoration failures when the original target disappears.
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      if (status === "success") {
        continueButtonRef.current?.focus();
        return;
      }

      emailInputRef.current?.focus();
    });

    return () => window.cancelAnimationFrame(frame);
  }, [isOpen, status]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const dialog = dialogRef.current;
      if (!dialog) {
        return;
      }

      const focusable = getFocusableElements(dialog);
      if (focusable.length === 0) {
        event.preventDefault();
        dialog.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (!dialog.contains(active)) {
        event.preventDefault();
        first.focus();
        return;
      }

      if (event.shiftKey && (active === first || active === dialog)) {
        event.preventDefault();
        last.focus();
        return;
      }

      if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [closeModal, isOpen]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "").trim().toLowerCase();
    const hp = String(form.get("hp") ?? "").trim();

    if (hp) {
      persistModalState("submitted");
      setStatus("success");
      setMessage("Děkujeme, jste přihlášeni k odběru novinek od Routinea.");
      return;
    }

    if (!EMAIL_PATTERN.test(email)) {
      setStatus("error");
      setMessage("Zadejte prosím platný e-mail.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email,
          source: "homepage-newsletter-modal",
          hp,
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;

        setStatus("error");
        setMessage(
          data?.error ?? "Nepodařilo se uložit váš e-mail. Zkuste to prosím za chvíli."
        );
        return;
      }

      persistModalState("submitted");
      setStatus("success");
      setMessage("Děkujeme, jste přihlášeni k odběru novinek od Routinea.");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
      setMessage("Nepodařilo se uložit váš e-mail. Zkuste to prosím za chvíli.");
    }
  }

  if (!isReady || !isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-stone-900/40 p-4 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closeModal();
        }
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        tabIndex={-1}
        className="relative w-full max-w-xl overflow-hidden rounded-4xl border border-brand-100 bg-white shadow-[0_28px_80px_rgba(14,52,102,0.24)]"
      >
        <div
          className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-brand-100 via-cream-50 to-brand-50"
          aria-hidden="true"
        />

        <button
          type="button"
          onClick={() => closeModal()}
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white/90 text-stone-700 transition hover:border-stone-300 hover:text-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
          aria-label="Zavřít přihlašovací okno"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 6l12 12" />
            <path d="M18 6L6 18" />
          </svg>
        </button>

        <div className="relative px-5 pb-5 pt-14 sm:px-8 sm:pb-8 sm:pt-16">
          <p id={descriptionId} className="sr-only">
            Dialog pro přihlášení k newsletteru Routinea.
          </p>

          <p className="chip">Routinea newsletter</p>

          {status === "success" ? (
            <>
              <h2 id={titleId} className="mt-5 text-3xl font-semibold tracking-tight text-stone-900">
                Máte hotovo
              </h2>
              <div
                id={statusId}
                aria-live="polite"
                className="mt-4 rounded-3xl bg-brand-50 p-4 text-sm text-brand-800"
              >
                {message}
              </div>
              <p className="mt-4 text-sm text-stone-600">
                Občas pošleme krátké tipy, novinky a jemné nápady, které pomáhají začít bez
                zbytečného tlaku.
              </p>
              <button
                ref={continueButtonRef}
                type="button"
                onClick={() => closeModal("submitted")}
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-stone-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-stone-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 sm:w-auto"
              >
                Pokračovat na web
              </button>
            </>
          ) : (
            <>
              <h2 id={titleId} className="mt-5 text-3xl font-semibold tracking-tight text-stone-900">
                Získejte jemné tipy do e-mailu
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-6 text-stone-700">
                Občasný výběr krátkých tipů a novinek od Routinea. Bez spamu, jen to, co
                opravdu pomůže začít.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 grid gap-4" noValidate>
                <label className="grid gap-1 text-sm">
                  <span className="font-medium text-stone-700">E-mail</span>
                  <input
                    ref={emailInputRef}
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="vas@email.cz"
                    className="rounded-xl border border-stone-300 px-3 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                  />
                </label>

                <label className="sr-only" aria-hidden="true">
                  <span>Nechte toto pole prázdné</span>
                  <input type="text" name="hp" autoComplete="off" tabIndex={-1} />
                </label>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center rounded-xl bg-stone-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-stone-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:cursor-not-allowed disabled:bg-stone-500"
                  data-track-action="newsletter-modal-submit"
                  data-track-source="homepage-newsletter-modal"
                >
                  {status === "loading" ? "Odesílám..." : "Chci tipy do e-mailu"}
                </button>
              </form>

              <p className="mt-4 text-xs leading-5 text-stone-500">
                Žádné zahlcení schránky. Jen občasné novinky a krátké tipy, které dávají
                smysl.
              </p>
            </>
          )}

          {status === "error" ? (
            <p
              id={statusId}
              aria-live="assertive"
              className="mt-4 text-sm font-medium text-brand-900"
            >
              {message}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
