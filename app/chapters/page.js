"use client";
import React from "react";
import { useEffect, useState } from "react";
import Footer from "../footer";
import "../globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsSearch } from "react-icons/bs";
import Header from "../header";
import ChapterItem from "./chapterItem";
import chapterList from "./chapterList";

export default function Chapters() {
  const [searchInput, setSearchInput] = useState("");
  const [showText, setShowText] = useState("");

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className="overflow-hidden">
      <Header/>
      <div className="heroSection2 relative h-[60vh] z-0">
        <div className="overlay w-full h-full z-10"></div>
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="z-50 mt-5 absolute w-full text-[1.55rem] lg:text-[32px] leading-relaxed lg:leading-snug px-[5vw] text-white flex justify-center flex-col h-full"
        >
          <div className={`monts font-semibold mt-20`}>
            <span className="text-[#efd142]">FIND</span> A CAMPUS
            <div className="monts font-semibold">FELLOWSHIP</div>
          </div>
          <div className="monts font-semibold">NEAR YOU</div>
          <div className="flex items-center justify-center max-w-[500px] border-2 focus:border-[#efd142] border-white p-[4px] mt-14">
            <input
              placeholder="Search by Location/Campus"
              type="text"
              className="relative text-base text-left border-[1px] w-[85%] h-full bg-transparent py-3 px-4"
              value={searchInput}
              onChange={(event) => {
                setSearchInput(event.target.value);
                setShowText("");
              }}
            />
            <div
              onClick={(e) => {
                setShowText("Your search results are shown below:");
              }}
              className="text-white w-[15%] flex items-center justify-center px-2"
            >
              <BsSearch className="" color="white" size="24" />
            </div>
          </div>
        </div>
      </div>
      <div className="chapterList flex flex-col mt-4 gap-5 bg-[#f6f6f6]">
        <div className="text-center"> {showText} </div>
        {chapterList
          .filter((fellowship) =>
            fellowship.name.includes(searchInput.toLocaleUpperCase())
          )
          .map((d) => (
            <ChapterItem key={d.name} name={d.name} address={d.address} contact={d.contact} chapterPic={d.chapterPics}/>
          ))}
      </div>
      <Footer/>
    </main>
  );
}
