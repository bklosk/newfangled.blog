"use client";
import { motion } from "framer-motion";

interface TestComponentProps {
  text: string;
}

const TestComponent: React.FC<TestComponentProps> = ({ text }) => {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {text}!
    </motion.p>
  );
};

export default TestComponent;
