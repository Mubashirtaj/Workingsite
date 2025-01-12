"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DollarSign, BarChart2, Users } from "lucide-react";

export default function AboutAgency() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-1 mb-6">
            <span className="text-red-400 mr-2">•</span>
            <span className="text-sm font-medium uppercase tracking-wide">
              About us
            </span>
            <span className="text-red-400 ml-2">•</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span>Introduction To Best</span>
            <br />
            <span className="text-slate-300">Digital Agency!</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We are a team of passionate digital experts who are committed to
            delivering exceptional results for our clients through innovative
            solutions and strategic thinking.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {[
            {
              icon: <DollarSign className="w-8 h-8 text-red-400" />,
              title: "Best Price Guaranteed",
              description:
                "We offer competitive pricing without compromising on quality, ensuring the best value for your investment.",
            },
            {
              icon: <BarChart2 className="w-8 h-8 text-red-400" />,
              title: "Finance Analysis",
              description:
                "Our expert team provides comprehensive financial analysis to optimize your digital investments.",
            },
            {
              icon: <Users className="w-8 h-8 text-red-400" />,
              title: "Professional Team",
              description:
                "Work with our skilled professionals who bring years of industry expertise to your projects.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="bg-white/10 rounded-xl p-3 inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Images Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Team collaboration"
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden bg-slate-900 flex items-center justify-center group">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Video thumbnail"
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/50" />
            <motion.div
              className="relative z-10 bg-red-500 rounded-full p-4 cursor-pointer hover:bg-red-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-8 h-8 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
