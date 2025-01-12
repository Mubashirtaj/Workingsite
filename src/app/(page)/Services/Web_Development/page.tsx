"use client";
import LampDemo from "@/components/Display";
import { GrisCards } from "@/Pagecomponents/GridCards";
import React, { useRef } from "react";
import IconCloud from "@/components/ui/icon-cloud";
import { useInView } from "framer-motion";
import LetterPullup from "@/components/ui/letter-pullup";
import FlipText from "@/components/ui/flip-text";
import ShimmerButton from "@/components/ui/shimmer-button";
import { RemoteConnect } from "@/components/Remote_world";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
const Page = () => {
  const textref = useRef(null);
  const isInView = useInView(textref, { once: true });
  const textref1 = useRef(null);
  const isInView1 = useInView(textref1, { once: true });
  return (
    <div className="w-full items-center  bg-black">
      <LampDemo Text={`Web Development`}></LampDemo>

      {/* Category Card */}
      <div className="Gridcard w-full items-center p-0 md:p-16">
        <div className="WebsiteCat my-9">
          <h1 ref={textref1} className=" text-center text-white mt-12">
            {isInView1 ? (
              <>
                <FlipText
                  className="text-2xl font-bold -tracking-widest text-white dark:text-white md:text-7xl md:leading-[5rem]"
                  word={"World of Renowned Website"}
                />
                <FlipText
                  className="text-2xl font-bold -tracking-widest text-white dark:text-white md:text-7xl md:leading-[5rem]"
                  word={" Categories"}
                />
              </>
            ) : null}
          </h1>
        </div>
        <GrisCards />
      </div> 
      <div className="items-center flex justify-center">
        <ShimmerButton className="shadow-2xl">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            Shimmer Button
          </span>
        </ShimmerButton>
      </div>
      {/* # Oue Tools  */}
      <div
        ref={textref}
        className="Web_tools flex-col md:flex-row flex w-full gap-18 justify-center items-center"
      >
        <div className="flex-grow Webtoolhead h-full w-full md:w-[50%]">
          {isInView ? (
            <>
              <h1 className="text-6xl text-center text-white my-12">
                <FlipText
                  className="text-4xl font-bold -tracking-widest text-white dark:text-white md:text-7xl md:leading-[5rem]"
                  word="Our Tools"
                />
              </h1>
              <h2 className="text-4xl text-center text-white pl-8">
                <LetterPullup words={"There Some Language We "} delay={0.05} />
                <LetterPullup words={" Most Use To Work"} delay={0.05} />
              </h2>
            </>
          ) : null}
        </div>
        <div className="flex-grow  w-full md:w-[50%]">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>

      {/* content 1 */}

      <div className="webcontent1">
        <section className="bg-white dark:bg-gray-900">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                We didnt reinvent the wheel
              </h2>
              <p className="mb-4">
                We are strategists, designers and developers. Innovators and
                problem solvers. Small enough to be simple and quick, but big
                enough to deliver the scope you want at the pace you need. Small
                enough to be simple and quick, but big enough to deliver the
                scope you want at the pace you need.
              </p>
              <p>
                We are strategists, designers and developers. Innovators and
                problem solvers. Small enough to be simple and quick.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img
                className="w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                alt="office content 1"
              />
              <img
                className="mt-4 w-full lg:mt-10 rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                alt="office content 2"
              />
            </div>
          </div>
        </section>
      </div>

      {/* content 2 */}
      <div className="webcontent1">
        <section className="bg-white dark:bg-gray-900">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img
                className="mt-4 w-full lg:mt-10 rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                alt="office content 2"
              />
              <img
                className="w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                alt="office content 1"
              />
            </div>
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                We didnt reinvent the wheel
              </h2>
              <p className="mb-4">
                We are strategists, designers and developers. Innovators and
                problem solvers. Small enough to be simple and quick, but big
                enough to deliver the scope you want at the pace you need. Small
                enough to be simple and quick, but big enough to deliver the
                scope you want at the pace you need.
              </p>
              <p>
                We are strategists, designers and developers. Innovators and
                problem solvers. Small enough to be simple and quick.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="">
        <RemoteConnect />
      </div>
    </div>
  );
};

export default Page;
