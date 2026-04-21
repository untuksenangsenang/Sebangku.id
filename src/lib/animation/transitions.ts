// src/lib/animation/transitions.ts

import { Transition } from "framer-motion";

// Smooth (default modern feel)
export const smooth: Transition = {
  duration: 0.6,
  ease: "easeOut",
};

// Premium (Apple / Stripe feel)
export const springSmooth: Transition = {
  type: "spring",
  stiffness: 80,
  damping: 20,
};

// Fast animation (micro interaction)
export const fast: Transition = {
  duration: 0.3,
  ease: "easeOut",
};