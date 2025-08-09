import React from "react";
import BgImg2 from "../assets/bg-slate.png";
import bottle from "../assets/black.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
    <div ref={ref} style={BgImg}>
      <div className="h-[800px] flex justify-center items-center py-16 relative">
        {/* Navbar */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-0 left-0 w-full px-8 py-10 flex justify-between items-center z-50"
        >
          <h1 className="text-2xl font-semibold uppercase text-white">
            <span className="text-[#f19509]">Coders </span>Coffee.
          </h1>
          <i className="ri-menu-fill text-white text-3xl cursor-pointer"></i>
        </motion.div>

        <div className="w-full h-screen grid grid-cols-3 items-center px-10 gap-10">
          {/* Left */}
          <div className="flex flex-col relative gap-28 px-0">
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
              className="text-[#f1dabf] ml-18 mt-32 text-7xl font-bold leading-tight"
            >
              Blvck <br /> Tumbler
            </motion.h1>

            <motion.div
              initial={{ x: -150, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="relative flex items-start"
            >
              {/* Left Box */}
              <div className="bg-[#212730] w-[250px] h-[200px] px-4 py-4 -ml-7 z-0"></div>

              {/* Right Content */}
              <div className="absolute px-10 overflow-visible left-[10px] py-6 pl-6">
                <h2 className="text-[#f1dabf] text-xl font-medium">
                  Black Lifestyle Lovers,
                </h2>
                <p className="text-[#5E5C5B] text max-w-md mt-2 leading-relaxed">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Delectus aspernatur, cumque eos neque dolorem architecto deserunt
                  quis voluptatibus in quisquam quia ducimus
                </p>
              </div>
            </motion.div>
          </div>

          {/* Center */}
          <motion.div
            initial={{ y: 100, scale: 0.8, opacity: 0 }}
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
            className="flex justify-center relative"
          >
            <div className="w-[400px] h-[400px] mb-48 ml-10 relative">
              {/* Yellow circle - bottle ke piche */}
              <motion.div
                className="w-40 h-40 border-[16px] border-yellow-400 mt-4 rounded-full absolute"
                style={{
                  top: "80px",
                  right: "20px",
                  zIndex: -1,
                }}
                animate={
                  inView
                    ? {
                        opacity: [0.8, 1, 0.8],
                      }
                    : {}
                }
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>

              {/* Bottle image - upar */}
              <img
                src={bottle}
                alt="Black Tumbler"
                className="drop-shadow-[40px_20px_25px_#0f1115] relative z-10"
              />
            </div>
          </motion.div>

          {/* Right */}
          <div className="flex flex-col items-end -mt-[30vw] mr-44 gap-4 relative">
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
              className="absolute font-sans -top-10 left-[45%] text-[190px] font-extrabold text-[#1A1F25] leading-none z-[1]"
            >
              Blvck <br /> Tumbler
            </motion.h3>

            <motion.div
              initial={{ x: 150, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              className="relative flex items-start -mr-52 mt-[880px]"
            >
              {/* Left Box */}
              <div className="bg-[#212730] w-[250px] h-[220px] px-4 py-4 z-0"></div>

              {/* Right Content */}
              <div className="absolute top-6 -left-48 z-0">
                <h2 className="text-[#f1dabf] text-xl font-medium">
                  Black Lifestyle Lovers,
                </h2>
                <p className="text-[#5E5C5B] mt-2 leading-relaxed">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Delectus aspernatur, cumque eos neque dolorem architecto deserunt
                  quis voluptatibus in quisquam quia ducimus
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
