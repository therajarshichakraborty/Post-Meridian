"use client";

import fs from "fs";
import path from "path";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Since fs is not available on client-side, we can try to send it to our API route via a beacon/fetch,
  // or log it. But wait, during server-side rendering (SSR), this code runs on the server, where we CAN
  // import and use fs! Let's safely try to write it.
  if (typeof window === "undefined") {
    try {
      const fsModule = require("fs");
      const pathModule = require("path");
      const logContent = `Digest: ${error.digest || ""}\nMessage: ${error.message}\nStack:\n${error.stack || ""}`;
      fsModule.writeFileSync(
        pathModule.join(process.cwd(), "error-log.txt"),
        logContent,
        "utf-8"
      );
    } catch (e) {
      console.error("Failed to write server error log", e);
    }
  }

  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <pre>{error.message}</pre>
        <pre>{error.stack}</pre>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
