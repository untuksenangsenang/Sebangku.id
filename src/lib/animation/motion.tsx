"use client";

import { motion, type Transition } from "framer-motion";
import type { ReactNode } from "react";

/* ================= BASIC TRANSITION ================= */
const smooth: Transition = {
  duration: 0.6,
  ease: "easeOut",
};

/* ================= VARIANTS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* ================= COMPONENTS ================= */

export const MotionDiv = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="show"
      transition={smooth}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const MotionContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ================= FLOAT ================= */

export const Float = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};