"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  startVisible?: boolean;
};

export function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
  startVisible = false,
}: ScrollRevealProps) {
  const [visible, setVisible] = useState(startVisible);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (startVisible || !ref.current) {
      return;
    }

    const root = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(root);

    return () => observer.disconnect();
  }, [startVisible]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${visible ? "scroll-reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
