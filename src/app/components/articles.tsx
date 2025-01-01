"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Articles() {
  const squares = [];

  for (let i = 0; i < 5; i++) {
    squares.push(
      <Link href={"/articles/" + i} key={"/articles" + i}>
        <motion.div
          key={i}
          className="w-72 h-72 relative border border-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0 + i * 0.4,
              ease: "easeInOut",
              duration: 0.3,
            },
          }}
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
            Lorem ipsum, placeholder text. Article {i + 1}
          </motion.h3>
          <h3 className="text-2xl absolute bottom-6 left-4">Ben</h3>
        </motion.div>
      </Link>
    );
  }

  squares.push(
    <Link key={"more"} href="/articles">
      <motion.div
        whileHover={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0 + 6 * 0.4, ease: "easeInOut", duration: 0.3 },
        }}
        key={6}
        className="w-72 h-72 relative"
      >
        <motion.h3
          whileHover={{ textDecoration: "underline" }}
          className="absolute bottom-2 right-2"
        >
          ...more articles
        </motion.h3>
      </motion.div>
    </Link>
  );

  return <div className="flex flex-wrap mx-20 mb-20">{squares}</div>;
}
