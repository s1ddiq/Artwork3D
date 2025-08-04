// lib/fingerprint.ts
import FingerprintJS from "@fingerprintjs/fingerprintjs";

export async function getFingerprint() {
  // Load the agent at application startup.
  const fp = await FingerprintJS.load();

  // Get the visitor identifier when you need it.
  const result = await fp.get();

  return result.visitorId; // This is a stable, hashed identifier
}
