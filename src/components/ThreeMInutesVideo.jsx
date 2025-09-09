import React from "react";
import video3 from "../assets/webp/video3.webp";
import { AnimateFromInside } from "../common/ScrollFadeIn";
import CTAButton from "../common/CTAButton";

const ThreeMInutesVideo = () => {
  return (
    <div className="bg-[#010611] text-white flex flex-col md:px-40 pt-20 pb-8 gap-6 w-full min-w-[1270px]">
      <AnimateFromInside>
        <p className="font-normal md:text-[64px] text-[#FFFFFF99] text-[40px] leading-[100%]  font-degular text-left">
          <span className="font-semibold text-white">Watch This 3 Minute Video</span> To
          Know The <br /> Power of AI Powered Algo Trading
        </p>
      </AnimateFromInside>
      <AnimateFromInside>
        <div className="w-full h-full flex justify-center">
          <img src={video3} alt="video3" className="object-cover" />
        </div>
      </AnimateFromInside>
      <AnimateFromInside>
        <div className="flex justify-center">
          <CTAButton />
        </div>
      </AnimateFromInside>
    </div>
  );
};

export default ThreeMInutesVideo;
