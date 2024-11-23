import { FaLocationArrow, FaEye } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image"; // Import Image component from next/image
import { Cover } from "@/components/cover";

const Hero: React.FC = () => {
  return (
    <div className="relative pb-20 pt-36" >
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-start justify-center">
          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}

          <TextGenerateEffect
            words=" Hello,I&apos;m Vishal V D a skilled software engineer and AI maven."
            className="text-left text-[32px] sm:text-[40px] md:text4xl lg:text-6xl"
          />

          <p className="text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
          I am a software engineer specializing in AI-driven solutions, cloud technologies, and innovative software development, shaping the future of intelligent systems.
          </p>

          <div className="flex space-x-4">
            <a href="#projects">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href="Myresume.pdf" target="_blank">
              <MagicButton
                title="View Resume"
                icon={<FaEye />}
                position="right"
              />
            </a>
          </div>
        </div>

        {/* Add Image with Saturn-like Ring */}
        <div className="mt-10 lg:mt-0 relative flex justify-center items-center lg:pl-20">
          <div className="w-40 h-40 md:w-80 md:h-80 lg:w-80 lg:h-80 relative">
            {/* Saturn-like Ring */}
            <svg viewBox="0 0 100 100" className="w-full h-full absolute z-0">
              <circle cx="50" cy="69" r="56" stroke="cyan" strokeWidth="1" fill="none" />
            </svg>

            {/* Image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/profile.png"
                alt="Profile"
                width={80} // Adjust width as needed
                height={80} // Adjust height as needed
                className="rounded-full"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
