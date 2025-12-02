import Link from "next/link";
import React from "react";
import { motion, useAnimation } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  const controls = useAnimation();

  const handleMouseEnter = () => {
    controls.start({
      backgroundColor: [
        "#121212",
        "rgba(131,58,180,1)",
        "rgba(253,29,29,1)",
        "rgba(252,176,69,1)",
        "rgba(131,58,180,1)",
        "#121212",
      ],
      transition: { duration: 1, repeat: 1, repeatType: "mirror" },
    });
  };

  const handleMouseLeave = () => {
    controls.start({
      backgroundColor: "#121212",
      transition: { duration: 0.5 },
    });
  };

  return (
    <div className="flex item-center justify-center mt-2">
      <MotionLink
        href="/"
        animate={controls}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-16 h-16 bg-[#121212] text-light flex items-center justify-center rounded-full text-2xl font-bold border-2 border-solid border-light"
      >
        DM
      </MotionLink>
    </div>
  );
};

export default Logo;
