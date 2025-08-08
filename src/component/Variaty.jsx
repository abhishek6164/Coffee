import React from "react";
import { motion } from "framer-motion";
import coffee1 from "../assets/coffee1.png";
import coffee3 from "../assets/coffee3.png";

const Variaty = () => {
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, x: -100 }, // left side se start
    visible: (i) => ({
      opacity: 1,
      x: 0, // apni position pe aana
      transition: {
        delay: i * 0.3, // ek-ek card delay se aaye
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
    <div className="flex flex-col mt-20 justify-center items-center">
      {/* Heading */}
      <div className="text-center max-w-2xl">
        <h1 className="text-3xl font-semibold">
          Fresh and <span className="text-[#f19509]">Tasty Coffee</span>
        </h1>
        <p className="mt-4 text-gray-600">
          Discover the finest coffee crafted with love and passion. Every sip
          tells a story of aroma, warmth, and joy.
        </p>
      </div>

      {/* Coffee Cards */}
      <div className="mt-10 px-10 sm:px-28 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-68">
          {coffeeData.map((coffee, i) => (
            <motion.div
              key={i}
              className="flex flex-col justify-center items-center cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
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
                className="w-60 h-60 drop-shadow-lg"
              />
              <div className="flex flex-col justify-center items-center text-center mt-4">
                <h1 className="text-[#f19509] text-2xl font-bold">{coffee.title}</h1>
                <p className="text-sm text-gray-500">{coffee.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Variaty;
