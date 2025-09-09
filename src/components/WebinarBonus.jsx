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
      className="rounded-[16px] px-8 py-12 flex-1"
      style={{
        background: `linear-gradient(206.92deg, rgba(0, 0, 0, 0.2) 16.84%, rgba(15, 208, 234, 0.2) 93.26%), linear-gradient(132.92deg, rgba(0, 0, 0, 0) 25.91%, rgba(0, 68, 255, 0.2) 94.34%)`,
      }}
    >
      {/* Content Container */}
      <div className="flex flex-col gap-4 h-full">
        {/* Badge */}
        <div className="flex justify-center">
          <div
            className="inline-flex items-center text-white px-8 py-3 rounded-full text-sm font-semibold"
            style={{
              background: `linear-gradient(96.9deg, #3FADFF 2.48%, #336CDC 49.16%, #47B4B4 96.8%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))`,
            }}
          >
            {bonus.badgeText}
          </div>
        </div>

        {/* Icon */}
        <div className="flex justify-center">
          <img src={bonus.icon} alt={bonus.badgeText} className="w-12 h-12" />
        </div>

        {/* Title */}
        <h3
          className="text-white text-2xl font-bold text-center leading-tight"
          dangerouslySetInnerHTML={{ __html: bonus.title }}
        ></h3>

        {/* Hint */}
        <p className="text-[#A1B5D0] text-base leading-relaxed text-center flex-grow">
          {bonus.hint}
        </p>

        {/* Value */}
        <div className="text-center">
          <p
            className="text-white text-[32px] leading-[32px] font-semibold"
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
    <div className="bg-[#010611] text-white flex flex-col gap-6 justify-center md:px-40 px-4 pt-28 pb-8 w-full">
      {/* Heading */}
      <AnimateFromInside>
        <h2 className="font-semibold md:text-[56px] text-[34px] leading-[74px] font-degular">
          <span className="text-[#FFFFFF99] font-normal">Today's Exclusive Offer – </span>
          <br />
          Unlock Webinar Bonuses Worth ₹ 25,499
        </h2>
      </AnimateFromInside>
      <AnimateFromInside>
        <p className="font-normal text-[20px] leading-[30px] text-[#C8D0E2] max-w-4xl">
          The best is yet to come. Register today and get mind blowing pre built
          tools to take your trading and investing to the next level.
        </p>
      </AnimateFromInside>

      {/* Bonus Cards */}
      <AnimateFromInside>
        <div className="flex gap-6">
          {bonuses.map((bonus) => (
            <BonusCard key={bonus.id} bonus={bonus} />
          ))}
        </div>
      </AnimateFromInside>
      <AnimateFromInside>
        <div className="flex justify-center items-center">
          <CTAButton />
        </div>
      </AnimateFromInside>
      <p className="font-medium text-[16px] leading-[30px] text-center mt-6">
        Register today and unlock all the below mentioned bonuses worth ₹ 25,499
      </p>
    </div>
  );
};

export default WebinarBonus;
