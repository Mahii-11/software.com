/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#portfolio" },
  { name: "Our Team", path: "/our-team" }, 
  { name: "Media", path: "/media"},
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu bondho korar jonno escape key handle
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const scrollToSection = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
        isScrolled || mobileMenuOpen
          ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1460px] mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo Section (Only in main navbar) */}
        <Link
          to="/"
          className="relative z-[110] flex items-center gap-2 group cursor-pointer"
        >
          <img
            src="/images/logo.png"
            alt="BanglaTech Logo"
            className="w-auto h-8 md:h-10 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            item.path ? (
              <Link
                key={item.name}
                to={item.path}
                className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-indigo-600 transition-all duration-300 rounded-lg hover:bg-slate-50"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-indigo-600 transition-all duration-300 rounded-lg hover:bg-slate-50"
              >
                {item.name}
              </a>
            )
          ))}
          
          <div className="ml-4">
            <Button
              className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-7 shadow-md hover:shadow-indigo-200 transition-all duration-300"
              onClick={(e) => scrollToSection(e, "#contact")}
            >
              Get Started
            </Button>
          </div>
        </div>

        {/* Mobile Menu Toggle Button (Visible always in main navbar) */}
        <button
          className="relative z-[110] md:hidden p-2 text-slate-900 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {createPortal(
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Background Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[9998] md:hidden"
            />

            {/* Side Drawer Content */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[75%] max-w-xs bg-white z-[9999] shadow-2xl md:hidden flex flex-col p-8 pt-10"
            >
              {/* Top Drawer Header with Close Button, no logo */}
              <div className="flex items-center justify-end mb-10">
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-slate-600"
                  aria-label="Close Menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Menu Items with reduced size */}
              <div className="flex flex-col gap-6">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    {item.path ? (
                      <Link
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        onClick={(e) => scrollToSection(e, item.href)}
                        className="text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors"
                      >
                        {item.name}
                      </a>
                    )}
                  </motion.div>
                ))}
                <motion.div 
                className="mt-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  className="w-full bg-indigo-600 py-2 text-base rounded-xl shadow-md"
                  onClick={(e) => scrollToSection(e, "#contact")}
                >
                  Get Started
                </Button>
              </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      , document.body)}

    </nav>
  );
}