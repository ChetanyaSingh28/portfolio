"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-slate-950/50" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="text-xl font-bold font-mono text-cyan-400 tracking-tight group-hover:text-cyan-300 transition-colors">
              CS
            </span>
            <span className="hidden sm:inline text-sm text-slate-500 font-medium">
              / portfolio
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-medium transition-colors ${
                  activeSection === link.href.slice(1)
                    ? "text-cyan-400 active"
                    : "text-slate-400 hover:text-cyan-400"
                }`}
              >
                {link.label}
              </a>
            ))}
            <motion.a
              href="/Latest_Resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </motion.a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-cyan-400 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu md:hidden ${menuOpen ? "open" : ""}`}>
          <div className="py-4 space-y-3 border-t border-slate-800/50">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-2 py-2 text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Latest_Resume.pdf"
              download
              className="inline-block mt-2 px-4 py-2 text-sm font-medium rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
