import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FlipWords } from "./ui/flip-words";
import Spline from "@splinetool/react-spline/next";

export function MainDisplay() {
  const word2 = ["better", "cute", "beautiful", "modern"];

  const words =
    "Hello, Welcome To My Website We'r Delivered A best Work To Client";
  return (
    <div className="h-[50rem]  md:flex-row flex-col  w-full dark:bg-black bg-black  dark:bg-grid-small-white/[0.2] bg-grid-small-white/[0.2] relative flex items-center justify-center">
      <div className="w-full md:w-1/2 pl-8 md:pl-12 flex-1 md:mt-0  mt-24	">
        <div className="DisplatText1 absolute w-full md:w-1/2">
          <TextGenerateEffect words={words} />
        </div>
        <div className="  flex flex-col  text-white absolute DisplatText2">
          {" "}
          <span className="">Build</span>
          <FlipWords words={word2} />
          <br />
          <span className=" md:text-6xl"> websites with</span>
          <span className="md:text-6xl"> US</span>
        </div>
      </div>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="w-full md:w-1/2	flex-1 overflow-visible h-full flex justify-center items-start md:items-center ">
        <Spline
          scene="https://prod.spline.design/6C8jfhnXyNtIKSfH/scene.splinecode"
          className=" "
        />
      </div>
    </div>
  );
}
