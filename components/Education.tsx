"use client";

import { motion } from "framer-motion";
import { GraduationCap, BadgeCheck, Calendar, Trophy, Building2 } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
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
    transition: { staggerChildren: 0.15 },
  },
};

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mb-16"
        >
          <p className="text-[#64748b] font-mono text-xs tracking-widest uppercase mb-3">
            // My journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Education & Certifications
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Education Card */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4, borderColor: "#444444" }}
            className="p-8 rounded-2xl bg-[#111111] border border-[#222222] transition-colors duration-500"
          >
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-[#333333] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-[#fafafa]" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2">
                  Vellore Institute of Technology-AP
                </h3>
                <p className="text-[#94a3b8] font-medium text-sm mb-4">
                  B.Tech in CSE-AI/ML
                </p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#64748b] font-mono">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    2024 – 2028
                  </span>
                  <span className="flex items-center gap-2">
                    <Trophy className="w-4 h-4" />
                    <span className="text-[#e2e8f0] font-semibold">
                      CGPA: 9.11/10
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certification Card */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4, borderColor: "#444444" }}
            className="p-8 rounded-2xl bg-[#111111] border border-[#222222] transition-colors duration-500"
          >
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-[#333333] flex items-center justify-center">
                  <BadgeCheck className="w-5 h-5 text-[#fafafa]" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2">
                  Certifications
                </h3>
                <p className="text-[#94a3b8] font-medium text-sm mb-4">
                  Data Structures and Algorithms (DSA)
                </p>
                <div className="flex items-center gap-2 text-sm text-[#64748b] font-mono">
                  <Building2 className="w-4 h-4" />
                  GeeksforGeeks
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
