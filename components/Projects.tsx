"use client";

import { motion } from "framer-motion";
import { Eye, Building, Radar, Plane } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
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
    title: "Indian Domestic Flight Fare Predictor",
    year: "2025",
    icon: Plane,
    description:
      "A Machine Learning web application that predicts domestic flight prices in India based on historical pricing data. Reverse-engineered airline dynamic pricing logic using an XGBoost Regressor, achieving an R² score of ~97% on historical testing data (July-Aug 2023).",
    features:
      "Predicts fares based on Origin & Destination (Hub-and-Spoke routing), Airline Carrier, Time of Day, and Flight Duration. Added robust source/destination validation guardrails to the backend routing.",
    limitations:
      "Model testing reveals underpricing for same-day flights due to a lack of a booking_date feature in the training dataset, which is necessary to calculate the exponential surge of last-minute bookings. Prices do not account for macro-economic inflation post-2023.",
    tech: ["Python", "XGBoost", "Streamlit", "Pandas", "NumPy", "Scikit-Learn"],
    featured: true,
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
    tech: ["React", "Tailwind CSS", "Flask", "MySQL"],
  },
  {
    title: "Military Aircraft Detection Model",
    year: "2026",
    icon: Radar,
    description:
      "Developed a real-time object detection pipeline using PyTorch and YOLO to classify military aircraft. Conducted data preprocessing and tuning to achieve high mAP while optimizing inference speed for edge deployment.",
    tech: ["PyTorch", "YOLO", "Python", "Edge AI"],
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
          variants={fadeInUp}
          className="mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-2">
            // What I&apos;ve built
          </p>
          <h2 className="section-heading text-3xl sm:text-4xl font-bold text-white">
            Featured Projects
          </h2>
        </motion.div>

        {/* Project Grid - Bento Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`group rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden flex flex-col hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] transition-[border-color,box-shadow] duration-350 ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              {/* Card Header */}
              <div className="p-6 pb-0">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {project.year}
                  </span>
                  <project.icon className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors leading-snug">
                  {project.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-6 pt-2 flex-1 flex flex-col">
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Features (for featured project) */}
                {project.features && (
                  <div className="mb-4">
                    <p className="text-xs font-mono text-cyan-400/70 uppercase tracking-wider mb-1.5">
                      Features & Architecture
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {project.features}
                    </p>
                  </div>
                )}

                {/* Limitations (for featured project) */}
                {project.limitations && (
                  <div className="mb-4 p-3 rounded-lg bg-amber-500/5 border border-amber-500/10">
                    <p className="text-xs font-mono text-amber-400/70 uppercase tracking-wider mb-1.5">
                      Limitations (PoC)
                    </p>
                    <p className="text-sm text-slate-400/80 leading-relaxed">
                      {project.limitations}
                    </p>
                  </div>
                )}

                {/* Spacer */}
                <div className="flex-1" />

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono text-cyan-400/70 bg-cyan-500/5 px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
