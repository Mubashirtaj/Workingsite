import AboutAgency from "@/Pagecomponents/aboutComp";
import { TracingBeamDemo } from "@/Pagecomponents/aboutcomp1";
import React from "react";

const Page = () => {
  return (
    <body className="bg-slate-950">
      <div className="mt-40">
        <AboutAgency />
        <TracingBeamDemo />
      </div>
    </body>
  );
};

export default Page;
