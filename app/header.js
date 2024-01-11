"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-greatVibes",
});

export default function Header() {
  const [hamOpen, setHamOpen] = useState(false);
  return (
    <div className="header monts w-full absolute top-0 py-[24px] px-[5vw] z-30">
      <div className="flex w-full justify-between items-center">
        <div className="nav-brand w-[148px] h-[37px] md:w-[216px] md:h-[52px] xl:w-[280px] xl:h-[72px] z-50 relative">
          <Image src="/images/gpcfLogo.png" fill alt="gpcfLogo" />
        </div>
        <div
          className="Hamburger lg:hidden flex flex-col relative z-50"
          onClick={() => {
            setHamOpen(!hamOpen);
          }}
        >
          <div
            className={
              hamOpen
                ? "ham1Open"
                : "bg-white w-6 h-[3px] my-[3px] rounded transition-all duration-300"
            }
          ></div>
          <div
            className={
              hamOpen
                ? "ham2Open"
                : "bg-white w-7 h-[3px] my-[3px] rounded transition-all duration-300"
            }
          ></div>
          <div
            className={
              hamOpen
                ? "ham3Open"
                : "bg-white w-3 h-[3px] my-[3px] rounded transition-all duration-300"
            }
          ></div>
        </div>
        <div
          className={`menu text-white absolute lg:right-[5vw] flex flex-col lg:flex-row w-[100%] lg:w-auto h-[100vh] lg:h-auto top-0 text-xl py-[18vh] lg:py-[24px] bg-[rgba(0,0,0,0.9)] lg:bg-transparent transition-all duration-300 ${
            hamOpen ? "right-[0]" : "right-[100%]"
          }`}
        >
          <Link
            href="/"
            className="border-b-5 border-[rgba(255,255,255,0.1)] lg:border-t-0 lg:border-b-0 lg:hover:border-b-[4px] lg:border-white py-5 px-5 lg:py-0 lg:px-0 lg:mx-5 lg:my-5 border-t"
            onClick={() => setHamOpen(false)}
          >
            {" "}
            Home{" "}
          </Link>
          <Link
            href="#about"
            className="border-b border-[rgba(255,255,255,0.1)] lg:border-t-0 lg:border-b-0 lg:hover:border-b-[4px] lg:border-white lg:py-0 lg:px-0 lg:mx-5 lg:my-5 py-5 px-5"
            onClick={() => setHamOpen(false)}
          >
            {" "}
            About{" "}
          </Link>

          <Link
            href="/chapters"
            className="border-b border-[rgba(255,255,255,0.1)] lg:border-t-0 lg:border-b-0 lg:hover:border-b-[4px] lg:border-white lg:py-0 lg:px-0 lg:mx-5 lg:my-5 py-5 px-5"
            onClick={() => setHamOpen(false)}
          >
            {" "}
            Chapter Listings{" "}
          </Link>
          <Link
            href="#contact"
            className="border-b border-[rgba(255,255,255,0.1)] lg:border-t-0 lg:border-b-0 lg:hover:border-b-[4px] lg:border-white lg:py-0 lg:px-0 lg:mx-5 lg:my-5 py-5 px-5"
            onClick={() => setHamOpen(false)}
          >
            {" "}
            Contact{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
