import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import { useTheme } from "next-themes";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-px inline-block bg-dark ${
          isDark ? "bg-light" : "bg-dark"
        } font-semibold absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      ></span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group ${isDark ? "text-dark" : "text-light"} my-2 cursor-pointer`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-px inline-block ${
          isDark ? "bg-dark" : "bg-light"
        } font-semibold absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      ></span>
    </button>
  );
};

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between z-10 max-lg:px-16 max-md:px-12 max-sm:px-8">
      <button
        className="flex-col items-center justify-center hidden max-lg:flex cursor-pointer"
        onClick={handleClick}
      >
        <span
          className={`${
            theme === "dark" ? "bg-light" : "bg-dark"
          } block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`${
            theme === "dark" ? "bg-light" : "bg-dark"
          } block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`${
            theme === "dark" ? "bg-light" : "bg-dark"
          } block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full max-lg:hidden flex items-center justify-between">
        <nav>
          <CustomLink href={"/"} title={"Home"} className="mr-4" />
          <CustomLink href={"/about"} title={"About"} className="mx-4" />
          <CustomLink href={"/projects"} title={"Projects"} className="mx-4" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://www.linkedin.com/in/dwipayan-mitra"
            target="_blank"
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.9 }}
            className="mr-4 w-6"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href={"https://github.com/galactus616"}
            target="_blank"
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.5 }}
            className={`mx-4 w-6 rounded-full`}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.9 }}
            className="mx-4 w-6"
          >
            <TwitterIcon />
          </motion.a>

          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center p-1 size-6 rounded-full cursor-pointer ${
              theme === "dark" ? "bg-light text-dark" : "bg-dark text-light"
            }`}
          >
            {theme === "dark" ? (
              <MoonIcon className={"fill-dark"} />
            ) : (
              <SunIcon className={"fill-light"} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: 50, y: 50 }}
          animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
          className={`min-w-[70vw] lg:hidden flex flex-col items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 ${
            theme === "dark" ? "bg-light/75" : "bg-dark/90"
          } rounded-lg backdrop-blur-md py-32`}
        >
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLink
              href={"/"}
              title={"Home"}
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href={"/about"}
              title={"About"}
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href={"/projects"}
              title={"Projects"}
              className=""
              toggle={handleClick}
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-3">
            <motion.a
              href="https://www.linkedin.com/in/dwipayan-mitra"
              target="_blank"
              whileHover={{
                y: -2,
              }}
              whileTap={{ scale: 0.9 }}
              className="mr-3 max-sm:mx-2 w-6"
            >
              <LinkedInIcon className={""} />
            </motion.a>
            <motion.a
              href="https://github.com/galactus616"
              target="_blank"
              whileHover={{
                y: -2,
              }}
              whileTap={{ scale: 0.5 }}
              className="mx-3 max-sm:mx-2 w-6"
            >
              <GithubIcon className={`border-1 rounded-full ${theme === "dark" ? "text-dark" : "bg-dark text-light"}`} />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              whileHover={{
                y: -2,
              }}
              whileTap={{ scale: 0.9 }}
              className="mx-3 max-sm:mx-2 w-6"
            >
              <TwitterIcon className={""} />
            </motion.a>

            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className={`ml-3 max-sm:ml-2 flex items-center justify-center p-1 size-6 rounded-full cursor-pointer ${
                theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              {theme === "dark" ? (
                <MoonIcon className={"fill-dark"} />
              ) : (
                <SunIcon className={"fill-light"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-1 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
