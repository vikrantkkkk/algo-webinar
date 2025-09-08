import React, { useState } from "react";
import arrow from "../assets/svg/arrow1.svg";

const faqData = [
  {
    id: 1,
    question: "Is this webinar beginner-friendly?",
    answer:
      "Yes! Whether you’re a complete beginner, new to trading, or have some experience, the concepts will be explained in a clear, structured, and easy-to-understand way.",
  },
  {
    id: 2,
    question: "In which language will the webinar be conducted?",
    answer: "The webinar will be available in both Hindi and English.",
  },
  {
    id: 3,
    question: "Will the recording be provided?",
    answer: "No, the recording will not be provided.",
  },
  {
    id: 4,
    question: "How can I connect with the Stockwiz support team?",
    answer: `You can reach out to us via:<br/>
      ✉️ Email: <a href="mailto:help@stockwiz.in" class="text-blue-600 underline">help@stockwiz.in</a><br/>
      📞 Phone: +916350670245`,
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex items-center justify-between bg-[#010611] w-full h-auto md:pt-8 md:pb-16 px-4 md:px-80">
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
                className={`w-full cursor-pointer md:max-w-[750px] rounded-[16px] p-6 bg-[#FFFFFF1F] text-white transition-all duration-300 ease-in-out h-auto flex ${
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
