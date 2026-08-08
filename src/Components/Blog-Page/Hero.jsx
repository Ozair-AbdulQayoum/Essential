import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";

import img1 from "../../assets/Main-Page-imgs/Blog-Img-1.jpg";
import per1 from "../../assets/Main-Page-imgs/Blog1.png";
import img2 from "../../assets/Main-Page-imgs/Blog-Img-2.jpg";
import img3 from "../../assets/Main-Page-imgs/Blog-Img-3.png";
import img4 from "../../assets/Main-Page-imgs/Blog-Img-4.png";

const blogs = [
  {
    id: 1,
    img: img2,
    category: "Glow Guide",
    time: "7 min read",
  },
  {
    id: 2,
    img: img3,
    category: "Skin Health",
    time: "6 min read",
  },
  {
    id: 3,
    img: img4,
    category: "Lifestyle",
    time: "8 min read",
  },
];

const animation = {
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

export default function Blog() {
  const [showAll, setShowAll] = useState(false);

  const visibleBlogs = showAll ? blogs : blogs.slice(0, 2);

  return (
    <section className="overflow-hidden bg-white px-5 py-16 sm:px-8 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 grid gap-6 border-b border-neutral-200 pb-10 md:grid-cols-2 md:items-end"
        >
          <h2 className="max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-neutral-950 sm:text-4xl lg:text-5xl">
            Browse Our
            <br />
            Latest Beauty Reads
          </h2>

          <p className="max-w-md text-sm leading-7 text-neutral-600 sm:text-base md:ml-auto md:text-right">
            Browse our curated collection for detailed insights and inspiring
            ideas.
          </p>
        </motion.div>

        {/* Featured Blog */}
        <motion.article
          variants={animation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mb-16 grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
        >
          {/* Featured Image */}
          <div className="group relative overflow-hidden rounded-[26px] bg-neutral-100">
            <img
              src={img1}
              alt="Featured skincare article"
              className="h-[320px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[420px]"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
              <div className="flex h-14 w-14 scale-75 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-xl transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                <Eye size={22} />
              </div>
            </div>
          </div>

          {/* Featured Content */}
          <div>
            <p className="mb-3 text-sm font-semibold text-green-700">
              Skincare Tips
            </p>

            <h3 className="mb-5 text-2xl font-semibold leading-snug tracking-[-0.03em] text-neutral-950 sm:text-3xl lg:text-4xl">
              Expert advice and simple routines to keep your skin healthy and
              glowing every day
            </h3>

            <p className="mb-8 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base">
              Discover professional skincare techniques, easy routines, and
              beauty secrets designed for your everyday lifestyle.
            </p>

            <div className="flex flex-col gap-5 border-t border-neutral-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={per1}
                  alt="Sarah Johnson"
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div>
                  <p className="font-medium text-neutral-950">Sarah Johnson</p>

                  <p className="mt-0.5 text-sm text-neutral-500">
                    Beauty Expert
                  </p>
                </div>
              </div>

              <span className="text-sm text-neutral-500">5 min read</span>
            </div>
          </div>
        </motion.article>

        {/* Other Blogs */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {visibleBlogs.map((blog, index) => (
              <motion.article
                layout
                key={blog.id}
                initial={{ opacity: 0, y: 35, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.97 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="group"
              >
                {/* Blog Image */}
                <div className="relative overflow-hidden rounded-[22px] bg-neutral-100">
                  <img
                    src={blog.img}
                    alt={blog.category}
                    className="h-64 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/35">
                    <div className="flex h-14 w-14 scale-75 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-xl transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                      <Eye size={22} />
                    </div>
                  </div>
                </div>

                {/* Time and Category Under Image */}
                <div className="mt-5">
                  <span className="block text-sm text-neutral-500">
                    {blog.time}
                  </span>

                  <p className="mt-2 text-base font-semibold text-green-700">
                    {blog.category}
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

            <ArrowRight
              size={18}
              className={`transition-transform duration-300 ${
                showAll ? "-rotate-90" : "group-hover:translate-x-1"
              }`}
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
