import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiEye } from "react-icons/fi";

import img2 from "../../assets/Main-Page-imgs/Img2.jpg";
import img3 from "../../assets/Main-Page-imgs/Img3.png";
import img4 from "../../assets/Main-Page-imgs/Img4.png";
import img5 from "../../assets/Main-Page-imgs/Img5.png";
import img6 from "../../assets/Main-Page-imgs/Img6.png";

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

export default function Hero() {
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? products : products.slice(0, 4);

  return (
    <section className="overflow-hidden bg-white px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid gap-5 border-b border-neutral-200 pb-10 md:grid-cols-2 md:items-end"
        >
          <h2 className="max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-neutral-950 sm:text-4xl lg:text-5xl">
            Browse Our
            <br />
            Product Line Up
          </h2>

          <p className="max-w-md text-sm leading-7 text-neutral-600 sm:text-base md:ml-auto md:text-right">
            Explore our product collection for in-depth details and inspiring
            picks.
          </p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {visibleProducts.map((product, index) => (
              <motion.article
                layout
                key={product.id}
                initial={{ opacity: 0, y: 35, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.97 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
                className="group"
              >
                {/* Product Image */}
                <div className="relative aspect-[4/4.6] overflow-hidden rounded-[22px] bg-neutral-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:blur-[4px]"
                  />

                  {/* Soft Dark Overlay */}
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />

                  {/* Eye Icon */}
                  <button
                    type="button"
                    aria-label={`View ${product.name}`}
                    className="absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 scale-75 items-center justify-center rounded-full bg-white text-xl text-black opacity-0 shadow-xl transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                  >
                    <FiEye />
                  </button>
                </div>

                {/* Product Information */}
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-neutral-500 sm:text-sm">
                      {product.title}
                    </p>

                    <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-neutral-950 sm:text-xl">
                      {product.name}
                    </h3>
                  </div>

                  <p className="shrink-0 pt-1 text-sm font-medium text-neutral-800 sm:text-base">
                    {product.price}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* See More Button */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex justify-center"
        >
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            className="group inline-flex items-center gap-3 rounded-full border border-black bg-black px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            {showAll ? "Show Less" : "See More"}

            <FiArrowRight
              className={`text-base transition-transform duration-300 ${
                showAll ? "-rotate-90" : "group-hover:translate-x-1"
              }`}
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
