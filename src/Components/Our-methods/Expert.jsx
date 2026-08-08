import React from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

import Per1 from "../../assets/Our-Methods-Page-imgs/Per-1.jpg";
import Per2 from "../../assets/Our-Methods-Page-imgs/Per-2.png";
import Per3 from "../../assets/Our-Methods-Page-imgs/Per-3.png";

const experts = [
  {
    id: 1,
    image: Per1,
    title: "Founder & Creative Director",
    name: "Sophia Carter",
  },
  {
    id: 2,
    image: Per2,
    title: "Product Formulation Expert",
    name: "Emma Johnson",
  },
  {
    id: 3,
    image: Per3,
    title: "Skincare Specialist",
    name: "Olivia Bennett",
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
      staggerChildren: 0.14,
    },
  },
};

export default function Expert() {
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
          <span className="inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-700 sm:text-sm">
            Experts
          </span>

          <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-4xl lg:text-5xl">
            Meet The People Who Make Everything Possible
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
            At Essential, we believe beauty should feel effortless and
            empowering.
          </p>
        </motion.div>

        {/* Expert Cards */}
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3"
        >
          {experts.map((expert) => (
            <motion.article key={expert.id} variants={fadeUp} className="group">
              {/* Expert Image */}
              <div className="relative overflow-hidden rounded-[24px] bg-neutral-100">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="h-[390px] w-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:blur-[2px] sm:h-[430px] lg:h-[480px]"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/25">
                  <div className="flex h-14 w-14 scale-75 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-xl transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                    <Eye size={22} />
                  </div>
                </div>
              </div>

              {/* Expert Information */}
              <div className="pt-5">
                <span className="inline-flex rounded-full bg-green-100 px-3.5 py-1.5 text-xs font-semibold text-green-700">
                  {expert.title}
                </span>

                <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-neutral-950 sm:text-2xl">
                  {expert.name}
                </h3>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
