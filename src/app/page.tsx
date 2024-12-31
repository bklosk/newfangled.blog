"use client";
// import Header from "./components/header";
import { motion } from "framer-motion";
import { Gabarito } from "next/font/google";
import Header from "./components/header";
import Articles from "./components/articles";

const gabarito = Gabarito({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-green-800 to-green-900 h-full text-white">
      <Header />
      <div className={gabarito.className}>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
          className="text-3xl font-semibold ml-20 mb-8"
        >
          Articles
        </motion.p>
        <Articles />
      </div>
    </main>
  );
}
