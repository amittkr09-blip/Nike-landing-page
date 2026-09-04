import React from "react";
import shoes from "../assets/shoes.png";
import flipkart from "../assets/flipkart.png";
import amazon from "../assets/amazon.png";
const HeroSection = () => {
  return (
    <div className="hero-container flex mt-10 justify-between px-50">
      <div className="left-hero-content">
        <h1 className="font-extrabold text-8xl w-148.75 h-76.5">
          YOUR FEET DESERVE THE BEST
        </h1>
        <p className="w-101 h-22.75 text-gray-500 mt-5">
          YOUR FEET DESERVE THE BEST AND WE-RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE-RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="flex gap-4">
          <button className="px-2 py-1 bg-red-500 text-white cursor-pointer active:scale-95">
            Shop Now
          </button>
          <button className="border border-gray-400 py-1 px-2 cursor-pointer active:scale-95">
            Category
          </button>
        </div>
        <p className="text-gray-500 mt-5">Also Available On</p>
        <div className="flex h-8 w-8 mt-5 gap-4">
          <img src={flipkart} alt="flipkart" />
          <img src={amazon} alt="amazon" />
        </div>
      </div>
      <div className="right-hero-content">
        <img
          className="drop-shadow-[20px_35px_25px_rgba(0,0,0,0.45)] hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer"
          src={shoes}
          alt="shoe"
        />
      </div>
    </div>
  );
};

export default HeroSection;
