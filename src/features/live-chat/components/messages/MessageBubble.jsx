import { motion as Motion } from "framer-motion";
import { formatMessageTime, cn } from "../../utils/format";
import { MessageStatus } from "./MessageStatus";
import { FilePreview } from "./FilePreview";

export function MessageBubble({ message }) {
  const isVisitor = message.senderType === "visitor";
  const isAi = message.senderType === "ai";

  return (
    <Motion.div
      layout
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={cn("flex w-full", isVisitor ? "justify-end" : "justify-start")}
    >
      <div
        className={cn(
          "max-w-[85%] flex flex-col gap-1",
          isVisitor ? "items-end" : "items-start"
        )}
      >
        {isAi && (
          <span className="text-[10px] font-medium text-primary/80 px-1 mb-0.5">
            AI Assistant
          </span>
        )}
        <div
          className={cn(
            "relative px-4 py-2.5 text-[13.5px] leading-relaxed shadow-sm",
            isVisitor
              ? "chat-bubble-outgoing rounded-2xl rounded-br-md"
              : "chat-glass-bubble rounded-2xl rounded-bl-md"
          )}
        >
          {message.attachment && (
            <div className="mb-2">
              <FilePreview file={message.attachment} compact />
            </div>
          )}
          <p className="whitespace-pre-wrap break-words">{message.content}</p>
        </div>
        <div
          className={cn(
            "flex items-center gap-1.5 px-1",
            isVisitor ? "flex-row-reverse" : "flex-row"
          )}
        >
          <span className="text-[10px] text-muted-foreground/70">
            {formatMessageTime(message.createdAt)}
          </span>
          <MessageStatus status={message.status} isOutgoing={isVisitor} />
        </div>
      </div>
    </Motion.div>
  );
}
