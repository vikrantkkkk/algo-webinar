import React from "react";
import video3 from "../assets/webp/video3.webp";
import { AnimateFromInside } from "../common/ScrollFadeIn";
import CTAButton from "../common/CTAButton";

const ThreeMInutesVideo = () => {
  return (
    <div className="bg-[#010611] text-white flex flex-col px-4 md:px-40 pt-12 md:pt-20 pb-8 gap-6 w-full">
      <AnimateFromInside>
        <p className="font-normal text-[32px] md:text-[64px] text-[#FFFFFF99] leading-[36px] md:leading-[74px] font-degular text-left">
          <span className="font-semibold text-white">
            Watch This 3 Minute Video
          </span>{" "}
          <br className="block md:hidden" /> To Know The{" "}
          <br className="hidden md:block" />
          Power of AI <br className="block md:hidden" /> Powered Algo Trading
        </p>
      </AnimateFromInside>
      <AnimateFromInside>
        <div className="w-full h-full flex justify-center">
          <img
            src={video3}
            alt="video3"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </AnimateFromInside>
      <AnimateFromInside>
        <div className="flex justify-center md:mt-0 mt-4">
          <CTAButton />
        </div>
      </AnimateFromInside>
    </div>
  );
};

export default ThreeMInutesVideo;
