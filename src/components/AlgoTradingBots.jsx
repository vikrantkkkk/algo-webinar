import React, { useState, useRef } from "react";
import { AnimateFromInside } from "../common/ScrollFadeIn";
import CTAButton from "../common/CTAButton";

const AlgoTradingBots = () => {
  const [isPaused, setIsPaused] = useState(false);
  const marqueeRef = useRef(null);

  const handleTouchStart = () => {
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    // Resume animation after a short delay
    setTimeout(() => {
      setIsPaused(false);
    }, 2000);
  };

  const tradingBots = [
    {
      id: 1,
      title: "Decay Miner",
      description: (
        <>
          <p className="text-[#FFFFFFBF] text-[12px] md:text-[18px] leading-[18px] md:leading-[26px] font-normal">
            - Automatically takes advantage of volatility
          </p>
          <p className="text-[#FFFFFFBF] text-[12px] md:text-[18px] leading-[18px] md:leading-[26px] font-normal">
            - Win rate of{" "}
            <span className="font-semibold text-[#4CFE7F]">85%+</span>, works in
            index options
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "Trend Rider",
      description: (
        <>
          <p className="text-[#FFFFFFBF] text-[12px] md:text-[18px] leading-[18px] md:leading-[26px] font-normal">
            - Automatically detects big trends and rides them
          </p>
          <p className="text-[#FFFFFFBF] text-[12px] md:text-[18px] leading-[18px] md:leading-[26px] font-normal">
            - Win rate of{" "}
            <span className="font-semibold text-[#4CFE7F]">70%+</span>, works in
            all F&O stocks
          </p>
        </>
      ),
    },
    {
      id: 3,
      title: "Momentum Surge",
      description: (
        <>
          <p className="text-[#FFFFFFBF] text-[12px] md:text-[18px] leading-[18px] md:leading-[26px] font-normal">
            - Automatically scans institutional activity and executes trades
          </p>
          <p className="text-[#FFFFFFBF] text-[12px] md:text-[18px] leading-[18px] md:leading-[26px] font-normal">
            -{" "}
            <span className="font-semibold text-white">
              {" "}
              Especially designed for Nifty{" "}
            </span>
            & Bank Nifty Index Options
          </p>
        </>
      ),
    },
    {
      id: 4,
      title: "Breakout Blitz",
      description: (
        <>
          <p className="text-[#FFFFFFBF] text-[12px] md:text-[18px] leading-[18px] md:leading-[26px] font-normal">
            - Pre built breakout trading bot, captures big sudden moves
          </p>
          <p className="text-[#FFFFFFBF] text-[12px] md:text-[18px] leading-[18px] md:leading-[26px] font-normal">
            - Curated for index futures such as{" "}
            <span className="font-semibold text-white">
              Midcap Nifty & Fin Nifty
            </span>
          </p>
        </>
      ),
    },
    {
      id: 5,
      title: "The Big Bull",
      description: (
        <>
          <p className="text-[#FFFFFFBF] text-[12px] md:text-[18px] leading-[18px] md:leading-[26px] font-normal">
            -{" "}
            <span className="font-semibold text-white">
              Fundamental analyst + professional technical trading bot
            </span>
          </p>
          <p className="text-[#FFFFFFBF] text-[12px] md:text-[18px] leading-[18px] md:leading-[26px] font-normal">
            - Spots undervalued stocks, buys low, sells high & repeat
          </p>
        </>
      ),
    },
    {
      id: 6,
      title: "Trend Inverter",
      description: (
        <>
          <p className="text-[#FFFFFFBF] text-[12px] md:text-[18px] leading-[18px] md:leading-[26px] font-normal">
            - Contra trading bot - designed to take reversal trades
          </p>
          <p className="text-[#FFFFFFBF] text-[12px] md:text-[18px] leading-[18px] md:leading-[26px] font-normal">
            -{" "}
            <span className="font-semibold text-white">
              Works in all market segments
            </span>{" "}
            - intraday and swing
          </p>
        </>
      ),
    },
  ];

  const Card = ({ bot, isMobile = false }) => (
    <div
      className={`flex flex-col justify-start items-start bg-[#FFFFFF0D] border border-[#1C2230] rounded-[11.8px] p-3 transition-all duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 ${
        isMobile ? "w-[340px] h-[292px]" : "flex-1"
      }`}
    >
      {/* Image/Top Section */}
      <div className="relative w-full h-[140px] md:h-[210px] bg-[#FFFFFF0F] rounded-[12px] mb-3 md:mb-4">
        <div className="absolute top-0 left-0 border border-[#336CDC] rounded-br-[12px] rounded-tl-[12px]">
          <div
            className="px-3 py-1.5 md:px-4 md:py-2 text-white font-semibold text-[14px] md:text-[18px] leading-[100%]"
            style={{
              background:
                "linear-gradient(92.47deg, rgba(63, 173, 255, 0.25) 0.63%, rgba(51, 108, 220, 0.25) 48.21%, rgba(71, 180, 180, 0.25) 96.78%)",
              borderRadius: "12px 0px 12px 0px",
            }}
          >
            Fully Automated
          </div>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-[20px] md:text-[32px] leading-[100%] font-semibold text-white mb-3 md:mb-4 text-left">
        {bot.title}
      </h3>

      {/* Description */}
      <div className="flex flex-col gap-1 md:gap-2 text-left">
        {bot.description}
      </div>
    </div>
  );

  return (
    <div className="bg-[#010611] text-white flex flex-col md:gap-6 gap-4 justify-center md:px-40 px-4 pt-20 md:pb-8 w-full">
      {/* Heading */}
      <AnimateFromInside>
        <p className="font-semibold md:text-[64px] text-[32px] md:leading-[72px] leading-[36px] font-degular">
          Winning Pre Built Algo Trading Bots{" "}
          <span className="text-[#FFFFFF99] font-normal">
            <br className="hidden md:block" /> – Exclusive Showcase
          </span>
        </p>
      </AnimateFromInside>
      <AnimateFromInside>
        <p className="font-normal md:text-[20px] text-[14px] md:leading-[30px] leading-[18px] text-[#C8D0E2]">
          Get ready to blow your minds when we reveal our fully automated, ready
          to use – pre built algo <br /> trading strategies which will put your
          wealth creation journey on autopilot.
        </p>
      </AnimateFromInside>

      {/* Cards Grid */}
      <div className="flex flex-col gap-6 md:gap-8">
        {/* Desktop Layout - 2 rows of 3 cards each */}
        <div className="hidden md:flex flex-col gap-6 md:gap-8">
          {/* Row 1 */}
          <AnimateFromInside>
            <div className="flex gap-6 md:gap-8">
              {tradingBots.slice(0, 3).map((bot) => (
                <Card key={bot.id} bot={bot} />
              ))}
            </div>
          </AnimateFromInside>

          {/* Row 2 */}
          <AnimateFromInside>
            <div className="flex gap-6 md:gap-8">
              {tradingBots.slice(3, 6).map((bot) => (
                <Card key={bot.id} bot={bot} />
              ))}
            </div>
          </AnimateFromInside>
        </div>

        {/* Mobile Layout - Single row with auto-play and touch scrolling */}
        <div className="md:hidden overflow-hidden group z-20 w-screen -mx-4">
          <AnimateFromInside>
            <div
              ref={marqueeRef}
              className={`flex items-center gap-4 h-auto ${
                !isPaused ? "animate-marquee1" : ""
              } group-hover:[animation-play-state:paused]`}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleTouchStart}
              onMouseUp={handleTouchEnd}
            >
              {/* First set of cards */}
              {tradingBots.map((bot) => (
                <div key={bot.id} className="flex-shrink-0">
                  <Card bot={bot} isMobile={true} />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {tradingBots.map((bot) => (
                <div key={`duplicate-${bot.id}`} className="flex-shrink-0">
                  <Card bot={bot} isMobile={true} />
                </div>
              ))}
            </div>
          </AnimateFromInside>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <AnimateFromInside>
          <div className="md:flex hidden justify-center">
            <CTAButton />
          </div>
        </AnimateFromInside>
      </div>
      <p className="md:block hidden font-medium text-center text-[16px] leading-[30px] mt-9">
        Register today and unlock all the below mentioned bonuses worth ₹ 25,499
      </p>
    </div>
  );
};

export default AlgoTradingBots;
