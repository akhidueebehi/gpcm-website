"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import "./globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImage from "../public/images/aboutImage.jpg";
import update1 from "../public/images/update1.jpg";
import miracleJesusBenin from "../public/images/miracleJesusBenin.jpg";
import miracleJesusLagos from "../public/images/miracleJesusLagos.jpg";
import smbc from "../public/images/smbc.jpg";
import sunOfTrans from "../public/images/sundaysoftransformation.jpg";
import prophet from "../public/images/Prophet-Isaiah-Wealth.jpg";
import hip from "../public/images/hip.png";
import g20 from "../public/images/g20.jpg";
import bookImg from "../public/images/bookImage.jpg";
import bookImg2 from "../public/images/bookImage2.jpg";
import bookImg3 from "../public/images/bookImage3.jpg";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-greatVibes",
});

export default function Home() {
  const [hamOpen, setHamOpen] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className="relative overflow-hidden">
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
                : "menu text-white absolute right-[100%] flex flex-col w-[100%] h-[100vh] top-0 text-xl py-[18vh] bg-[rgba(0,0,0,0.9)] transition-all duration-300"
            }
          >
            <Link
              href="/"
              className="border-b border-[rgba(255,255,255,0.1)] py-5 px-5 border-t"
              onClick={() => setHamOpen(false)}
            >
              {" "}
              Home{" "}
            </Link>
            <Link
              href="#about"
              className="border-b border-[rgba(255,255,255,0.1)] py-5 px-5"
              onClick={() => setHamOpen(false)}
            >
              {" "}
              About{" "}
            </Link>

            <Link
              href="/chapters"
              className="border-b border-[rgba(255,255,255,0.1)] py-5 px-5"
              onClick={() => setHamOpen(false)}
            >
              {" "}
              Chapter Listings{" "}
            </Link>
            <Link
              href="#contact"
              className="border-b border-[rgba(255,255,255,0.1)] py-5 px-5"
              onClick={() => setHamOpen(false)}
            >
              {" "}
              Contact{" "}
            </Link>
          </div>
        </div>
      </div>

      <div className="heroSection relative h-[60vh] z-0">
        <div className="overlay w-full h-full z-10"></div>
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="0"
          className="z-50 mt-5 absolute w-full text-[1.55rem] leading-relaxed px-4 text-white flex justify-center items-start text-left flex-col h-full"
        >
          <div
            className={`${greatVibes.className} leading-tight -mb-1 text-[2.65rem] `}
          >
            Welcome to
          </div>
          <div className="monts font-semibold">GOSPEL PILLARS</div>
          <div className="monts font-semibold">CAMPUS MINISTRY</div>

          <Link href={"/chapters"}>
            <div className="find monts text-xs border-2 border-white text-center px-4 py-2 mt-8 -mb-8">
              FIND A FELLOWSHIP
            </div>
          </Link>
        </div>
      </div>
      <div className="About flex flex-col bg-[#252525] px-5 " id="about">
        <div
          className="w-full flex justify-end mt-14 -mb-12"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <Image
            src={aboutImage}
            alt="aboutImage"
            className="aboutImg w-[40%] h-[20vh]"
          />
        </div>
        <div
          className="font-bold text-left text-[2.1rem] leading-tight text-white py-5 max-w-[10px]"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {" "}
          OUR STORY{" "}
        </div>
        <div
          className="border-t-2 mb-14 text-[0.935rem] border-[#efd142] content py-5 leading-loose text-justify text-white"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {" "}
          Gospel Pillars Campus Ministry is an arm of Isaiah Wealth Ministries
          formed to establish fellowships on Campuses. The vision of this arm is
          for students on Campus to "Turn Many unto righteousness while
          maintaining academic excellence". We run various schemes such as A's
          and B's for Jesus and the You Genius Club that further equips students
          for academics and the society.
        </div>
      </div>

      <div className="updateSection w-full pb-44">
        <div
          className="pl-6 pt-10 mr-6 pb-6 border-b-2 border-[#efd142]"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="text-[#efd142] text-[1.05rem] font-bold">
            {" "}
            WHAT'S HAPPENING{" "}
          </div>
          <div className="text-white text-[2.1rem] font-bold max-w-[10px] leading-tight">
            {" "}
            FEATURED EVENTS{" "}
          </div>
        </div>
        <div className="flex flex-col items-center my-16 ">
          <div
            className="max-w-[80%] mb-16"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="text-white text-[1.2rem] font-bold pb-2">JUL 4</div>
            <Image src={smbc} alt="update4" className="updateImg" />
          </div>
          <div
            className="max-w-[80%] mb-16"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="text-white text-[1.2rem] font-bold pb-2">
              JUL 29
            </div>
            <Image src={sunOfTrans} alt="update4" className="updateImg" />
          </div>
          <div
            className="max-w-[80%] mb-16"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="text-white text-[1.2rem] font-bold pb-2">
              AUG 11
            </div>
            <Image
              src={miracleJesusLagos}
              alt="update4"
              className="updateImg"
            />
          </div>
          <div
            className="max-w-[80%] mb-16"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="text-white text-[1.2rem] font-bold pb-2">
              SEPT 22
            </div>
            <Image
              src={miracleJesusBenin}
              alt="update4"
              className="updateImg"
            />
          </div>
          <div
            className="max-w-[80%] mb-16"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="text-white text-[1.2rem] font-bold pb-2">
              NOV 11
            </div>
            <Image src={update1} alt="update1" className="updateImg" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-[#f6f6f6] pb-14 text-[#252525]">
        <div
          className="max-w-[80%] -mt-36 prophetImg"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <Image src={prophet} alt="prophet" className="w-full" />
        </div>
        <div className="py-10 pb-6 px-4">
          <div
            className="font-bold text-2xl text-center monts "
            data-aos="fade-up"
            data-aos-duration="800"
          >
            DR. ISAIAH MACWEALTH
          </div>
          <div
            className={`${greatVibes.className}  font-bold text-2xl text-center`}
            data-aos="fade-up"
            data-aos-duration="800"
          >
            (Snr. Pastor)
          </div>
        </div>

        <div
          className="mx-4 text-justify border-t-2 border-t-[#efd142] pt-8"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {" "}
          Since the Lord Jesus first appeared to the man of God and called him
          to ministry in 2004 whilst still an undergraduate, his love for his
          Lord has been the driving force behind the heart of this servant of
          God whose ministry center’s on revival of God’s power in the church
          and unity within the Body, a passion which burns daily through the
          newly established One Sound Revival Fellowship.
        </div>
      </div>

      <div className="worshipWithUs w-full h-[50vh] text-white text-center flex flex-col items-center justify-center gap-4 px-4">
        <div
          className="font-semibold text-[1.72rem] monts"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {" "}
          <span
            className={`${greatVibes.className} text-5xl -mb-12 block text-[#efd142]`}
          >
            Join us{" "}
          </span>{" "}
          <br /> Every Sunday{" "}
        </div>
        <div className="text-lg" data-aos="fade-up" data-aos-duration="800">
          {" "}
          <span className="text-[#efd142]">@</span> Our Various Locations{" "}
        </div>
        <a
          className="border-2 p-5 mt-6"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {" "}
          Get More Info{" "}
        </a>
      </div>

      <div className="youGenius py-14 px-4 bg-[#f6f6f6] text-[#252525]">
        <div
          className="pb-5 text-[1.9rem] font-bold w-full leading-tight"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {" "}
          BECOME A PARTNER{" "}
        </div>
        <div
          className="border-t-2 mb-14 text-[0.935rem] border-[#efd142] content py-5 leading-loose text-justify"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {" "}
          As you join in partnership therefore, you would be taking advantage of
          a unique opportunity to be a strong part of what God is doing, and you
          would be positioned to do even bigger things with God
        </div>

        <div
          className="flex flex-col items-center justify-center text-center gap-4 shadow-2xl py-8 px-4 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div>
            <Image src={hip} alt="hip" />
          </div>
          <div className="font-bold"> HIP </div>
          <div className="text-sm leading-loose">
            {" "}
            Higher Impact Partnership (HIP) is a financial commitment towards
            the spread of the gospel of Jesus Christ all around the world.{" "}
          </div>
          <a
            className="border border-[#252525] py-4 px-6 mt-5"
            href="https://higherimpactvision.com/"
            target="_blank"
          >
            {" "}
            Learn More{" "}
          </a>
        </div>

        <div
          className="flex flex-col items-center justify-center text-center gap-4 shadow-2xl py-8 px-4 mt-12 mb-16 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div>
            <Image src={g20} alt="g20" />
          </div>
          <div className="font-bold"> G20 </div>
          <div className="text-sm leading-loose">
            {" "}
            These also are the chief of the mighty men whom David had, who
            strengthened themselves with him in his kingdom{" "}
          </div>
          <a
            className="border border-[#252525] py-4 px-6 mt-5"
            href="http://isaiahwealthministries.org/g20"
            target="_blank"
          >
            {" "}
            Learn More{" "}
          </a>
        </div>
      </div>

      <div className="youGenius py-14 px-4 bg-[#252525] text-white">
        <div
          className="pb-2 text-[#efd142] text-[1.05rem] font-bold"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {" "}
          BECOME A PART OF{" "}
        </div>
        <div
          className="pb-5 text-white text-[2.1rem] font-bold w-full leading-tight"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {" "}
          YOU GENIUS CLUB{" "}
        </div>
        <div
          className="border-t-2 mb-14 text-[0.935rem] border-[#efd142] content py-5 leading-loose text-justify text-white"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {" "}
          The You Genius Club stands as a beacon for academic excellence and
          moral values, empowering youth to unlock their full potential. By
          nurturing their intellectual abilities and instilling strong ethical
          values, the club prepares students to become responsible leaders and
          compassionate individuals who can contribute meaningfully to their
          communities and shape a better future for themselves and society as a
          whole. It adopts the ABJ scheme in achieving this.
        </div>
        <a
          className="bg-transparent border-2 border-white p-5 py-4"
          data-aos="fade-up"
          data-aos-duration="800"
          href="https://forms.gle/4VSqBMBXJYHCP2rK7"
          target="_blank"
        >
          {" "}
          Join Now{" "}
        </a>
        {/* link to google form */}
      </div>

      <div className="latestResources flex flex-col items-center justify-center px-4 py-20">
        <div
          className="flex justify-center  w-full items-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <Image src={bookImg2} alt="bookimg" className="w-[25%] mr-4" />
          <Image src={bookImg} alt="bookimg" className="w-[30%]" />
          <Image src={bookImg3} alt="bookimg" className="w-[25%] ml-4" />
        </div>
        <div
          className="text-white font-semibold monts text-[1.5rem] text-center mt-10"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <span className={`${greatVibes.className} text-4xl text-[#efd142]`}>
            Get Latest Resources{" "}
          </span>{" "}
          <br /> from Our Prophet
        </div>
        <a
          className="text-white text-xl border-2 border-white py-3 px-5 mt-10"
          data-aos="fade-up"
          data-aos-duration="800"
          href="https://isaiahwealthestore.org/"
          target="_blank"
        >
          {" "}
          Go Now{" "}
        </a>
      </div>

      <div
        className="contactUs bg-[#252525] text-white flex flex-col justify-center items-center text-center py-10 gap-4"
        id="contact"
      >
        <div
          className="font-bold text-2xl monts"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {" "}
          CONTACT US{" "}
        </div>
        <div className="text-lg pt-1 flex items-center justify-center text-center">
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
        <div className="flex justify-between w-[65%] mx-auto mt-6 py-2 text-2xl">
          <a
            href="https://web.facebook.com/isaiahwealthministries"
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
