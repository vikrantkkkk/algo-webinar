import React from "react";
import { AnimateFromInside } from "../common/ScrollFadeIn";
import GradientButton from "../common/GradientButton";
import card7 from "../assets/webp/card7.webp";
import card8 from "../assets/webp/card8.webp";
import card9 from "../assets/webp/card9.webp";
import camera from "../assets/svg/camera.svg";
import course from "../assets/svg/course.svg";
import live from "../assets/svg/live.svg";
import CTAButton from "../common/CTAButton";
import CompantLogoMarquee from "./CompantLogoMarquee";

const StrykeXAdvantage = () => {
  return (
    <div className="bg-[#010611] text-white flex flex-col gap-6 justify-center md:px-40 px-4 pt-20 pb-8 w-full">
      <div className="flex flex-col items-start w-full">
        <AnimateFromInside>
          <p className="font-normal md:text-[64px]  text-[40px] leading-[74px]  font-degular">
            Webinar Highlights{" "}
            <span className="text-[#FFFFFF99]">– What Will Be Covered ?</span>
          </p>
        </AnimateFromInside>

        <AnimateFromInside>
          <p className="font-normal text-[24px] leading-[30px] pt-2">
            Learn the secrets sauce of how professional institutional traders
            leverage the power of artificial intelligence and <br /> algo
            trading for breakthrough results.
          </p>
        </AnimateFromInside>
      </div>
      <div className="flex flex-col justify-center items-center gap-6 md:mt-6 mt-4">
        <AnimateFromInside>
          <div className="bg-[#000E2E] w-full  h-auto p-6 md:p-10 rounded-[20px] flex flex-col md:flex-row justify-between items-center md:gap-8 gap-4">
            <div className="flex flex-col justify-between h-full gap-4">
              <div className="flex flex-col gap-4">
                <img src={camera} alt={camera} className="w-[52px]" />
                <p className="font-semibold text-[20px] md:text-[36px] leading-[100%] md:leading-[52px] font-degular">
                  Custom Strategy Builder
                </p>
                <p className="font-light text-[14px] md:text-[21px] md:leading-[28px] leading-[22px] tracking-normal   text-[#FFFFFFBF] max-w-xl">
                  Create your own custom strategies spanning across 500+ unique
                  parameters in multiple segments such as equity, futures and
                  options. Explore advanced features such as trailing stop loss,
                  partial profit booking, strategy based targets and much more.
                </p>
              </div>
              <div>
                <GradientButton className="md:w-[191px]" />
              </div>
            </div>
            <img
              src={card7}
              alt="StrykeX Capital Funding"
              className="md:w-[550px] object-cover"
            />
          </div>
        </AnimateFromInside>
        <AnimateFromInside>
          <div className="bg-[#001B26] w-full h-auto p-6 md:p-10 rounded-[20px] flex flex-col md:flex-row justify-between items-center md:gap-8 gap-4">
            <div className="flex flex-col justify-between h-full gap-4">
              <div className="flex flex-col gap-4">
                <img src={course} alt={course} className="w-[52px]" />
                <p className="font-semibold text-[20px] md:text-[36px] leading-[100%] md:leading-[52px] font-degular">
                  Algo Trading Course
                </p>
                <p className="font-light text-[14px] md:text-[21px] md:leading-[28px] leading-[22px] tracking-normal  text-[#FFFFFFBF] max-w-xl">
                  Learn how to build, test and deploy trading strategies in our
                  no code algo trading course designed for beginners,
                  intermediate and expert traders. We teach you everything from
                  creating your strategies, to developing your own trading
                  robots which can keep working for you 24x7.
                </p>
              </div>
              <div>
                <GradientButton className="md:w-[191px]" />
              </div>
            </div>
            <img
              src={card8}
              alt="StrykeX Capital"
              className="md:w-[550px] object-cover"
            />
          </div>
        </AnimateFromInside>
        <AnimateFromInside>
          <div className="bg-[#002323] w-full h-auto p-6 md:p-10 rounded-[20px] flex flex-col md:flex-row justify-between items-center md:gap-8 gap-4">
            <div className="flex flex-col justify-between h-full gap-4">
              <div className="flex flex-col gap-4">
                <img src={live} alt={live} className="w-[52px]" />
                <p className="font-semibold text-[20px] md:text-[36px] leading-[100%] md:leading-[52px] font-degular">
                  Live Trading Support
                </p>
                <p className="font-light text-[14px] md:text-[21px] md:leading-[28px] leading-[22px] tracking-normal  text-[#FFFFFFBF] max-w-xl">
                  Our team of NISM Certified and SEBI Registered Research
                  Analysts are streaming live with you everyday, from 9:15am
                  till 3:30pm for live market assistance. Explore the work of
                  professional trading by interacting with the <br /> country’s
                  best.
                </p>
              </div>
              <div>
                <GradientButton className="md:w-[191px]" />
              </div>
            </div>
            <img
              src={card9}
              alt="StrykeX Funding"
              className="md:w-[550px] object-cover"
            />
          </div>
        </AnimateFromInside>
        <AnimateFromInside>
          <div className="bg-[#002419] w-full h-auto p-6 md:p-10 rounded-[20px] flex flex-col md:flex-row justify-between items-center md:gap-8 gap-4">
            <div className="flex flex-col justify-between h-full gap-4">
              <div className="flex flex-col gap-4">
                <img src={live} alt={live} className="w-[52px]" />
                <p className="font-semibold text-[20px] md:text-[36px] leading-[100%] md:leading-[52px] font-degular">
                  Live Trading Support
                </p>
                <p className="font-light text-[14px] md:text-[21px] md:leading-[28px] leading-[22px] tracking-normal  text-[#FFFFFFBF] max-w-xl">
                  Our team of NISM Certified and SEBI Registered Research
                  Analysts are streaming live with you everyday, from 9:15am
                  till 3:30pm for live market assistance. Explore the work of
                  professional trading by interacting with the <br /> country’s
                  best.
                </p>
              </div>
              <div>
                <GradientButton className="md:w-[191px]" />
              </div>
            </div>
            <img
              src={card9}
              alt="StrykeX Funding"
              className="md:w-[550px] object-cover"
            />
          </div>
        </AnimateFromInside>
        <AnimateFromInside>
          <div className="flex justify-center">
            <CTAButton />
          </div>
        </AnimateFromInside>
        <CompantLogoMarquee />
      </div>
    </div>
  );
};

export default StrykeXAdvantage;
