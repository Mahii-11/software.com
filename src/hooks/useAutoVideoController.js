import { useEffect, useRef, useState } from "react";

let activeVideo = null;

export function useAutoVideoController(threshold = 0.6) {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // 👁 visibility
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  // 🎬 control video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible) {
      // stop previous video
      if (activeVideo && activeVideo !== video) {
        activeVideo.pause();
        activeVideo.muted = true;
      }

      activeVideo = video;

      video.play().catch(() => {});

      // ⚠️ try unmute (browser may block it)
      try {
        video.muted = false;
      } catch {
        video.muted = true;
      }

    } else {
      if (activeVideo === video) activeVideo = null;

      video.pause();
      video.muted = true;
    }
  }, [isVisible]);

  return { videoRef, isVisible };
}