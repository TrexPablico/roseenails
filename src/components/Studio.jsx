import React from "react";
import card3 from "../assets/card3.jpg";
import card2 from "../assets/card2.jpg";
import card5 from "../assets/card5.jpg";
import { IoLocation } from "react-icons/io5";

const Studio = () => {
  return (
    <div className="relative max-w-[1900px] mx-auto px-4 grid lg:grid-cols-3 gap-4">
      <div className="absolute inset-0 bg-blue-100 h-1/2 z-0 border-0"></div>
      <div className="relative lg:col-span-1 col-span-2 lg:top-20 z-10">
        <h3 className="mt-4 font-bold text-3xl">My Studio</h3>
        <p className="pt-4 font-body">
          Welcome to Rosee Nail Studio, where beauty and elegance meet
          exceptional nail care. Our studio offers a tranquil and inviting
          atmosphere, perfect for unwinding while our talented technicians
          create stunning nail designs tailored just for you. At Rosee Nail
          Studio, we are committed to using premium products and advanced
          techniques to ensure your nails are not only beautiful but also
          healthy. Whether you're looking for a classic manicure, a trendy nail
          art design, or a rejuvenating pedicure, our experienced nail
          teachnician is here to provide personalized and impeccable service.
          Experience the artistry and luxury at Rosee Nail Studio and leave with
          nails that make a statement.
          <br />
          <br />
          <p className="font-body">
            Visit Rosee Nail Studio and let us transform your nails into
            stunning works of art.
          </p>
          <br />
          <br />
          <div className="flex items-center">
            <a href="https://maps.app.goo.gl/Scpa8dGY51pJGHLR7">
              <IoLocation />
            </a>
            <p className="ml-2">
              Block 5 Lost 19 Anawangin St., Villa Marina Subd. Brgy. West
              Dirita, San Antonio, Zambales
            </p>
          </div>
        </p>
      </div>

      <div className="mt-4 relative grid grid-cols-2 col-span-2 gap-2 z-10 mb-4">
        <img className="object-cover w-full h-full" src={card5} alt="" />
        <img
          className="row-span-2 object-cover w-full h-full"
          src={card2}
          alt=""
        />
        <img className="object-cover w-full h-full" src={card3} alt="" />
      </div>
    </div>
  );
};

export default Studio;
