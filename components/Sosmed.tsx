"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/LayoutGrid";

export function LayoutGridSosmed() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <a href="https://instagram.com/xeadesta" target="__blank" className="font-bold md:text-4xl text-xl text-white">
        @xeadesta
      </a>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Don&apos;t forget to my follow instagram hehehe UwU.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <a href="https://www.linkedin.com/in/jonathan-natannael-zefanya-212b9b25a/" className="font-bold md:text-4xl text-xl text-white">
        @JonathanZefanya
      </a>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        This is my linkedin, you can connect with me, whenever you want
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <a href="https://www.youtube.com/@jonathanzefanya" className="font-bold md:text-4xl text-xl text-white">
        @JonathanZefanya
      </a>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        You want to see my youtube channel? click here.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <a href="https://github.com/JonathanZefanya" className="font-bold md:text-4xl text-xl text-white">
        @JonathanZefanya
      </a>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      You can connect with me at GitHub.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/ig.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "/linked.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://static.vecteezy.com/system/resources/previews/013/666/504/original/3d-youtube-logo-in-red-colors-free-png.png",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
  },
];
