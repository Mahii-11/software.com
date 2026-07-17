import { useEffect } from "react";
import { Outlet } from "react-router";
import Lenis from "lenis";

import { Navbar } from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import ContactWidget from "../components/ContactWidget";

export default function ApplayOut() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      lerp: 0.08,
    });

    let animationFrameId;

    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <Navbar />

      <main>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#0B1F3A",
              color: "#fff",
              borderRadius: "10px",
              padding: "12px 16px",
            },
          }}
        />

        <Outlet />
      </main>

      <Footer />
      <ContactWidget />
    </div>
  );
}