import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'
import { useTheme } from 'next-themes';

const HireMe = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden max-md:right-8 max-md:left-auto max-md:top-0 max-md:bottom-auto max-md:absolute max-sm:right-0">
      <div className="w-48 h-auto flex items-center justify-center relative max-md:w-24">
        <CircularText className={`${isDark ? 'fill-light' : 'fill-dark'} animate-slowSpin`} />
        <Link
          href="mailto:deepmitra769@gmail.com"
          className={`flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${isDark ? 'bg-light text-dark border-light hover:bg-dark hover:text-light' : 'bg-dark text-light border-dark hover:text-dark hover:bg-light'} shadow-md border-2 border-solid max-md:size-12 size-20 max-md:text-[10px] md:text-6 rounded-full font-semibold  `}
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
}

export default HireMe