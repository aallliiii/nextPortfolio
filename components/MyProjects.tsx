"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { MyCard } from "./Card";
import { MyProjectsData } from "@/data";
export function MyProjects() {
  return (
    <div className="w-screen">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          These Are Some <br />
          Of My Projects
        </motion.h1>
      </LampContainer>
      <div className="bg-slate-950 w-full -mt-72 flex flex-wrap mx-[10px]">
        {MyProjectsData.map((single) => (
          <MyCard project={single} key={single.id} />
        ))}
      </div>
    </div>
  );
}
