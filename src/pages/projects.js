import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTheme } from 'next-themes';
import velora from '../../public/images/projects/Velora.png'
import TransitionEffect from "@/components/TransitionEffect";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  
  return (
    <article className={`w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid ${isDark ? 'border-light bg-dark' : 'border-dark bg-light'} shadow-2xl p-16 relative max-lg:flex-col max-lg:p-8 max-xs:rounded-2xl max-xs:rouded-br-3xl max-xs-p-4`}>
      <div className={`absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] ${isDark ? 'bg-light' : 'bg-dark'} rounded-br-3xl max-xs:-right-2 max-sm:h-[102%] max-xs:w-full max-xs:rounded-[1.5rem]`} />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg max-lg:w-full"
      >
        <Image src={img} alt={title} className="w-full h-auto" 
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 max-lg:w-full max-lg:pl-0 max-lg:pt-6">
        <span className={`font-medium text-xl max-xs:text-base ${isDark ? 'text-primaryDark' : 'text-primary'}`}>{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold max-sm:text-sm">{title}</h2>
        </Link>
        <p className={`my-2 font-medium max-sm:text-sm ${isDark ? 'text-light' : 'text-dark'}`}>{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className={`ml-4 rounded-lg ${isDark ? 'bg-light text-dark' : 'bg-dark text-light'} py-2 px-6 text-lg font-semibold max-sm:px-4 max-sm:text-base`}
          >
            View Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === 'dark';
    
    return (
      <article className={`w-full flex flex-col items-center justify-center rounded-2xl border border-solid ${isDark ? 'border-light bg-dark' : 'border-dark bg-light'} p-6 relative max-xs:p-4`}>
        <div className={`absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-4xl ${isDark ? 'bg-light' : 'bg-dark'} rounded-br-3xl max-md:-right-2 max-md:w-[102%] max-xs:h-[102%] max-xs:rounded-[1.5rem]`} />
        <Link
          href={link}
          target="_blank"
          className="w-full cursor-pointer overflow-hidden rounded-lg"
        >
          <Image src={img} alt={title} className="w-full h-auto" />
        </Link>

        <div className="w-full flex flex-col items-start justify-between mt-4">
          <span className={`font-medium text-xl max-lg:text-lg max-md:text-base ${isDark ? 'text-primaryDark' : 'text-primary'}`}>{type}</span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-3xl font-bold max-lg:text-2xl">
              {title}
            </h2>
          </Link>
          <div className="mt-2 flex items-center justify-between w-full">
            <Link
              href={link}
              target="_blank"
              className="text-lg font-medium underline max-md:text-base"
            >
              View
            </Link>
            <Link href={github} target="_blank" className="w-8 max-md:w-6">
              <GithubIcon />
            </Link>
          </div>
        </div>
      </article>
    );
}

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects | Dwipayan Mitra</title>
        <meta name="description" content="Explore Dwipayan Mitra's portfolio of web development projects. Featuring React, Next.js, and modern web applications with clean, efficient code and stunning designs." />
        <meta name="keywords" content="Dwipayan Mitra, projects, portfolio, React, Next.js, JavaScript, web development, applications" />
        <meta name="author" content="Dwipayan Mitra" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full mb-16 flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 max-lg:text-7xl! max-sm:mb-8 max-sm:text-6xl! max-xs:text-4xl!"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 max-xl:gap-x-16 max-lg:gap-x-8 max-md:gap-y-24 max-sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Velora (MERN - Ecommerce)"
                summary="Velora is a modern MERN stack e-commerce platform with separate customer and admin interfaces. Features include product browsing, cart management, PayPal payments, order tracking, and admin dashboard for user/product/order management. Built with React, Vite, Redux Toolkit, and Tailwind CSS."
                img={velora}
                link="https://velora-client-alpha.vercel.app/"
                github="https://github.com/galactus616/Velora"
              />
            </div>
            <div className="col-span-6 max-sm:col-span-12">
              <Project
                type="Project"
                title="Project 1"
                img={velora}
                link="#"
                github="#"
              />
            </div>
            <div className="col-span-6 max-sm:col-span-12">
              <Project
                type="Project"
                title="Project 1"
                img={velora}
                link="#"
                github="#"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                img={velora}
                link="#"
                github="#"
              />
            </div>
            <div className="col-span-6 max-sm:col-span-12">
              <Project
                type="Project"
                title="Project 1"
                img={velora}
                link="#"
                github="#"
              />
            </div>
            <div className="col-span-6 max-sm:col-span-12">
              <Project
                type="Project"
                title="Project 1"
                img={velora}
                link="#"
                github="#"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;