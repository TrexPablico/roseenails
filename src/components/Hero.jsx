import React from "react";
import { FaFacebook } from "react-icons/fa";

const Hero = () => {
  return (
    <div id="Hero" className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://images.pexels.com/photos/2679316/pexels-photo-2679316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[15%] ml-5 max-w-[1100px] m-auto absolute p-4">
          <p className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            Roseé Nail Studio
          </p>
          <h1 className="flex flex-auto">
            By Geneva Rosee
            <a href="https://www.facebook.com/geneva.roseey">
              <FaFacebook
                className="z-[1] text-white cursor-pointer mt-1 ml-3"
                size={15}
              />
            </a>
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl mb-3">
            From classic manicures to trendy nail art designs, we offer a
            diverse range of services to suit your style and personality.
          </p>
          <a
            href="https://www.facebook.com/profile.php?id=61556814742222"
            className="bg-white font-bold text-black mt-4 px-4 py-2 rounded hover:bg-slate-400"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
