import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import CardImg1 from "../../assets/Main-Page-imgs/Card-img-1.png";
import CardImg2 from "../../assets/Main-Page-imgs/Card-img-2.png";
import CardImg3 from "../../assets/Main-Page-imgs/Card-img-3.png";
import CardImg4 from "../../assets/Main-Page-imgs/Card-img-4.png";
import CardImg5 from "../../assets/Main-Page-imgs/Card-img-5.png";
import CardImg6 from "../../assets/Main-Page-imgs/Card-img-6.jpg";
import VictorIcon from "../../assets/Main-Page-imgs/Victor.svg";

const features = [
  {
    id: 1,
    label: "Materials",
    title: "Sustainable Elegance",
    description:
      "Thoughtfully crafted from eco-friendly materials, this product reflects a commitment to both style and the planet.",
    images: [
      {
        image: CardImg1,
        label: "Plant Based",
      },
      {
        image: CardImg2,
        label: "Organic",
      },
    ],
  },
  {
    id: 2,
    label: "Sources",
    title: "Natural Integrity",
    description:
      "Built with responsibly sourced components and clean design principles, it blends function, form, and sustainability.",
    images: [
      {
        image: CardImg3,
        label: "All natural",
      },
      {
        image: CardImg4,
        label: "Chemicals free",
      },
    ],
  },
  {
    id: 3,
    label: "Design",
    title: "Conscious Design",
    description:
      "Made using durable, low-impact materials, this piece is as mindful as it is beautifully made—designed to last and leave a lighter footprint.",
    images: [
      {
        image: CardImg5,
        label: "Handled with care",
      },
      {
        image: CardImg6,
        label: "Expert design",
      },
    ],
  },
];

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 40,
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

const imageVariants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Feature() {
  return (
    <section className="w-full overflow-hidden bg-white px-5 py-20 text-black sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        {/* Top content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <motion.span
            variants={fadeUpVariants}
            className="inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700"
          >
            Features
          </motion.span>

          <motion.h2
            variants={fadeUpVariants}
            className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-5xl md:text-6xl lg:text-[70px]"
          >
            Where Timeless Values
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Meet Modern Vision
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8"
          >
            Behind every pixel, product, and project lies a story of dedication.
          </motion.p>

          {/* Our Methods button */}
          <motion.div
            variants={fadeUpVariants}
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
            className="mt-8"
          >
            <NavLink
              to="/our-methods"
              className="group inline-flex items-center gap-3 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(0,0,0,0.18)] transition-all duration-300 hover:bg-neutral-800 hover:shadow-[0_18px_40px_rgba(0,0,0,0.24)]"
            >
              <span>Our Methods</span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:rotate-45">
                <img
                  src={VictorIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-3.5 w-3.5 object-contain"
                />
              </span>
            </NavLink>
          </motion.div>
        </motion.div>

        {/* Feature rows */}
        <div className="mt-20 space-y-20 sm:mt-24 sm:space-y-24 lg:mt-32 lg:space-y-32">
          {features.map((feature) => (
            <motion.article
              key={feature.id}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              className="grid items-center gap-10 border-t border-neutral-200 pt-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:pt-20 xl:gap-24"
            >
              {/* Left content */}
              <motion.div
                variants={fadeUpVariants}
                className="max-w-xl lg:order-1"
              >
                <span className="inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-600">
                  {feature.label}
                </span>

                <h3 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.03em] text-black sm:text-4xl lg:text-5xl">
                  {feature.title}
                </h3>

                <p className="mt-5 max-w-lg text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                  {feature.description}
                </p>

                <div className="mt-8 h-px w-full max-w-sm bg-gradient-to-r from-neutral-300 to-transparent" />
              </motion.div>

              {/* Right image cards */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 items-stretch gap-5 min-[480px]:grid-cols-2 sm:gap-6 lg:order-2"
              >
                {feature.images.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={imageVariants}
                    whileHover={{
                      y: -8,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 20,
                    }}
                    className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-neutral-200 bg-white p-3 shadow-[0_18px_45px_rgba(0,0,0,0.08)] sm:rounded-[32px] sm:p-4"
                  >
                    {/* Card title */}
                    <div className="flex min-h-[72px] items-center px-2 py-3 sm:min-h-[82px] sm:px-3">
                      <h4 className="text-lg font-semibold leading-tight tracking-[-0.02em] text-black sm:text-xl">
                        {item.label}
                      </h4>
                    </div>

                    {/* Equal-sized card image */}
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] bg-neutral-100 sm:rounded-[26px]">
                      <img
                        src={item.image}
                        alt={item.label}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
