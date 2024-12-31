"use client";
import React from "react";

export default function Squares() {
  const squares = [];

  for (let i = 0; i < 10; i++) {
    squares.push(<div key={i} className="w-48 h-48 border border-white"></div>);
  }

  return <div className="flex flex-wrap">{squares}</div>;
}
