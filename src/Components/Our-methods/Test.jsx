import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

import Test1 from "../../assets/Our-Methods-Page-imgs/Test-1.png";
import Test2 from "../../assets/Our-Methods-Page-imgs/Test-2.png";
import Test3 from "../../assets/Our-Methods-Page-imgs/Test-3.jpg";
import Test4 from "../../assets/Our-Methods-Page-imgs/Test-4.png";
import Test5 from "../../assets/Our-Methods-Page-imgs/Test-5.png";

const testimonials = [
  {
    id: 1,
    image: Test1,
    name: "Lina Johnson",
    text: "I’ve never felt this confident without makeup before. This serum is truly a game changer for my skin!",
    rating: 4,
    featured: true,
  },
  {
    id: 2,
    image: Test2,
    name: "Sofia Davis",
    text: "I’ve tried so many moisturizers, but this one actually keeps my skin glowing all day. Totally obsessed!",
    rating: 5,
    featured: false,
  },
  {
    id: 3,
    image: Test3,
    name: "Emily Roberts",
    text: "This cleanser completely transformed my routine. It leaves my face feeling so fresh without drying it out.",
    rating: 4,
    featured: true,
  },
  {
    id: 4,
    image: Test4,
    name: "Jade Miller",
    text: "I noticed a difference within just a few days. My skin feels smoother, clearer, and so refreshed.",
    rating: 5,
    featured: false,
  },
  {
    id: 5,
    image: Test5,
    name: "Hannah Lee",
    text: "Finally found a product that understands my skin. It’s gentle, effective, and absolutely worth every cent.",
    rating: 5,
    featured: true,
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const containerAnimation = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function Rating({ rating }) {
  return (
    <div
      className="flex items-center gap-1"
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={17}
          strokeWidth={2}
          className={
            star <= rating
              ? "fill-[#ff4f45] text-[#ff4f45]"
              : "fill-neutral-200 text-neutral-200"
          }
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`group relative overflow-hidden rounded-[14px] ${
        testimonial.featured
          ? "min-h-[290px] p-2.5 sm:p-3"
          : "border border-neutral-200 bg-[#f8f8f8] p-5 sm:p-7"
      }`}
      style={
        testimonial.featured
          ? {
              backgroundImage: `url(${testimonial.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }
          : undefined
      }
    >
      <div
        className={`flex h-full min-h-[265px] flex-col rounded-[11px] ${
          testimonial.featured
            ? "bg-white/95 p-5 shadow-sm backdrop-blur-[2px] sm:p-7"
            : ""
        }`}
      >
        {/* Customer Image */}
        <div className="mb-6">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="h-11 w-11 rounded-full border border-white object-cover shadow-sm"
          />
        </div>

        {/* Testimonial */}
        <p className="max-w-[340px] text-[15px] leading-6 text-neutral-600 sm:text-base">
          “{testimonial.text}”
        </p>

        {/* Rating */}
        <div className="mt-6">
          <Rating rating={testimonial.rating} />
        </div>

        {/* Name */}
        <div className="mt-auto border-t border-neutral-200 pt-5">
          <h3 className="text-sm font-semibold text-neutral-900 sm:text-base">
            {testimonial.name}
          </h3>
        </div>
      </div>
    </motion.article>
  );
}

export default function Test() {
  return (
    <section className="overflow-hidden bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-semibold tracking-[0.05em] text-neutral-700 sm:text-sm">
            Testimonials
          </span>

          <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-4xl lg:text-5xl">
            Hear What Our Customers
            <br />
            Are Saying
          </h2>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-neutral-600 sm:text-base">
            Our testimonials reflect genuine experiences from customers.
          </p>
        </motion.div>

        {/* Testimonial Grid */}
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3"
        >
          <TestimonialCard testimonial={testimonials[0]} />
          <TestimonialCard testimonial={testimonials[1]} />
          <TestimonialCard testimonial={testimonials[2]} />
          <TestimonialCard testimonial={testimonials[3]} />
          <TestimonialCard testimonial={testimonials[4]} />
        </motion.div>
      </div>
    </section>
  );
}
