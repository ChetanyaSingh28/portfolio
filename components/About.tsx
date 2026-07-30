"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ladderVariant = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring" as any, stiffness: 100, damping: 20 } 
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "chetanya0628@gmail.com",
    href: "mailto:chetanya0628@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7020601336",
    href: "tel:+917020601336",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Panvel, Maharashtra 410206",
    href: null,
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ladderVariant}
          className="mb-16"
        >
          <p className="text-[#64748b] font-mono text-xs tracking-widest uppercase mb-3">
            // Get to know me
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            About Me
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid lg:grid-cols-5 gap-12 items-start"
        >
          {/* Bio */}
          <div className="lg:col-span-3">
            <div className="border-l border-[#333333] pl-6 py-2 text-[#94a3b8] text-base sm:text-lg leading-relaxed font-light space-y-4">
              <motion.p variants={ladderVariant}>
                B.Tech CSE-AI/ML student with hands-on experience engineering end-to-end artificial intelligence pipelines and scalable full-stack software systems.
              </motion.p>
              <motion.p variants={ladderVariant}>
                Passionate about applying supervised learning, probabilistic modeling, and data-driven software architecture to solve complex real-world problems.
              </motion.p>
              <motion.p variants={ladderVariant}>
                Eager to deepen expertise under industry leaders and contribute to impactful AI and software solutions.
              </motion.p>
            </div>
          </div>

          {/* Contact Grid */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((contact) => (
              <motion.div
                key={contact.label}
                variants={ladderVariant}
                whileHover={{ x: 5, backgroundColor: "#111111" }}
                className="flex items-center gap-4 p-5 rounded-xl border border-[#222222] bg-[#0a0a0a] transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#1a1a1a] border border-[#333333] flex items-center justify-center">
                  <contact.icon className="w-4 h-4 text-[#fafafa]" />
                </div>
                <div>
                  <p className="text-[10px] text-[#64748b] uppercase tracking-widest font-mono mb-1">
                    {contact.label}
                  </p>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="text-sm text-[#e2e8f0] hover:text-white transition-colors"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-sm text-[#e2e8f0]">{contact.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
