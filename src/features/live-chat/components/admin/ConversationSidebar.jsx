import { motion as Motion } from "framer-motion";
import { useConversations } from "../../hooks/useConversations";
import { useAdminStore } from "../../store/adminStore";
import { Avatar } from "../shared/Avatar";
import { StatusBadge } from "../shared/StatusBadge";
import { formatRelativeTime, cn } from "../../utils/format";

export function ConversationSidebar() {
  const { data: conversations = [], isLoading } = useConversations();
  const selectedId = useAdminStore((s) => s.selectedConversationId);
  const setSelected = useAdminStore((s) => s.setSelectedConversation);
  const priorityFilter = useAdminStore((s) => s.priorityFilter);

  const filtered =
    priorityFilter === "all"
      ? conversations
      : conversations.filter((c) => c.priority === priorityFilter);

  return (
    <aside className="admin-panel flex flex-col h-full min-h-0 overflow-hidden">
      <div className="p-4 border-b border-white/5 shrink-0">
        <h2 className="text-sm font-semibold font-display">Inbox</h2>
        <p className="text-xs text-muted-foreground mt-0.5">
          {filtered.length} conversations
        </p>
      </div>

      <div className="flex-1 overflow-y-auto chat-scrollbar">
        {isLoading ? (
          <div className="p-3 space-y-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 rounded-lg bg-white/5 animate-pulse" />
            ))}
          </div>
        ) : (
          filtered.map((conv, i) => (
            <Motion.button
              key={conv.id}
              type="button"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.03 }}
              onClick={() => setSelected(conv.id)}
              className={cn(
                "w-full flex gap-3 p-3 text-left border-b border-white/5 transition-colors hover:bg-white/[0.03]",
                selectedId === conv.id && "conversation-item-active"
              )}
            >
              <Avatar
                src={conv.customerAvatar}
                name={conv.customerName}
                size="md"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-medium truncate">
                    {conv.customerName}
                  </span>
                  <span className="text-[10px] text-muted-foreground shrink-0">
                    {formatRelativeTime(conv.lastMessageAt)}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground truncate mt-0.5">
                  {conv.lastMessage}
                </p>
                <div className="flex items-center gap-2 mt-1.5">
                  <StatusBadge status={conv.priority} />
                  {conv.unreadCount > 0 && (
                    <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground px-1.5">
                      {conv.unreadCount}
                    </span>
                  )}
                </div>
              </div>
            </Motion.button>
          ))
        )}
      </div>
    </aside>
  );
}

