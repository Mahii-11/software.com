import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryClient";

export function ChatQueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
