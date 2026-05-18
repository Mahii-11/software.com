import { useQuery } from "@tanstack/react-query";
import { chatApi } from "../services/api/chatApi";
import { useAdminStore } from "../store/adminStore";

export const conversationKeys = {
  all: ["conversations"],
  list: (filters) => [...conversationKeys.all, "list", filters],
  messages: (id) => ["conversations", id, "messages"],
  customer: (id) => ["customers", id],
  analytics: ["chat", "analytics"],
  agents: ["chat", "agents"],
  faqs: ["chat", "faqs"],
};

/** React Query hook — swap staleTime/cache when Laravel APIs are live */
export function useConversations() {
  const searchQuery = useAdminStore((s) => s.searchQuery);
  const statusFilter = useAdminStore((s) => s.statusFilter);

  return useQuery({
    queryKey: conversationKeys.list({ searchQuery, statusFilter }),
    queryFn: () =>
      chatApi.getConversations({
        search: searchQuery || undefined,
        status: statusFilter !== "all" ? statusFilter : undefined,
      }),
    staleTime: 30_000,
  });
}

export function useConversationMessages(conversationId) {
  return useQuery({
    queryKey: conversationKeys.messages(conversationId),
    queryFn: () => chatApi.getMessages(conversationId),
    enabled: Boolean(conversationId),
    staleTime: 10_000,
  });
}

export function useCustomer(customerId) {
  return useQuery({
    queryKey: conversationKeys.customer(customerId),
    queryFn: () => chatApi.getCustomer(customerId),
    enabled: Boolean(customerId),
    staleTime: 60_000,
  });
}

export function useAnalytics() {
  return useQuery({
    queryKey: conversationKeys.analytics,
    queryFn: () => chatApi.getAnalytics(),
    staleTime: 60_000,
  });
}

export function useAgents() {
  return useQuery({
    queryKey: conversationKeys.agents,
    queryFn: () => chatApi.getAgents(),
    staleTime: 120_000,
  });
}

export function useFaqs() {
  return useQuery({
    queryKey: conversationKeys.faqs,
    queryFn: () => chatApi.getFaqs(),
    staleTime: 300_000,
  });
}
