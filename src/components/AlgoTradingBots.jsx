import React from "react";
import { AnimateFromInside } from "../common/ScrollFadeIn";

const AlgoTradingBots = () => {
  const tradingBots = [
    {
      id: 1,
      title: "Decay Miner",
      description: [
        "- Automatically takes advantage of volatility",
        "- Win rate of 85%+, works in index options",
      ],
      highlight: "85%+",
    },
    {
      id: 2,
      title: "Trend Rider",
      description: [
        "- Automatically detects big trends and rides them",
        "- Win rate of 70%+, works in all F&O stocks",
      ],
      highlight: "70%+",
    },
    {
      id: 3,
      title: "Momentum Surge",
      description: [
        "- Automatically scans institutional activity and executes trades",
        "- Especially designed for Nifty & Bank Nifty Index Options",
      ],
      highlight: "Nifty & Bank Nifty",
    },
    {
      id: 4,
      title: "Breakout Blitz",
      description: [
        "- Pre built breakout trading bot, captures big sudden moves",
        "- Curated for index futures such as Midcap Nifty & Fin Nifty",
      ],
      highlight: "Midcap Nifty & Fin Nifty",
    },
    {
      id: 5,
      title: "The Big Bull",
      description: [
        "- Fundamental analyst + professional technical trading bot",
        "- Spots undervalued stocks, buys low, sells high & repeat",
      ],
      highlight: "Fundamental analyst + professional technical trading bot",
    },
    {
      id: 6,
      title: "Trend Inverter",
      description: [
        "- Contra trading bot - designed to take reversal trades",
        "- Works in all market segments - intraday and swing",
      ],
      highlight: "Works in all market segments",
    },
  ];

  const renderDescription = (description, highlight) => {
    return description.map((line, index) => {
      if (line.includes(highlight)) {
        const parts = line.split(highlight);
        return (
          <p key={index} className="text-[#C8D0E2] text-sm leading-relaxed">
            {parts[0]}
            <span className="font-semibold text-[#4ADE80]">{highlight}</span>
            {parts[1]}
          </p>
        );
      } else {
        return (
          <p key={index} className="text-[#C8D0E2] text-sm leading-relaxed">
            {line}
          </p>
        );
      }
    });
  };

  const Card = ({ bot }) => (
    <div className="flex flex-col justify-start items-start bg-[#FFFFFF0D] border border-[#1C2230] rounded-[14px] p-6 transition-all duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 flex-1 min-w-[300px] max-w-[400px]">
      {/* Image/Top Section */}
      <div className="relative w-full h-[210px] bg-[#FFFFFF0F] rounded-[12px] mb-4">
        <div
          className="absolute top-0 left-0"
          style={{
            borderWidth: "0px 1.05px 1.05px 0px",
            borderStyle: "solid",
            borderImageSource:
              "linear-gradient(141.14deg, #3FADFF 7.75%, #336CDC 49.32%, #47B4B4 91.74%)",
            borderImageSlice: "1",
            borderRadius: "12px 0px 12px 0px",
          }}
        >
          <div
            className="px-4 py-2 text-white font-semibold text-[18px] leading-[100%]"
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
      <h3 className="text-lg font-semibold text-white mb-4 text-left">
        {bot.title}
      </h3>

      {/* Description */}
      <div className="flex flex-col gap-2 text-left">
        {renderDescription(bot.description, bot.highlight)}
      </div>
    </div>
  );

  return (
    <div className="bg-[#010611] text-white flex flex-col gap-10 justify-center md:px-40 px-4 pt-20 pb-12 w-full">
      {/* Heading */}
      <div className="flex flex-col items-start w-full gap-3">
        <AnimateFromInside>
          <p className="font-normal md:text-[56px] text-[34px] leading-tight font-degular">
            Winning Pre Built Algo Trading Bots{" "}
            <span className="text-[#FFFFFF99]">– Exclusive Showcase</span>
          </p>
        </AnimateFromInside>

        <AnimateFromInside>
          <p className="font-normal text-[20px] leading-[30px] text-[#C8D0E2]">
            Get ready to blow your minds when we reveal our fully automated,
            ready to use – pre built algo <br /> trading strategies which will
            put your wealth creation journey on autopilot.
          </p>
        </AnimateFromInside>
      </div>

      {/* Cards Grid */}
      <div className="flex flex-col gap-6 md:gap-8">
        {/* Row 1 */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {tradingBots.slice(0, 3).map((bot) => (
            <Card key={bot.id} bot={bot} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {tradingBots.slice(3, 6).map((bot) => (
            <Card key={bot.id} bot={bot} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlgoTradingBots;
