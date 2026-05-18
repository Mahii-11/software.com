import { motion as Motion } from "framer-motion";
import { ChevronRight, HelpCircle } from "lucide-react";
import { useFaqs } from "../../hooks/useConversations";
import { useChatStore } from "../../store/chatStore";

export function FaqCards() {
  const { data: faqs = [], isLoading } = useFaqs();
  const sendMessage = useChatStore((s) => s.sendMessage);

  const handleFaq = async (faq) => {
    await sendMessage(faq.question);
    useChatStore.getState().addMessage({
      id: `faq-ans-${faq.id}`,
      conversationId: useChatStore.getState().conversationId,
      senderId: "ai",
      senderType: "ai",
      content: faq.answer,
      type: "text",
      status: "read",
      createdAt: new Date().toISOString(),
    });
  };

  if (isLoading) {
    return (
      <div className="px-4 py-3 space-y-2">
        {[1, 2].map((i) => (
          <div key={i} className="h-14 rounded-xl bg-white/5 animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="px-4 pb-3"
    >
      <div className="flex items-center gap-1.5 mb-2 text-[11px] text-muted-foreground">
        <HelpCircle className="h-3 w-3" />
        <span>Popular questions</span>
      </div>
      <div className="space-y-2 max-h-36 overflow-y-auto chat-scrollbar">
        {faqs.slice(0, 3).map((faq, i) => (
          <Motion.button
            key={faq.id}
            type="button"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06 }}
            onClick={() => handleFaq(faq)}
            className="w-full flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.03] p-3 text-left hover:bg-white/[0.06] hover:border-primary/20 transition-all group"
          >
            <span className="flex-1 text-xs font-medium leading-snug">
              {faq.question}
            </span>
            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
          </Motion.button>
        ))}
      </div>
    </Motion.div>
  );
}
