import { motion as Motion } from "framer-motion";
import {
  MessageSquare,
  Clock,
  CheckCircle2,
  Star,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import { useAnalytics } from "../../hooks/useConversations";
import { cn } from "../../utils/format";

const cards = [
  { key: "openConversations", label: "Open chats", icon: MessageSquare, suffix: "" },
  { key: "avgResponseTime", label: "Avg response", icon: Clock, suffix: "", isTime: true },
  { key: "resolutionRate", label: "Resolution rate", icon: CheckCircle2, suffix: "%" },
  { key: "satisfactionScore", label: "CSAT score", icon: Star, suffix: "/5" },
];

export function AnalyticsCards() {
  const { data, isLoading } = useAnalytics();

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="admin-stat-card h-24 animate-pulse bg-white/5" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {cards.map((card, i) => {
        const value = data?.[card.key];
        const changeKey = `${card.key}Change`;
        const change = data?.[changeKey];
        const isPositive = change > 0;
        const Icon = card.icon;

        let display = value;
        if (card.key === "resolutionRate") display = `${value}%`;
        if (card.key === "satisfactionScore") display = `${value}${card.suffix}`;

        return (
          <Motion.div
            key={card.key}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="admin-stat-card p-4"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              {change != null && (
                <span
                  className={cn(
                    "flex items-center gap-0.5 text-[10px] font-medium",
                    isPositive ? "text-emerald-400" : "text-red-400"
                  )}
                >
                  {isPositive ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {Math.abs(change)}%
                </span>
              )}
            </div>
            <p className="mt-3 text-2xl font-bold font-display tracking-tight">
              {display}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">{card.label}</p>
          </Motion.div>
        );
      })}
    </div>
  );
}
