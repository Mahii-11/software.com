import { motion as Motion } from "framer-motion";
import { cn } from "../../utils/format";

const EMOJI_GROUPS = [
  ["😀", "😊", "🙌", "👍", "❤️", "🔥", "✨", "🎉"],
  ["👋", "💡", "✅", "❓", "📎", "🚀", "💬", "⭐"],
  ["😅", "🤔", "👀", "💯", "🙏", "😎", "🎯", "📦"],
];

export function EmojiPicker({ onSelect, className }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.96 }}
      className={cn(
        "absolute bottom-full left-0 mb-2 p-2 rounded-2xl border border-white/10 bg-card/95 backdrop-blur-xl shadow-2xl z-20",
        className
      )}
    >
      {EMOJI_GROUPS.map((group, gi) => (
        <div key={gi} className="flex gap-0.5">
          {group.map((emoji) => (
            <button
              key={emoji}
              type="button"
              onClick={() => onSelect(emoji)}
              className="h-9 w-9 flex items-center justify-center rounded-lg text-lg hover:bg-white/10 transition-colors active:scale-90"
            >
              {emoji}
            </button>
          ))}
        </div>
      ))}
    </Motion.div>
  );
}
