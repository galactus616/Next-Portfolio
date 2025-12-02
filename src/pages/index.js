import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/propic.png'
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import AnimatedText from '@/components/AnimatedText';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import { useTheme } from 'next-themes';
import TransitionEffect from '@/components/TransitionEffect';

export default function Home() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  
  return (
    <>
      <Head>
        <title>Dwipayan Mitra | Portfolio</title>
        <meta name="description" content="Welcome to my portfolio website. I'm a full-stack developer specializing in React, Next.js, and modern web technologies. Explore my projects and skills." />
        <meta name="keywords" content="Dwipayan Mitra, portfolio, full-stack developer, React, Next.js, JavaScript, web development" />
        <meta name="author" content="Dwipayan Mitra" />
      </Head>
      <TransitionEffect />
      <main className={`flex items-center text-${isDark ? 'light' : 'dark'} w-full min-h-[calc(100vh-4rem)]`}>
        <Layout className="pt-0 max-md:pt-0 max-sm:pt-0">
          <div className="flex items-center justify-between w-full max-lg:flex-col">
            <div className="max-md:w-full w-1/2 my-5">
              <Image
                src={profilePic}
                alt="Dwipayan Mitra"
                className="w-full h-auto max-lg:hidden max-md:inline-block max-md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center max-lg:w-full max-lg:text-center">
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className='text-6xl! text-left! max-xl:text-5xl! max-lg:text-center! max-lg:text-6xl! max-md:text-5xl! max-sm:text-3xl!' />
              <p className={`my-4 text-base font-medium max-md:text-sm max-sm:text-xs ${isDark ? 'text-light' : 'text-dark'}`}>
                As a full-stack developer, I own the entire production pipeline, from architecting robust APIs to perfecting responsive front-end builds. My expertise with Mern stack & Next.js ensures top-tier performance, allowing me to build applications that deliver results. Check out my work and see how I build.
              </p>
              <div className="flex items-center self-start mt-2 max-lg:self-center">
                <a
                  href="/Dwipayan_Mitra_Resume.pdf"
                  target={"_blank"}
                  className={`flex p-2.5 px-6 max-md:p-2 max-md:px-4 max-md:text-base rounded-lg text-lg font-semibold border-2 border-solid transition-all duration-300 ${isDark ? "bg-light text-dark hover:bg-dark  hover:text-light hover:border-light border-transparent" : "bg-dark text-light hover:bg-light hover:text-dark hover:border-dark border-transparent"}`}
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </a>
                <a
                  href="mailto:deepmitra769@gmail.com"
                  target={"_blank"}
                  className={`ml-4 text-lg font-medium capitalize max-md:text-base ${isDark ? 'text-light underline' : 'text-dark underline'}`}
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className="absolute right-8 bottom-8 w-24 max-md:hidden">
          <Image src={lightBulb} alt="Dark Mode" className='w-full h-auto' />
        </div>
      </main>
    </>
  );
}