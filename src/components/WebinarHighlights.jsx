import React from "react";
import { AnimateFromInside } from "../common/ScrollFadeIn";
import algocardicon from "../assets/svg/algocardicon.svg";
import elitetradeicon from "../assets/svg/elitetradeicon.svg";
import timeicon from "../assets/svg/timeicon.svg";
import plicon from "../assets/svg/plicon.svg";
import CTAButton from "../common/CTAButton";
import hand from "../assets/webp/hand.webp";
import ai from "../assets/webp/ai.webp";
import deploy from "../assets/webp/deploy.webp";
import verifiedpl from "../assets/webp/verifiedpl.webp";

const WebinarHighlights = () => {
  return (
    <div className="bg-[#010611] text-white flex flex-col md:px-40 px-4 md:pt-28 pt-20 pb-8 md:gap-6 gap-4 w-full">
      <AnimateFromInside>
        <p className="font-normal md:text-[64px] text-[32px] md:text-[#FFFFFF99] md:leading-[74px] leading-[36px] font-degular text-left">
          <span className="font-semibold text-white">Webinar Highlights</span> –
          What <br className="block md:hidden" /> Will Be Covered ?
        </p>
      </AnimateFromInside>

      <AnimateFromInside>
        <p className="font-normal md:text-[24px] text-[14px] md:leading-[30px] leading-[18px] text-left">
          Learn the secrets sauce of how professional institutional traders
          leverage the power of artificial intelligence and <br /> algo trading
          for breakthrough results.
        </p>
      </AnimateFromInside>
      <div className="w-full flex flex-col gap-6 md:mt-6 mt-4">
        <AnimateFromInside>
          <div className="w-full flex justify-center">
            <div className="bg-[#000E2E] w-full h-auto p-4 md:p-8 rounded-[20px] flex flex-col md:flex-row justify-between items-center md:gap-8 gap-4">
              <div className="flex flex-col justify-between h-full gap-4">
                <div className="flex flex-col md:gap-6 gap-4">
                  <img
                    src={algocardicon}
                    alt={algocardicon}
                    className="w-[52px]"
                  />
                  <p className="font-semibold text-[22px] md:text-[48px] leading-[28px] md:leading-[54px] font-degular">
                    <span className="text-[#FFFFFF99] font-normal">
                      Everything About &nbsp;
                    </span>
                    <br className="block md:hidden" />
                    AI & <br className="hidden md:block" /> Algo Trading
                  </p>
                  <p className="font-medium text-[12px] md:text-[24px] md:leading-[36px] leading-[18px] tracking-normal text-[#FFFFFFBF] max-w-[600px]">
                    Discover how institutional traders use AI and algorithms to
                    boost profits. Learn how markets move, stop losses get
                    hunted, and big opportunities unfold — all on autopilot.
                  </p>
                </div>
              </div>
              <img
                src={hand}
                alt="StrykeX Capital Funding"
                className="w-full max-w-[550px] md:w-[550px] object-cover"
              />
            </div>
          </div>
        </AnimateFromInside>
        <AnimateFromInside>
          <div className="w-full flex justify-center">
            <div className="bg-[#001B26] w-full h-auto p-4 md:p-8 rounded-[20px] flex flex-col md:flex-row justify-between items-center md:gap-8 gap-4">
              <div className="flex flex-col justify-between h-full gap-4">
                <div className="flex flex-col md:gap-6 gap-4">
                  <img
                    src={elitetradeicon}
                    alt={elitetradeicon}
                    className="w-[52px]"
                  />
                  <p className="font-semibold text-[22px] md:text-[48px] leading-[28px] md:leading-[54px] font-degular">
                    <span className="text-[#FFFFFF99] font-normal">
                      Tools That Put You in the <br />
                      {"  "}
                    </span>
                    Top 1%{" "}
                  </p>
                  <p className="font-medium text-[12px] md:text-[24px] md:leading-[36px] leading-[18px] tracking-normal text-[#FFFFFFBF] max-w-[600px]">
                    Forget staring at screens all day. With AI tools like
                    TradingView, StrykeX, and ChatGPT, you can trade smarter,
                    faster, and fully automated — no coding, no clicking, 5X
                    better results.
                  </p>
                </div>
              </div>
              <img
                src={ai}
                alt="StrykeX Capital"
                className="w-full max-w-[550px] md:w-[550px] object-cover"
              />
            </div>
          </div>
        </AnimateFromInside>
        <AnimateFromInside>
          <div className="w-full flex justify-center">
            <div className="bg-[#002323] w-full h-auto p-4 md:p-8 rounded-[20px] flex flex-col md:flex-row justify-between items-center md:gap-8 gap-4">
              <div className="flex flex-col justify-between h-full gap-4">
                <div className="flex flex-col md:gap-6 gap-4">
                  <img src={timeicon} alt={timeicon} className="w-[52px]" />
                  <p className="font-semibold text-[22px] md:text-[48px] leading-[28px] md:leading-[54px] font-degular">
                    Create, Backtest & Deploy <br />
                    <span className="text-[#FFFFFF99] font-normal">
                      Trading Bots
                    </span>{" "}
                  </p>
                  <p className="font-medium text-[12px] md:text-[24px] md:leading-[36px] leading-[18px] tracking-normal text-[#FFFFFFBF] max-w-[600px]">
                    Build and test your own strategies in minutes — from price
                    action to smart money concepts — with zero coding skills.
                    Plus, get access to our ready-to-deploy secret strategies.
                  </p>
                </div>
              </div>
              <img
                src={deploy}
                alt="StrykeX Funding"
                className="w-full max-w-[550px] md:w-[550px] object-cover"
              />
            </div>
          </div>
        </AnimateFromInside>
        <AnimateFromInside>
          <div className="w-full flex justify-center">
            <div className="bg-[#002419] w-full  h-auto p-4 md:p-8 rounded-[20px] flex flex-col md:flex-row justify-between items-center md:gap-8 gap-4">
              <div className="flex flex-col justify-between h-full gap-4">
                <div className="flex flex-col md:gap-6 gap-4">
                  <img src={plicon} alt={plicon} className="w-[52px]" />
                  <p className="font-semibold text-[22px] md:text-[48px] leading-[28px] md:leading-[54px] font-degular">
                    Verified Profits &
                    <br />
                    <span className="text-[#FFFFFF99] font-normal">
                      Trade History
                    </span>
                  </p>

                  <p className="font-medium text-[12px] md:text-[24px] md:leading-[36px] leading-[18px] tracking-normal text-[#FFFFFFBF] max-w-[600px]">
                    See real, verified profit/loss statements and algo trade
                    records. Proof of performance, transparency, and results you
                    can trust.
                  </p>
                </div>
              </div>
              <img
                src={verifiedpl}
                alt="StrykeX Funding"
                className="w-full max-w-[550px] md:w-[550px] object-cover"
              />
            </div>
          </div>
        </AnimateFromInside>
        <AnimateFromInside>
          <div className="flex justify-center md:mt-0 mt-4">
            <CTAButton />
          </div>
        </AnimateFromInside>
      </div>
    </div>
  );
};

export default WebinarHighlights;
