"use client";

import React from "react";

import { TypewriterEffect } from "./ui/typewriter-effect";

const Description = () => {
  const words = [
    {
      text: "Get",
    },
    {
      text: "to",
    },
    {
      text: "know",
    },
    {
      text: "me",
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
          As a self-taught Full-Stack Web Developer and Node.js Enthusiast, I am
          deeply passionate about transforming ideas into innovative and
          efficient web solutions. My coding journey began with a robust
          foundation in OOP, C++, and C# during my studies at UET. This
          background has seamlessly transitioned into modern web development,
          where I have developed a strong skill set in the MERN stack and
          Next.js. My projects reflect this expertise, showcasing my ability to
          create dynamic, responsive applications that solve real-world
          problems. My dedication to continuous learning and tackling new
          challenges fuels my creativity and commitment to delivering
          high-quality, impactful solutions in the ever-evolving tech landscape.
        </p>
      </div>
    </div>
  );
};

export default Description;
