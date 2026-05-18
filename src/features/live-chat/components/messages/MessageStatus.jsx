import { Check, CheckCheck, Clock, AlertCircle } from "lucide-react";
import { cn } from "../../utils/format";

const icons = {
  sending: Clock,
  sent: Check,
  delivered: CheckCheck,
  read: CheckCheck,
  failed: AlertCircle,
};

export function MessageStatus({ status, isOutgoing }) {
  if (!isOutgoing) return null;

  const Icon = icons[status] ?? Check;
  const isRead = status === "read";

  return (
    <Icon
      className={cn(
        "h-3 w-3 shrink-0",
        status === "failed" && "text-destructive",
        isRead ? "text-secondary" : "text-muted-foreground/60",
        status === "delivered" && "text-muted-foreground/80"
      )}
      aria-label={`Message ${status}`}
    />
  );
}
