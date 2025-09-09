import React from "react";
import quotes from "../assets/svg/quotes.svg";
import CTAButton from "../common/CTAButton";
import { AnimateFromInside } from "../common/ScrollFadeIn";

const Quotes = () => {
  return (
    <div className="h-auto md:pt-20 pb-8 w-full flex flex-col justify-center items-center gap-10 md:px-8 px-4 text-white text-center bg-[#010611]">
      <img src={quotes} alt="quotes" className="object-cover" />
      {/* Quote Section */}
      <div>
        <p className="font-normal md:text-[64px] text-[20px] md:leading-[72px] leading-[140%]">
          If you don't find a way to make money while <br /> you sleep, you
          will work until you die.
        </p>
      </div>
      <p className="font-normal text-[24px] leading-6">
        - Warren Buffet
      </p>
      <AnimateFromInside>
        <CTAButton />
      </AnimateFromInside>
    </div>
  );
};

export default Quotes;
