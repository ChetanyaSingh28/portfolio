"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

interface MagneticProps {
  children: React.ReactElement;
  stiffness?: number;
  damping?: number;
  mass?: number;
}

export default function Magnetic({
  children,
  stiffness = 150,
  damping = 15,
  mass = 0.1,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { stiffness, damping, mass };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current || !isHovered) return;
      const { clientX, clientY } = e;
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      x.set(middleX * 0.2); // 0.2 represents the strength of the magnetic pull
      y.set(middleY * 0.2);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      x.set(0);
      y.set(0);
    };

    const element = ref.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseleave", handleMouseLeave);
      element.addEventListener("mouseenter", () => setIsHovered(true));

      return () => {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseleave", handleMouseLeave);
        element.removeEventListener("mouseenter", () => setIsHovered(true));
      };
    }
  }, [isHovered, x, y]);

  return (
    <motion.div ref={ref} style={{ x, y }} className="inline-block">
      {children}
    </motion.div>
  );
}
