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


export function LiveChatWidget() {

  return (
  
      <WidgetInner />
    
  );
}
