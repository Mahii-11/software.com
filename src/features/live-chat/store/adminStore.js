import { create } from "zustand";

export const useAdminStore = create((set) => ({
  selectedConversationId: "conv-2",
  searchQuery: "",
  statusFilter: "all",
  priorityFilter: "all",
  sidebarCollapsed: false,

  setSelectedConversation: (id) => set({ selectedConversationId: id }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setStatusFilter: (statusFilter) => set({ statusFilter }),
  setPriorityFilter: (priorityFilter) => set({ priorityFilter }),
  setSidebarCollapsed: (sidebarCollapsed) => set({ sidebarCollapsed }),
}));
