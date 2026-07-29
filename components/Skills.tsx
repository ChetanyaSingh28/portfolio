"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Brain, BarChart3, Cpu } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "Java", "C", "R Programming"],
    span: "sm:col-span-1",
  },
  {
    title: "Web & DB",
    icon: Globe,
    skills: ["Next.js", "React", "Tailwind CSS", "Streamlit", "Flask", "MySQL"],
    span: "sm:col-span-1",
  },
  {
    title: "AI/ML Tools",
    icon: Brain,
    skills: [
      "XGBoost",
      "Scikit-learn",
      "OpenCV",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "MobileNetV2",
      "YOLO",
    ],
    span: "sm:col-span-2 lg:col-span-1",
  },
  {
    title: "Data",
    icon: BarChart3,
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
    span: "sm:col-span-1",
  },
  {
    title: "Core Concepts",
    icon: Cpu,
    skills: ["DSA", "OOP", "Linear Algebra", "Probability"],
    span: "sm:col-span-1",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-slate-900/30">
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
            // What I work with
          </p>
          <h2 className="section-heading text-3xl sm:text-4xl font-bold text-white">
            Technical Skills
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              whileHover={{
                borderColor: "rgba(34, 211, 238, 0.3)",
                boxShadow: "0 0 20px rgba(34, 211, 238, 0.06)",
              }}
              className={`p-6 rounded-2xl bg-slate-900/60 border border-slate-800 transition-all duration-300 ${category.span}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="font-semibold text-white text-lg">
                  {category.title}
                </h3>
              </div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={pillVariants}
                    whileHover={{
                      borderColor: "#22d3ee",
                      color: "#22d3ee",
                      backgroundColor: "rgba(34, 211, 238, 0.08)",
                      y: -2,
                    }}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700 cursor-default transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
