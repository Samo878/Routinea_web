"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export function ClarityConfig() {
  useEffect(() => {
    const clarityId =
      process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID ??
      process.env.NEXT_PUBLIC_CLARITY_ID ??
      "";

    if (!clarityId) {
      return;
    }

    Clarity.init(clarityId);
  }, []);

  return null;
}
