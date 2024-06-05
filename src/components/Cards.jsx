import React from "react";
import Nails from "../assets/Nails.png";
import Uv from "../assets/Uv.png";
import Manicure from "../assets/Manicure.png";

const Cards = () => {
  return (
    <div id="Cards" className="w-full py-[10rem] px-4 bg-[#ece4b6]">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-[#ece4b6]"
            src={Nails}
            alt=""
          />
          <h2 className=" text-2xl font bold text-center py-8">Gel Polish</h2>
          <p className="text-center text-4xl font-bold">P250</p>
          <div className="text-center font-medium">
            <p className=" py-2 shadow-md rounded-lgmx-8 nt-8">
              Add ons Nail Art (per nail)
            </p>
            <p className=" py-2 shadow-md mx-8">French Tips P10</p>
            <p className=" py-2 shadow-md mx-8">Glitters P15</p>
            <p className=" py-2 shadow-md mx-8">Ombre P20</p>
            <p className=" py-2 shadow-md mx-8">Shell P20</p>
            <p className=" py-2 shadow-md mx-8">Gold Embossed P20</p>
            <p className=" py-2 shadow-md mx-8">Chrome P25</p>
            <p className=" py-2 shadow-md mx-8">Magnetic Polish P30</p>
            <p className=" py-2 shadow-md mx-8">Creative Design P30</p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-[#ece4b6]"
            src={Uv}
            alt=""
          />
          <h2 className=" text-2xl font bold text-center py-8">
            Softgel Extension
          </h2>
          <p className="text-center text-4xl font-bold">P350</p>
          <div className="text-center font-medium">
            <p className=" py-2 shadow-md rounded-lgmx-8 nt-8">
              Add ons Nail Art (per nail)
            </p>
            <p className=" py-2 shadow-md mx-8">French Tips P10</p>
            <p className=" py-2 shadow-md mx-8">Glitters P15</p>
            <p className=" py-2 shadow-md mx-8">Ombre P20</p>
            <p className=" py-2 shadow-md mx-8">Shell P20</p>
            <p className=" py-2 shadow-md mx-8">Gold Embossed P20</p>
            <p className=" py-2 shadow-md mx-8">Chrome P25</p>
            <p className=" py-2 shadow-md mx-8">Magnetic Polish P30</p>
            <p className=" py-2 shadow-md mx-8">Creative Design P30</p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-[#ece4b6]"
            src={Manicure}
            alt=""
          />
          <h2 className=" text-2xl font bold text-center py-8">
            Softgel Removal
          </h2>
          <p className="text-center text-4xl font-bold">P150/P100</p>
          <div className="text-center font-medium">
            <p className=" py-2 shadow-md rounded-lgmx-8 nt-8">
              Not my work/My work
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
