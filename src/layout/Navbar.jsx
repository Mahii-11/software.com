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
       <Link
  href="/"
  className="flex items-center gap-2 sm:gap-3 group cursor-pointer select-none"
>
  {/* Logo Icon */}
    <div
  >
    <img
      src="/images/logo.png"
      alt="BanglaTech Logo"
      className="w-5 h-5 sm:w-6 sm:h-6 md:w-44 md:h-12 object-contain"
    />

    {/* Glow Effect */}
    <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>
  </div>

  {/* Text 
  <h1
    className={`flex items-center font-bold tracking-tight 
    text-lg sm:text-xl md:text-2xl 
    transition-colors duration-300
    ${isScrolled ? "text-indigo-600" : "text-slate-900"}`}
  >
    <span className="font-extrabold">Bangla</span>
    <span
      className={`ml-1 font-extrabold 
      ${isScrolled ? "text-slate-900" : "text-blue-600"}`}
    >
      Tech
    </span>
  </h1>
  */}
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



{
  /*
    <div className="relative flex items-center justify-center 
    w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 
    rounded-xl 
    shadow-md shadow-primary/20 
    group-hover:shadow-lg group-hover:scale-105 
    transition-all duration-300 overflow-hidden"
  >

  */
}