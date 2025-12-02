import { motion, useScroll } from "framer-motion";
import React from "react";
import { useTheme } from 'next-themes';

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <figure className={isDark ? "absolute left-0 stroke-light" : "absolute left-0 stroke-dark"}>
      <svg width="75" height="75" viewBox="0 0 100 100" className="-rotate-90 max-md:w-[60px] max-md:h-[60px] max-xs:w-[40px] max-xs:h-[40px]">
        <circle
          cx="75"
          cy="50"
          r="20"
          className={isDark ? "stroke-primaryDark stroke-1 fill-none" : "stroke-primary stroke-1 fill-none"}
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className={`stroke-[5px] ${isDark ? 'fill-dark' : 'fill-light'}`}
          style={{
            pathLength: scrollYProgress
          }}
        />
        <circle cx="75" cy="50" r="10" className={`animate-pulse stroke-1 ${isDark ? 'fill-primaryDark' : 'fill-primary'}`} />
      </svg>
    </figure>
  );
};

export default LiIcon;