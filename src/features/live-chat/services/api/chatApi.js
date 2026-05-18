import { chatEnv } from "../../config/env";
import mockAgents from "../../data/mockAgents.json";
import mockConversations from "../../data/mockConversations.json";
import mockMessages from "../../data/mockMessages.json";
import mockFaqs from "../../data/mockFaqs.json";
import mockCustomers from "../../data/mockCustomers.json";
import mockAnalytics from "../../data/mockAnalytics.json";

const delay = (ms = 400) => new Promise((r) => setTimeout(r, ms));

/**
 * Chat API service layer — Laravel integration points.
 * Endpoints mirror typical REST structure; swap mock returns with httpClient calls.
 */
export const chatApi = {
  /** GET /chat/agents */
  async getAgents() {
    if (chatEnv.mockMode) {
      await delay();
      return mockAgents;
    }
    // return httpClient("/chat/agents");
    return mockAgents;
  },

  /** GET /chat/conversations */
  async getConversations(params = {}) {
    if (chatEnv.mockMode) {
      await delay(300);
      let list = [...mockConversations];
      if (params.status) list = list.filter((c) => c.status === params.status);
      if (params.search) {
        const q = params.search.toLowerCase();
        list = list.filter(
          (c) =>
            c.customerName.toLowerCase().includes(q) ||
            c.lastMessage.toLowerCase().includes(q)
        );
      }
      return list;
    }
    // return httpClient(`/chat/conversations?${new URLSearchParams(params)}`);
    return mockConversations;
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
    if (chatEnv.mockMode) {
      await delay(200);
      return {
        id: `msg-${Date.now()}`,
        conversationId,
        senderId: "visitor",
        senderType: "visitor",
        content: payload.content,
        type: payload.type ?? "text",
        status: "sent",
        createdAt: new Date().toISOString(),
        attachment: payload.attachment ?? null,
      };
    }
    // return httpClient(`/chat/conversations/${conversationId}/messages`, {
    //   method: "POST",
    //   body: JSON.stringify(payload),
    // });
    return null;
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

  /** GET /chat/customers/:id */
  async getCustomer(customerId) {
    if (chatEnv.mockMode) {
      await delay(200);
      return mockCustomers.find((c) => c.id === customerId) ?? null;
    }
    // return httpClient(`/chat/customers/${customerId}`);
    return null;
  },

  /** GET /chat/analytics/overview */
  async getAnalytics() {
    if (chatEnv.mockMode) {
      await delay(300);
      return mockAnalytics;
    }
    // return httpClient("/chat/analytics/overview");
    return mockAnalytics;
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
