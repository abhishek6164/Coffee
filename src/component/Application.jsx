import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bAckGroundImage from "../assets/coffee_keyboard.jpg";
import playStoreImg from "../assets/play_store.png";
import appStoreImg from "../assets/app_store.png";
import AnimatedSection from "../component/AnimatedSection";

const Application = () => {
  // Background style
  const BgImg = {
    backgroundImage: `url(${bAckGroundImage})`,
    backgroundColor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
    position: "relative",
  };

  // Container animation
  const containerVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // Text + button animation (slide from left)
  const textVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // Use intersection observer to trigger animation on scroll
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (

    <AnimatedSection>

      <motion.div
        ref={ref}
        style={BgImg}
        className="m-10 p-10 mr-20 flex justify-end items-center relative overflow-hidden rounded-xl shadow-2xl"
        variants={containerVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#270c03]/90 via-[#00000033] to-transparent"></div>

        {/* Main content */}
        <motion.div
          className="relative z-10 h-80 flex flex-col justify-center items-start text-left text-black max-w-lg pr-10"
          variants={textVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Heading & Description */}
          <div className="mb-4">
            <h1 className="text-4xl font-bold tracking-wide mb-2 drop-shadow-lg">
              Download the App
            </h1>
            <p className="text-base opacity-90 leading-relaxed drop-shadow-sm">
              Experience coffee like never before. Order, track and enjoy your brew with just a tap.
            </p>
          </div>

          {/* App store buttons */}
          <div className="flex gap-4 mt-4">
            <motion.img
              src={playStoreImg}
              alt="Play Store"
              className="w-36 cursor-pointer rounded-lg backdrop-blur-md bg-white/10 border border-white/20 p-2"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.img
              src={appStoreImg}
              alt="App Store"
              className="w-36 cursor-pointer rounded-lg backdrop-blur-md bg-white/10 border border-white/20 p-2"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatedSection>

  );
};

export default Application;
