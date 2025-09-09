import React from "react";
import { AnimateFromInside } from "../common/ScrollFadeIn";
import algocardicon from "../assets/svg/algocardicon.svg";
import elitetradeicon from "../assets/svg/elitetradeicon.svg";
import timeicon from "../assets/svg/timeicon.svg";
import plicon from "../assets/svg/plicon.svg";
import CTAButton from "../common/CTAButton";
import newcardicon1 from "../assets/webp/newcardicon1.webp";
import newcardicon2 from "../assets/webp/newcardicon2.webp";

const WebinarHighlights = () => {
  return (
    <div className="bg-[#010611] text-white flex flex-col md:px-40 px-4 pt-28 pb-8 gap-6 w-full min-w-[1270px]">
      <AnimateFromInside>
        <p className="font-normal md:text-[64px] text-[#FFFFFF99] text-[40px] leading-[74px] font-degular text-left">
          <span className="font-semibold text-white">Webinar Highlights</span> –
          What Will Be Covered ?
        </p>
      </AnimateFromInside>

      <AnimateFromInside>
        <p className="font-normal text-[24px] leading-[30px] text-left">
          Learn the secrets sauce of how professional institutional traders
          leverage the power of artificial intelligence and <br /> algo trading
          for breakthrough results.
        </p>
      </AnimateFromInside>
      <div className="w-full flex flex-col gap-6 md:mt-6 mt-4">
        <AnimateFromInside>
          <div className="w-full flex justify-center">
            <div className="bg-[#000E2E] w-full h-auto p-6 md:p-10 rounded-[20px] flex flex-col md:flex-row justify-between items-center md:gap-8 gap-4">
              <div className="flex flex-col justify-between h-full gap-4">
                <div className="flex flex-col gap-6">
                  <img
                    src={algocardicon}
                    alt={algocardicon}
                    className="w-[52px]"
                  />
                  <p className="font-semibold text-[20px] md:text-[32px] leading-[100%] md:leading-[44px] font-degular">
                    <span className="text-[#FFFFFF99] font-normal">
                      Everything You Need To
                    </span>
                    <br />
                    Learn About AI & Algo Trading
                  </p>
                  <p className="font-medium text-[14px] md:text-[18px] md:leading-[28px] leading-[22px] tracking-normal text-[#FFFFFFBF] max-w-[800px]">
                    The world of trading is moving fast – extremely fast, and in
                    this era of algo trading and artificial intelligence, we
                    will give you a sneak peek into how this new form of trading
                    can significantly increase the odds of being profitable in
                    the market. You'll learn how big professional trading desks
                    are hunting retail stop losses, exploiting big market
                    movements – all on autopilot.
                  </p>
                </div>
              </div>
              <img
                src={newcardicon1}
                alt="StrykeX Capital Funding"
                className="md:w-[550px] object-cover"
              />
            </div>
          </div>
        </AnimateFromInside>
        <AnimateFromInside>
          <div className="w-full flex justify-center">
            <div className="bg-[#001B26] w-full h-auto p-6 md:p-10 rounded-[20px] flex flex-col md:flex-row justify-between items-center md:gap-8 gap-4">
              <div className="flex flex-col justify-between h-full gap-4">
                <div className="flex flex-col gap-6">
                  <img
                    src={elitetradeicon}
                    alt={elitetradeicon}
                    className="w-[52px]"
                  />
                  <p className="font-semibold text-[20px] md:text-[32px] leading-[100%] md:leading-[44px] font-degular">
                    <span className="text-[#FFFFFF99] font-normal">
                      How Tools Like Chat GPT, Trading View & StrykeX <br /> Can
                      Get You To The {"  "}
                    </span>
                    Top 1% Elite Traders
                  </p>
                  <p className="font-medium text-[14px] md:text-[18px] md:leading-[28px] leading-[22px] tracking-normal text-[#FFFFFFBF] max-w-[800px]">
                    Gone are the days where traders were glued to their screen
                    from 9:15 am till 3:30pm – scanning, executing, managing
                    their trades manually. This is ineffective and a perfect
                    recipe for increasing losses. BUT, with A.I trading tools
                    and platforms such as Trading View & StrykeX combined with
                    Chat GPT, you can do all this on complete automation with 5X
                    better results, without even clicking a button or writing a
                    single line of code. That's the power of artificial
                    intelligence – that's the future of retail trading.
                  </p>
                </div>
              </div>
              <img
                src={newcardicon1}
                alt="StrykeX Capital"
                className="md:w-[550px] object-cover"
              />
            </div>
          </div>
        </AnimateFromInside>
        <AnimateFromInside>
          <div className="w-full flex justify-center">
            <div className="bg-[#002323] w-full h-auto p-6 md:p-10 rounded-[20px] flex flex-col md:flex-row justify-between items-center md:gap-8 gap-4">
              <div className="flex flex-col justify-between h-full gap-4">
                <div className="flex flex-col gap-6">
                  <img src={timeicon} alt={timeicon} className="w-[52px]" />
                  <p className="font-semibold text-[20px] md:text-[32px] leading-[100%] md:leading-[44px] font-degular">
                    <span className="text-[#FFFFFF99] font-normal">
                      Learn To Create, Back Test and Deploy <br /> Trading Bots
                      Using
                    </span>{" "}
                    Our Secret Strategies
                  </p>
                  <p className="font-medium text-[14px] md:text-[18px] md:leading-[28px] leading-[22px] tracking-normal text-[#FFFFFFBF] max-w-[800px]">
                    Unleash the power of algorithmic trading tools which lets
                    you create, test, deploy your strategies spanning across
                    price action, smart money concepts, institutional price
                    action, indicators, volume, open interest and much more in a
                    few clicks without the need of any coding or programming
                    skills. Additionally, you will get access to few of our
                    secret algo strategies – which are ready to deploy in the
                    live markets.
                  </p>
                </div>
              </div>
              <img
                src={newcardicon1}
                alt="StrykeX Funding"
                className="md:w-[550px] object-cover"
              />
            </div>
          </div>
        </AnimateFromInside>
        <AnimateFromInside>
          <div className="w-full flex justify-center">
            <div className="bg-[#002419] w-full  h-auto p-6 md:p-10 rounded-[20px] flex flex-col md:flex-row justify-between items-center md:gap-8 gap-4">
              <div className="flex flex-col justify-between h-full gap-4">
                <div className="flex flex-col gap-6">
                  <img src={plicon} alt={plicon} className="w-[52px]" />
                  <p className="font-semibold text-[20px] md:text-[36px] leading-[100%] md:leading-[52px] font-degular">
                    Detailed Verified Profit / Loss Statement <br />
                    <span className="text-[#FFFFFF99] font-normal">
                      & Algo Trade History
                    </span>
                  </p>
                  <p className="font-medium text-[14px] md:text-[18px] md:leading-[28px] leading-[22px] tracking-normal text-[#FFFFFFBF] max-w-[800px]">
                    - Get access to detailed case studies of verified real
                    trades executed on autopilot from our proprietary custom
                    algo trading robots which seamlessly scan, analyse, deploy
                    and manage trades in equity, futures and options segment for
                    intraday as well as swing trading styles. Discover a wide
                    variety of directional and non-directional trading
                    strategies, which will make you top dollar even when you
                    sleep.
                  </p>
                </div>
              </div>
              <img
                src={newcardicon2}
                alt="StrykeX Funding"
                className="md:w-[550px] object-cover"
              />
            </div>
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
