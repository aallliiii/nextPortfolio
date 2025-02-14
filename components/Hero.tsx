import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import DownloadButton from "./CvDownload";
const Hero = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="pb-20 pt-36">
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="top-10 left-full md:-left-32 md:-top-20 h-[80vh] w-[50vw]"
            fill="white"
          />
          <Spotlight
            className="top-28 left-80 md:-left-32 md:-top-20 h-[80vh] w-[50vw]"
            fill="white"
          />
        </div>
        <div className="h-screen w-full dark:bg-black-200 bg-white  dark:bg-grid-white/[0.09] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        <div>
          <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
              <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                MY PORTFOLIO WEBSITE
              </h2>

              <TextGenerateEffect
                className="text-center text-[40px] md:text-5xl lg:text-6xl"
                words="Full Stack Web Development"
              />

              <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                Hi, I&apos;m Muhammad Ali, a full-stack developer skilled in
                Next.js, React, and Django, passionate about building scalable,
                high-performance web applications.
              </p>
              <DownloadButton />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 max-sm:mt-60">
        <img
          src="./MyImage4.png"
          className=" rounded-lg"
          alt="Bootstrap Themes"
          width="360"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Hero;
