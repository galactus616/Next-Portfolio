import React from "react";
import { motion, stagger } from "framer-motion";
import { useTheme } from 'next-themes';

const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const fadeInUp = {
  initial: {
    y: 70,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  
  return (
    <div className="w-full mx-auto py-2 max-sm:py-0 flex items-center justify-center text-center overflow-hidden">
      <motion.h1
        variants={quote}
        initial="initial"
        animate="animate"
        className={`inline-block w-full ${isDark ? 'text-light' : 'text-dark'} font-bold capitalize text-8xl ${className}`}
      >
        {text.split(" ").map((word, i) =>
          <motion.span
            key={word + "-" + i}
            className="inline-block"
            variants={fadeInUp}
          >
            {word}&nbsp;
          </motion.span>
        )}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;