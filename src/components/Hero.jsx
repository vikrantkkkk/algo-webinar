import React from "react";
import { AnimateFromInside } from "../common/ScrollFadeIn";
import CTAButton from "../common/CTAButton";
import background from "../assets/webp/background.webp";
import video from "../assets/webp/video2.webp";
import staricon from "../assets/svg/staricon.svg";
import autopiloticon from "../assets/svg/autopiloticon.svg";
import autuomatictradingicon from "../assets/svg/autuomatictradingicon.svg";
import begineerfriendly from "../assets/svg/begineerfriendly.svg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full flex items-center justify-center text-white px-4 sm:px-10 md:px-20 lg:px-32 xl:px-40 md:pt-36 md:pb-20 bg-[#010611]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0 p-4">
        <img
          src={background}
          alt=""
          className="w-full h-full object-cover rounded-b-[48px]"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Side - Text Content */}
          <div className="flex-[1.2] flex flex-col justify-center items-start gap-6">
            <AnimateFromInside>
              <div className="inline-flex items-center justify-center gap-2 bg-[#00000033]/[0.2] py-2 pl-2 pr-4 rounded-full border border-[#FFFFFF30]">
                <div
                  className="p-[1px] rounded-full"
                  style={{
                    background:
                      "linear-gradient(278.7deg, #000000 -4.15%, #FF3C3C 96.59%)",
                  }}
                >
                  <span
                    className="font-bold leading-[100%] flex items-center gap-2 text-white text-[18px]  px-4 py-2 rounded-full"
                    style={{
                      background:
                        "linear-gradient(101.35deg, #000000 1.29%, #FF3C3C 140.52%)",
                    }}
                  >
                    <span className="h-3 w-3 rounded-full bg-[#F04141] animate-pulse inline-block"></span>
                    Live
                  </span>
                </div>

                <p className="text-[18px] leading-6 font-normal">
                  90 Mins Webinar on A.I Powered Algo Trading
                </p>
              </div>
            </AnimateFromInside>

            <AnimateFromInside>
                <h1 className="font-normal text-[76px] leading-[100%] text-left font-degular">
                  Learn How To Trade <br/> Using{" "}
                  <span
                    className="bg-gradient-to-r from-[#007AFF] to-[#81F0FF] bg-clip-text text-transparent inline-flex items-center gap-1"
                    style={{
                      background:
                        "linear-gradient(91.62deg, #007AFF -44.13%, #81F0FF 120.92%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    <img src={staricon} alt={staricon} className="object-cover" />{" "}
                    AI Powered
                  </span>{" "}
                  <br/> Algo Trading Tools
                </h1>
            </AnimateFromInside>

            <AnimateFromInside>
              <p className="font-normal text-[18px] md:text-[165%] text-[#FFFFFF] text-left">
                The age of AI is here, and professional traders are going all
                in. <br/> The biggest trading revolution is here.
              </p>
            </AnimateFromInside>

            {/* Feature Cards */}
            <AnimateFromInside>
              <div className="flex flex-col md:flex-row items-start gap-6 mt-2">
                <div className="flex items-center gap-2 rounded-[8px] p-2 border-[1.3px] border-[#FFFFFF33] w-[230px]">
                  <img
                    src={autopiloticon}
                    alt={autopiloticon}
                    className="object-cover"
                  />
                  <span className="font-medium text-[20px] leading-[25px]">
                    Trade On <br /> Autopilot
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-[8px] p-2 border-[1.3px] border-[#FFFFFF33] w-[230px]">
                  <img
                    src={autuomatictradingicon}
                    alt={autuomatictradingicon}
                    className="object-cover"
                  />
                  <span className="font-medium text-[20px] leading-[25px]">
                    Fully Automatic <br /> Trading
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-[8px] p-2 border-[1.3px] border-[#FFFFFF33] w-[230px]">
                  <img
                    src={begineerfriendly}
                    alt={begineerfriendly}
                    className="object-cover"
                  />
                  <span className="font-medium text-[20px] leading-[25px]">
                    Beginner <br />
                    Friendly
                  </span>
                </div>
              </div>
            </AnimateFromInside>
            <AnimateFromInside>
              <CTAButton />
            </AnimateFromInside>
          </div>

          {/* Right Side - Video Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <AnimateFromInside>
              <div className="relative -right-36 w-full">
                <img
                  src={video}
                  alt="Video preview"
                  className="object-cover scale-125 transform"
                />
              </div>
            </AnimateFromInside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
