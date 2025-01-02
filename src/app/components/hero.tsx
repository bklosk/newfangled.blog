"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Gabarito } from "next/font/google";
const gabarito = Gabarito({ subsets: ["latin"] });

const Hero: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-96 mb-16"
    >
      <div className="absolute left-32 w-72 h-96">
        <Image
          src="/hero.png"
          alt="Hero"
          layout="fill"
          objectFit="contain"
          style={{ filter: "grayscale(100%)" }}
        />
      </div>
      <h1
        className={`${gabarito.className} absolute right-32 top-32 text-6xl font-extrabold`}
      >
        Make stuff.
        <br />
        Learn. <br />
        Repeat.
      </h1>
    </motion.div>
  );
};

export default Hero;
