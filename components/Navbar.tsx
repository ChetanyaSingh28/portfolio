"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import Magnetic from "./ui/Magnetic";

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
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 bg-[#000000]/80 backdrop-blur-xl border-b border-[#222222]/50 transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-black/50" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Magnetic>
            <a href="#hero" className="flex items-center gap-2 group p-2 -ml-2">
              <span className="text-xl font-bold font-mono text-white tracking-tight transition-colors">
                CS
              </span>
              <span className="hidden sm:inline text-sm text-[#64748b] font-medium group-hover:text-white transition-colors">
                / portfolio
              </span>
            </a>
          </Magnetic>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Magnetic key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link block p-2 text-sm font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? "text-white active"
                      : "text-[#64748b] hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </Magnetic>
            ))}
            
            <Magnetic>
              <motion.a
                href="/Latest_Resume.pdf"
                download="Chetanya_Singh_Resume.pdf"
                className="ml-2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-[#111111] text-[#fafafa] border border-[#333333] hover:bg-[#1a1a1a] hover:border-[#555555] transition-all duration-300"
              >
                <Download className="w-3.5 h-3.5 text-[#94a3b8]" />
                Resume
              </motion.a>
            </Magnetic>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-[#94a3b8] hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu md:hidden ${menuOpen ? "open" : ""}`}>
          <div className="py-4 space-y-3 border-t border-[#222222]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-2 py-2 text-sm font-medium text-[#64748b] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Latest_Resume.pdf"
              download="Chetanya_Singh_Resume.pdf"
              className="inline-flex mt-2 items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-[#111111] text-[#fafafa] border border-[#333333]"
            >
              <Download className="w-3.5 h-3.5 text-[#94a3b8]" />
              Resume
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
