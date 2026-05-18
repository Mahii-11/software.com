import { format, formatDistanceToNow, isToday, isYesterday } from "date-fns";

export function formatMessageTime(isoString) {
  const date = new Date(isoString);
  if (isToday(date)) return format(date, "h:mm a");
  if (isYesterday(date)) return `Yesterday ${format(date, "h:mm a")}`;
  return format(date, "MMM d, h:mm a");
}

export function formatRelativeTime(isoString) {
  return formatDistanceToNow(new Date(isoString), { addSuffix: true });
}

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
