import Button from "./ui/Button";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { SiGithub, SiGoogle } from "react-icons/si";

export default function Hero() {
  return (
    <div className="pb-36 pt-36 bg-black-100">
      <div className="overflow-x-hidden">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-80 left-12 h-[100vh] w-[100vw]"
          fill="purple"
        />
        <Spotlight className="top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="container my-32">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          <h1 className="uppercase tracking-widest text-xs md:text-base lg:text-lg text-center text-blue-100 max-w-80">
          ユーザーを歓迎します
          </h1>
          <TextGenerateEffect
            className="text-center text-lg md:text-5xl lg:text-6xl lg:w-8/12"
            words="Hi Worker"
          />
          <p className="text-center mb-4 text-xs md:text-base lg:text-xl font-extralight">
            Human Resource Management System
          </p>

          <a href="https://hrms.xead.my.id/">
            <Button title="Sign Up" icon={<SiGoogle />} position="left"/>
          </a>
        </div>
      </div>
    </div>
  );
}