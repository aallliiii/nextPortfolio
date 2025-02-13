"use client";

import React from "react";

import { TypewriterEffect } from "./ui/typewriter-effect";

const Description = () => {
  const words = [
    {
      text: "Who",
    },
    {
      text: "I",
      className: "text-orange-400 dark:text-orange-400",
    },
    {
      text: "Am",
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
          As a self-taught Full-Stack Web Developer and Next.js Enthusiast, I am
          passionate about transforming ideas into innovative, scalable web
          solutions. My coding journey began with a solid foundation in OOP,
          C++, and C# during my studies at UET, which laid the groundwork for my
          transition into modern web development. I&apos;ve since developed
          strong expertise in Next.js, React, Django, MongoDB, SQL, and Data
          Structures & Algorithms (DSA), enabling me to build dynamic,
          responsive applications that address real-world challenges. My
          projects reflect this skill set, demonstrating a commitment to solving
          problems through efficient, high-performance solutions. Driven by
          continuous learning and a love for new challenges, I&apos;m dedicated
          to delivering impactful, cutting-edge web applications in today&apos;s
          fast-paced tech landscape.
        </p>
      </div>
    </div>
  );
};

export default Description;
