import React from "react";
import ra from "../assets/webp/ra_result.webp";
import rb from "../assets/webp/rb_result.webp";
import rc from "../assets/webp/rc_result.webp";
import rd from "../assets/webp/rd_result.webp";
import re from "../assets/webp/re_result.webp";
import rf from "../assets/webp/rf_result.webp";
import rg from "../assets/webp/rg_result.webp";
import rh from "../assets/webp/rh_result.webp";
import ri from "../assets/webp/ri_result.webp";
import rj from "../assets/webp/rj_result.webp";
import { AnimateFromInside } from "../common/ScrollFadeIn";

const reviews = [
  {
    title: "The Best Trading Webinar!",
    image: ra,
    content:
      "The best trading webinar I’ve attended! Practical, insightful, and beginner-friendly.",
    name: "Pragya",
    occupation: "Senior Analyst at Accenture",
  },
  {
    title: "A Game-Changer for Stock Trading!",
    image: rb,
    content:
      "This webinar completely changed how I look at stock trading. The strategies are pure gold!",
    name: "Ishaan Talwar",
    occupation: "Hotelier",
  },
  {
    title: "Complex Concepts Made Simple!",
    image: rc,
    content:
      "Super insightful session! Loved the way complex concepts were explained so simply.",
    name: "Umesh Singla",
    occupation: "Civil Judge",
  },
  {
    title: "Next-Level Trading Strategies!",
    image: rd,
    content:
      "Took my trading to the next level! The watchlist and scanners are game-changers.",
    name: "Akash Jah",
    occupation: "Entrepreneur",
  },
  {
    title: "Must-Attend for Serious Traders!",
    image: re,
    content:
      "Highly recommended for anyone serious about trading! Beginner-friendly and powerful",
    name: "Bharat Lohiya",
    occupation: "Student at IIT Kharagpur",
  },
  {
    title: "Worth every second!",
    image: rf,
    content:
      "Finally, a webinar that actually teaches real stock selection strategies! Worth every second",
    name: "Mriganka",
    occupation: "Digital Marketing Expert",
  },
  {
    title: "Absolute must-watch!",
    image: rg,
    content:
      "I learned more in 2 hours than I did in months of self-study. Absolute must-watch!",
    name: "Nilesh",
    occupation: "Real Estate Broker",
  },
  {
    title: "Now I trade with confidence.",
    image: rh,
    content:
      "The concepts on market structure and liquidity were eye-opening! Now I trade with confidence.",
    name: "Adv. Madhav Bansal",
    occupation: "Lawyer",
  },
  {
    title: "Highly recommended!",
    image: ri,
    content:
      "The best part? Everything was backed by data and real market examples. Highly recommended!",
    name: "Aditi Agarwal",
    occupation: "Chartered Accountant",
  },
  {
    title: "Loved the case studies and real examples!",
    image: rj,
    content:
      "The best part? Everything was backed by data and real market examples. Highly recommended!",
    name: "Anurag Sablania",
    occupation: "Fashion Designer",
  },
];

const SuperTraders = () => {
  const continuousReviews = [...reviews, ...reviews, ...reviews, ...reviews];

  return (
    <div className="flex flex-col items-center justify-center gap-10 bg-[#010611] w-full h-auto md:pt-28 pt-20 pb-8 relative overflow-hidden">
      <div className="flex justify-start w-full md:px-40 px-4">
        <AnimateFromInside>
          <h2 className="font-semibold text-white md:text-[56px] text-[34px] leading-[74px] font-degular">
            <span className="text-[#FFFFFF99] font-normal">
              Hear It From Our <br />
            </span>
            Super Traders
          </h2>
        </AnimateFromInside>
      </div>

      <div className="overflow-hidden group w-full">
        <div className="flex items-center gap-8 h-auto animate-marquee group-hover:[animation-play-state:paused]">
          {continuousReviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col bg-[#FFFFFF1F] md:border border-[#FFFFFF33]/[0.2] w-[280px] h-[320px] p-4 rounded-lg shrink-0"
            >
              <div className="flex flex-col gap-4">
                <p className="font-semibold md:text-[24px] text-[16px] leading-[100%] text-[#FFFFFF] h-[50px] overflow-hidden">
                  {review.title}
                </p>
                <p className="font-normal md:text-[16px] text-[13px] md:leading-[24px] leading-[26px] text-[#FFFFFFBF] h-[120px] overflow-hidden">
                  {review.content}
                </p>
              </div>
              <div className="flex flex-col gap-3 mt-4">
                <div className="flex items-center gap-4">
                  <img
                    src={review.image}
                    alt="reviewavatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold md:text-[15px] text-[14px] leading-[100%] text-[#FFFFFFBF]">
                      {review.name}
                    </p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, starIndex) => (
                        <svg
                          key={starIndex}
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="#09B316"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-full h-px bg-[#FFFFFF33]"></div>
                <p className="font-normal text-[13px] leading-6 text-[#FFFFFFBF]">
                  February 17, 2025
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuperTraders;
