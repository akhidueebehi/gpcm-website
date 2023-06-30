"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import "../globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsSearch } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { Great_Vibes } from 'next/font/google';

import Link from "next/link";

const greatVibes = Great_Vibes({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-greatVibes', 
});

export default function ChapterListings() {
  const [hamOpen, setHamOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [showText, setShowText] = useState("");
  const [fellowshipList, setFellowshipList] = useState([
    {
      id: 1,
      name: "GPCF UNIBEN",
      address: ["Festus Iyayi Hall", "ASUU Hall"],
      daysOfServices: [
        { day: "Sundays", time: "8.a.m" },
        { day: "Thursdays", time: "5.p.m" },
      ],
      contact: "+2347016908718",
    },
    {
      id: 1,
      name: "GPCF UNIBEN EKENWAN",
      address: ["Festus Iyayi Hall", "ASUU Hall"],
      daysOfServices: [
        { day: "Sundays", time: "8.a.m" },
        { day: "Thursdays", time: "5.p.m" },
      ],
      contact: "+2347016908718",
    },
    {
      id: 1,
      name: "GPCF AAU",
      address: ["Festus Iyayi Hall", "ASUU Hall"],
      daysOfServices: [
        { day: "Sundays", time: "8.a.m" },
        { day: "Thursdays", time: "5.p.m" },
      ],
      contact: "+2347016908718",
    },
  ]);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className="overflow-hidden">
      <div className="header monts w-full absolute top-0 py-4 px-4 z-30">
        <div className="flex w-full justify-between items-center">
          <div className="nav-brand w-[148px] z-50">
            <Image src="/images/gpcfLogo.png" height={37} width={180} />
          </div>
          <div
            className="Hamburger flex flex-col relative z-50"
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
            className={
              hamOpen
                ? "menu text-white absolute right-[0] flex flex-col w-[100%] h-[100vh] top-0 text-xl py-[18vh] bg-[rgba(0,0,0,0.9)] transition-all duration-300"
                : "flex menu text-white absolute right-[100%] flex-col w-[100%] h-[100vh] top-0 text-xl py-[18vh] bg-[rgba(0,0,0,0.9)] transition-all duration-300"
            }
          >
            <Link
              href="/"
              className="border-b border-[rgba(255,255,255,0.1)] py-5 px-5 border-t"
            >
              {" "}
              Home{" "}
            </Link>

            <Link href="/#about" className="border-b border-[rgba(255,255,255,0.1)] py-5 px-5">
              {" "}
              About{" "}
            </Link>
            <Link
              href="/chapters"
              className="border-b border-[rgba(255,255,255,0.1)] py-5 px-5"
            >
              {" "}
              Chapter Listings{" "}
            </Link>
            <Link href="#contact" className="border-b border-[rgba(255,255,255,0.1)] py-5 px-5" onClick={() => setHamOpen(false)}>
              {" "}
              Contact{" "}
            </Link>
          </div>
        </div>
      </div>

      <div className="heroSection2 relative h-[60vh] z-0">
        <div className="overlay w-full h-full z-10"></div>
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="z-50 mt-5 absolute w-full text-[1.55rem] leading-relaxed px-4 text-white flex justify-center flex-col h-full"
        >
          <div className={`monts font-semibold`}><span className="text-[#efd142]">FIND</span> A CAMPUS</div>
          <div className="monts font-semibold">FELLOWSHIP</div>
          <div className="monts font-semibold">NEAR YOU</div>
          <div className="flex items-center justify-center border-2 focus:border-[#efd142] border-white mt-16 ">
            <input
              placeholder="Search by Location/Campus"
              type="text"
              className="relative text-base text-center w-[85%] h-full bg-transparent py-3 px-4]"
              value={searchInput}
              onChange={(event) => {
                setSearchInput(event.target.value);
                setShowText("");
                }}
            />
            <div onClick={(e) => {
                setShowText('Your search results are shown below:')
              }} className="text-white w-[15%] justify-self-end px-2">
              <BsSearch
                className=""
                color="white"
                size="30"
                
              />
            </div>
          </div>
        </div>
      </div>
      <div className="chapterList py-16 flex flex-col gap-5 bg-[#f6f6f6]">
        <div className="text-center"> {showText} </div>
        {fellowshipList
          .filter((fellowship) => fellowship.name.includes(searchInput.toLocaleUpperCase()))
          .map((d) => (
            <div
              className="chapter px-4 py-6 text-[#252525] shadow-xl m-4 rounded-lg bg-white"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="chapterName font-bold text-2xl border-b-2 border-[#efd142] py-2">
                {d.name}
              </div>
              <div className="address py-6">
                <div className="font-bold mb-1">Address</div>
                {d.address.map((a) => (
                  <div> {a} </div>
                ))}
              </div>
              <div className="daysOfServices pb-5">
                {d.daysOfServices.map((b) => (
                  <div className="serviceDay&Time pb-1 flex">
                    <div className="font-bold w-28"> {b.day} </div>
                    <div> {b.time} </div>
                  </div>
                ))}
              </div>
              <div className="contact">
                <div className="font-bold mb-1">Contact</div>
                <div> {d.contact} </div>
              </div>
            </div>
          ))}
      </div>

      <div className="contactUs bg-[#252525] text-white flex flex-col justify-center items-center text-center py-10 gap-4" id="contact">
        <div
          className="font-bold text-2xl monts"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {" "}
          CONTACT US{" "}
        </div>
        <div
          className="text-lg pt-1 flex items-center justify-center text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div>
            {" "}
            <AiOutlinePhone />{" "}
          </div>
          <div> +2347016908718 </div>
        </div>
        <div className="text-base flex items-center justify-center gap-2 text-center">
          <div>
            {" "}
            <AiOutlineMail />{" "}
          </div>
          <div> gospelpillarscampus@gmail.com </div>
        </div>
        <div className="flex  justify-between w-[65%] mx-auto mt-6 py-2 text-2xl">
          <a
            href="https://www.fhttps//www.facebook.com/isaiahwealthministriesacebook.com/isaiahwealthministrieshttps://www.facebook.com/isaiahwealthministries"
            target="_blank"
          >
            {" "}
            <BsFacebook />{" "}
          </a>
          <a
            href="https://twitter.com/isaiahwealthmin?t=HnTGhOrkf6Ol_PWJ8b-nuA&s=09"
            target="_blank"
          >
            {" "}
            <BsTwitter />{" "}
          </a>
          <a
            href="https://youtube.com/c/IsaiahWealthMinistries"
            target="_blank"
          >
            {" "}
            <BsYoutube />{" "}
          </a>
          <a
            href="https://instagram.com/isaiahwealthministries?utm_medium=copy_link"
            target="_blank"
          >
            {" "}
            <BsInstagram />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/isaiahwealthministries/"
            target="_blank"
          >
            {" "}
            <BsLinkedin />{" "}
          </a>
          <a
            href="https://www.pinterest.com/isaiahwealthministries/"
            target="_blank"
          >
            {" "}
            <BsPinterest />{" "}
          </a>
        </div>
      </div>
    </main>
  );
}
