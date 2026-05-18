import { motion as Motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useChatStore } from "../../store/chatStore";

export function ChatLauncher() {
  const isOpen = useChatStore((s) => s.isOpen);
  const toggleOpen = useChatStore((s) => s.toggleOpen);
  const unreadCount = useChatStore((s) => s.unreadCount);

  return (
    <Motion.button
      type="button"
      onClick={toggleOpen}
      className="chat-launcher group"
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      aria-label={isOpen ? "Close chat" : "Open live chat"}
      aria-expanded={isOpen}
    >
      <span className="chat-launcher-glow" aria-hidden />
      <AnimatePresence mode="wait">
        {isOpen ? (
          <Motion.span
            key="close"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <X className="h-6 w-6" />
          </Motion.span>
        ) : (
          <Motion.span
            key="open"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <MessageCircle className="h-6 w-6" />
          </Motion.span>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpen && unreadCount > 0 && (
          <Motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-secondary-foreground px-1 shadow-lg ring-2 ring-background"
          >
            {unreadCount > 9 ? "9+" : unreadCount}
          </Motion.span>
        )}
      </AnimatePresence>

      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-white/10" />
    </Motion.button>
  );
}
