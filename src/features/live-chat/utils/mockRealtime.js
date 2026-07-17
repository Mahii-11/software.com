import { useChatStore } from "../store/chatStore";
import { chatApi } from "../services/api/chatApi";

/** Real AI reply from backend */
export async function sendAiReply(payload) {

  const {
    conversationId,
    setAiTyping,
    addMessage,
    updateMessageStatus,
  } = useChatStore.getState();

  try {

    // Show typing indicator
    setAiTyping(true);

    // Send message to backend
    const response = await chatApi.sendMessage(
      conversationId,
      payload
    );

    console.log("AI RESPONSE:", response);

    // Add bot reply into chat UI
    addMessage(response.data);

    // Mark last visitor message as read
    setTimeout(() => {

      const msgs = useChatStore.getState().messages;

      const lastVisitor = [...msgs]
        .reverse()
        .find((m) => m.senderType === "visitor");

      if (lastVisitor) {
        updateMessageStatus(lastVisitor.id, "read");
      }

    }, 500);

  } catch (error) {

    console.error("AI Reply Error:", error);

    // Optional fallback error message
    addMessage({
      id: `err-${Date.now()}`,
      conversationId,

      senderId: "ai",
      senderType: "ai",

      content: "Something went wrong. Please try again.",

      type: "text",
      status: "failed",

      createdAt: new Date().toISOString(),
    });

  } finally {

    // Hide typing indicator
    setAiTyping(false);
  }
}