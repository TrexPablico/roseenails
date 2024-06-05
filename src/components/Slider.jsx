import React, { useState } from "react";
import Slider1 from "../assets/Slider1.jpg";
import Slider2 from "../assets/Slider2.jpg";
import Slider3 from "../assets/Slider3.jpg";
import Slider4 from "../assets/Slider4.jpg";
import Slider5 from "../assets/Slider5.jpg";
import Slider6 from "../assets/Slider6.jpg";
import Slider7 from "../assets/Slider7.jpg";
import Slider8 from "../assets/Slider8.jpg";
import Slider9 from "../assets/Slider9.jpg";
import Slider10 from "../assets/Slider10.jpg";
import Slider11 from "../assets/Slider11.jpg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Slider = () => {
  const sliderimg = [
    {
      src: Slider1,
      alt: "",
      title: "slider 1",
    },
    {
      src: Slider2,
      alt: "",
      title: "slider 2",
    },
    {
      src: Slider3,
      alt: "",
      title: "slider 3",
    },
    {
      src: Slider4,
      alt: "",
      title: "slider 4",
    },
    {
      src: Slider5,
      alt: "",
      title: "slider 5",
    },
    {
      src: Slider6,
      alt: "",
      title: "slider 6",
    },
    {
      src: Slider7,
      alt: "",
      title: "slider 7",
    },
    {
      src: Slider8,
      alt: "",
      title: "slider 8",
    },
    {
      src: Slider9,
      alt: "",
      title: "slider 9",
    },
    {
      src: Slider10,
      alt: "",
      title: "slider 10",
    },
    {
      src: Slider11,
      alt: "",
      title: "slider 11",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliderimg.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === sliderimg.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div
      id="Slider"
      className="max-w-[1400px] h-[900px] m-auto py-16 px-4 relative group"
    >
      <div
        className="w-full h-full rounded-2xl bg-cover bg-center duration-500"
        style={{ backgroundImage: `url(${sliderimg[currentIndex].src})` }}
      ></div>
      {/*left arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/*right arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

export default Slider;
