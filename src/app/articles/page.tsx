"use client";
// import Header from "./components/header";
import { motion } from "framer-motion";
import { Gabarito } from "next/font/google";
import Link from "next/link";
import Header from "../components/header";
import Articles from "../components/articles";

const gabarito = Gabarito({ subsets: ["latin"] });

export default function ArticleHome() {
  return (
    <main
      className={`bg-gradient-to-br from-green-800 to-green-900 min-h-screen text-white ${gabarito.className}`}
    >
      <Header />
      <div>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
          whileHover={{ y: -5, textDecoration: "underline" }}
          className="text-3xl font-semibold ml-20 mb-8"
        >
          <Link href="/articles">Articles</Link>
        </motion.p>
        <Articles />
      </div>
    </main>
  );
}
