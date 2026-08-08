import React from "react";
import { FaArrowRight } from "react-icons/fa6";

import imgbg from "../assets/Main-Page-imgs/CTA-img.png";
import img1 from "../assets/Main-Page-imgs/cust-1.png";
import img2 from "../assets/Main-Page-imgs/cust-2.png";
import img3 from "../assets/Main-Page-imgs/cust-3.jpg";
import StarIcon from "../assets/Main-Page-imgs/Star.svg";

export default function CTA() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:py-24">
      <div
        className="relative mx-auto flex min-h-[460px] max-w-6xl items-center justify-center overflow-hidden rounded-[32px] bg-cover bg-center px-6 py-16 sm:min-h-[520px] sm:px-10 lg:px-16"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.28), rgba(0,0,0,.28)), url(${imgbg})`,
        }}
      >
        <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
          {/* Heading */}
          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
            The Perfect Product Is Just A
            <br />
            Click Away
          </h2>

          {/* Customers & Rating */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            {/* Customer Images */}
            <div className="flex items-center">
              <img
                src={img1}
                alt="Customer"
                className="h-12 w-12 rounded-full border-2 border-white object-cover"
              />
              <img
                src={img2}
                alt="Customer"
                className="-ml-3 h-12 w-12 rounded-full border-2 border-white object-cover"
              />
              <img
                src={img3}
                alt="Customer"
                className="-ml-3 h-12 w-12 rounded-full border-2 border-white object-cover"
              />
            </div>

            {/* Rating */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <img
                    key={index}
                    src={StarIcon}
                    alt="Star"
                    className="h-4 w-4"
                  />
                ))}
              </div>

              <p className="mt-1 text-sm font-medium text-white sm:text-base">
                <span className="font-semibold">230k+</span> Happy Customers
              </p>
            </div>
          </div>

          {/* Button */}
          <a
            href="/store"
            className="group mt-10 inline-flex items-center gap-3 rounded-full border border-black bg-black px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            Store
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
