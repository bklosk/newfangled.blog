"use client";
import { motion } from "framer-motion";
import { Gabarito } from "next/font/google";

const gabarito = Gabarito({ subsets: ["latin"] });

export default function Header() {
  return (
    <header className={gabarito.className}>
      <div
        id="title"
        className="flex justify-end mr-10 pt-4 ml-auto w-40 h-20 font-semibold text-5xl"
      >
        <motion.div>N </motion.div>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          ew
        </motion.div>
        <motion.div>F</motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1.3, duration: 0.4 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.4 }}
          >
            angled
          </motion.span>
        </motion.div>
        <motion.div>W</motion.div>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.5 }}
        >
          orkshop
        </motion.div>
      </div>
    </header>
  );
}
