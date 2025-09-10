import React from "react";
import quotes from "../assets/svg/quotes.svg";
import CTAButton from "../common/CTAButton";
import { AnimateFromInside } from "../common/ScrollFadeIn";

const Quotes = () => {
  return (
    <div className="h-auto md:pt-20 pt-16 pb-8 w-full flex flex-col justify-center items-center md:gap-6 gap-4 md:px-8 px-4 text-white text-center bg-[#010611]">
      <img src={quotes} alt="quotes" className="object-cover" />
      {/* Quote Section */}
      <div>
        <p className="font-normal md:text-[64px] text-[20px] md:leading-[72px] leading-[140%]">
          If you don't find a way to make money while <br className="md:block hidden" /> you sleep, you
          will work until <br className="md:hidden block" /> you die.
        </p>
      </div>
      <p className="font-normal text-[20px] leading-6">
        - Warren Buffet
      </p>
      <AnimateFromInside>
        <div className="flex justify-center items-center md:mt-0 mt-4">
          <CTAButton />
        </div>
      </AnimateFromInside>
    </div>
  );
};

export default Quotes;
