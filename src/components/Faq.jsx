import React, { useState } from "react";
import arrow from "../assets/svg/arrow1.svg";

const faqData = [
  {
    id: 1,
    question: "Is Stockwiz a Free To stockmarket Generator?",
    answer:
      "We have launched a free plan that lets you create free To stockmarkets! It includes 3 minutes of video per month, 6 stock avatars and a full range of AI voices in 140+ languages. Learn more about ",
  },
  {
    id: 2,
    question: "Can I customize AI-generated videos to add brand identity?",
    answer: "",
  },
  {
    id: 3,
    question: "Does To stockmarket creation integrate with existing LMS?",
    answer: "",
  },

  {
    id: 4,
    question: "How does To stockmarket creation improve employee productivity?",
    answer: "",
  },

  {
    id: 5,
    question:
      "Is it safe for businesses to create To stockmarkets in Stockwiz?",
    answer: "",
  },

  {
    id: 6,
    question: "What can you do with Stockwiz's To stockmarket generator?",
    answer: "",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex items-center justify-between bg-[#010611] w-full h-auto pt-20 pb-12 px-4 md:px-80">
      <div className="flex flex-col md:flex-row  w-full mx-auto">
        <div className="md:w-[40%] w-full flex md:justify-start justify-center md:items-start items-center flex-col md:mt-4 text-center md:text-left">
          <h2 className="font-semibold  md:text-[48px] text-[32px] leading-[42px] md:leading-[62px] text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex-1 mt-6 md:mt-0">
          <div className="flex flex-col w-full space-y-4">
            {faqData.map((item, index) => (
              <div
                onClick={() => toggleFAQ(index)}
                key={item.id}
                className={`w-full cursor-pointer md:max-w-[750px] rounded-[16px] px-6 py-8 bg-[#FFFFFF1F] text-white transition-all duration-300 ease-in-out h-auto flex ${
                  activeIndex === index ? "items-start" : "items-center"
                }`}
              >
                <div className="flex flex-col flex-grow">
                  <h3 className="font-medium text-[16px] md:text-[20px] leading-[26px] md:leading-[27px] text-white mr-4">
                    {item.question}
                  </h3>

                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      activeIndex === index
                        ? "opacity-100 mt-4 h-auto"
                        : "opacity-0 h-0"
                    }`}
                  >
                    <p
                      className="font-normal md:text-[16px] text-[12px] md:leading-[25px] leading-[22px] text-[#FFFFFFBF]"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    ></p>
                  </div>
                </div>

                <button
                  aria-expanded={activeIndex === index}
                  className={`flex-shrink-0 ${
                    activeIndex === index ? "self-start" : "self-center"
                  }`}
                >
                  <img
                    src={arrow}
                    alt="arrow"
                    style={{
                      transform:
                        activeIndex === index
                          ? "rotate(-90deg)"
                          : "rotate(0deg)",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
