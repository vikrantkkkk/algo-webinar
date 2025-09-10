import React from "react";
import coachellipse from "../assets/webp/caochellipsenew.webp";
import ceo from "../assets/webp/ceo2_result.webp";
import verified from "../assets/svg/verifiednw.svg";
import instagram from "../assets/svg/instagram.svg";
import management from "../assets/svg/management.svg";
import enroll from "../assets/svg/enroll.svg";
import q from "../assets/webp/q_result.webp";
import r from "../assets/webp/r_result.webp";
import s from "../assets/webp/s_result.webp";
import t from "../assets/webp/t_result.webp";
import { AnimateFromInside } from "../common/ScrollFadeIn";

const Coach = () => {
  const logos = [
    { icon: q, name: "q" },
    { icon: r, name: "r" },
    { icon: s, name: "s" },
    { icon: t, name: "t" },
  ];

  return (
    <div className="flex flex-col items-start justify-center gap-10 bg-[#010611] h-auto md:pt-28 pt-20 pb-8 md:px-40 px-4 w-full min-w-[1270px]">
      {/* Heading */}
      <AnimateFromInside>
        <h2 className="font-semibold text-white md:text-[56px] text-[34px] leading-[74px] font-degular">
          <span className="text-[#FFFFFF99] font-normal">Meet your &nbsp;</span>
          Coach
        </h2>
      </AnimateFromInside>
      {/* Main Container */}
      <div className="w-full flex justify-center">
        <div className="relative z-20 flex md:flex-row flex-col-reverse w-full md:h-[700px] h-auto items-center justify-center md:gap-10 gap-8 md:px-8 px-4 md:py-0 py-10 bg-[#FFFFFF0F] md:rounded-tl-[48px] rounded-[24px]">
          {/* CEO Image positioned at bottom-right of main card */}
          <img
            src={ceo}
            alt="CEO"
            className="absolute -right-10 bottom-0 object-contain w-[546px] h-[607px] z-10"
          />
          {/* Profile Card */}
          <div className="absolute md:bottom-0 md:right-4 bottom-0 right-2 z-20 flex flex-col items-center md:w-[550px] w-full">
            <div className="w-full">
              <div className="relative bg-white rounded-xl shadow-lg mx-4">
                <div
                  className="absolute inset-0 rounded-xl md:-m-[3px] -m-[1px] pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(62,87,218,0.2), rgba(33,46,116,0.2))",
                    zIndex: -1,
                  }}
                />
                <div className="flex justify-center items-center gap-4 whitespace-nowrap md:rounded-[12px] rounded-[6px]">
                  <p className="md:font-medium font-semibold md:text-[17px] text-[10px] md:leading-[25px] leading-[13px] text-[#101010] pl-4">
                    Featured In
                  </p>
                  <div className="flex justify-center items-center gap-4">
                    {logos.map((logo, index) => (
                      <div
                        key={index}
                        className="flex justify-center items-center"
                      >
                        <img
                          src={logo.icon}
                          alt={logo.name}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* left Content */}
          <div className="flex flex-col gap-6 md:gap-12 items-center md:items-start justify-start md:w-[45%] w-full px-4">
            <div className="md:flex hidden flex-col gap-8">
              <p className="text-[65px] font-medium leading-[70px] text-white">
                Parang Mehta
              </p>
              <p
                className="font-medium text-[17px] leading-6 text-white py-2 px-4 w-fit rounded-md"
                style={{
                  background:
                    "linear-gradient(90.51deg, #3FADFF 2.31%, #336CDC 49.36%, #47B4B4 97.38%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
                }}
              >
                Founder & CEO, Stockwiz Technologies
              </p>
            </div>
            <p className=" font-normal md:text-[18px] text-[16px] md:leading-[26px] leading-[28px] text-[#FFFFFF] text-left mt-40 md:mt-0">
              Stockwiz is India's largest and the fastest growing SEBI
              Registered trading platform. Parang has 10+ years of trading
              experience in the Indian, American and European markets along with
              a MBA in Finance, Financial Modelling & Valuation Analyst and a
              Level III Candidate. Parang has helped 1,00,000+ traders and
              investors in their trading and investing journey, and has also
              been featured in TEDx, CNBC, Money Control, Inc 42 and many more.
            </p>
            {/* Verified Badge */}
            <div className="flex justify-center w-full md:max-w-[337px] items-center gap-4 rounded-[8.9px] bg-[#FFFFFF0F] md:p-4 p-2 shadow-lg">
              <img
                src={verified}
                alt="SEBI Verified"
                className="w-14 h-14 object-contain"
              />
              <div className="flex flex-col gap-2">
                <p className="font-normal text-[14px] text-[#FFFFFF]">
                  SEBI Registered Research Analyst
                </p>
                <p className="text-[20px] font-semibold text-white">
                  INH000013925
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 relative w-full flex items-center justify-center">
            <div className="relative md:h-[650px] h-[450px] w-[395px]">
              {/* social media card */}
              <div className="bg-white p-2 absolute md:top-28 top-60 md:left-6 left-2 flex justify-center items-center gap-2 z-20 rounded-md">
                <img
                  src={instagram}
                  alt="instagram"
                  className="md:w-7 w-5 md:h-7 h-5 object-cover"
                />
                <p className="font-semibold md:text-[18.5px] text-[12px] leading-[100%] text-[#2160FC]">
                  1,00,000+{" "}
                  <span className="font-normal md:text-[14.36px] text-[9px] leading-[100%] text-[#000000]">
                    Followers
                  </span>
                </p>
              </div>
              <div className="bg-white p-2 absolute md:top-64 top-64 md:-left-6 left-2 flex justify-center items-center gap-2 z-20 rounded-md">
                <img
                  src={enroll}
                  alt="enroll"
                  className="md:w-[37px] md:h-[27px] w-5 h-5 object-cover"
                />
                <p className="font-semibold md:text-[18.5px] text-[12px] leading-[100%] text-[#2160FC]">
                  2L+ Student{" "}
                  <span className="font-normal md:text-[14.36px] text-[9px] leading-[100%] text-[#000000]">
                    Enrolled
                  </span>
                </p>
              </div>
              <div className="bg-white p-2 absolute md:top-96 top-72 md:left-0 left-2 flex justify-center items-center gap-2 z-20 rounded-md">
                <img
                  src={management}
                  alt="management"
                  className="md:w-[34px] w-5 md:h-[34px] h-5 object-cover"
                />
                <p className="font-semibold md:text-[18.5px] text-[12px] leading-[100%] text-[#2160FC]">
                  Rs 150 Crore+ <br />
                  <span className="font-normal md:text-[14.36px] text-[9px] leading-[100%] text-[#000000]">
                    Assets Under Management
                  </span>
                </p>
              </div>

              {/* Mobile Name Card */}
              <div className="md:hidden absolute bottom-[-180px] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center w-full ">
                <div className="w-full">
                  <div className="relative bg-gradient-to-r from-[#3E57DA] to-[#212E74] rounded-xl p-[3px] mx-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-[rgba(62,87,218,0.2)] to-[rgba(33,46,116,0.2)] rounded-xl -m-[3px]" />

                    <div className="bg-gradient-to-r from-[#3E57DA] to-[#212E74] rounded-[10px] p-3 text-center">
                      <p className="text-white font-semibold text-[17px] leading-[100%] mb-3">
                        Parang Mehta
                      </p>
                      <div
                        className="inline-block rounded-full px-4 py-1"
                        style={{
                          background:
                            "linear-gradient(90.51deg, #3FADFF 2.31%, #336CDC 49.36%, #47B4B4 97.38%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
                        }}
                      >
                        <p className="text-white font-medium text-[11.3px] leading-[17px]">
                          Founder & CEO, Stockwiz Technologies
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Image */}
          <img
            src={coachellipse}
            alt="Coach Background"
            className="absolute right-0 md:bottom-0 top-0 rounded-2xl -z-10 object-cover w-[550px] h-[700px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Coach;
