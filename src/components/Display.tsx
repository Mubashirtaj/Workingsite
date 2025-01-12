"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
interface TextTyoe {
  Text: string;
}
const LampDemo: React.FC<TextTyoe> = ({ Text }) => {
  return (
    <div className="mouse-effect">
      <LampContainer className="displayposition">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl flex flex-col "
        >
          <span className="mt-10">{Text}</span>
        </motion.h1>
      </LampContainer>
    </div>
  );
};

export default LampDemo;
