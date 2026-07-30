"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Brain, BarChart3, Cpu } from "lucide-react";

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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring" as any, stiffness: 200, damping: 15 } 
  },
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
    <section id="skills" className="relative py-24 sm:py-32 bg-[#0a0a0a]">
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
            // What I work with
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Technical Skills
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              whileHover={{ borderColor: "#444444" }}
              className={`p-6 sm:p-8 rounded-2xl bg-[#111111] border border-[#222222] transition-colors duration-500 ${category.span}`}
            >
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#222222]">
                <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-[#333333] flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-[#fafafa]" />
                </div>
                <h3 className="font-bold text-white text-lg tracking-tight">
                  {category.title}
                </h3>
              </div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2.5"
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={pillVariants}
                    whileHover={{
                      backgroundColor: "#fafafa",
                      color: "#000000",
                      borderColor: "#fafafa",
                      scale: 1.05,
                    }}
                    className="px-3.5 py-1.5 rounded-md text-xs font-medium bg-[#1a1a1a] text-[#94a3b8] border border-[#333333] transition-colors duration-300"
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
