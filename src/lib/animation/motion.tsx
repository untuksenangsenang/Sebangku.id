"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./variants";
import { smooth, springSmooth } from "./transitions";

/* ================= BASIC ================= */

export const MotionDiv = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeUp}
    transition={smooth}
    className={className}
  >
    {children}
  </motion.div>
);

export const MotionContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={staggerContainer}
    className={className}
  >
    {children}
  </motion.div>
);


/* ================= FLOAT (INI YANG KAMU BUTUH) ================= */

export const Float = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    animate={{
      y: [0, -15, 0],
    }}
    transition={{
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
    }}
    className={className}
  >
    {children}
  </motion.div>
);
