/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Rocket } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all  duration-300 ${
        isScrolled ? "bg-white shadow-sm border-b border-gray-100  py-4" : "bg-white/40 backdrop-blur-md border-b border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-all duration-300">
            <Rocket className="w-6 h-6 fill-current" />
          </div>
          <span className={`font-display font-bold text-xl tracking-tight ${isScrolled ? "text-indigo-600" : "text-slate-900"}`}>
            Nova<span className={`${isScrolled ? "text-slate-900" : "text-blue-700"}`}>Tech</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
               className={`text-sm font-medium transition-colors ${
               isScrolled ? "text-slate-700 hover:text-indigo-600" : "text-slate-700 hover:text-indigo-600"
               }`}
            >
              {item.name}
            </a>
          ))}
          <Button
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-6"
            onClick={(e) => scrollToSection(e, "#contact")}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav border-t border-white/5 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-lg font-medium text-white hover:text-primary transition-colors py-2"
                >
                  {item.name}
                </a>
              ))}
              <Button
                className="w-full bg-primary hover:bg-primary/90"
                onClick={(e) => scrollToSection(e, "#contact")}
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
