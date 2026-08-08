import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FiEye } from "react-icons/fi";

import img2 from "../../assets/Main-Page-imgs/Img2.jpg";
import img3 from "../../assets/Main-Page-imgs/Img3.png";
import img4 from "../../assets/Main-Page-imgs/Img4.png";
import img5 from "../../assets/Main-Page-imgs/Img5.png";
import img6 from "../../assets/Main-Page-imgs/Img6.png";
import VictorIcon from "../../assets/Main-Page-imgs/Victor.svg";

const products = [
  {
    id: 1,
    image: img2,
    name: "Lustre Dew Elixir",
    title: "Veloura Skincare",
    price: "USD $109.00",
  },
  {
    id: 2,
    image: img3,
    name: "Hydrating Day Cream",
    title: "Aera Beauty",
    price: "USD $52.00",
  },
  {
    id: 3,
    image: img4,
    name: "Gentle Foaming Cleanser",
    title: "Nature Iris",
    price: "USD $159.00",
  },
  {
    id: 4,
    image: img5,
    name: "Replenishing Night Balm",
    title: "Eluna Botanicals",
    price: "USD $112.00",
  },
  {
    id: 5,
    image: img6,
    name: "Brightening Toner",
    title: "Serenys Skin",
    price: "USD $210.00",
  },
];

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const productImageVariants = {
  initial: {
    scale: 1,
    filter: "blur(0px)",
  },

  hover: {
    scale: 1.07,
    filter: "blur(3px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageOverlayVariants = {
  initial: {
    opacity: 0,
  },

  hover: {
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

const eyeIconVariants = {
  initial: {
    opacity: 0,
    scale: 0.5,
    y: 20,
    rotate: -15,
  },

  hover: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 280,
      damping: 18,
      delay: 0.05,
    },
  },
};

export default function Store() {
  return (
    <section className="w-full bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        {/* Section header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          {/* Left content */}
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700">
              Store
            </span>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-[1.1] tracking-[-0.035em] text-black sm:text-4xl md:text-5xl lg:text-[58px]">
              Find Products That Perfectly Match Your Lifestyle
            </h2>
          </div>

          {/* View all button */}
          <motion.div
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="shrink-0"
          >
            <NavLink
              to="/store"
              className="group inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
            >
              <span>View all</span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black transition-all duration-300 group-hover:rotate-45 group-hover:bg-white">
                <img
                  src={VictorIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-3.5 w-3.5 object-contain invert transition duration-300 group-hover:invert-0"
                />
              </span>
            </NavLink>
          </motion.div>
        </motion.div>

        {/* Products */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:mt-16 sm:grid-cols-2 lg:grid-cols-6"
        >
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              variants={itemVariants}
              className={`group ${
                index < 3 ? "lg:col-span-2" : "lg:col-span-3"
              }`}
            >
              {/* Product image */}
              <NavLink to={`/store/${product.id}`} className="block">
                <motion.div
                  initial="initial"
                  whileHover="hover"
                  className="relative overflow-hidden rounded-[24px] bg-neutral-100 sm:rounded-[28px]"
                >
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    variants={productImageVariants}
                    className={`w-full object-cover ${
                      index < 3
                        ? "h-[340px] sm:h-[380px] lg:h-[430px]"
                        : "h-[340px] sm:h-[430px] lg:h-[520px]"
                    }`}
                  />

                  {/* Dark blur overlay */}
                  <motion.div
                    variants={imageOverlayVariants}
                    className="pointer-events-none absolute inset-0 bg-black/20 backdrop-blur-[1px]"
                  />

                  {/* Eye icon */}
                  <motion.div
                    variants={eyeIconVariants}
                    className="pointer-events-none absolute inset-0 flex items-center justify-center"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white/90 text-2xl text-black shadow-[0_15px_40px_rgba(0,0,0,0.2)] backdrop-blur-md">
                      <FiEye />
                    </span>
                  </motion.div>

                  {/* Bottom soft gradient */}
                  <motion.div
                    variants={imageOverlayVariants}
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/25 to-transparent"
                  />
                </motion.div>
              </NavLink>

              {/* Product information */}
              <div className="mt-5 flex items-start justify-between gap-4">
                {/* Product name and title */}
                <div className="min-w-0">
                  <NavLink to={`/store/${product.id}`}>
                    <h3 className="text-lg font-bold leading-snug text-black transition-opacity duration-300 group-hover:opacity-60 sm:text-xl">
                      {product.name}
                    </h3>
                  </NavLink>

                  <p className="mt-2 text-sm font-normal leading-6 text-neutral-500 sm:text-base">
                    {product.title}
                  </p>
                </div>

                {/* Price */}
                <span className="shrink-0 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs font-semibold text-black sm:text-sm">
                  {product.price}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
