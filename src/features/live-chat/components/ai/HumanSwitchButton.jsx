import { motion as Motion } from "framer-motion";
import { UserRound } from "lucide-react";
import { useChatStore } from "../../store/chatStore";

export function HumanSwitchButton() {
  const isAiMode = useChatStore((s) => s.isAiMode);
  const setAiMode = useChatStore((s) => s.setAiMode);
  const addMessage = useChatStore((s) => s.addMessage);
  const loadAgent = useChatStore((s) => s.loadAgent);

  if (!isAiMode) return null;

  const switchToHuman = async () => {
    setAiMode(false);
    const agent = await loadAgent();
    addMessage({
      id: `handoff-${Date.now()}`,
      conversationId: useChatStore.getState().conversationId,
      senderId: "system",
      senderType: "ai",
      content: `Connecting you with ${agent?.name ?? "our team"}... Average wait: under 2 min.`,
      type: "text",
      status: "read",
      createdAt: new Date().toISOString(),
    });
    // Laravel: POST /chat/conversations/:id/handoff
  };

  return (
    <Motion.button
      type="button"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={switchToHuman}
      className="mx-4 mb-2 flex w-[calc(100%-2rem)] items-center justify-center gap-2 rounded-xl border border-secondary/30 bg-secondary/10 py-2.5 text-xs font-semibold text-secondary hover:bg-secondary/20 transition-colors"
    >
      <UserRound className="h-4 w-4" />
      Talk to a human agent
    </Motion.button>
  );
}
