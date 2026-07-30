"use client";

import { motion } from "framer-motion";
import { Eye, Building, Radar, Plane } from "lucide-react";
import TiltCard from "./ui/TiltCard";

const sideBounce = {
  hidden: { opacity: 0, x: 300 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as any, bounce: 0.5, damping: 10 }
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

interface Project {
  title: string;
  year: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  features?: string;
  limitations?: string;
  tech: string[];
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Military Aircraft Detection & Multi-Object Tracking (MOT)",
    year: "2026",
    icon: Radar,
    description:
      "An end-to-end computer vision and MLOps pipeline designed to detect, classify, and continuously track 102 distinct classes of military aircraft in high-speed, dynamic video feeds. Trained on a highly imbalanced dataset of 4,600+ images (25.9M parameters), the model achieved elite metrics on a strictly isolated validation set: Precision (Box P): 84.7%, mAP50: 79.4%, Classification Loss: 1.041.",
    features:
      "Engineered a persistent JSON-based splitting mechanism for zero data leakage. Built a resilient cloud MLOps pipeline on Kaggle (Tesla T4 GPUs) that auto-saves optimizer state to bypass 12-hour session timeouts. Integrated ByteTrack with custom IoU thresholds for high-speed tracking without ID switching.",
    limitations:
      "Detecting military aircraft presents a unique CV challenge due to fine-grained visual similarities, such as distinguishing highly similar delta-wing fighters at various altitudes and angles.",
    tech: ["Python", "Ultralytics", "ByteTrack", "YOLO", "Kaggle", "PyTorch"],
    featured: true,
  },
  {
    title: "Indian Domestic Flight Fare Predictor",
    year: "2026",
    icon: Plane,
    description:
      "A Machine Learning web application that predicts domestic flight prices in India based on historical pricing data. Reverse-engineered airline dynamic pricing logic using an XGBoost Regressor, achieving an R² score of ~97% on historical testing data (July-Aug 2023).",
    tech: ["Python", "XGBoost", "Streamlit", "Pandas", "NumPy", "Scikit-Learn"],
  },
  {
    title: "Real-Time Cognitive Fatigue and Drowsiness Monitor",
    year: "2026",
    icon: Eye,
    description:
      "Engineered an end-to-end CV pipeline using OpenCV and Haar Cascades. Trained a MobileNetV2 CNN using TensorFlow/Keras, achieving >94% classification accuracy for alert vs. fatigued states optimized for low-latency CPU.",
    tech: ["OpenCV", "MobileNetV2", "TensorFlow", "Keras"],
  },
  {
    title: "Hostel/PG Management SaaS Platform",
    year: "2025",
    icon: Building,
    description:
      "Built a responsive full-stack platform using React, Tailwind CSS, and a Python/Flask backend. Architected a horizontally scalable MySQL database capable of processing millions of records without latency.",
    tech: ["React", "Tailwind CSS", "Python/Flask", "MySQL"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sideBounce}
          className="mb-16"
        >
          <p className="text-[#64748b] font-mono text-xs tracking-widest uppercase mb-3">
            // What I&apos;ve built
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Featured Projects
          </h2>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={sideBounce}
              className={`${project.featured ? "md:col-span-2" : ""}`}
            >
              <TiltCard className="h-full group">
                <div className="p-8 pb-0">
                  <div className="flex items-center justify-between mb-6 border-b border-[#222222] pb-6">
                    <span className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-[#111111] text-[#94a3b8] border border-[#333333]">
                      {project.year}
                    </span>
                    <project.icon className="w-5 h-5 text-[#64748b] group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-[#fafafa]">
                    {project.title}
                  </h3>
                </div>

                <div className="p-8 pt-0 flex-1 flex flex-col">
                  <p className="text-sm text-[#94a3b8] leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>

                  {/* Features */}
                  {project.features && (
                    <div className="mb-6 pl-4 border-l border-[#333333]">
                      <p className="text-[10px] font-mono text-[#64748b] uppercase tracking-widest mb-2">
                        Features & Architecture
                      </p>
                      <p className="text-sm text-[#94a3b8] leading-relaxed font-light">
                        {project.features}
                      </p>
                    </div>
                  )}

                  {/* Limitations */}
                  {project.limitations && (
                    <div className="mb-8 p-4 rounded-lg bg-[#111111] border border-[#333333]">
                      <p className="text-[10px] font-mono text-[#64748b] uppercase tracking-widest mb-2">
                        Limitations (PoC)
                      </p>
                      <p className="text-sm text-[#94a3b8] leading-relaxed font-light">
                        {project.limitations}
                      </p>
                    </div>
                  )}

                  <div className="flex-1" />

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-[#222222]">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono text-[#94a3b8] bg-[#111111] border border-[#333333] px-2.5 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
