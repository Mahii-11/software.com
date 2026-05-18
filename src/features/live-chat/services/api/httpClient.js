import { chatEnv } from "../../config/env";

/**
 * Base HTTP client for Laravel API integration.
 * Replace fetch wrapper with axios instance if preferred.
 */
export async function httpClient(endpoint, options = {}) {
  const url = `${chatEnv.apiBaseUrl}${endpoint}`;
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Laravel Sanctum: attach Bearer token from auth store
    // Authorization: `Bearer ${getAuthToken()}`,
    ...options.headers,
  };

  const response = await fetch(url, { ...options, headers });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message ?? `API error: ${response.status}`);
  }

  return response.json();
}
