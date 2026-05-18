import { motion as Motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useChatStore } from "../../store/chatStore";
import { simulateReply } from "../../utils/mockRealtime";

const SUGGESTIONS = [
  "How do I get started?",
  "Pricing & plans",
  "Talk to a human",
  "API documentation",
];

export function SuggestedReplies() {
  const sendMessage = useChatStore((s) => s.sendMessage);
  const handleClick = async (text) => {
    await sendMessage(text);
    simulateReply();
  };

  return (
    <div className="px-4 pb-2">
      <div className="flex items-center gap-1.5 mb-2 text-[11px] text-muted-foreground">
        <Sparkles className="h-3 w-3 text-primary" />
        <span>Suggested</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {SUGGESTIONS.map((text, i) => (
          <Motion.button
            key={text}
            type="button"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleClick(text)}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-foreground/90 hover:bg-primary/20 hover:border-primary/30 transition-colors"
          >
            {text}
          </Motion.button>
        ))}
      </div>
    </div>
  );
}
