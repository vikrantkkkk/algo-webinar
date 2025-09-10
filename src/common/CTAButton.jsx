import React from "react";
import { motion } from "framer-motion";
import buttonarrow from "../assets/svg/buttonarrow.svg";
import buttonarrow1 from "../assets/svg/buttonarrow1.svg";

const CTAButton = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 mt-0 md:mt-8">
      {/* Hindi Button */}
      <motion.div
        className="relative"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute -top-0 -left-1 w-[90%] h-[40px] rounded-full blur-[15px]"
          style={{
            background: "rgba(76, 115, 255, 0.73)",
            backdropFilter: "blur(21.669902801513672px)",
          }}
          animate={{
            opacity: [0.7, 0.9, 0.7],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute -bottom-0 -right-1 w-[90%] h-[40px] rounded-full blur-[15px]"
          style={{
            background:
              "linear-gradient(272.87deg, rgba(76, 115, 255, 0.73) 4.62%, rgba(0, 162, 183, 0.73) 95.32%)",
            backdropFilter: "blur(8px)",
          }}
          animate={{
            opacity: [0.7, 0.9, 0.7],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        ></motion.div>
          <motion.button
            onClick={() => {}}
            className="relative bg-white text-black text-[16px] md:text-[21px] leading-[18px] md:leading-[22px] font-semibold rounded-full p-2 md:pl-6 flex items-center justify-center md:justify-start gap-2 md:gap-3 transition-all w-[345px] md:w-auto h-[45px] md:h-auto"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 8px 32px rgba(76, 115, 255, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            Join Now (Hindi) - Free{" "}
            <span className="text-[#000000BF] line-through">₹499</span>
            <motion.div
              className="hidden md:flex items-center justify-center"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-black h-[45px] w-[45px] rounded-full flex items-center justify-center">
                <img src={buttonarrow} alt="arrow" />
              </div>
            </motion.div>
            <span className="absolute -bottom-6 md:-bottom-8 left-1/2 transform -translate-x-1/2 font-medium text-[12px] md:text-[15px] leading-[20px] md:leading-[28px] text-white hidden md:block">
              Limited Seat Only
            </span>
        </motion.button>
      </motion.div>

      {/* English Button */}
      <motion.div
        className="relative"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute -top-0 -left-1 w-[90%] h-[40px] rounded-full blur-[15px]"
          style={{
            background: "rgba(76, 115, 255, 0.73)",
            backdropFilter: "blur(21.669902801513672px)",
          }}
          animate={{
            opacity: [0.7, 0.9, 0.7],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute -bottom-0 -right-1 w-[90%] h-[40px] rounded-full blur-[15px]"
          style={{
            background:
              "linear-gradient(272.87deg, rgba(76, 115, 255, 0.73) 4.62%, rgba(0, 162, 183, 0.73) 95.32%)",
            backdropFilter: "blur(8px)",
          }}
          animate={{
            opacity: [0.7, 0.9, 0.7],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        ></motion.div>
          <motion.button
            onClick={() => {}}
            className="relative bg-black border-[1px] border-[#FFFFFF] text-white text-[16px] md:text-[21px] leading-[18px] md:leading-[22px] font-semibold rounded-full p-2 md:pl-6 flex items-center justify-center md:justify-start gap-2 md:gap-3 transition-all w-[345px] md:w-auto h-[45px] md:h-auto"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 8px 32px rgba(255, 255, 255, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            Join Now (English) - Free{" "}
            <span className="text-[#FFFFFFBF] line-through">₹499</span>
            <motion.div
              className="hidden md:flex items-center justify-center"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-white h-[45px] w-[45px] rounded-full flex items-center justify-center">
                <img src={buttonarrow1} alt="arrow" />
              </div>
            </motion.div>
            <span className="absolute -bottom-6 md:-bottom-8 left-1/2 transform -translate-x-1/2 font-medium text-[12px] md:text-[15px] leading-[20px] md:leading-[28px] text-white block">
              Limited Seat Only
            </span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default CTAButton;
