import type { NextRequest } from "next/server";
import logger from "./logger.config";

export const logRequest = (req: NextRequest) => {
  logger.info(`${req.method} ${req.nextUrl.pathname}`);
  logger.debug(
    `Headers: ${JSON.stringify(Object.fromEntries(req.headers.entries()))}`
  );
};
