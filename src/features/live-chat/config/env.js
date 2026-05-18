/**
 * Chat environment configuration.
 * Backend: map these to Laravel .env and Vite build vars.
 */
export const chatEnv = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000/api",
  wsUrl: import.meta.env.VITE_WS_URL ?? "ws://localhost:6001",
  widgetEnabled: import.meta.env.VITE_CHAT_WIDGET_ENABLED !== "false",
  mockMode: import.meta.env.VITE_CHAT_MOCK_MODE !== "false",
};
