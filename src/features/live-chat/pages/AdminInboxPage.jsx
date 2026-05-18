import { motion as Motion } from "framer-motion";
import { Inbox, LayoutDashboard } from "lucide-react";
import { ChatQueryProvider } from "../providers/QueryProvider";
import { AnalyticsCards } from "../components/admin/AnalyticsCards";
import { SearchBar } from "../components/admin/SearchBar";
import { FilterDropdown } from "../components/admin/FilterDropdown";
import { ConversationSidebar } from "../components/admin/ConversationSidebar";
import { AdminChatPanel } from "../components/admin/AdminChatPanel";
import { CustomerDetails } from "../components/admin/CustomerDetails";
import "../styles/chat.css";

function AdminInboxContent() {
  return (
    <div className="admin-inbox min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto">
        <Motion.header
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20">
              <Inbox className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold font-display tracking-tight">
                Support Inbox
              </h1>
              <p className="text-sm text-muted-foreground">
                Manage conversations · Laravel API ready
              </p>
            </div>
          </div>
        </Motion.header>

        <Motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-6"
        >
          <div className="flex items-center gap-2 mb-4 text-xs text-muted-foreground">
            <LayoutDashboard className="h-3.5 w-3.5" />
            <span>Overview</span>
          </div>
          <AnalyticsCards />
        </Motion.section>

        <Motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-4 flex flex-col sm:flex-row gap-3"
        >
          <div className="flex-1">
            <SearchBar />
          </div>
          <FilterDropdown />
        </Motion.section>

        <Motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-[minmax(280px,320px)_1fr] xl:grid-cols-[minmax(280px,320px)_1fr_300px] gap-4 h-[calc(100vh-22rem)] min-h-[500px]"
        >
          <ConversationSidebar />
          <AdminChatPanel />
          <CustomerDetails />
        </Motion.div>
      </div>
    </div>
  );
}

export default function AdminInboxPage() {
  return (
    <ChatQueryProvider>
      <AdminInboxContent />
    </ChatQueryProvider>
  );
}
