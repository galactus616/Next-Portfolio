import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { useTheme } from "next-themes";

import { Montserrat } from "next/font/google";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["500", "700"],
});

// Create a component that uses the theme to set the correct classes
const MainContent = ({ children, pageProps }) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <main
      className={`font-montserrat ${
        isDark ? "bg-dark text-light" : "bg-light text-dark"
      } w-full min-h-screen`}
    >
      {children}
    </main>
  );
};

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Dwipayan Mitra | Portfolio</title>
        <meta name="description" content="Welcome to my portfolio website. I'm a full-stack developer specializing in React, Next.js, and modern web technologies." />
        <meta name="keywords" content="Dwipayan Mitra, portfolio, full-stack developer, React, Next.js, JavaScript, web development" />
        <meta name="author" content="Dwipayan Mitra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#863e96" />
        <meta property="og:title" content="Dwipayan Mitra | Portfolio" />
        <meta property="og:description" content="Welcome to my portfolio website. I'm a full-stack developer specializing in React, Next.js, and modern web technologies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dwipayan-mitra-portfolio.vercel.app" />
        <meta property="og:image" content="/images/profile/propic.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dwipayan Mitra | Portfolio" />
        <meta name="twitter:description" content="Welcome to my portfolio website. I'm a full-stack developer specializing in React, Next.js, and modern web technologies." />
        <meta name="twitter:image" content="/images/profile/propic.png" />
        <link rel="icon" href="/images/profile/dmLogo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/profile/dmLogo.png" />
      </Head>
      <ThemeProvider>
        <MainContent pageProps={pageProps}>
          <NavBar />
          <AnimatePresence mode="wait">
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
          <Footer />
        </MainContent>
      </ThemeProvider>
    </>
  );
}
