import { cn } from "../../utils/format";

export function Avatar({ src, name, size = "md", status, className }) {
  const sizes = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
    xl: "h-14 w-14 text-lg",
  };

  const statusColors = {
    online: "bg-status-online",
    away: "bg-status-away",
    busy: "bg-status-busy",
    offline: "bg-status-offline",
  };

  const initials = name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className={cn("relative inline-flex shrink-0", className)}>
      <div
        className={cn(
          "rounded-full overflow-hidden ring-2 ring-white/10 bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center font-semibold text-foreground",
          sizes[size]
        )}
      >
        {src ? (
          <img src={src} alt={name} className="h-full w-full object-cover" />
        ) : (
          <span>{initials}</span>
        )}
      </div>
      {status && (
        <span
          className={cn(
            "absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full ring-2 ring-background",
            statusColors[status] ?? statusColors.offline
          )}
          aria-label={`Status: ${status}`}
        />
      )}
    </div>
  );
}
