import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // yahan add karna hai
import map from "../assets/world-map.png";
import AnimatedSection from "../component/AnimatedSection";

const BuyFrom = () => {
  // Animation variants
  const formVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const mapVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // useInView to track visibility
  const { ref, inView } = useInView({
    triggerOnce: false, // baar baar animation start karne ke liye
    threshold: 0.3,
  });

  return (
    <AnimatedSection>
      <div ref={ref} className="mt-20 px-6 sm:px-10 md:px-20 lg:px-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-20 h-auto sm:h-[400px]">
          {/* FORM */}
          <motion.div
            className="flex flex-col justify-center"
            variants={formVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}  // animation tabhi chale jab visible ho
          >
            <h1 className="text-3xl sm:text-4xl font-serif font-semibold mb-6 ml-2 sm:ml-5">
              Buy our products from anywhere
            </h1>

            <div className="w-full max-w-md sm:max-w-lg p-6 rounded-lg bg-white shadow-lg">
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-400 px-3 py-2 rounded focus:outline-1 focus:border-black w-full sm:w-1/2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-400 px-3 py-2 rounded focus:outline-1 focus:border-black w-full sm:w-1/2"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Country"
                  className="border border-gray-400 px-3 py-2 rounded focus:outline-1 focus:border-black w-full sm:w-3/5"
                />
                <input
                  type="number"
                  placeholder="ZipCode"
                  className="border border-gray-400 px-3 py-2 rounded focus:outline-1 focus:border-black w-full sm:w-2/5"
                />
              </div>

              <button className="mt-6 w-full bg-[#f19509] py-3 text-xl text-white rounded hover:bg-[#d97f06] transition-colors duration-300">
                Order Now
              </button>
            </div>
          </motion.div>

          {/* MAP */}
          <motion.div
            className="flex justify-center items-center"
            variants={mapVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}  // same yaha bhi
          >
            <img
              src={map}
              alt="World Map"
              className="drop-shadow-lg max-h-80 w-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default BuyFrom;
