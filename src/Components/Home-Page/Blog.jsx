import React from "react";

import img1 from "../../assets/Main-Page-imgs/Blog-Img-1.jpg";
import per1 from "../../assets/Main-Page-imgs/Blog1.png";
import img2 from "../../assets/Main-Page-imgs/Blog-Img-2.jpg";
import img3 from "../../assets/Main-Page-imgs/Blog-Img-3.png";
import img4 from "../../assets/Main-Page-imgs/Blog-Img-4.png";

import { ArrowUpRight, Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function Blog() {
  const blogs = [
    {
      img: img2,
      category: "Glow guide",
      time: "7 min read",
    },
    {
      img: img3,
      category: "Skin Health",
      time: "6 min read",
    },
    {
      img: img4,
      category: "Lifestyle",
      time: "8 min read",
    },
  ];

  const animation = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20">
      {/* Header */}
      <motion.div
        variants={animation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex justify-between items-end mb-12"
      >
        <div>
          <span className="inline-block px-4 py-1 text-sm rounded-full bg-green-100 text-green-700 mb-4">
            Blog
          </span>

          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 max-w-xl">
            Explore Beauty Reads Tailored to Your Lifestyle
          </h2>
        </div>

        <button className="group flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full border border-black transition-all duration-300 hover:bg-white hover:text-black">
          View All
          <ArrowUpRight
            size={18}
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
          />
        </button>
      </motion.div>

      {/* Featured Blog */}

      <motion.div
        variants={animation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-10 items-center mb-16"
      >
        <div className="overflow-hidden rounded-3xl">
          <img
            src={img1}
            alt="Featured blog"
            className="w-full h-[420px] object-cover hover:scale-105 transition duration-500"
          />
        </div>

        <div>
          <p className="text-green-600 font-medium mb-3">Skincare Tips</p>

          <h3 className="text-3xl font-semibold text-gray-900 leading-snug mb-4">
            Expert advice and simple routines to keep your skin healthy and
            glowing every day
          </h3>

          <p className="text-gray-600 leading-relaxed mb-8">
            Discover professional skincare techniques, easy routines, and beauty
            secrets designed for your everyday lifestyle.
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={per1}
                alt="Author"
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <p className="font-medium text-gray-900">Sarah Johnson</p>

                <p className="text-sm text-gray-500">Beauty Expert</p>
              </div>
            </div>

            <span className="text-sm text-gray-500">5 min read</span>
          </div>
        </div>
      </motion.div>

      {/* Other Blogs */}

      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <motion.article
            key={index}
            variants={animation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="text-center"
          >
            {/* Image Hover */}

            <div className="relative overflow-hidden rounded-2xl group">
              <img
                src={blog.img}
                alt="blog"
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <div className="bg-white p-3 rounded-full">
                  <Eye size={22} />
                </div>
              </div>
            </div>

            <p className="text-green-600 text-sm font-medium mt-5 mb-2">
              {blog.category}
            </p>

            <span className="text-sm text-gray-500">{blog.time}</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
