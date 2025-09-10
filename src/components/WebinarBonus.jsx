import React from "react";
import { AnimateFromInside } from "../common/ScrollFadeIn";
import CTAButton from "../common/CTAButton";
import stockicon from "../assets/svg/stockicon.svg";
import gpticon from "../assets/svg/gpticon.svg";
import manageicon from "../assets/svg/manageicon.svg";

const WebinarBonus = () => {
  const bonuses = [
    {
      id: 1,
      badgeText: "Bonus #1",
      icon: stockicon,
      title: "2 Stock Recommendations <br/> with 150%+ Upside Potential",
      hint: "Hint: These stocks are in the drone tech and clean energy space.",
      value: "Worth Rs 5,000",
    },
    {
      id: 2,
      badgeText: "Bonus #2",
      icon: gpticon,
      title: "Pre Built Chat GPT <br/> Prompts",
      hint: "Hint: These are trained trading bots, who can analyse any trading or investing idea in seconds.",
      value: "Worth Rs 5,000",
    },
    {
      id: 3,
      badgeText: "Bonus #3",
      icon: manageicon,
      title: "Professionally Managed <br/> Portfolio Access",
      hint: "Hint: Unlock a curated pre built investing portfolio of ETFs, stocks and bullions. Worth Rs 13,000",
      value: "Worth Rs 5,000",
    },
  ];

  const BonusCard = ({ bonus }) => (
    <div
      className="rounded-[16px] px-4 py-8 md:px-8 md:py-12 flex-1"
      style={{
        background: `linear-gradient(206.92deg, rgba(0, 0, 0, 0.2) 16.84%, rgba(15, 208, 234, 0.2) 93.26%), linear-gradient(132.92deg, rgba(0, 0, 0, 0) 25.91%, rgba(0, 68, 255, 0.2) 94.34%)`,
      }}
    >
      {/* Content Container */}
      <div className="flex flex-col gap-3 md:gap-4 h-full">
        {/* Badge */}
        <div className="flex justify-center">
          <div
            className="inline-flex items-center text-white px-4 py-2 md:px-8 md:py-3 rounded-full text-[14px] md:text-[18px] font-semibold"
            style={{
              background: `linear-gradient(96.9deg, #3FADFF 2.48%, #336CDC 49.16%, #47B4B4 96.8%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))`,
            }}
          >
            {bonus.badgeText}
          </div>
        </div>

        {/* Icon */}
        <div className="flex justify-center">
          <img src={bonus.icon} alt={bonus.badgeText} className="w-10 h-10 md:w-12 md:h-12" />
        </div>

        {/* Title */}
        <h3
          className="text-white text-[18px] md:text-[24px] font-bold text-center leading-tight"
          dangerouslySetInnerHTML={{ __html: bonus.title }}
        ></h3>

        {/* Hint */}
        <p className="text-[#A1B5D0] text-[12px] md:text-[16px] leading-[18px] md:leading-relaxed text-center flex-grow">
          {bonus.hint}
        </p>

        {/* Value */}
        <div className="text-center">
          <p
            className="text-white text-[24px] md:text-[32px] leading-[24px] md:leading-[32px] font-semibold"
            style={{
              textShadow: "0px 4px 47.4px #FFFFFF",
            }}
          >
            {bonus.value}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#010611] text-white flex flex-col md:gap-6 gap-4 justify-center md:px-40 px-4 pt-20 md:pt-28 pb-8 w-full">
      {/* Heading */}
      <AnimateFromInside>
        <h2 className="font-semibold md:text-[64px] text-[32px] md:leading-[72px] leading-[36px] font-degular">
          <span className="text-[#FFFFFF99] font-normal">Today's Exclusive Offer – </span>
          <br className="hidden md:block" />
          Unlock Webinar Bonuses Worth ₹ 25,499
        </h2>
      </AnimateFromInside>
      <AnimateFromInside>
        <p className="font-normal md:text-[20px] text-[14px] md:leading-[30px] leading-[18px] text-[#C8D0E2] max-w-4xl">
          The best is yet to come. Register today and get mind blowing pre built
          tools to take your trading and investing to the next level.
        </p>
      </AnimateFromInside>

      {/* Bonus Cards */}
      <div className="flex flex-col gap-6 md:gap-8">
        {/* Desktop Layout - Single row of 3 cards */}
        <div className="hidden md:flex gap-6 md:gap-8">
          <AnimateFromInside>
            <div className="flex gap-6 md:gap-8">
              {bonuses.map((bonus) => (
                <BonusCard key={bonus.id} bonus={bonus} />
              ))}
            </div>
          </AnimateFromInside>
        </div>

        {/* Mobile Layout - Single column */}
        <div className="md:hidden flex flex-col gap-6">
          <AnimateFromInside>
            <div className="flex flex-col gap-[35px]">
              {bonuses.map((bonus) => (
                <BonusCard key={bonus.id} bonus={bonus} />
              ))}
            </div>
          </AnimateFromInside>
        </div>
      </div>
      <AnimateFromInside>
        <div className="flex justify-center items-center md:mt-0 mt-8">
          <CTAButton />
        </div>
      </AnimateFromInside>
      <p className="md:block hidden font-medium text-[14px] md:text-[16px] leading-[18px] md:leading-[30px] text-center mt-6">
        Register today and unlock all the below mentioned bonuses worth ₹ 25,499
      </p>
    </div>
  );
};

export default WebinarBonus;
