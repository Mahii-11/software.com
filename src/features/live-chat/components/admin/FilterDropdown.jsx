import { Filter } from "lucide-react";
import { useAdminStore } from "../../store/adminStore";

const STATUS_OPTIONS = [
  { value: "all", label: "All status" },
  { value: "open", label: "Open" },
  { value: "pending", label: "Pending" },
  { value: "resolved", label: "Resolved" },
];

const PRIORITY_OPTIONS = [
  { value: "all", label: "All priority" },
  { value: "urgent", label: "Urgent" },
  { value: "high", label: "High" },
  { value: "normal", label: "Normal" },
  { value: "low", label: "Low" },
];

export function FilterDropdown() {
  const statusFilter = useAdminStore((s) => s.statusFilter);
  const priorityFilter = useAdminStore((s) => s.priorityFilter);
  const setStatusFilter = useAdminStore((s) => s.setStatusFilter);
  const setPriorityFilter = useAdminStore((s) => s.setPriorityFilter);

  return (
    <div className="flex flex-wrap gap-2">
      <div className="relative flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
        <Filter className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-transparent text-xs font-medium outline-none cursor-pointer pr-6"
          aria-label="Filter by status"
        >
          {STATUS_OPTIONS.map((o) => (
            <option key={o.value} value={o.value} className="bg-card text-foreground">
              {o.label}
            </option>
          ))}
        </select>
      </div>
      <select
        value={priorityFilter}
        onChange={(e) => setPriorityFilter(e.target.value)}
        className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium outline-none cursor-pointer"
        aria-label="Filter by priority"
      >
        {PRIORITY_OPTIONS.map((o) => (
          <option key={o.value} value={o.value} className="bg-card text-foreground">
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
