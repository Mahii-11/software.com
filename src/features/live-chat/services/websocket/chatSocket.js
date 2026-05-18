import { chatEnv } from "../../config/env";

/**
 * WebSocket service placeholder for Laravel Echo / Pusher / native WS.
 *
 * Laravel integration example:
 * - Echo.private(`conversation.${id}`).listen('MessageSent', handler)
 * - Echo.join('agents').here(...).joining(...).leaving(...)
 */
class ChatSocketService {
  constructor() {
    this.socket = null;
    this.listeners = new Map();
    this.connected = false;
    this.mockIntervals = [];
  }

  /** Connect to WebSocket — replace with Echo.connector or native WebSocket */
  connect(token) {
    if (chatEnv.mockMode) {
      this.connected = true;
      this._emit("connected", { mock: true });
      return;
    }

    // const ws = new WebSocket(`${chatEnv.wsUrl}?token=${token}`);
    // ws.onmessage = (e) => this._handleMessage(JSON.parse(e.data));
    // this.socket = ws;
    console.info("[ChatSocket] Connect:", chatEnv.wsUrl, token ? "(auth)" : "");
  }

  disconnect() {
    this.mockIntervals.forEach(clearInterval);
    this.mockIntervals = [];
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
    this.connected = false;
    this._emit("disconnected");
  }

  /** Subscribe to conversation channel */
  subscribeToConversation(conversationId) {
    if (chatEnv.mockMode) return conversationId;
    // Echo.private(`conversation.${conversationId}`).listen('.MessageSent', ...)
    return conversationId;
  }

  unsubscribeFromConversation(conversationId) {
    void conversationId;
    // Echo.leave(`conversation.${conversationId}`)
  }

  /** Register event handlers: message, typing, agent_status, etc. */
  on(event, callback) {
    if (!this.listeners.has(event)) this.listeners.set(event, new Set());
    this.listeners.get(event).add(callback);
    return () => this.listeners.get(event)?.delete(callback);
  }

  _emit(event, data) {
    this.listeners.get(event)?.forEach((cb) => cb(data));
  }

  /** Send typing indicator — POST or WS emit */
  sendTyping(conversationId, isTyping) {
    if (chatEnv.mockMode) {
      this._emit("typing", { conversationId, isTyping, userId: "visitor" });
      return;
    }
    // this.socket?.send(JSON.stringify({ type: 'typing', conversationId, isTyping }));
  }

  /** Mock: simulate inbound agent message (dev only) */
  simulateInboundMessage(message) {
    this._emit("message", message);
  }

  simulateAgentTyping(conversationId, isTyping) {
    this._emit("typing", {
      conversationId,
      isTyping,
      userId: "agent-1",
      userType: "agent",
    });
  }
}

export const chatSocket = new ChatSocketService();
