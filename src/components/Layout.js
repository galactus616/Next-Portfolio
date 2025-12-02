import React from 'react'
import { useTheme } from 'next-themes';

const Layout = ({children, className = ""}) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  
  return (
    <div className={`w-full inline-block z-0 ${isDark ? 'bg-dark' : 'bg-light'} px-32 max-xl:px-24 max-lg:px-12 max-md:px-12 max-sm:px-8 pb-8 ${className}`}>
        {children}
    </div>
  )
}

export default Layout