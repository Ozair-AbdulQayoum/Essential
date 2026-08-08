import React from "react";
import { motion } from "framer-motion";

import img1 from "../../assets/Our-Methods-Page-imgs/Img-2.png";
import img2 from "../../assets/Our-Methods-Page-imgs/Img-3.png";
import img3 from "../../assets/Our-Methods-Page-imgs/Img-4.png";

import icon1 from "../../assets/Our-Methods-Page-imgs/Icon-1.svg";
import icon2 from "../../assets/Our-Methods-Page-imgs/Icon-2.svg";
import icon3 from "../../assets/Our-Methods-Page-imgs/Icon-3.svg";

const features = [
  {
    id: 1,
    icon: icon1,
    text: "Botanical-powered blends",
  },
  {
    id: 2,
    icon: icon2,
    text: "Clinically conscious formulas",
  },
  {
    id: 3,
    icon: icon3,
    text: "Mindful manufacturing",
  },
];

const stats = [
  {
    id: 1,
    number: "90%+",
    text: "Naturally derived ingredients",
  },
  {
    id: 2,
    number: "100%",
    text: "Cruelty-free",
  },
  {
    id: 3,
    number: "0%",
    text: "Compromise on performance, purity, or planet",
  },
  {
    id: 4,
    number: "80%",
    text: "Eco-friendly packaging",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function About() {
  return (
    <section className="overflow-hidden bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-700 sm:text-sm">
            Our Methods
          </span>

          <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-4xl lg:text-5xl">
            Rooted In Purpose, Backed By Care
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
            We blend high-performing formulas with naturally derived
            ingredients.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-16 grid gap-12 border-t border-neutral-200 pt-14 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-8"
          >
            {/* Eco-Friendly Text Above img1 */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-green-700 sm:text-sm">
                Eco-Friendly Packaging
              </span>

              <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base">
                Made with biodegradable and low-waste materials to reduce our
                impact and support a cleaner future.
              </p>
            </motion.div>

            {/* img1 */}
            <motion.div
              variants={fadeUp}
              className="group overflow-hidden rounded-[26px] bg-neutral-100"
            >
              <img
                src={img2}
                alt="Eco-friendly skincare packaging"
                className="h-[340px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[460px]"
              />
            </motion.div>

            {/* img3 */}
            <motion.div
              variants={fadeUp}
              className="group overflow-hidden rounded-[26px] bg-neutral-100"
            >
              <img
                src={img3}
                alt="Natural skincare ingredients"
                className="h-[300px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[400px]"
              />
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-8"
          >
            {/* img2 */}
            <motion.div
              variants={fadeUp}
              className="group overflow-hidden rounded-[26px] bg-neutral-100"
            >
              <img
                src={img1}
                alt="Science-backed skincare formula"
                className="h-[340px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[460px]"
              />
            </motion.div>

            {/* Formula Content */}
            <motion.div
              variants={fadeUp}
              className="rounded-[26px] border border-neutral-200 bg-neutral-50 p-6 sm:p-8 lg:p-10"
            >
              <span className="inline-flex rounded-full border border-neutral-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-700 sm:text-sm">
                Formula
              </span>

              <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-[-0.03em] text-neutral-950 sm:text-3xl">
                Science-Backed Formulas
              </h3>

              <p className="mt-5 text-sm leading-7 text-neutral-600 sm:text-base">
                Every product is crafted with purpose, blending proven actives
                and plant-based ingredients to support real skin results—no
                fluff, no fillers.
              </p>

              {/* Features */}
              <div className="mt-8 space-y-4">
                {features.map((feature) => (
                  <motion.div
                    key={feature.id}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-4"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-100">
                      <img
                        src={feature.icon}
                        alt=""
                        className="h-5 w-5 object-contain"
                      />
                    </span>

                    <p className="text-sm font-medium text-neutral-800 sm:text-base">
                      {feature.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid grid-cols-1 border-y border-neutral-200 sm:grid-cols-2 lg:mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              variants={fadeUp}
              className={`p-7 sm:p-9 lg:p-12 ${
                index % 2 === 0 ? "sm:border-r sm:border-neutral-200" : ""
              } ${index < 2 ? "border-b border-neutral-200" : ""}`}
            >
              <p className="text-4xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-5xl lg:text-6xl">
                {stat.number}
              </p>

              <p className="mt-4 max-w-sm text-sm leading-7 text-neutral-600 sm:text-base">
                {stat.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
