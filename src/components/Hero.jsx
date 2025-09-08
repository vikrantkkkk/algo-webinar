import React from "react";
import { AnimateFromInside } from "../common/ScrollFadeIn";
import background from "../assets/webp/background.webp";
import video from "../assets/webp/video2.webp";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full flex items-center justify-center text-white px-4 sm:px-10 md:px-20 lg:px-32 xl:px-40 py-20 md:py-32 bg-[#010611]"
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
      <div className="relative z-10 mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Side - Text Content */}
          <div className="flex-1 flex flex-col justify-center items-start gap-6">
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
                    className="font-bold text-[18px] leading-[100%] flex items-center gap-2 text-white text-[14px] leading-[100%] px-4 py-2 rounded-full"
                    style={{
                      background:
                        "linear-gradient(101.35deg, #000000 1.29%, #FF3C3C 140.52%)",
                    }}
                  >
                    <span className="h-3 w-3 rounded-full bg-[#F04141] animate-pulse inline-block"></span>
                    Live
                  </span>
                </div>

                <p className="font-bold text-[15px] leading-6 font-normal">
                  90 Mins Webinar on A.I Powered Algo Trading
                </p>
              </div>
            </AnimateFromInside>

            <AnimateFromInside>
              <h1 className="font-semibold text-[32px] md:text-[48px] lg:text-[64px] leading-[120%] text-left font-degular">
                Learn How To Trade
              </h1>
            </AnimateFromInside>

            <AnimateFromInside>
              <h2 className="font-semibold text-[32px] md:text-[48px] lg:text-[64px] leading-[120%] text-left font-degular">
                ✨ AI Powered Algo Trading Tools
              </h2>
            </AnimateFromInside>

            <AnimateFromInside>
              <p className="font-medium text-[16px] md:text-[20px] leading-[30px] text-[#FFFFFFBF] text-left max-w-2xl">
                The age of AI is here, and professional traders are going all
                in. The biggest trading revolution is here.
              </p>
            </AnimateFromInside>

            {/* Feature Cards */}
            <AnimateFromInside>
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="flex items-center gap-2 bg-[#18181B] rounded-full px-4 py-2">
                  <span className="text-2xl">🤖</span>
                  <span className="text-sm font-medium">
                    Trade On Autopilot
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-[#18181B] rounded-full px-4 py-2">
                  <span className="text-2xl">📈</span>
                  <span className="text-sm font-medium">
                    Fully Automatic Trading
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-[#18181B] rounded-full px-4 py-2">
                  <span className="text-2xl">👤</span>
                  <span className="text-sm font-medium">Beginner Friendly</span>
                </div>
              </div>
            </AnimateFromInside>

            {/* CTA Buttons */}
            <AnimateFromInside>
              <div className="flex flex-col md:flex-row items-start gap-4">
                <button
                  onClick={() => {}}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-[16px] font-semibold rounded-full py-4 px-8 flex items-center gap-2 hover:from-blue-600 hover:to-purple-700 transition-all"
                >
                  Join Now (Hindi) - Free{" "}
                  <span className="line-through">₹490</span>
                  <span>→</span>
                </button>
                <button
                  onClick={() => {}}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-[16px] font-semibold rounded-full py-4 px-8 flex items-center gap-2 hover:from-blue-600 hover:to-purple-700 transition-all"
                >
                  Join Now (English) - Free{" "}
                  <span className="line-through">₹490</span>
                  <span>→</span>
                </button>
              </div>
            </AnimateFromInside>

            <AnimateFromInside>
              <p className="text-[12px] text-[#FFFFFF80]">
                (Limited Seats Only)
              </p>
            </AnimateFromInside>
          </div>

          {/* Right Side - Video Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <AnimateFromInside>
              <div className="relative max-w-lg w-full">
                <div className="aspect-[16/10] overflow-hidden rounded-xl relative">
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0) 50.07%, #01041A 95.16%)",
                    }}
                  />
                  <img
                    src={video}
                    alt="Video preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </AnimateFromInside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
