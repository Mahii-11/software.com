import {
  Minus,
  X,
  MoreHorizontal,
  Sun,
  Moon,
  Phone,
  Video,
} from "lucide-react";
import { useChatStore } from "../../store/chatStore";
import { Avatar } from "../shared/Avatar";
import { cn } from "../../utils/format";

export function ChatHeader() {
  const agent = useChatStore((s) => s.agent);
  const isAiMode = useChatStore((s) => s.isAiMode);
  const isAgentTyping = useChatStore((s) => s.isAgentTyping);
  const theme = useChatStore((s) => s.theme);
  const setTheme = useChatStore((s) => s.setTheme);
  const setOpen = useChatStore((s) => s.setOpen);
  const setMinimized = useChatStore((s) => s.setMinimized);

  const displayName = isAiMode ? "AI Assistant" : agent?.name ?? "Support";
  const displayRole = isAiMode
    ? "Instant answers · 24/7"
    : agent?.role ?? "Support team";
  const avatarSrc = isAiMode ? null : agent?.avatar;
  const status = isAiMode ? "online" : agent?.status;

  const statusText = isAgentTyping
    ? "typing..."
    : isAiMode
      ? "Always available"
      : status === "online"
        ? "Online now"
        : "Away";

  return (
    <header className="relative flex items-center gap-3 px-4 py-3.5 border-b border-white/5 chat-header-gradient shrink-0">
      <Avatar
        src={avatarSrc}
        name={displayName}
        size="md"
        status={isAiMode ? "online" : status}
      />

      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-semibold tracking-tight truncate font-display">
          {displayName}
        </h3>
        <p
          className={cn(
            "text-xs truncate transition-colors",
            isAgentTyping ? "text-secondary animate-pulse" : "text-muted-foreground"
          )}
        >
          {statusText}
          {!isAiMode && displayRole && (
            <span className="text-muted-foreground/60"> · {displayRole}</span>
          )}
        </p>
      </div>

      <div className="flex items-center gap-0.5">
        {!isAiMode && (
          <>
            <button type="button" className="chat-icon-btn hidden sm:flex" aria-label="Voice call">
              <Phone className="h-4 w-4" />
            </button>
            <button type="button" className="chat-icon-btn hidden sm:flex" aria-label="Video call">
              <Video className="h-4 w-4" />
            </button>
          </>
        )}
        <button
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="chat-icon-btn"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </button>
        <button type="button" className="chat-icon-btn" aria-label="More options">
          <MoreHorizontal className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => setMinimized(true)}
          className="chat-icon-btn"
          aria-label="Minimize"
        >
          <Minus className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="chat-icon-btn hover:bg-destructive/20 hover:text-destructive"
          aria-label="Close chat"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
