"use client";

import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <>
      <motion.div
        className="pointer-events-none fixed -top-8 -left-10 hidden sm:block h-40 w-40 sm:h-56 sm:w-56 md:h-64 md:w-64 rounded-full bg-corn/20 blur-3xl dark:bg-corn/10 z-0"
        animate={{
          x: [0, 20, -10, 0],
          y: [0, -10, 10, 0],
          scale: [1, 1.05, 0.98, 1],
        }}
        transition={{ duration: 14, repeat: Infinity }}
      />
      <motion.div
        className="pointer-events-none fixed bottom-0 right-0 hidden sm:block h-48 w-48 sm:h-60 sm:w-60 md:h-72 md:w-72 translate-x-8 translate-y-8 rounded-full bg-tradewind/20 blur-3xl dark:bg-tradewind/10 z-0"
        animate={{
          x: [0, -15, 10, 0],
          y: [0, 12, -8, 0],
          scale: [1, 0.97, 1.03, 1],
        }}
        transition={{ duration: 16, repeat: Infinity }}
      />
    </>
  );
};

export default AnimatedBackground;
