import React from "react";
import { AnimateFromInside } from "../common/ScrollFadeIn";
import cnbcdark from "../assets/svg/2.svg";
import hindustandark from "../assets/svg/3.svg";
import moneycontrol from "../assets/svg/4.svg";
import tedx from "../assets/svg/5.svg";
import theprint from "../assets/svg/6.svg";
import seven from "../assets/svg/7.svg";
import eight from "../assets/svg/8.svg";
import staricon from "../assets/svg/staricon.svg";

const CompantLogoMarquee = () => {
  const logos = [
    { icon: cnbcdark, name: "cnbc" },
    { icon: tedx, name: "tedx" },
    { icon: hindustandark, name: "hindustan" },
    { icon: moneycontrol, name: "moneycontrol" },
    { icon: tedx, name: "tedx" },
    { icon: theprint, name: "theprint" },
    { icon: seven, name: "seven" },
    { icon: eight, name: "eight" },
  ];

  const logos1 = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="bg-[#010611] text-white flex flex-col items-center md:px-40 pt-16 gap-6 w-full">
      <div className="flex flex-col md:gap-5 gap-2 justify-center items-center w-screen md:py-5 py-2">
        <AnimateFromInside>
          <p className="flex items-center gap-2 font-normal text-[16px] leading-6">
            Trusted by <span className="font-semibold">Professionals</span>{" "}
            Working At Top Companies Like
          </p>
        </AnimateFromInside>
        <div className="overflow-hidden group z-20 w-screen">
          <div className="flex items-center gap-6 h-auto md:animate-marquee animate-marquee1 group-hover:[animation-play-state:paused]">
            {logos1.map((logo, index) => (
              <React.Fragment key={index}>
                <div className="flex justify-center items-center shrink-0">
                  <img
                    src={logo.icon}
                    alt={logo.name}
                    className="object-cover"
                  />
                </div>
                {index < logos1.length - 1 && (
                  <div className="w-px h-8 border-[1px] border-[#FFFFFF] bg-gray-600 shrink-0"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompantLogoMarquee;
