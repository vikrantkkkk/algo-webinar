import React from "react";
import { AnimateFromInside } from "../common/ScrollFadeIn";
import card7 from "../assets/webp/card7.webp";
import card8 from "../assets/webp/card8.webp";
import card9 from "../assets/webp/card9.webp";
import camera from "../assets/svg/camera.svg";
import course from "../assets/svg/course.svg";
import live from "../assets/svg/live.svg";
import CTAButton from "../common/CTAButton";

const WebinarHighlights = () => {
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
          <div className="bg-[#000E2E] w-[1270px] h-auto p-6 md:p-10 rounded-[20px] flex flex-col md:flex-row justify-between items-center md:gap-8 gap-4">
            <div className="flex flex-col justify-between h-full gap-4">
              <div className="flex flex-col gap-4">
                <img src={camera} alt={camera} className="w-[52px]" />
                <p className="font-semibold text-[20px] md:text-[36px] leading-[100%] md:leading-[52px] font-degular">
                  Everything You Need To Learn About AI & Algo Trading
                </p>
                <p className="font-light text-[14px] md:text-[21px] md:leading-[28px] leading-[22px] tracking-normal   text-[#FFFFFFBF] max-w-xl">
                  The world of trading is moving fast – extremely fast, and in
                  this era of algo trading and artificial intelligence, we will
                  give you a sneak peek into how this new form of trading can
                  significantly increase the odds of being profitable in the
                  market. You’ll learn how big professional trading desks are
                  hunting retail stop losses, exploiting big market movements –
                  all on autopilot.
                </p>
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
          <div className="bg-[#001B26] w-[1270px] h-auto p-6 md:p-10 rounded-[20px] flex flex-col md:flex-row justify-between items-center md:gap-8 gap-4">
            <div className="flex flex-col justify-between h-full gap-4">
              <div className="flex flex-col gap-4">
                <img src={course} alt={course} className="w-[52px]" />
                <p className="font-semibold text-[20px] md:text-[36px] leading-[100%] md:leading-[52px] font-degular">
                  How Tools Like Chat GPT, Trading View & StrykeX Can Get You To
                  The Top 1% Elite Traders
                </p>
                <p className="font-light text-[14px] md:text-[21px] md:leading-[28px] leading-[22px] tracking-normal  text-[#FFFFFFBF] max-w-xl">
                  Gone are the days where traders were glued to their screen
                  from 9:15 am till 3:30pm – scanning, executing, managing their
                  trades manually. This is ineffective and a perfect recipe for
                  increasing losses. BUT, with A.I trading tools and platforms
                  such as Trading View & StrykeX combined with Chat GPT, you can
                  do all this on complete automation with 5X better results,
                  without even clicking a button or writing a single line of
                  code. That’s the power of artificial intelligence – that’s the
                  future of retail trading.
                </p>
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
          <div className="bg-[#002323] w-[1270px] h-auto p-6 md:p-10 rounded-[20px] flex flex-col md:flex-row justify-between items-center md:gap-8 gap-4">
            <div className="flex flex-col justify-between h-full gap-4">
              <div className="flex flex-col gap-4">
                <img src={live} alt={live} className="w-[52px]" />
                <p className="font-semibold text-[20px] md:text-[36px] leading-[100%] md:leading-[52px] font-degular">
                  Learn To Create, Back Test and Deploy Trading Bots Using Our
                  Secret Strategies
                </p>
                <p className="font-light text-[14px] md:text-[21px] md:leading-[28px] leading-[22px] tracking-normal  text-[#FFFFFFBF] max-w-xl">
                  Unleash the power of algorithmic trading tools which lets you
                  create, test, deploy your strategies spanning across price
                  action, smart money concepts, institutional price action,
                  indicators, volume, open interest and much more in a few
                  clicks without the need of any coding or programming skills.
                  Additionally, you will get access to few of our secret algo
                  strategies – which are ready to deploy in the live markets.
                </p>
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
          <div className="bg-[#002419] w-[1270px] h-auto p-6 md:p-10 rounded-[20px] flex flex-col md:flex-row justify-between items-center md:gap-8 gap-4">
            <div className="flex flex-col justify-between h-full gap-4">
              <div className="flex flex-col gap-4">
                <img src={live} alt={live} className="w-[52px]" />
                <p className="font-semibold text-[20px] md:text-[36px] leading-[100%] md:leading-[52px] font-degular">
                  Detailed Verified Profit / Loss Statement & Algo Trade History
                </p>
                <p className="font-light text-[14px] md:text-[21px] md:leading-[28px] leading-[22px] tracking-normal  text-[#FFFFFFBF] max-w-xl">
                  - Get access to detailed case studies of verified real trades
                  executed on autopilot from our proprietary custom algo trading
                  robots which seamlessly scan, analyse, deploy and manage
                  trades in equity, futures and options segment for intraday as
                  well as swing trading styles. Discover a wide variety of
                  directional and non-directional trading strategies, which will
                  make you top dollar even when you sleep.
                </p>
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
      </div>
    </div>
  );
};

export default WebinarHighlights;
