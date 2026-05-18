import { chatSocket } from "../services/websocket/chatSocket";
import { useChatStore } from "../store/chatStore";
import { chatEnv } from "../config/env";

const AI_REPLIES = [
  "I'd be happy to help with that! Our Pro plan includes unlimited conversations and custom branding.",
  "You can embed the widget with a single script tag. Check our docs for React and Vue examples.",
  "Human agents are available Mon–Fri 9am–6pm EST. I can connect you now if you'd like.",
  "Our Laravel SDK makes backend integration straightforward — webhooks, REST API, and Echo support.",
];

const AGENT_REPLIES = [
  "Thanks for reaching out! Let me look into that for you.",
  "I've noted your request — you should see the update in your dashboard within a few minutes.",
  "Happy to help! Is there anything else you'd like to know?",
];

/** Simulate AI/agent reply after visitor sends a message (mock mode only) */
export function simulateReply() {
  if (!chatEnv.mockMode) return;

  const { isAiMode, conversationId, setAiTyping, setAgentTyping } =
    useChatStore.getState();
  const typingSetter = isAiMode ? setAiTyping : setAgentTyping;

  typingSetter(true);

  setTimeout(() => {
    typingSetter(false);
    const pool = isAiMode ? AI_REPLIES : AGENT_REPLIES;
    const content = pool[Math.floor(Math.random() * pool.length)];
    chatSocket.simulateInboundMessage({
      id: `sim-${Date.now()}`,
      conversationId,
      senderId: isAiMode ? "ai" : "agent-1",
      senderType: isAiMode ? "ai" : "agent",
      content,
      type: "text",
      status: "delivered",
      createdAt: new Date().toISOString(),
    });

    setTimeout(() => {
      const msgs = useChatStore.getState().messages;
      const lastVisitor = [...msgs].reverse().find((m) => m.senderType === "visitor");
      if (lastVisitor) {
        useChatStore.getState().updateMessageStatus(lastVisitor.id, "read");
      }
    }, 500);
  }, 1500 + Math.random() * 1000);
}
