import React from "react";
import { motion } from "framer-motion";

import img1 from "../../assets/Our-Methods-Page-imgs/Img-1.png";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1400px]">
        {/* Top Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 border-b border-neutral-200 pb-10 md:grid-cols-2 md:items-end"
        >
          {/* Left */}
          <div>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-5xl lg:text-7xl">
              As Natural As You.
              <br />
              Perfectly Refined
            </h1>
          </div>

          {/* Right */}
          <div className="md:flex md:justify-end">
            <p className="max-w-md text-base leading-8 text-neutral-600 md:text-right lg:text-lg">
              Explore our approach for in-depth insights and intentional
              choices.
            </p>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2 }}
          className="mt-12 overflow-hidden rounded-[32px]"
        >
          <img
            src={img1}
            alt="Our Methods"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
}
