import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import img1 from "../../assets/Main-Page-imgs/cust-1.png";
import img2 from "../../assets/Main-Page-imgs/cust-2.png";
import img3 from "../../assets/Main-Page-imgs/cust-3.jpg";
import StarIcon from "../../assets/Main-Page-imgs/Star.svg";
import vectorIcon from "../../assets/Main-Page-imgs/Victor.svg";

const customerImages = [img1, img2, img3];

const sectionVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const customerCardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const avatarVariants = {
  hidden: {
    opacity: 0,
    x: -18,
    scale: 0.75,
  },

  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 18,
    },
  },
};

const starVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: -25,
  },

  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 280,
      damping: 18,
    },
  },
};

const textLineVariants = {
  hidden: {
    opacity: 0,
    y: "110%",
  },

  visible: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 28,
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

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      {/* Background glow */}
      <motion.div
        aria-hidden="true"
        initial={{
          opacity: 0,
          scale: 0.75,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-100/70 blur-[110px] sm:h-[600px] sm:w-[600px]"
      />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.25,
        }}
        className="relative mx-auto flex max-w-[1440px] flex-col items-center justify-center"
      >
        {/* Customers and rating */}
        <motion.div
          variants={customerCardVariants}
          whileHover={{
            y: -5,
            scale: 1.015,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 20,
          }}
          className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-neutral-200/70 bg-white/80 px-6 py-5 shadow-[0_15px_45px_rgba(0,0,0,0.07)] backdrop-blur-xl sm:flex-row sm:gap-5"
        >
          {/* Customer images */}
          <motion.div
            variants={sectionVariants}
            className="flex items-center justify-center"
          >
            {customerImages.map((image, index) => (
              <motion.div
                key={image}
                variants={avatarVariants}
                whileHover={{
                  y: -6,
                  scale: 1.1,
                  zIndex: 20,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 18,
                }}
                className={`relative h-12 w-12 overflow-hidden rounded-full border-[3px] border-white bg-neutral-200 shadow-md ${
                  index !== 0 ? "-ml-3" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`Happy customer ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{
              opacity: 0,
              scaleY: 0,
            }}
            whileInView={{
              opacity: 1,
              scaleY: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.35,
            }}
            className="hidden h-10 w-px origin-center bg-neutral-200 sm:block"
          />

          {/* Rating */}
          <div className="flex flex-col items-center justify-center gap-1">
            <motion.div
              variants={sectionVariants}
              className="flex items-center justify-center gap-1"
            >
              {[...Array(5)].map((_, index) => (
                <motion.img
                  key={index}
                  variants={starVariants}
                  whileHover={{
                    scale: 1.25,
                    rotate: 12,
                  }}
                  src={StarIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-5 w-5 object-contain"
                />
              ))}
            </motion.div>

            <motion.p
              variants={fadeUpVariants}
              className="text-center text-sm font-medium text-neutral-600 sm:text-base"
            >
              <span className="text-lg font-bold text-black sm:text-xl">
                230k+
              </span>{" "}
              Happy customers
            </motion.p>
          </div>
        </motion.div>

        {/* Hero content */}
        <motion.div
          variants={sectionVariants}
          className="mt-10 flex max-w-5xl flex-col items-center text-center sm:mt-12"
        >
          <motion.h1
            variants={sectionVariants}
            className="text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-black sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {/* First writing-style line */}
            <span className="block overflow-hidden pb-1">
              <motion.span variants={textLineVariants} className="block">
                Built To Buy,
              </motion.span>
            </span>

            {/* Second writing-style line */}
            <span className="block overflow-hidden pb-2">
              <motion.span variants={textLineVariants} className="block">
                Designed To Delight
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUpVariants}
            className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 sm:mt-7 sm:text-lg sm:leading-8"
          >
            Natural tools and curated products <br /> designed to elevate your
            lifestyle.
          </motion.p>

          {/* Shop button */}
          <motion.div variants={fadeUpVariants} className="mt-8">
            <motion.div
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.96,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 20,
              }}
            >
              <NavLink
                to="/store"
                className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.2)]"
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-neutral-800 transition-transform duration-500 ease-out group-hover:scale-x-100" />

                <span className="relative z-10">Shop</span>

                <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:rotate-45">
                  <img
                    src={vectorIcon}
                    alt=""
                    aria-hidden="true"
                    className="h-3.5 w-3.5 object-contain"
                  />
                </span>
              </NavLink>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
