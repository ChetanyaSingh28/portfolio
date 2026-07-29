"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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
          variants={fadeInUp}
          className="mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-2">
            // Get to know me
          </p>
          <h2 className="section-heading text-3xl sm:text-4xl font-bold text-white">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="lg:col-span-3"
          >
            <div className="border-l-2 border-cyan-500/40 pl-6">
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                B.Tech CSE-AI/ML student with hands-on experience engineering
                end-to-end artificial intelligence pipelines and scalable
                full-stack software systems. Passionate about applying supervised
                learning, probabilistic modeling, and data-driven software
                architecture to solve complex real-world problems. Eager to
                deepen expertise under industry leaders and contribute to
                impactful AI and software solutions.
              </p>
            </div>
          </motion.div>

          {/* Contact Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((contact) => (
              <motion.div
                key={contact.label}
                variants={fadeInUp}
                whileHover={{ y: -3, borderColor: "rgba(34, 211, 238, 0.4)" }}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <contact.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                    {contact.label}
                  </p>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="text-sm text-slate-200 hover:text-cyan-400 transition-colors"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-sm text-slate-200">{contact.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
