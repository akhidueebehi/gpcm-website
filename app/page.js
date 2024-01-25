"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import "./globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImage from "../public/images/aboutImage.jpg";
import prophet from "../public/images/Prophet-Isaiah-Wealth.jpg";
import hip from "../public/images/hip.png";
import g20 from "../public/images/g20.jpg";
import Link from "next/link";
import { Great_Vibes } from "next/font/google";
import Header from "./header";
import Footer from "./footer";
import { getProjects } from "../sanity/sanity-utils";
import { getBooks } from "../sanity/books-utils";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-greatVibes",
});

export default function Home() {
  const [event, setEvent] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    AOS.init();
    const fetchData = async () => {
      const data = await getProjects();
      setEvent(data);
    };

    const fetchBooks = async () => {
      const data = await getBooks();
      setBooks(data);
    };

    fetchData().catch(console.error);
    fetchBooks().catch(console.error);
  }, []);

  return (
    <main className="relative overflow-hidden">
      <Header />

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
          {event.map((event) => (
            <div
              key={event._id}
              className="w-[80%] h-[200px] mb-16 relative"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="text-white text-[1.2rem] font-bold pb-2">
                {event.date}
              </div>
              <div className="relative w-full h-[180px] lg:h-[200px]">
                <Image
                  src={event.image}
                  fill
                  alt={event.date}
                  className="updateImg"
                />
              </div>
            </div>
          ))}
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
            <div className="font-bold lg:text-[18px]"> HIP </div>
            <div className="text-sm lg:text-[18px] leading-loose">
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
            <div className="font-bold lg:text-[18px]"> G20 </div>
            <div className="text-sm leading-loose lg:text-[18px]">
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
          className="flex justify-center w-full items-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {books.slice(1, 2).map((book) => (
            <div className="w-[23vw] h-[30vw] relative md:w-[18vw] md:h-[22vw] lg:w-[16vw] lg:h-[22vw] mr-[5%]">
              <Image src={book.image} fill alt="bookimg" className="" />
            </div>
          ))}
          {books.slice(0, 1).map((book) => (
            <div className="w-[25vw] h-[33vw] relative md:w-[20vw] md:h-[26vw] lg:w-[18vw] lg:h-[25vw] mr-[5%]">
              <Image src={book.image} fill alt="bookimg" className="" />
            </div>
          ))}
          {books.slice(2, 3).map((book) => (
            <div className="w-[23vw] h-[30vw] relative md:w-[18vw] md:h-[22vw] lg:w-[16vw] lg:h-[22vw]">
              <Image src={book.image} fill alt="bookimg" className="" />
            </div>
          ))}
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

      <Footer />
    </main>
  );
}
