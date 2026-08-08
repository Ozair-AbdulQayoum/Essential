import React from "react";

import img1 from "../../assets/Main-Page-imgs/img1.png";

export default function About() {
  return (
    <section className="w-full bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        {/* Full image */}
        <div className="relative flex items-center justify-center overflow-hidden rounded-[24px] sm:rounded-[32px] lg:rounded-[40px]">
          <img
            src={img1}
            alt="Carefully crafted products"
            className="h-auto max-h-[0px] w-full object-contain sm:max-h-[430px] lg:max-h-[540px]"
          />

          {/* Soft bottom blur */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/10 to-transparent backdrop-blur-[1px] sm:h-28" />
        </div>

        {/* Text content */}
        <div className="mt-10 grid items-start gap-6 md:mt-14 md:grid-cols-[0.4fr_1.6fr] md:gap-10 lg:mt-16 lg:gap-16">
          {/* Left label */}
          <div>
            <span className="inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-700">
              About Us
            </span>
          </div>

          {/* Right description */}
          <div>
            <p className="max-w-4xl text-lg font-medium leading-[1.6] tracking-[-0.01em] text-neutral-800 sm:text-xl md:text-2xl lg:text-[30px] lg:leading-[1.5]">
              At our store, we believe that good design should be both beautiful
              and practical. That’s why we curate a collection of carefully
              crafted essentials—each chosen for its purpose, quality, and
              timeless appeal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
