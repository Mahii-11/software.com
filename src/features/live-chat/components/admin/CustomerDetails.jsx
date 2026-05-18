import { createElement } from "react";
import {
  Mail,
  Building2,
  MapPin,
  Clock,
  Tag,
  DollarSign,
  FileText,
} from "lucide-react";
import { useConversations, useCustomer } from "../../hooks/useConversations";
import { useAdminStore } from "../../store/adminStore";
import { Avatar } from "../shared/Avatar";
import { StatusBadge } from "../shared/StatusBadge";

export function CustomerDetails() {
  const selectedId = useAdminStore((s) => s.selectedConversationId);
  const { data: conversations = [] } = useConversations();
  const conversation = conversations.find((c) => c.id === selectedId);
  const { data: customer, isLoading } = useCustomer(conversation?.customerId);

  if (!conversation) {
    return (
      <aside className="admin-panel hidden xl:flex flex-col w-full max-w-[var(--admin-details)] min-h-0">
        <div className="flex-1 flex items-center justify-center p-6">
          <p className="text-xs text-muted-foreground text-center">
            Customer details appear here
          </p>
        </div>
      </aside>
    );
  }

  return (
    <aside className="admin-panel hidden xl:flex flex-col w-full max-w-[300px] min-h-0 overflow-hidden">
      <div className="p-4 border-b border-white/5">
        <div className="flex flex-col items-center text-center">
          <Avatar
            src={conversation.customerAvatar}
            name={conversation.customerName}
            size="xl"
          />
          <h3 className="mt-3 text-sm font-semibold font-display">
            {conversation.customerName}
          </h3>
          <p className="text-xs text-muted-foreground">{conversation.customerEmail}</p>
          <div className="flex flex-wrap gap-1.5 justify-center mt-3">
            {conversation.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 chat-scrollbar">
        {isLoading ? (
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-8 rounded bg-white/5 animate-pulse" />
            ))}
          </div>
        ) : customer ? (
          <>
            <DetailRow icon={Building2} label="Company" value={customer.company} />
            <DetailRow icon={DollarSign} label="Plan" value={customer.plan} />
            <DetailRow icon={MapPin} label="Location" value={customer.location} />
            <DetailRow icon={Clock} label="Timezone" value={customer.timezone} />
            <DetailRow icon={Mail} label="Member since" value={customer.joinedAt} />
            <DetailRow
              icon={Tag}
              label="LTV"
              value={`$${customer.lifetimeValue?.toLocaleString()}`}
            />

            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-2">
                <FileText className="h-3.5 w-3.5" />
                Notes
              </div>
              <p className="text-xs leading-relaxed text-foreground/80 rounded-lg bg-white/5 border border-white/8 p-3">
                {customer.notes}
              </p>
            </div>

            <div>
              <p className="text-xs font-medium text-muted-foreground mb-2">Status</p>
              <StatusBadge status={conversation.status} />
            </div>
          </>
        ) : null}
      </div>
    </aside>
  );
}

function DetailRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
        {createElement(icon, {
          className: "h-3.5 w-3.5 text-muted-foreground",
        })}
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
          {label}
        </p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </div>
  );
}

