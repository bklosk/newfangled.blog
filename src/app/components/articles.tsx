"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Articles() {
  const squares = [];

  for (let i = 0; i < 10; i++) {
    squares.push(
      <motion.div
        key={i}
        className="w-72 h-72 border border-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 4 + i * 0.4, ease: "easeInOut", duration: 0.3 },
        }}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        whileHover={{ scale: 0.9, transition: { delay: 0 } }}
      >
        <motion.p>Article {i + 1}</motion.p>
      </motion.div>
    );
  }

  return <div className="flex flex-wrap mx-20">{squares}</div>;
}
