"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function OurTeamBest() {
  return (
    <div className="bg-black flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1
              className="Bebas text-4xl font-semibold text-white dark:text-white"
              style={{ color: "#00BCD4" }}
            >
              We have Experience <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Team Member
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/linear.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
