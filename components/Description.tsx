"use client";

import React from "react";

import { TypewriterEffect } from "./ui/typewriter-effect";

const Description = () => {
  const words = [
    {
      text: "About",
    },
    {
      text: "Me",
      className: "text-orange-400 dark:text-orange-400",
    },
    
  ];
  return (
    <div className="mt-24">
      <div>
        <TypewriterEffect words={words} />
      </div>

      <div className="p-5">
        <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg text-orange-400">
        I&apos;m Muhammad Ali, a Computer Science student at UET with a focus on web development and AI. I build modern applications using Next.js, React, and Django, and develop AI solutions with Pandas, Scikit-learn, and TensorFlow.


        </p>
      </div>
    </div>
  );
};

export default Description;
