import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#FAC898]">
      <div className="max-w-[1240px] mx-auto justify-center py-16 px-4 grid lg:grid-cols-3 md:grid-cols-3 gap-4">
        <div>
          <h1 className="w-full text-4xl mb-2 font-bold text-black">
            Questions?
          </h1>
          <a href="#Hero" className="text-gray-600 underline mx-1 ">
            Contact Us
          </a>
        </div>
        <div className="flex flex-auto">
          <a href="https://www.facebook.com/profile.php?id=61556814742222">
            <FaFacebookSquare className="mr-4" size={30} />
          </a>
          <a href="https://www.instagram.com/roseenailstudio?fbclid=IwZXh0bgNhZW0CMTAAAR2FcYlJI9uFDgcraSV8hC6X14ykfLmfHJ8FCQRa6sfZffq2c2kwf7C_Y-Q_aem_AT5v22S2uN9Pq_9W4e3Z_uocbFMzXiNy4KCbozMWa2RWEA__Ye3viQKBE-xC0ScmekBqs8VOV77vwAjKimiJlbc7">
            <FaInstagramSquare className="mx-4" size={30} />
          </a>
          <a href="https://www.tiktok.com/@genevarose__?_t=8mtesJIUfGz&_r=1">
            <AiFillTikTok className="mx-4" size={31} />
          </a>
        </div>
        <div className="flex flex-col">
          <a
            className="underline"
            href="https://maps.app.goo.gl/Scpa8dGY51pJGHLR7"
          >
            Location
          </a>
          <a className="underline" href="#Hero">
            Book Now
          </a>
          <a className="underline" href="#Cards">
            Prices
          </a>
          <a className="underline font-bold" href="#Hero">
            Back to top
          </a>
        </div>
      </div>
      <div>
        <p className="flex justify-center">
          {" "}
          &#169; 2024 Eleazar G. Pablico III{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
