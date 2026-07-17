import { chatEnv } from "../../config/env";
//import mockConversations from "../../data/mockConversations.json";
import mockMessages from "../../data/mockMessages.json";
import mockFaqs from "../../data/mockFaqs.json";
//import mockCustomers from "../../data/mockCustomers.json";
//import mockAnalytics from "../../data/mockAnalytics.json";
const BASE_URL = "https://backend.banglatechsolutionit.com/api";



const delay = (ms = 400) => new Promise((r) => setTimeout(r, ms));

/**
 * Chat API service layer — Laravel integration points.
 * Endpoints mirror typical REST structure; swap mock returns with httpClient calls.
 */
export const chatApi = {
  /** GET /chat/agents */
  async getAgents() {

  const res = await fetch(`${BASE_URL}/chat-agent-data`);

  if (!res.ok) {
    throw new Error("Failed to fetch agents");
  }

  const data = await res.json();

  return data.data.data;
},


  /** GET /chat/conversations/:id/messages */
  async getMessages(conversationId) {
    if (chatEnv.mockMode) {
      await delay(250);
      return mockMessages[conversationId] ?? [];
    }
    // return httpClient(`/chat/conversations/${conversationId}/messages`);
    return mockMessages[conversationId] ?? [];
  },

  /** POST /chat/conversations/:id/messages */
async sendMessage(conversationId, payload) {

  const res = await fetch(`${BASE_URL}/live-chat`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      conversation_id: conversationId,
      message: payload.content,
      type: payload.type ?? "text",
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to send message");
  }

  const data = await res.json();

  // Transform backend response → frontend message object
  return {
    success: data.success,

    data: {
      id: `msg-${Date.now()}`,
      conversationId,

      senderId: "ai",
      senderType: "ai",

      content: data.reply,

      type: "text",
      status: "delivered",

      createdAt: new Date().toISOString(),
    },
  };
},
  /** GET /chat/faqs */
  async getFaqs() {
    if (chatEnv.mockMode) {
      await delay(150);
      return mockFaqs;
    }
    // return httpClient("/chat/faqs");
    return mockFaqs;
  },

  

  /** POST /chat/conversations — start new widget conversation */
  async createConversation(payload) {
    if (chatEnv.mockMode) {
      await delay(400);
      return {
        id: "conv-widget",
        ...payload,
        createdAt: new Date().toISOString(),
      };
    }
    // return httpClient("/chat/conversations", { method: "POST", body: JSON.stringify(payload) });
    return null;
  },
};
