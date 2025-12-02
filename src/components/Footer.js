import React from 'react'
import { useTheme } from 'next-themes';

const Footer = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  
  return (
    <footer className={`py-8 flex justify-center w-full ${isDark ? 'border-t-2 border-light text-light' : 'border-t-2 border-dark text-dark'} font-medium text-lg max-sm:text-base`}>
      <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
    </footer>
  )
}

export default Footer