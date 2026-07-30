"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative rounded-2xl bg-[#0a0a0a] border border-[#222222] hover:border-[#444444] transition-colors duration-500 overflow-hidden ${className}`}
    >
      <div
        style={{
          transform: "translateZ(30px)",
        }}
        className="h-full w-full"
      >
        {children}
      </div>
      {/* Glare effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([x, y]: number[]) => {
              const xPos = (x + 0.5) * 100;
              const yPos = (y + 0.5) * 100;
              return `radial-gradient(circle at ${xPos}% ${yPos}%, rgba(255,255,255,0.06) 0%, transparent 50%)`;
            }
          ),
        }}
      />
    </motion.div>
  );
}
