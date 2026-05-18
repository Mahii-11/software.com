import { motion as Motion, AnimatePresence } from "framer-motion";
import { useChatStore } from "../../store/chatStore";
import { ChatHeader } from "../header/ChatHeader";
import { MessageList } from "../messages/MessageList";
import { ChatInput } from "../input/ChatInput";
import { AiWelcome } from "../ai/AiWelcome";
import { SuggestedReplies } from "../ai/SuggestedReplies";
import { FaqCards } from "../ai/FaqCards";
import { HumanSwitchButton } from "../ai/HumanSwitchButton";
import { cn } from "../../utils/format";

export function ChatPopup() {
  const isOpen = useChatStore((s) => s.isOpen);
  const isMinimized = useChatStore((s) => s.isMinimized);
  const theme = useChatStore((s) => s.theme);
  const isAiMode = useChatStore((s) => s.isAiMode);
  const messages = useChatStore((s) => s.messages);
  const setMinimized = useChatStore((s) => s.setMinimized);

  const showAiExtras = isAiMode && messages.length <= 4;

  return (
    <AnimatePresence>
      {isOpen && (
        <Motion.div
          key="chat-popup"
          initial={{ opacity: 0, y: 24, scale: 0.92 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            height: isMinimized ? 56 : "auto",
          }}
          exit={{ opacity: 0, y: 24, scale: 0.92 }}
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
          className={cn(
            "chat-popup fixed z-[9998] flex flex-col overflow-hidden",
            "bottom-24 right-4 sm:right-6",
            "w-[calc(100vw-2rem)] sm:w-[400px]",
            "max-h-[min(640px,calc(100vh-12rem))]",
            theme === "light" ? "chat-theme-light" : "chat-theme-dark",
          )}
          onClick={isMinimized ? () => setMinimized(false) : undefined}
          role="dialog"
          aria-label="Live chat"
        >
          <ChatHeader />

          {!isMinimized && (
            <>
              <AiWelcome />
              <MessageList />
              {showAiExtras && (
                <>
                  <SuggestedReplies />
                  <FaqCards />
                  <HumanSwitchButton />
                </>
              )}
              <ChatInput />
            </>
          )}
        </Motion.div>
      )}
    </AnimatePresence>
  );
}
