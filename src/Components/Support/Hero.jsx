import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronDown, LoaderCircle } from "lucide-react";

import img1 from "../../assets/Support-img.png";

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  const [formData, setFormData] = useState({
    request: "Product return",
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      setFormData({
        request: "Product return",
        fullName: "",
        phone: "",
        email: "",
        message: "",
      });
    }, 900);
  };

  return (
    <section className="overflow-hidden bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.35fr] lg:gap-16">
          {/* Left Side */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Badge */}
            <span className="inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-semibold tracking-[0.08em] text-neutral-700 sm:text-sm">
              Support
            </span>

            {/* Heading */}
            <h1 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-neutral-950 sm:text-5xl lg:text-6xl">
              Answers &amp; Limitless
              <br />
              Support
            </h1>

            {/* Benefits */}
            <div className="mt-7 space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white">
                  <Check size={12} strokeWidth={3} />
                </span>

                <p className="text-sm leading-7 text-neutral-600 sm:text-base">
                  Easy-to-understand help without any confusion.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white">
                  <Check size={12} strokeWidth={3} />
                </span>

                <p className="text-sm leading-7 text-neutral-600 sm:text-base">
                  Access support anytime with 24/7 availability and quick
                  responses.
                </p>
              </div>
            </div>

            {/* FAQ Button */}
            <a
              href="#faqs"
              className="group mt-8 inline-flex items-center gap-3 rounded-full border border-black bg-black px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              Our FAQs
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.75,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="group mt-8 overflow-hidden rounded-[24px] bg-neutral-100"
            >
              <img
                src={img1}
                alt="Essential skincare support"
                className="h-[260px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[320px]"
              />
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="rounded-[24px] border border-neutral-200 bg-neutral-50 p-5 sm:p-8 lg:p-10"
          >
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-neutral-950 sm:text-3xl">
                Drop Us a Line
              </h2>

              <p className="mt-2 text-sm text-neutral-600 sm:text-base">
                We&apos;re here and ready to listen!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {/* Request */}
              <div>
                <label
                  htmlFor="request"
                  className="mb-2 block text-sm font-medium text-neutral-900"
                >
                  Request
                </label>

                <div className="relative">
                  <select
                    id="request"
                    name="request"
                    value={formData.request}
                    onChange={handleChange}
                    className="h-12 w-full appearance-none rounded-xl border border-neutral-200 bg-white px-4 pr-11 text-sm text-neutral-700 outline-none transition-all duration-300 focus:border-neutral-950 focus:ring-2 focus:ring-neutral-950/10"
                  >
                    <option>Product return</option>
                    <option>Order tracking</option>
                    <option>Product information</option>
                    <option>Payment issue</option>
                    <option>General support</option>
                  </select>

                  <ChevronDown
                    size={17}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500"
                  />
                </div>
              </div>

              {/* Name and Phone */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-medium text-neutral-900"
                  >
                    Full name
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Miller"
                    required
                    className="h-12 w-full rounded-xl border border-neutral-200 bg-white px-4 text-sm text-neutral-800 outline-none transition-all duration-300 placeholder:text-neutral-400 focus:border-neutral-950 focus:ring-2 focus:ring-neutral-950/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-neutral-900"
                  >
                    Phone number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+0 000 000 00"
                    className="h-12 w-full rounded-xl border border-neutral-200 bg-white px-4 text-sm text-neutral-800 outline-none transition-all duration-300 placeholder:text-neutral-400 focus:border-neutral-950 focus:ring-2 focus:ring-neutral-950/10"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-neutral-900"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@gmail.com"
                  required
                  className="h-12 w-full rounded-xl border border-neutral-200 bg-white px-4 text-sm text-neutral-800 outline-none transition-all duration-300 placeholder:text-neutral-400 focus:border-neutral-950 focus:ring-2 focus:ring-neutral-950/10"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-neutral-900"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message!"
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm leading-6 text-neutral-800 outline-none transition-all duration-300 placeholder:text-neutral-400 focus:border-neutral-950 focus:ring-2 focus:ring-neutral-950/10"
                />
              </div>

              {/* Success Message */}
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
                >
                  Your message has been submitted successfully.
                </motion.p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-black bg-black px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    Sending
                    <LoaderCircle size={18} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Submit
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
