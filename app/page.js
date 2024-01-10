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

      <div className="heroSection relative h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[100vh] z-0">
        <div className="overlay w-full h-full z-10"></div>
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="0"
          className="z-50 mt-5 absolute w-full text-[1.55rem] leading-relaxed px-[5vw] text-white flex justify-center items-start text-left flex-col h-full"
        >
          <div
            className={`${greatVibes.className} leading-tight -mb-1 text-[42px] md:text-[48px]`}
          >
            Welcome to
          </div>
          <div className="monts text-[25px] md:text-[36px] leading-tight font-semibold">
            GOSPEL PILLARS
          </div>
          <div className="monts text-[25px] md:text-[36px] leading-tight font-semibold">
            CAMPUS MINISTRY
          </div>

          <Link href={"/chapters"}>
            <div className="find monts text-xs md:text-[14px] xl:text-[18px] border-2 border-white hover:bg-white hover:text-black transition-all duration-150 text-center px-4 md:px-[20px] xl:px-[24px] py-2 md:py-[12px] xl:py-[16px] mt-8 -mb-8">
              FIND A FELLOWSHIP
            </div>
          </Link>
        </div>
      </div>
      <div
        className="About flex flex-col md:flex-row-reverse bg-[#252525] px-[5vw] md:pl-0 md:pr-[5vw] xl:pr-[8vw] py-8 md:py-[5vw]"
        id="about"
      >
        <div
          className="w-full flex md:w-[40vw] justify-end -mb-12 md:mb-0 md:items-center md:justify-center md:flex"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <Image
            src={aboutImage}
            alt="aboutImage"
            className="aboutImg w-[40vw] xl:w-[500px] xl:h-[500px] h-[35vw]"
          />
        </div>
        <div className="w-full md:w-[60vw] md:mr-[5vw]">
          <div
            className="font-bold text-left text-[2.1rem] md:text-[44px] lg:text-[56px] xl:text-[60px] leading-tight text-white py-5 max-w-[10px] md:ml-[5vw] xl:ml-[8vw] md:max-w-max"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {" "}
            OUR STORY{" "}
          </div>
          <div className="bg-[#efd142] w-full h-[3px]"></div>
          <div
            className="mb-14 text-[0.935rem] md:text-[16px] xl:text-[18px] xl:leading-relaxed md:ml-[5vw] xl:ml-[8vw] content py-5 leading-loose text-justify text-white"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {" "}
            Gospel Pillars Campus Ministry is an arm of Isaiah Wealth Ministries
            formed to establish fellowships on Campuses. The vision of this arm
            is for students on Campus to "Turn Many unto righteousness while
            maintaining academic excellence". We run various schemes such as A's
            and B's for Jesus and the You Genius Club that further equips
            students for academics and the society.
          </div>
        </div>
      </div>

      <div className="updateSection w-full pb-44">
        <div
          className="pl-[5vw] pt-8 md:pt-[5vw] xl:pl-[8vw] mr-6 pb-6 border-b-[3px] border-[#efd142]"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="text-[#efd142] md:leading-tight text-[1.05rem] md:text-[20px] lg:text-[26px] xl:text-[30px] font-bold">
            {" "}
            WHAT'S HAPPENING{" "}
          </div>
          <div className="text-white text-[2.1rem] md:text-[44px] lg:text-[56px] xl:text-[60px] font-bold max-w-[10px] md:max-w-max leading-tight">
            {" "}
            FEATURED EVENTS{" "}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center items-center my-16 ">
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

      <div className="flex flex-col items-center justify-center bg-[#f6f6f6] pb-8 md:pb-[5vw] text-[#252525]">
        <div
          className="max-w-[80%] -mt-36 prophetImg"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <Image src={prophet} alt="prophet" className="w-full" />
        </div>
        <div className="py-10 pb-6 px-4">
          <div
            className="font-bold text-2xl lg:text-[28px] text-center monts"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            DR. ISAIAH MACWEALTH
          </div>
          <div
            className={`${greatVibes.className}  font-bold text-2xl lg:text-[28px] text-center`}
            data-aos="fade-up"
            data-aos-duration="800"
          >
            (Snr. Pastor)
          </div>
        </div>

        <div
          className="mx-[5vw] text-justify lg:text-[16px] xl:text-[18px] border-t-[3px] border-t-[#efd142] pt-8"
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

      <div className="worshipWithUs w-full h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] text-white text-center flex flex-col items-center justify-center gap-4 px-4">
        <div
          className="font-semibold text-[1.72rem] monts"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {" "}
          <span
            className={`${greatVibes.className} text-5xl xl:text-[60px] -mb-12 block text-[#efd142]`}
          >
            Join us{" "}
          </span>{" "}
          <br /> Every Sunday{" "}
        </div>
        <div
          className="text-lg xl:text-[20px]"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {" "}
          <span className="text-[#efd142]">@</span> Our Various Locations{" "}
        </div>
        <a
          className="border-2 p-5 mt-6 xl:text-[18px] hover:bg-white hover:text-black"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {" "}
          Get More Info{" "}
        </a>
      </div>

      <div className="partner py-8 md:py-[5vw] px-[5vw] bg-[#f6f6f6] text-[#252525]">
        <div
          className="pb-5 text-[1.9rem] xl:text-[38px] font-bold w-full leading-tight"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {" "}
          BECOME A PARTNER{" "}
        </div>
        <div
          className="border-t-2 mb-14 text-[0.935rem] xl:text-[18px] border-[#efd142] content py-5 leading-loose text-justify"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {" "}
          As you join in partnership therefore, you would be taking advantage of
          a unique opportunity to be a strong part of what God is doing, and you
          would be positioned to do even bigger things with God
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
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
              className="border border-[#252525] py-4 px-6 mt-5 hover:bg-gray-500 hover:border-gray-500 hover:text-white"
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
              className="border border-[#252525] py-4 px-6 mt-5 hover:bg-gray-500 hover:border-gray-500 hover:text-white"
              href="http://isaiahwealthministries.org/g20"
              target="_blank"
            >
              {" "}
              Learn More{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="youGenius py-8 md:py-[5vw] px-[5vw] bg-[#252525] text-white">
        <div
          className="pb-2 text-[#efd142] md:leading-tight text-[1.05rem] lg:text-[18px] xl:text-[22px] font-bold"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {" "}
          BECOME A PART OF{" "}
        </div>
        <div
          className="pb-5 text-white text-[2.1rem] lg:text-[40px] xl:text-[48px] font-bold w-full leading-tight"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {" "}
          YOU GENIUS CLUB{" "}
        </div>
        <div
          className="border-t-2 mb-14 text-[0.935rem] lg:text-[16px] border-[#efd142] content py-5 leading-loose text-justify text-white"
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
          className="bg-transparent border-2 border-white p-5 py-4 hover:bg-white hover:text-black"
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
          className="text-white text-xl border-2 border-white py-3 px-5 mt-10 hover:bg-white hover:text-black"
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
        <div className="flex justify-between mx-auto mt-6 py-2 text-2xl">
          <a
            href="https://web.facebook.com/isaiahwealthministries"
            target="_blank"
            className="mr-[15px]"
          >
            {" "}
            <BsFacebook />{" "}
          </a>
          <a
            href="https://twitter.com/isaiahwealthmin?t=HnTGhOrkf6Ol_PWJ8b-nuA&s=09"
            target="_blank"
            className="mr-[15px]"
          >
            {" "}
            <BsTwitter />{" "}
          </a>
          <a
            href="https://youtube.com/c/IsaiahWealthMinistries"
            target="_blank"
            className="mr-[15px]"
          >
            {" "}
            <BsYoutube />{" "}
          </a>
          <a
            href="https://instagram.com/isaiahwealthministries?utm_medium=copy_link"
            target="_blank"
            className="mr-[15px]"
          >
            {" "}
            <BsInstagram />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/isaiahwealthministries/"
            target="_blank"
            className="mr-[15px]"
          >
            {" "}
            <BsLinkedin />{" "}
          </a>
          <a
            href="https://www.pinterest.com/isaiahwealthministries/"
            target="_blank"
            className="mr-[15px]"
          >
            {" "}
            <BsPinterest />{" "}
          </a>
        </div>
      </div>
    </main>
  );
}
