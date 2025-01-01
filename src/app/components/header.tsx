"use client";
import { Gabarito } from "next/font/google";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const gabarito = Gabarito({ subsets: ["latin"] });
// "text-3xl font-semibold ml-20 mb-8"

function Header() {
  return (
    <Link
      className={`${gabarito.className} text-4xl font-semibold flex justify-end pt-8 pr-12`}
      href="/"
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
    </Link>
  );
}

export default Header;
