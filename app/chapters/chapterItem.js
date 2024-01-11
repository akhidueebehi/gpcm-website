"use client";
import Image from "next/image";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function ChapterItem({ name, address, contact, chapterPic }) {
  return (
    <div
      className="chapter px-[5vw] py-[5vw] text-[#252525] flex flex-col md:flex-row items-center justify-center shadow-xl my-4 mx-[5vw] rounded-lg bg-white"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="w-full md:w-[40vw] lg:w-[500px] h-[210px] md:h-[28vw] lg:h-[300px] md:mr-[5vw] lg:mr-[8vw] overflow-hidden shadow-sm shadow-black">
        <Fade
          autoplay={true}
          infinite={true}
          pauseOnHover={false}
          duration={8000}
          arrows={false}
          indicators={false}
        >
          {chapterPic?.map((p) => (
            <div> 
                <Image src={p}/>
            </div>
          ))}
        </Fade>
      </div>
      <div className="flex md:w-[40vw] flex-col w-full mt-6 md:mt-0">
        <div className="chapterName font-bold text-2xl md:text-[28px] lg:text-[32px] xl:text-[36px] border-b-2 border-[#efd142] py-2">
          {name}
        </div>
        <div className="address py-6 text-[16px] lg:text-[18px]">
          <div className="font-bold mb-1">Address</div>
          {address.map((a) => (
            <div> {a} </div>
          ))}
        </div>
        {/* <div className="daysOfServices pb-5">
          {d.daysOfServices.map((b) => (
            <div className="serviceDay&Time pb-1 flex">
              <div className="font-bold w-28"> {b.day} </div>
              <div> {b.time} </div>
            </div>
          ))}
        </div> */}
        <div className="contact lg:text-[18px]">
          <div className="font-bold mb-1">Contact</div>
          {contact?.map((c) => (
            <div> {c} </div>
          ))}
        </div>
      </div>
    </div>
  );
}
