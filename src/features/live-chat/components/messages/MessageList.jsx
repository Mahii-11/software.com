import { AnimatePresence } from "framer-motion";
import { useChatStore } from "../../store/chatStore";
import { useAutoScroll } from "../../hooks/useAutoScroll";
import { MessageBubble } from "./MessageBubble";
import { TypingIndicator } from "./TypingIndicator";

export function MessageList() {
  const messages = useChatStore((s) => s.messages);
  const isAgentTyping = useChatStore((s) => s.isAgentTyping);
  const isAiTyping = useChatStore((s) => s.isAiTyping);
  const isAiMode = useChatStore((s) => s.isAiMode);

  const showTyping = isAiMode ? isAiTyping : isAgentTyping;
  const typingLabel = isAiMode ? "AI is thinking..." : "Sarah is typing...";

  const { containerRef, handleScroll } = useAutoScroll([
    messages.length,
    showTyping,
  ]);

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className="flex-1 overflow-y-auto overflow-x-hidden px-4 py-4 space-y-3 chat-scrollbar"
    >
      <AnimatePresence mode="popLayout">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
      </AnimatePresence>
      <AnimatePresence>
        {showTyping && <TypingIndicator label={typingLabel} />}
      </AnimatePresence>
    </div>
  );
}
