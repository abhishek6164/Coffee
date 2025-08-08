import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // import add kiya
import coffee1 from "../assets/coffee1.png";
import coffee3 from "../assets/coffee3.png";
import AnimatedSection from "../component/AnimatedSection";

const Variaty = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,   // baar-baar animation chalane ke liye
    threshold: 0.3,       // 30% dikhe tab trigger
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const coffeeData = [
    { img: coffee1, title: "Black Coffee", desc: "Strong and bold flavor." },
    { img: coffee3, title: "Cold Coffee", desc: "Smooth and creamy texture." },
    { img: coffee1, title: "Cappuccino", desc: "Perfect blend of foam & coffee." },
  ];

  return (
    <AnimatedSection>
      <div ref={ref} className="flex flex-col mt-20 justify-center items-center px-4 sm:px-10 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-semibold">
            Fresh and <span className="text-[#f19509]">Tasty Coffee</span>
          </h1>
          <p className="mt-4 text-gray-600">
            Discover the finest coffee crafted with love and passion. Every sip
            tells a story of aroma, warmth, and joy.
          </p>
        </div>

        {/* Coffee Cards */}
        <div className="mt-10 w-full max-w-7xl px-4 sm:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {coffeeData.map((coffee, i) => (
              <motion.div
                key={i}
                className="flex flex-col justify-center items-center cursor-pointer bg-white rounded-lg p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}  // animation trigger hone ka logic
                custom={i}
                whileHover={{
                  scale: 1.08,
                  rotate: 1,
                  transition: { type: "spring", stiffness: 200 },
                }}
              >
                <img
                  src={coffee.img}
                  alt={coffee.title}
                  className="w-48 h-48 sm:w-60 sm:h-60 object-contain drop-shadow-lg"
                />
                <div className="flex flex-col justify-center items-center text-center mt-4 px-2">
                  <h1 className="text-[#f19509] text-2xl font-bold">
                    {coffee.title}
                  </h1>
                  <p className="text-sm text-gray-500">{coffee.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Variaty;
