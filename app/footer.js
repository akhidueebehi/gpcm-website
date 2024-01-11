import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  return (
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
  );
}
