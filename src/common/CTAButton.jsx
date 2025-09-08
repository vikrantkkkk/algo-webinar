import React from "react";

const CTAButton = () => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-8 mt-8">
      {/* Hindi Button */}
      <div className="relative">
        {/* Top-left glow */}
        <div
          className="absolute -top-0 -left-1 w-[90%] h-[40px] rounded-full blur-[15px]"
          style={{
            background: "rgba(76, 115, 255, 0.73)",
            backdropFilter: "blur(21.669902801513672px)",
          }}
        ></div>
        {/* Bottom-right glow */}
        <div
          className="absolute -bottom-0 -right-1 w-[90%] h-[40px] rounded-full blur-[15px]"
          style={{
            background:
              "linear-gradient(272.87deg, rgba(76, 115, 255, 0.73) 4.62%, rgba(0, 162, 183, 0.73) 95.32%)",
            backdropFilter: "blur(8px)",
          }}
        ></div>
        <button
          onClick={() => {}}
          className="relative bg-white text-black text-[16px] font-semibold rounded-full py-4 px-8 flex items-center gap-2 transition-all"
        >
          Join Now (Hindi) - Free <span className="line-through">₹490</span>
          <span>→</span>
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 font-medium text-[15px] leading-[28px] text-white">
            Limited Seat Only
          </span>
        </button>
      </div>

      {/* English Button */}
      <div className="relative">
        {/* Top-left glow */}
        <div
          className="absolute -top-0 -left-1 w-[90%] h-[40px] rounded-full blur-[15px]"
          style={{
            background: "rgba(76, 115, 255, 0.73)",
            backdropFilter: "blur(21.669902801513672px)",
          }}
        ></div>
        {/* Bottom-right glow */}
        <div
          className="absolute -bottom-0 -right-1 w-[90%] h-[40px] rounded-full blur-[15px]"
          style={{
            background:
              "linear-gradient(272.87deg, rgba(76, 115, 255, 0.73) 4.62%, rgba(0, 162, 183, 0.73) 95.32%)",
            backdropFilter: "blur(8px)",
          }}
        ></div>
        <button
          onClick={() => {}}
          className="relative bg-black border-[1px] border-[#FFFFFF] text-white text-[16px] font-semibold rounded-full py-4 px-8 flex items-center gap-2 transition-all"
        >
          Join Now (English) - Free <span className="line-through">₹490</span>
          <span>→</span>
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 font-medium text-[15px] leading-[28px] text-white">
            Limited Seat Only
          </span>
        </button>
      </div>
    </div>
  );
};

export default CTAButton;
