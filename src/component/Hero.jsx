import React from "react";
import BgImg2 from "../assets/bg-slate.png";
import bottle from "../assets/black.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedSection from "../component/AnimatedSection";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const BgImg = {
    backgroundImage: `url(${BgImg2})`,
    backgroundColor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <AnimatedSection>
      <div
        ref={ref}
        style={BgImg}
        // Mobile height 500px, desktop 800px
        className="min-h-[500px] sm:min-h-[800px] flex justify-center items-center py-16 px-4 sm:px-16 lg:px-32"
      >
        {/* Navbar */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-0 left-0 w-full px-4 sm:px-8 py-6 flex justify-between items-center z-50"
        >
          <h1 className="text-xl sm:text-2xl font-semibold uppercase text-white">
            <span className="text-[#f19509]">Coders </span>Coffee.
          </h1>
          <i className="ri-menu-fill text-white text-3xl cursor-pointer"></i>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-6 sm:gap-10 w-full max-w-7xl relative">
          {/* Left Text */}
          <div className="flex flex-col relative gap-12 sm:gap-20 w-full sm:w-auto px-2 sm:px-0">
            <motion.h1
              initial={{ x: -200, opacity: 0 }}
              animate={
                inView
                  ? {
                      x: [-200, 0, -8, 8, -5, 5, -2, 2, 0],
                      opacity: 1,
                    }
                  : {}
              }
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
              className="text-[#f1dabf] text-4xl sm:text-7xl font-bold leading-tight mt-20 sm:mt-32"
            >
              Blvck <br /> Tumbler
            </motion.h1>

            <motion.div
              initial={{ x: -150, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="relative flex items-start"
            >
              <div className="bg-[#212730] w-[180px] sm:w-[250px] h-[180px] sm:h-[200px] px-4 py-4 -ml-7 z-0"></div>

              <div className="absolute px-6 sm:px-10 overflow-visible left-[5px] sm:left-[10px] py-6 pl-4 sm:pl-6 max-w-[220px] sm:max-w-md">
                <h2 className="text-[#f1dabf] text-lg sm:text-xl font-medium">
                  Black Lifestyle Lovers,
                </h2>
                <p className="text-[#5E5C5B] mt-2 leading-relaxed text-sm sm:text-base">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Delectus aspernatur, cumque eos neque dolorem architecto deserunt quis voluptatibus in quisquam quia ducimus
                </p>
              </div>
            </motion.div>
          </div>

          {/* Center Image */}
          <motion.div
            initial={{ y: 100, scale: 0.7, opacity: 0 }}
            animate={
              inView
                ? {
                    y: [100, 40, -20, 30, 15, 0],
                    scale: 1,
                    opacity: 1,
                    zIndex: 10,
                  }
                : {}
            }
            transition={{
              duration: 0.9,
              delay: 0.4,
              ease: "easeOut",
            }}
            className="flex justify-center relative w-full sm:w-auto mb-16 sm:mb-0"
          >
            <div className="w-48 h-48 sm:w-96 sm:h-96 relative">
              <motion.div
                className="w-28 h-28 border-[12px] border-yellow-400 mt-4 rounded-full absolute"
                style={{
                  top: "60px",
                  right: "15px",
                  zIndex: -1,
                }}
                animate={
                  inView
                    ? {
                        opacity: [0.8, 1, 0.8],
                      }
                    : { opacity: 0 }
                }
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>

              <img
                src={bottle}
                alt=""
                className="drop-shadow-[40px_20px_25px_#0f1115] relative z-10 w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Right Text */}
          <div className="hidden sm:flex flex-col items-end mt-0 gap-4 w-auto px-0 relative">
            <motion.h3
              initial={{ x: 200, opacity: 0 }}
              animate={
                inView
                  ? {
                      x: [200, 0, 8, -8, 5, -5, 2, -2, 0],
                      opacity: 0.8,
                    }
                  : {}
              }
              transition={{
                duration: 1.2,
                ease: "easeOut",
                delay: 0.6,
              }}
              className="font-sans text-[190px] font-extrabold text-[#1A1F25] leading-none z-1 whitespace-nowrap select-none absolute top-4 left-[45%]"
              style={{ pointerEvents: "none" }}
            >
              Blvck <br /> Tumbler
            </motion.h3>

            <motion.div
              initial={{ x: 150, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              className="relative flex items-start mt-[220px]"
            >
              <div className="bg-[#212730] w-[250px] h-[220px] px-4 py-4 z-0"></div>

              <div className="absolute top-6 -left-48 z-0 max-w-xs">
                <h2 className="text-[#f1dabf] text-xl font-medium">
                  Black Lifestyle Lovers,
                </h2>
                <p className="text-[#5E5C5B] mt-2 leading-relaxed">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Delectus aspernatur, cumque eos neque dolorem architecto deserunt quis voluptatibus in quisquam quia ducimus
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Hero;
