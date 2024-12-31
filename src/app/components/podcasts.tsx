"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Podcasts() {
  const squares = [];

  for (let i = 0; i < 5; i++) {
    squares.push(
      <motion.div
        key={i}
        className="w-72 h-72 relative border border-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0 + i * 0.4, ease: "easeInOut", duration: 0.3 },
        }}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        whileHover={{
          scale: 0.9,
          transition: { delay: 0 },
        }}
      >
        <motion.h3
          whileHover={{ textDecoration: "underline" }}
          className="text-3xl ml-4 mt-4"
        >
          {" "}
          Youtube link for podcast {i + 1}
        </motion.h3>
      </motion.div>
    );
  }

  squares.push(
    <Link key={"more"} href="/articles">
      <motion.div
        whileHover={{ scale: 0.95 }}
        key={6}
        className="w-72 h-72 relative"
      >
        <motion.h3
          whileHover={{ textDecoration: "underline" }}
          className="absolute bottom-2 right-2"
        >
          ...more pods
        </motion.h3>
      </motion.div>
    </Link>
  );

  return <div className="flex flex-wrap mx-20 mb-20">{squares}</div>;
}
