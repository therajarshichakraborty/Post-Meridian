"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  const originalError = console.error;
  console.error = (...args: unknown[]) => {
    const isScriptTagError = args.some((arg) => {
      if (typeof arg === "string" && arg.includes("Encountered a script tag")) {
        return true;
      }
      if (
        arg instanceof Error &&
        arg.message.includes("Encountered a script tag")
      ) {
        return true;
      }
      if (arg && typeof arg === "object" && "message" in arg) {
        const msg = (arg as { message?: unknown }).message;
        if (
          typeof msg === "string" &&
          msg.includes("Encountered a script tag")
        ) {
          return true;
        }
      }
      return false;
    });
    if (isScriptTagError) {
      return;
    }
    originalError.apply(console, args);
  };
}

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
