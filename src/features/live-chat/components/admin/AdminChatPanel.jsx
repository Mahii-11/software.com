import { useMemo } from "react";
import { Send, MoreVertical, Archive } from "lucide-react";
import { useConversations, useConversationMessages } from "../../hooks/useConversations";
import { useAdminStore } from "../../store/adminStore";
import { Avatar } from "../shared/Avatar";
import { StatusBadge } from "../shared/StatusBadge";
import { MessageBubble } from "../messages/MessageBubble";
import { useAutoScroll } from "../../hooks/useAutoScroll";
import { cn } from "../../utils/format";

export function AdminChatPanel() {
  const selectedId = useAdminStore((s) => s.selectedConversationId);
  const { data: conversations = [] } = useConversations();
  const { data: messages = [], isLoading } = useConversationMessages(selectedId);

  const conversation = useMemo(
    () => conversations.find((c) => c.id === selectedId),
    [conversations, selectedId]
  );

  const { containerRef, handleScroll } = useAutoScroll([messages.length]);

  if (!conversation) {
    return (
      <div className="admin-panel flex-1 flex items-center justify-center min-h-[400px]">
        <p className="text-sm text-muted-foreground">Select a conversation</p>
      </div>
    );
  }

  return (
    <div className="admin-panel flex flex-col flex-1 min-h-0 min-w-0 overflow-hidden">
      <header className="flex items-center gap-3 px-4 py-3 border-b border-white/5 shrink-0">
        <Avatar
          src={conversation.customerAvatar}
          name={conversation.customerName}
          size="md"
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold truncate">
            {conversation.customerName}
          </h3>
          <p className="text-xs text-muted-foreground truncate">
            {conversation.customerEmail}
          </p>
        </div>
        <StatusBadge status={conversation.status} />
        <button type="button" className="chat-icon-btn" aria-label="Archive">
          <Archive className="h-4 w-4" />
        </button>
        <button type="button" className="chat-icon-btn" aria-label="More">
          <MoreVertical className="h-4 w-4" />
        </button>
      </header>

      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto p-4 space-y-3 chat-scrollbar"
      >
        {isLoading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={cn(
                  "h-12 rounded-2xl bg-white/5 animate-pulse",
                  i % 2 === 0 ? "ml-auto w-2/3" : "w-2/3"
                )}
              />
            ))}
          </div>
        ) : messages.length === 0 ? (
          <p className="text-center text-sm text-muted-foreground py-8">
            No messages yet
          </p>
        ) : (
          messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))
        )}
      </div>

      <footer className="p-4 border-t border-white/5 shrink-0">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Reply as agent..."
            className="chat-input flex-1"
          />
          <button type="button" className="chat-send-btn" aria-label="Send">
            <Send className="h-4 w-4" />
          </button>
        </div>
      </footer>
    </div>
  );
}
