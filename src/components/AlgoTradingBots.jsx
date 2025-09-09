import React from "react";
import { AnimateFromInside } from "../common/ScrollFadeIn";
import CTAButton from "../common/CTAButton";

const AlgoTradingBots = () => {
  const tradingBots = [
    {
      id: 1,
      title: "Decay Miner",
      description: (
        <>
          <p className="text-[#FFFFFFBF] text-[18px] leading-[26px] font-normal">
            - Automatically takes advantage of volatility
          </p>
          <p className="text-[#FFFFFFBF] text-[18px] leading-[26px] font-normal">
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
          <p className="text-[#FFFFFFBF] text-[18px] leading-[26px] font-normal">
            - Automatically detects big trends and rides them
          </p>
          <p className="text-[#FFFFFFBF] text-[18px] leading-[26px] font-normal">
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
          <p className="text-[#FFFFFFBF] text-[18px] leading-[26px] font-normal">
            - Automatically scans institutional activity and executes trades
          </p>
          <p className="text-[#FFFFFFBF] text-[18px] leading-[26px] font-normal">
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
          <p className="text-[#FFFFFFBF] text-[18px] leading-[26px] font-normal">
            - Pre built breakout trading bot, captures big sudden moves
          </p>
          <p className="text-[#FFFFFFBF] text-[18px] leading-[26px] font-normal">
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
          <p className="text-[#FFFFFFBF] text-[18px] leading-[26px] font-normal">
            -{" "}
            <span className="font-semibold text-white">
              Fundamental analyst + professional technical trading bot
            </span>
          </p>
          <p className="text-[#FFFFFFBF] text-[18px] leading-[26px] font-normal">
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
          <p className="text-[#FFFFFFBF] text-[18px] leading-[26px] font-normal">
            - Contra trading bot - designed to take reversal trades
          </p>
          <p className="text-[#FFFFFFBF] text-[18px] leading-[26px] font-normal">
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

  const Card = ({ bot }) => (
    <div className="flex flex-col justify-start items-start bg-[#FFFFFF0D] border border-[#1C2230] rounded-[14px] p-6 transition-all duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 flex-1">
      {/* Image/Top Section */}
      <div className="relative w-full h-[210px] bg-[#FFFFFF0F] rounded-[12px] mb-4">
        <div className="absolute top-0 left-0 border border-[#336CDC] rounded-br-[12px] rounded-tl-[12px]">
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
      <h3 className="text-[32px] leading-[100%] font-semibold text-white mb-4 text-left">
        {bot.title}
      </h3>

      {/* Description */}
      <div className="flex flex-col gap-2 text-left">{bot.description}</div>
    </div>
  );

  return (
    <div className="bg-[#010611] text-white flex flex-col gap-6 justify-center md:px-40 px-4 pt-20 pb-8 w-full">
      {/* Heading */}
      <AnimateFromInside>
        <p className="font-semibold md:text-[56px] text-[34px] leading-[74px] font-degular">
          Winning Pre Built Algo Trading Bots{" "}
          <span className="text-[#FFFFFF99] font-normal">
            <br />– Exclusive Showcase
          </span>
        </p>
      </AnimateFromInside>
      <AnimateFromInside>
        <p className="font-normal text-[20px] leading-[30px] text-[#C8D0E2]">
          Get ready to blow your minds when we reveal our fully automated, ready
          to use – pre built algo <br /> trading strategies which will put your
          wealth creation journey on autopilot.
        </p>
      </AnimateFromInside>

      {/* Cards Grid */}
      <div className="flex flex-col gap-6 md:gap-8">
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
      <div className="flex justify-center items-center">
        <AnimateFromInside>
          <CTAButton />
        </AnimateFromInside>
      </div>
      <p className="font-medium text-center text-[16px] leading-[30px] mt-9">
        Register today and unlock all the below mentioned bonuses worth ₹ 25,499
      </p>
    </div>
  );
};

export default AlgoTradingBots;
