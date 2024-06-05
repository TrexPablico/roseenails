import React from "react";
import Nail1 from "../assets/Nail1.jpg";
import Nail2 from "../assets/Nail2.jpg";
import Nail3 from "../assets/Nail3.jpg";
import Nail4 from "../assets/Nail4.jpg";
import Nail5 from "../assets/Nail5.jpg";

const Slides = () => {
  return (
    <div className=" bg-[#FFD1DC] max-w-[1400] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2 hover:scale-105 duration-300"
          src={Nail4}
          alt=""
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2 hover:scale-105 duration-300"
          src={Nail2}
          alt=""
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2 hover:scale-105 duration-300"
          src={Nail3}
          alt=""
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2 hover:scale-105 duration-300"
          src={Nail1}
          alt=""
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2 hover:scale-105 duration-300"
          src={Nail5}
          alt=""
        />
      </div>
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-4xl md:text-6xl font-bold">
          Get Your Nails Done With Us
        </h3>
        <p className="text-2xl py-6">Lorem ipsum dolor sit amet.</p>
        <p className="pb-6">Lorem ipsum dolor sit amet consectetur.</p>
        <div>
          <a
            href="https://www.facebook.com/profile.php?id=61556814742222"
            className="bg-black font-bold text-white mt-4 px-4 py-2 rounded hover:bg-slate-400"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slides;
