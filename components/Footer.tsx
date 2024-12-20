import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from "next/image"; // Import Image component from next/image
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
 
const Footer = () => {
  return (
    <BackgroundBeamsWithCollision>
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-cyan-400">our</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Get in touch with me today, and together, let&apos;s explore how I can assist you in reaching your objectives
        </p>
        <a href="mailto:vishalvd006@gmail.com">
          <MagicButton
            title="Let&apos;s get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © Vishal V D
        </p>

        <div className="flex items-center md:gap-4 gap-">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-yellow-500 hover:text-yellow-400"
            >
              <Image
                src={info.img}
                alt="icons"
                width={20}
                height={20}
                className="rounded"
                layout="fixed"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>    </BackgroundBeamsWithCollision>
  );
};

export default Footer;
