import type { TrackingOptions } from "./interfaces";

export function isDoNotTrackEnabled(headers: Headers) {
  return headers.has("DNT") && headers.get("DNT") === "1";
}

export function parseRequest(request: Request) {
  const url = new URL(request.url);

  return {
    path: url.pathname,
    searchParams: url.searchParams,
  };
}

export function isProduction() {
  if (process.env.ENABLE_ANALYTICS_IN_DEV === "1") {
    return true;
  }

  if (process.env.NODE_ENV !== "production") {
    return false;
  }

  if (!process.env.VERCEL_ENV) {
    return true;
  }

  return process.env.VERCEL_ENV === "production";
}

export function isEnhancedBotDetectionEnabled(options: TrackingOptions) {
  return options.enhancedBotDetection === true;
}
