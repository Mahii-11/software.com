import { useState, useRef } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Send, Paperclip, Smile } from "lucide-react";

import { useChatStore } from "../../store/chatStore";

import { EmojiPicker } from "./EmojiPicker";
import { FilePreview } from "../messages/FilePreview";

import { chatSocket } from "../../services/websocket/chatSocket";

export function ChatInput() {

  const [text, setText] = useState("");

  const fileRef = useRef(null);

  const sendMessage = useChatStore((s) => s.sendMessage);

  const showEmojiPicker = useChatStore((s) => s.showEmojiPicker);
  const setShowEmojiPicker = useChatStore(
    (s) => s.setShowEmojiPicker
  );

  const pendingAttachment = useChatStore(
    (s) => s.pendingAttachment
  );

  const setPendingAttachment = useChatStore(
    (s) => s.setPendingAttachment
  );

  const conversationId = useChatStore(
    (s) => s.conversationId
  );

  // Send Message
  const handleSend = async () => {

    const trimmed = text.trim();

    if (!trimmed && !pendingAttachment) return;

    // Clear input instantly
    setText("");

    // Send real backend message
    await sendMessage(
      trimmed || "📎 Attachment"
    );
  };

  // Enter key send
  const handleKeyDown = (e) => {

    if (e.key === "Enter" && !e.shiftKey) {

      e.preventDefault();

      handleSend();
    }
  };

  // Typing event
  const handleTyping = () => {
    chatSocket.sendTyping(conversationId, true);
  };

  // File upload
  const handleFile = (e) => {

    const file = e.target.files?.[0];

    if (file) {
      setPendingAttachment(file);
    }

    e.target.value = "";
  };

  return (
    <div className="relative border-t border-white/5 p-3 bg-gradient-to-t from-background/80 to-transparent">

      {/* File Preview */}
      <AnimatePresence>

        {pendingAttachment && (
          <Motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-2"
          >
            <FilePreview
              file={pendingAttachment}
              onRemove={() => setPendingAttachment(null)}
              compact
            />
          </Motion.div>
        )}

      </AnimatePresence>

      {/* Emoji Picker */}
      <AnimatePresence>

        {showEmojiPicker && (
          <EmojiPicker
            onSelect={(emoji) => {

              setText((t) => t + emoji);

              setShowEmojiPicker(false);
            }}
          />
        )}

      </AnimatePresence>

      <div className="flex items-end gap-2">

        {/* Left Icons */}
        <div className="flex gap-1">

          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="chat-icon-btn"
            aria-label="Attach file"
          >
            <Paperclip className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() =>
              setShowEmojiPicker(!showEmojiPicker)
            }
            className="chat-icon-btn"
            aria-label="Emoji picker"
          >
            <Smile className="h-4 w-4" />
          </button>

        </div>

        {/* Input */}
        <textarea
          value={text}
          onChange={(e) => {

            setText(e.target.value);

            handleTyping();
          }}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          rows={1}
          className="chat-input flex-1 min-h-[42px] max-h-28 resize-none"
        />

        {/* Send Button */}
        <Motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSend}
          disabled={!text.trim() && !pendingAttachment}
          className="chat-send-btn"
          aria-label="Send message"
        >
          <Send className="h-4 w-4" />
        </Motion.button>

      </div>

      {/* Hidden File Input */}
      <input
        ref={fileRef}
        type="file"
        className="hidden"
        accept="image/*,.pdf,.doc,.docx"
        onChange={handleFile}
      />

    </div>
  );
}