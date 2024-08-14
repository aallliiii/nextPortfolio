"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "My Stacks",
      link: "#tech",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  return (
    <div className="relative  w-full max-sm:hidden">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
