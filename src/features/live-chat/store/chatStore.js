import { create } from "zustand";
import { chatApi } from "../services/api/chatApi";

const WIDGET_CONV_ID = "conv-widget";

const initialMessages = [
  {
    id: "welcome-1",
    conversationId: WIDGET_CONV_ID,
    senderId: "ai",
    senderType: "ai",
    content:
      "Welcome! I'm your AI assistant. Ask me anything or browse FAQs below — switch to a human anytime.",
    type: "text",
    status: "read",
    createdAt: new Date().toISOString(),
  },
];

export const useChatStore = create((set, get) => ({
  // Widget UI
  isOpen: false,
  isMinimized: false,
  theme: "dark",
  unreadCount: 1,

  // Conversation
  conversationId: WIDGET_CONV_ID,
  messages: initialMessages,
  agent: null,
  isAiMode: true,
  isAgentTyping: false,
  isAiTyping: false,
  showEmojiPicker: false,
  pendingAttachment: null,

  // Actions
  setOpen: (isOpen) =>
    set({ isOpen, unreadCount: isOpen ? 0 : get().unreadCount }),
  setMinimized: (isMinimized) => set({ isMinimized }),
  toggleOpen: () => {
    const next = !get().isOpen;
    set({ isOpen: next, unreadCount: next ? 0 : get().unreadCount });
  },
  setTheme: (theme) => set({ theme }),

  addMessage: (message) =>
    set((s) => ({
      messages: [...s.messages, message],
    })),

  updateMessageStatus: (messageId, status) =>
    set((s) => ({
      messages: s.messages.map((m) =>
        m.id === messageId ? { ...m, status } : m
      ),
    })),

  setAgent: (agent) => set({ agent }),
  setAiMode: (isAiMode) => set({ isAiMode }),
  setAgentTyping: (isAgentTyping) => set({ isAgentTyping }),
  setAiTyping: (isAiTyping) => set({ isAiTyping }),
  setShowEmojiPicker: (show) => set({ showEmojiPicker: show }),
  setPendingAttachment: (file) => set({ pendingAttachment: file }),
  incrementUnread: () => set((s) => ({ unreadCount: s.unreadCount + 1 })),

  sendMessage: async (content, type = "text") => {
    const { conversationId, pendingAttachment } = get();
    const optimistic = {
      id: `temp-${Date.now()}`,
      conversationId,
      senderId: "visitor",
      senderType: "visitor",
      content,
      type,
      status: "sending",
      createdAt: new Date().toISOString(),
      attachment: pendingAttachment,
    };

    set((s) => ({
      messages: [...s.messages, optimistic],
      pendingAttachment: null,
      showEmojiPicker: false,
    }));

    try {
      const saved = await chatApi.sendMessage(conversationId, {
        content,
        type,
        attachment: pendingAttachment,
      });
      set((s) => ({
        messages: s.messages.map((m) =>
          m.id === optimistic.id ? { ...saved, status: "delivered" } : m
        ),
      }));
      return saved;
    } catch {
      set((s) => ({
        messages: s.messages.map((m) =>
          m.id === optimistic.id ? { ...m, status: "failed" } : m
        ),
      }));
    }
  },

  loadAgent: async () => {
    const agents = await chatApi.getAgents();
    const online = agents.find((a) => a.status === "online") ?? agents[0];
    set({ agent: online });
    return online;
  },
}));
