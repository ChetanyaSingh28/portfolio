"use client";

import { motion } from "framer-motion";
import { GraduationCap, BadgeCheck, Calendar, Trophy, Building2 } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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
    <section id="education" className="relative py-24 sm:py-32 bg-slate-900/30">
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
            // My journey
          </p>
          <h2 className="section-heading text-3xl sm:text-4xl font-bold text-white">
            Education & Certifications
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Education Card */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4, borderColor: "rgba(34, 211, 238, 0.3)" }}
            className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 transition-colors duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-1">
                  Vellore Institute of Technology-AP
                </h3>
                <p className="text-cyan-400 font-medium text-sm mb-2">
                  B.Tech in CSE-AI/ML
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    2024 – 2028
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-white font-semibold">
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
            whileHover={{ y: -4, borderColor: "rgba(34, 211, 238, 0.3)" }}
            className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 transition-colors duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <BadgeCheck className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-1">
                  Certification
                </h3>
                <p className="text-cyan-400 font-medium text-sm mb-2">
                  Data Structures and Algorithms (DSA)
                </p>
                <div className="flex items-center gap-1.5 text-sm text-slate-400">
                  <Building2 className="w-3.5 h-3.5" />
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
