import { cn } from "../../utils/format";

const config = {
  online: { label: "Online", className: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
  away: { label: "Away", className: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
  busy: { label: "Busy", className: "text-red-400 bg-red-500/10 border-red-500/20" },
  offline: { label: "Offline", className: "text-muted-foreground bg-muted/50 border-border" },
  open: { label: "Open", className: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
  pending: { label: "Pending", className: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
  resolved: { label: "Resolved", className: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
  urgent: { label: "Urgent", className: "text-red-400 bg-red-500/10 border-red-500/20" },
  high: { label: "High", className: "text-orange-400 bg-orange-500/10 border-orange-500/20" },
  normal: { label: "Normal", className: "text-muted-foreground bg-muted/30 border-border" },
  low: { label: "Low", className: "text-slate-400 bg-slate-500/10 border-slate-500/20" },
};

export function StatusBadge({ status, className }) {
  const item = config[status] ?? config.offline;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide",
        item.className,
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />
      {item.label}
    </span>
  );
}
