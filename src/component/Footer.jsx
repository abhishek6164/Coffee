import React from "react";
import AnimatedSection from "../component/AnimatedSection";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaGoogle,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import visa from "../assets/credit-cards.webp";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  // Intersection Observer to trigger animation when footer enters viewport
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <AnimatedSection>
      <motion.footer
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-orange-500 text-white"
      >
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold mb-3">CODERS CAFE</h2>
            <p className="text-sm leading-relaxed mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea
              ratione quidem libero, praesentium ab atque? Quidem maxime,
              numquam dolores
            </p>
            <div className="flex items-center gap-2 mb-2">
              <FaPhoneAlt /> <span>+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt /> <span>Noida, Uttar Pradesh</span>
            </div>
          </div>

          {/* Quick Links 1 */}
          <div>
            <h3 className="text-xl font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">Home</li>
              <li className="hover:underline cursor-pointer">About</li>
              <li className="hover:underline cursor-pointer">Contact us</li>
              <li className="hover:underline cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div>
            <h3 className="text-xl font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">Home</li>
              <li className="hover:underline cursor-pointer">About</li>
              <li className="hover:underline cursor-pointer">Contact us</li>
              <li className="hover:underline cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Social & Payments */}
          <div>
            <h3 className="text-xl font-bold mb-3">Follow Us</h3>
            <div className="flex gap-3 mb-4">
              <FaFacebookF
                className="cursor-pointer hover:text-gray-200 transition-colors duration-300"
                size={24}
              />
              <FaInstagram
                className="cursor-pointer hover:text-gray-200 transition-colors duration-300"
                size={24}
              />
              <FaTelegramPlane
                className="cursor-pointer hover:text-gray-200 transition-colors duration-300"
                size={24}
              />
              <FaGoogle
                className="cursor-pointer hover:text-gray-200 transition-colors duration-300"
                size={24}
              />
            </div>

            <h3 className="text-xl font-bold mb-3">Payment Methods</h3>
            <div className="flex gap-2 flex-wrap items-center">
              <img src={visa} alt="Visa" className="h-10 sm:h-12" />
            </div>
          </div>
        </div>

        <hr className="border-t border-white/50" />
        <div className="text-center py-4 text-sm">
          Copyright © 2024 Company Name. All rights reserved.
        </div>
      </motion.footer>
    </AnimatedSection>
  );
};

export default Footer;
