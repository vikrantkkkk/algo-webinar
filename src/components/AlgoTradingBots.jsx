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

  return (
    <div className="bg-[#010611] text-white flex flex-col gap-10 justify-center md:px-40 px-4 pt-20 pb-12 w-full">
      {/* Heading */}
      <div className="flex flex-col items-start w-full">
        <AnimateFromInside>
          <p className="font-normal md:text-[56px] text-[34px] leading-tight font-degular">
            Winning Pre Built Algo Trading Bots{" "}
            <span className="text-[#FFFFFF99]">– Exclusive Showcase</span>
          </p>
        </AnimateFromInside>

        <AnimateFromInside>
          <p className="font-normal text-[20px] leading-[30px] pt-3 text-[#C8D0E2]">
            Get ready to blow your minds when we reveal our fully automated,
            ready to use – pre built algo <br /> trading strategies which will
            put your wealth creation journey on autopilot.
          </p>
        </AnimateFromInside>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tradingBots.map((bot) => (
          <div
            key={bot.id}
            className="bg-gradient-to-b from-[#111827] to-[#0B0F19] border border-[#1C2230] rounded-2xl p-6 transition-all duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
          >
            {/* Badge */}
            <div className="flex items-center gap-2 mb-5">
              <div className="bg-[#1A2436] border border-[#2C3E57] rounded-md px-3 py-1 flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-blue-400 text-xs font-medium tracking-wide">
                  Fully Automated
                </span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-white mb-4">
              {bot.title}
            </h3>

            {/* Description */}
            <div className="space-y-2">
              {renderDescription(bot.description, bot.highlight)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlgoTradingBots;
