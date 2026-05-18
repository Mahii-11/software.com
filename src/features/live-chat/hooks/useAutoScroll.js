import { useEffect, useRef, useCallback } from "react";

export function useAutoScroll(deps = []) {
  const containerRef = useRef(null);
  const isNearBottomRef = useRef(true);

  const scrollToBottom = useCallback((behavior = "smooth") => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior });
  }, []);

  const handleScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const threshold = 80;
    isNearBottomRef.current =
      el.scrollHeight - el.scrollTop - el.clientHeight < threshold;
  }, []);

  useEffect(() => {
    if (isNearBottomRef.current) {
      scrollToBottom(deps.length > 0 ? "smooth" : "auto");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { containerRef, scrollToBottom, handleScroll };
}
