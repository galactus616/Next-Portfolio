import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";
import { useTheme } from 'next-themes';

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between max-md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0, transition: { duration: 0.5, type: "spring" } }}
        viewport={{ once: true }}
      >
        <h3 className={`capitalize font-bold text-2xl max-sm:text-xl max-xs:text-lg ${isDark ? 'text-light' : 'text-dark'}`}>{type}</h3>
        <span className={`capitalize font-medium max-xs:text-sm ${isDark ? 'text-light/75' : 'text-dark/75'}`}>
          {time} | {place}
        </span>
        <p className={`font-medium w-full max-md:text-sm ${isDark ? 'text-light' : 'text-dark'}`}>{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <div className="my-64">
      <h2 className={`font-bold text-8xl w-full text-center mb-16 max-md:text-6xl ${isDark ? 'text-light' : 'text-dark'}`}>Education</h2>

      <div ref={ref} className="w-[75%] mx-auto relative max-md:w-full max-lg:w-[90%]">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className={`absolute left-9 top-1 w-1 h-full ${isDark ? 'bg-light' : 'bg-dark'} origin-top max-md:w-[2px] max-md:left-[30px] max-xs:left-[20px]`}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 max-xs:ml-2">
          <Details
            type="B.Tech In Electronics & Communication"
            time="2021 - 2025"
            place="Guru Nanak Institute Of Technology (Kolkata, India)"
            info="Relevant courses included Data
          Structures and Algorithms, Computer Systems Engineering, and
          Artificial Intelligence."
          />
          <Details
            type="Higher Secondary Education (Science)"
            time="2019 - 2021"
            place="Nimta High School (Kolkata, India)"
            info="Graduated with First Division Honors, focusing on Physics,
          Chemistry, Mathematics and Computer Applications."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;