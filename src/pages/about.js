import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import profilePic from "../../public/images/profile/aboutImage.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Education from "@/components/Education";
import { useTheme } from "next-themes";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}>{value}</span>;
};

const about = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <>
      <Head>
        <title>About | Dwipayan Mitra</title>
        <meta name="description" content="Learn more about Dwipayan Mitra, a full-stack developer with expertise in React, Next.js, and modern web technologies. Discover my skills, experience, and educational background." />
        <meta name="keywords" content="Dwipayan Mitra, about, full-stack developer, React, Next.js, JavaScript, web development, skills, experience, education" />
        <meta name="author" content="Dwipayan Mitra" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 max-lg:text-7xl! max-sm:text-6xl! max-xs:text-4xl! max-sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 max-sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start max-xl:col-span-4 max-md:order-2 max-md:col-span-8">
              <h2
                className={`mb-4 text-lg font-bold uppercase ${
                  isDark ? "text-light/75" : "text-dark/75"
                }`}
              >
                Biography
              </h2>
              <p
                className={`font-medium ${isDark ? "text-light" : "text-dark"}`}
              >
                Hey, I'm Dwipayan Mitra, and I build websites and web apps. For the past year, I've been working as a Full-Stack Developer, which basically means I handle everything from the front-end design to the back-end code that makes it all run. I really enjoy taking a raw idea and building it into a clean, functional product that people can actually use without any issues..
              </p>
              <p
                className={`font-medium mt-4 ${
                  isDark ? "text-light" : "text-dark"
                }`}
              >
                My main focus is on modern speed. I rely heavily on Next.js to make sure sites load fast and feel responsive, and I use Tailwind CSS to handle the styling quickly and keep the code organized. I pay attention to the details—I make sure the code is solid and easy to update later. My priority is always performance; if a site is slow, nothing else matters.
              </p>
              <p
                className={`font-medium mt-4 ${
                  isDark ? "text-light" : "text-dark"
                }`}
              >
                I'm always looking for interesting projects that challenge me and let me keep building my skills. Whether it’s connecting to a new database or figuring out a tricky component, I’m ready to jump in and get it done. Feel free to check out the projects below. If you need a reliable developer who knows how to deliver, let's chat about your idea.
              </p>
            </div>
            <div
              className={`col-span-3 relative h-max rounded-2xl border-2 border-solid ${
                isDark ? "border-light bg-dark" : "border-dark bg-light"
              } p-8 max-xl:col-span-4 max-md:order-1 max-md:col-span-8`}
            >
              <div
                className={`absolute top-0 left-3 -z-10 w-[102%] h-[103%] rounded-4xl rounded-br-3xl ${
                  isDark ? "bg-light" : "bg-dark"
                }`}
              />
              <Image
                src={profilePic}
                alt="Dwipayan Mitra"
                className="w-full h-auto rounded-4xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between max-xl:col-span-8 max-xl:flex-row max-xl:items-center max-md:order-3">
              <div className="flex flex-col items-end max-xl:items-center justify-center h-1/2">
                <span
                  className={`inline-block text-7xl font-bold max-md:text-6xl max-sm:text-5xl max-xs:text-4xl ${
                    isDark ? "text-light" : "text-dark"
                  }`}
                >
                  <AnimatedNumbers value={20} />+
                </span>
                <h2
                  className={`text-xl font-medium capitalize max-xl:text-center max-md:text-lg max-sm:text-base ${
                    isDark ? "text-light/75" : "text-dark/75"
                  }`}
                >
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end max-xl:items-center justify-center h-1/2">
                <span
                  className={`inline-block text-7xl font-bold max-md:text-6xl max-sm:text-5xl max-xs:text-4xl ${
                    isDark ? "text-light" : "text-dark"
                  }`}
                >
                  <AnimatedNumbers value={10} />+
                </span>
                <h2
                  className={`text-xl font-medium capitalize max-xl:text-center max-md:text-lg max-sm:text-base ${
                    isDark ? "text-light/75" : "text-dark/75"
                  }`}
                >
                  Technologies Mastered
                </h2>
              </div>
              <div className="flex flex-col items-end max-xl:items-center justify-center h-1/2">
                <span
                  className={`inline-block text-7xl font-bold max-md:text-6xl max-sm:text-5xl max-xs:text-4xl ${
                    isDark ? "text-light" : "text-dark"
                  }`}
                >
                  <AnimatedNumbers value={1} />+
                </span>
                <h2
                  className={`text-xl font-medium capitalize max-xl:text-center max-md:text-lg max-sm:text-base ${
                    isDark ? "text-light/75" : "text-dark/75"
                  }`}
                >
                  years of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />

          <Experience />

          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
