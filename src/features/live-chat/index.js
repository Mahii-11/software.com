/**
 * Live Chat Feature — public exports for Laravel integration
 */

export { LiveChatWidget } from "./components/widget/LiveChatWidget";
export { default as AdminInboxPage } from "./pages/AdminInboxPage";
export { ChatQueryProvider } from "./providers/QueryProvider";
export { queryClient } from "./providers/queryClient";
export { chatApi } from "./services/api/chatApi";
export { chatSocket } from "./services/websocket/chatSocket";
export { useChatStore } from "./store/chatStore";
export { useAdminStore } from "./store/adminStore";
export { chatEnv } from "./config/env";
