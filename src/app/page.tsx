"use client";
// import Header from "./components/header";
import { motion } from "framer-motion";
import { Gabarito } from "next/font/google";
import Link from "next/link";
import Header from "./components/header";
import Articles from "./components/articles";
import Podcasts from "./components/podcasts";
import Hero from "./components/hero";

const gabarito = Gabarito({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-green-800 to-green-900 min-h-screen text-white">
      <Header />
      <div className={gabarito.className}>
        <Hero />
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
          whileHover={{ y: -5, textDecoration: "underline" }}
          className="text-3xl font-semibold ml-20 mb-8"
        >
          <Link href="/articles">Articles</Link>
        </motion.p>
        <Articles />
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
          whileHover={{ y: -5, textDecoration: "underline" }}
          className="text-3xl font-semibold ml-20 mb-8"
        >
          <Link href="/articles">Podcasts</Link>
        </motion.p>
        <Podcasts />
      </div>
    </main>
  );
}
