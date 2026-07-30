"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Download, FolderOpen } from "lucide-react";
import Magnetic from "./ui/Magnetic";
import WordReveal from "./ui/WordReveal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as any, stiffness: 100, damping: 20 },
  },
};

export default function Hero() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 300]); 
  const opacityParallax = useTransform(scrollY, [0, 400], [1, -0.5]);
  const scaleParallax = useTransform(scrollY, [0, 500], [1, 0.8]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Vibrant but sophisticated background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-900/[0.08] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-200/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        style={{ y: yParallax, opacity: opacityParallax, scale: scaleParallax }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto"
      >
        {/* Name (Now Big) */}
        <div className="mb-4">
          <WordReveal
            text="CHETANYA SINGH"
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none text-white"
            delay={0.1}
          />
        </div>

        {/* Headline / Title (Now Smaller) */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl font-mono text-[#94a3b8] tracking-widest uppercase mb-8"
        >
          Full-Stack AI Engineer
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-[#94a3b8] max-w-2xl mx-auto leading-relaxed mb-12 font-light"
        >
          Engineering end-to-end artificial intelligence pipelines and scalable
          full-stack software systems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <Magnetic stiffness={200}>
            <a
              href="/Latest_Resume.pdf"
              download="Chetanya_Singh_Resume.pdf"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm tracking-wide overflow-hidden transition-transform active:scale-95"
            >
              <div className="absolute inset-0 bg-[#f0f0f0] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <Download className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Download Resume</span>
            </a>
          </Magnetic>

          <Magnetic stiffness={200}>
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#333333] text-[#fafafa] font-medium text-sm hover:border-[#666666] hover:bg-[#111111] transition-all duration-300 active:scale-95"
            >
              <FolderOpen className="w-4 h-4 text-[#94a3b8]" />
              View Projects
            </a>
          </Magnetic>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-8"
        >
          <Magnetic>
            <a
              href="https://github.com/ChetanyaSingh28"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748b] hover:text-white transition-colors p-2 block"
              aria-label="GitHub Profile"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="https://www.linkedin.com/in/chetanya-singh-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748b] hover:text-white transition-colors p-2 block"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="https://www.kaggle.com/cs2806"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748b] hover:text-white transition-colors p-2 block"
              aria-label="Kaggle Profile"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.281.18.046.149.034.238-.034.27l-6.555 6.567 6.836 8.508c.095.104.117.208.073.306z" />
              </svg>
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>
    </section>
  );
}
