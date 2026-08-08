import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import Stats1 from "../../assets/Main-Page-imgs/Stats-1.png";
import Stats2 from "../../assets/Main-Page-imgs/Stats-2.png";
import Stats3 from "../../assets/Main-Page-imgs/Stats-3.png";
import Stats4 from "../../assets/Main-Page-imgs/Stats-4.jpg";
import Stats5 from "../../assets/Main-Page-imgs/Stats-5.png";
import Stats6 from "../../assets/Main-Page-imgs/Stats-6.png";
import Stats7 from "../../assets/Main-Page-imgs/Stats-7.png";
import Stats8 from "../../assets/Main-Page-imgs/Stats-8.png";
import Stats9 from "../../assets/Main-Page-imgs/Stats-9.png";
import Stats10 from "../../assets/Main-Page-imgs/Stats-10.png";
import Stats11 from "../../assets/Main-Page-imgs/Stats-11.png";
import Stats12 from "../../assets/Main-Page-imgs/Stats-12.png";

import VictorIcon from "../../assets/Main-Page-imgs/Victor.svg";

const statsImages = [
  Stats1,
  Stats2,
  Stats3,
  Stats4,
  Stats5,
  Stats6,
  Stats7,
  Stats8,
  Stats9,
  Stats10,
  Stats11,
  Stats12,
];

const imageSizes = [72, 82, 88, 94, 98, 102, 102, 98, 94, 88, 82, 72];

const sectionVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.45,
    y: 20,
  },

  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 170,
      damping: 18,
    },
  },
};

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Stats() {
  return (
    <section className="w-full overflow-hidden bg-white py-10 sm:py-14 lg:py-20">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.1,
        }}
        className="
          relative mx-auto min-h-[680px] w-full max-w-[1440px] overflow-hidden

          [--orbit-center:57%]
          [--orbit-radius:250px]

          min-[480px]:min-h-[720px]
          min-[480px]:[--orbit-center:66%]
          min-[480px]:[--orbit-radius:365px]

          sm:min-h-[760px]
          sm:[--orbit-center:68%]
          sm:[--orbit-radius:440px]

          md:min-h-[820px]
          md:[--orbit-center:67%]
          md:[--orbit-radius:470px]

          lg:min-h-[860px]
          lg:[--orbit-center:66%]
          lg:[--orbit-radius:500px]

          xl:[--orbit-radius:530px]
        "
      >
        {/* Soft background glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-50 blur-[90px] sm:h-[600px] sm:w-[600px] lg:h-[720px] lg:w-[720px]" />

        {/* Semicircle images */}
        <div className="pointer-events-none absolute inset-0">
          {statsImages.map((image, index) => {
            const startAngle = -118;
            const endAngle = 118;

            const angle =
              startAngle +
              (index * (endAngle - startAngle)) / (statsImages.length - 1);

            const size = imageSizes[index];

            const isEdgeImage = index === 0 || index === statsImages.length - 1;

            return (
              <div
                key={image}
                className="absolute left-1/2 z-[2]"
                style={{
                  top: "var(--orbit-center)",
                  transform: `
                    translate(-50%, -50%)
                    rotate(${angle}deg)
                    translateY(calc(var(--orbit-radius) * -1))
                    rotate(${-angle}deg)
                  `,
                }}
              >
                <motion.div
                  variants={imageVariants}
                  whileHover={{
                    y: -8,
                    scale: 1.1,
                    rotate: index % 2 === 0 ? 3 : -3,
                    zIndex: 20,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                  }}
                  className={`
                    pointer-events-auto relative overflow-hidden rounded-full
                    border-[4px] border-neutral-100 bg-neutral-100
                    shadow-[0_12px_28px_rgba(0,0,0,0.12)]
                    sm:border-[5px]
                    ${isEdgeImage ? "opacity-60" : "opacity-100"}
                  `}
                  style={{
                    "--desktop-image-size": `${size}px`,
                    width: "clamp(56px, 12vw, var(--desktop-image-size))",
                    height: "clamp(56px, 12vw, var(--desktop-image-size))",
                  }}
                >
                  <img
                    src={image}
                    alt={`Essential product ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/20" />
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Center content */}
        <motion.div
          variants={sectionVariants}
          className="
            absolute left-1/2 top-[54%] z-10
            flex w-full max-w-[850px]
            -translate-x-1/2 -translate-y-1/2
            flex-col items-center px-5 text-center

            min-[480px]:top-[50%]
            sm:top-[49%]
            md:top-[50%]
            lg:top-[53%]
          "
        >
          {/* Label */}
          <motion.span
            variants={contentVariants}
            className="inline-flex rounded-full border border-neutral-200 bg-white px-5 py-2 text-sm font-medium text-neutral-700 shadow-sm"
          >
            Stats
          </motion.span>

          {/* Heading */}
          <motion.h2
            variants={contentVariants}
            className="mt-7 max-w-[760px] font-serif text-[34px] font-medium leading-[1.12] tracking-[-0.035em] text-neutral-900 min-[400px]:text-[38px] min-[480px]:text-[46px] sm:text-[54px] md:text-6xl lg:text-[68px]"
          >
            {/* Small phones */}
            <span className="sm:hidden">
              1200+ Products Got Sold Last Month
            </span>

            {/* Tablet and responsive view */}
            <span className="hidden sm:inline lg:hidden">
              1200+ Products Got Sold
              <br />
              Last Month
            </span>

            {/* Desktop */}
            <span className="hidden lg:inline">
              1200+ Products Got
              <br />
              Sold Last Month
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={contentVariants}
            className="mt-6 max-w-[520px] text-sm font-medium leading-6 text-neutral-600 min-[480px]:text-base min-[480px]:leading-7 sm:text-lg"
          >
            At Essential, we believe beauty should feel effortless and
            empowering.
          </motion.p>

          {/* Store button */}
          <motion.div
            variants={contentVariants}
            whileHover={{
              y: -4,
            }}
            whileTap={{
              scale: 0.96,
            }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 20,
            }}
            className="mt-8"
          >
            <NavLink
              to="/store"
              className="group inline-flex items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(0,0,0,0.2)] transition-all duration-300 hover:bg-neutral-800 hover:shadow-[0_18px_36px_rgba(0,0,0,0.25)]"
            >
              <span>Store</span>

              <img
                src={VictorIcon}
                alt=""
                aria-hidden="true"
                className="h-3.5 w-3.5 object-contain invert transition-transform duration-300 group-hover:translate-x-1"
              />
            </NavLink>
          </motion.div>
        </motion.div>

        {/* Bottom image fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-20 bg-gradient-to-t from-white via-white/75 to-transparent sm:h-28 lg:h-32" />
      </motion.div>
    </section>
  );
}
