import { motion as Motion } from "framer-motion";
import { Bot } from "lucide-react";
import { useChatStore } from "../../store/chatStore";

export function AiWelcome() {
  const isAiMode = useChatStore((s) => s.isAiMode);
  const messages = useChatStore((s) => s.messages);

  if (!isAiMode || messages.length > 2) return null;

  return (
    <Motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="mx-4 mt-2 mb-1 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 p-4"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/20">
          <Bot className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h4 className="text-sm font-semibold font-display">AI Assistant</h4>
          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
            Ask anything about our product, billing, or integrations. Switch to
            human support anytime.
          </p>
        </div>
      </div>
    </Motion.div>
  );
}
