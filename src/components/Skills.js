import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Git",
  "RESTful APIs",
  "GraphQL",
  "TypeScript",
  "Redux",
  "Docker",
  "AWS",
]

const Skill = ({ name, x, y }) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <motion.div
      className={`flex items-center justify-center rounded-full font-semibold py-3 px-6 shadow-dark cursor-pointer absolute max-lg:py-2 max-lg:px-4 max-md:text-sm max-md:py-1.5 max-md:px-3  ${isDark ? 'max-xs:bg-transparent max-xs:text-light bg-light text-dark' : 'max-xs:bg-transparent max-xs:text-dark bg-dark text-light'}`}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}

const Skills = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <>
      <h2 className={`font-bold text-8xl mt-40 w-full text-center mb-8 max-md:text-6xl max-md:mt-32 ${isDark ? 'text-light' : 'text-dark'}`}>Skills</h2>
      <div className={`w-full h-screen relative flex items-center justify-center rounded-full max-lg:h-[80vh] max-sm:h-[60vh] max-xs:h-[50vh] ${isDark ? 'circularDark' : 'circularLight'}`}>
        <motion.div className={`flex items-center justify-center rounded-full font-semibold p-8 shadow-dark cursor-pointer max-lg:p-6 max-md:p-4 max-xs:text-xs max-xs:p-2 ${isDark ? 'bg-light text-dark' : 'bg-dark text-light'}`} whileHover={{ scale: 1.05 }}>Web</motion.div>

        <Skill name="JavaScript" x="-20vw" y="2vw" />
        <Skill name="React" x="15vw" y="-10vw" />
        <Skill name="Next.js" x="0vw" y="12vw" />
        <Skill name="Node.js" x="-15vw" y="-12vw" />
        <Skill name="Express" x="32vw" y="6vw" />
        <Skill name="MongoDB" x="-25vw" y="-15vw" />
        <Skill name="HTML" x="0vw" y="-20vw" />
        <Skill name="CSS" x="18vw" y="18vw" />
        <Skill name="Tailwind CSS" x="-32vw" y="10vw" />
        <Skill name="Git" x="0vw" y="23vw" />
        <Skill name="RESTful APIs" x="25vw" y="-15vw" />
        <Skill name="GraphQL" x="-18vw" y="15vw" />
        <Skill name="TypeScript" x="15vw" y="0vw" />
        <Skill name="Redux" x="-10vw" y="-22vw" />
        <Skill name="Docker" x="28vw" y="15vw" />
        <Skill name="AWS" x="-30vw" y="0vw" />
      </div>
    </>
  );
}

export default Skills