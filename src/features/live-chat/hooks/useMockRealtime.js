import { useEffect, useRef } from "react";
import { chatSocket } from "../services/websocket/chatSocket";
import { useChatStore } from "../store/chatStore";
import { chatEnv } from "../config/env";

/**
 * Simulates realtime events until Laravel WebSocket is connected.
 * Call once from LiveChatWidget — remove when production WS is live.
 */
export function useMockRealtime() {
  const isOpen = useChatStore((s) => s.isOpen);
  const isAiMode = useChatStore((s) => s.isAiMode);
  const addMessage = useChatStore((s) => s.addMessage);
  const setAgentTyping = useChatStore((s) => s.setAgentTyping);
  const incrementUnread = useChatStore((s) => s.incrementUnread);
  const started = useRef(false);

  useEffect(() => {
    if (!chatEnv.mockMode) return;

    chatSocket.connect();
    const unsubMessage = chatSocket.on("message", (msg) => {
      addMessage(msg);
      if (!useChatStore.getState().isOpen) incrementUnread();
    });
    const unsubTyping = chatSocket.on("typing", ({ isTyping, userType }) => {
      if (userType === "agent" || !isAiMode) setAgentTyping(isTyping);
    });

    return () => {
      unsubMessage();
      unsubTyping();
      chatSocket.disconnect();
    };
  }, [addMessage, incrementUnread, isAiMode, setAgentTyping]);

  useEffect(() => {
    if (!chatEnv.mockMode || isOpen) return;
    const timer = setTimeout(() => {
      if (!useChatStore.getState().isOpen) {
        useChatStore.setState({ unreadCount: 2 });
      }
    }, 12000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (!started.current && chatEnv.mockMode) {
      useChatStore.getState().loadAgent();
      started.current = true;
    }
  }, []);
}
