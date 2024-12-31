"use client";
import { Gabarito } from "next/font/google";
import Typewriter from "typewriter-effect";

const gabarito = Gabarito({ subsets: ["latin"] });
// "text-3xl font-semibold ml-20 mb-8"

export default function Header() {
  return (
    <div
      className={`${gabarito.className} text-3xl font-semibold flex justify-end pt-8 pr-12`}
    >
      <Typewriter
        options={{
          cursor: "|",
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("NFW")
            .pauseFor(700)
            .deleteAll()
            .typeString("Newfangled Workshop")
            .start();
        }}
      />
    </div>
  );
}
