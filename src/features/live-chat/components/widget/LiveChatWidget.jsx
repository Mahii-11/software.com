import { useLocation } from "react-router";
import { chatEnv } from "../../config/env";
import { ChatQueryProvider } from "../../providers/QueryProvider";
import { ChatLauncher } from "./ChatLauncher";
import { ChatPopup } from "../popup/ChatPopup";
import { useMockRealtime } from "../../hooks/useMockRealtime";
import "../../styles/chat.css";

function WidgetInner() {
  useMockRealtime();

  return (
    <div className="live-chat-root fixed inset-0 pointer-events-none z-[9997]">
      <div className="pointer-events-auto">
        <ChatPopup />
        <ChatLauncher />
      </div>
    </div>
  );
}

/** Global floating chat widget — mount once in layout */
export function LiveChatWidget() {
  const { pathname } = useLocation();
  if (!chatEnv.widgetEnabled || pathname.startsWith("/admin")) return null;

  return (
    <ChatQueryProvider>
      <WidgetInner />
    </ChatQueryProvider>
  );
}
