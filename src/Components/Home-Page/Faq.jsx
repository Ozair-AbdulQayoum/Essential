import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaChevronDown } from "react-icons/fa6";

const faqData = [
  {
    id: 1,
    question: "What products does your store offer?",
    answer:
      "Our store offers a curated selection of skincare products crafted to nourish, protect, and enhance your natural glow, no matter your skin type or routine.",
  },
  {
    id: 2,
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship worldwide. Shipping fees and delivery times vary depending on your location. Check our shipping policy for more details.",
  },
  {
    id: 3,
    question: "What is your return policy?",
    answer:
      "We offer hassle-free returns within 30 days of purchase for unworn and unused items with the original tags still attached. Visit our return policy page for more information.",
  },
  {
    id: 4,
    question: "Do you offer discounts or promotions?",
    answer:
      "Yes. Subscribe to our newsletter and follow us on social media to stay updated on the latest sales, promotions, and exclusive offers.",
  },
  {
    id: 5,
    question: "How can I track my order?",
    answer:
      "Once your order has shipped, you will receive a tracking number by email so you can monitor your package throughout its journey.",
  },
];

export default function Faq() {
  const [activeQuestion, setActiveQuestion] = useState(1);

  const toggleQuestion = (id) => {
    setActiveQuestion((currentQuestion) =>
      currentQuestion === id ? null : id,
    );
  };

  return (
    <section className="overflow-hidden bg-white px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-neutral-300 bg-neutral-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700 sm:text-sm">
            FAQs
          </span>

          <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.03em] text-neutral-950 sm:text-4xl lg:text-5xl">
            Your Questions Answered
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
            Here are the most common questions customers ask before buying from
            us.
          </p>

          <a
            href="/contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-full border border-black bg-black px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            Get In Touch
            <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="mx-auto mt-14 max-w-4xl border-t border-neutral-200 lg:mt-20"
        >
          {faqData.map((faq, index) => {
            const isOpen = activeQuestion === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="border-b border-neutral-200"
              >
                <button
                  type="button"
                  onClick={() => toggleQuestion(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
                >
                  <span className="text-base font-semibold leading-7 text-neutral-950 transition-colors duration-300 group-hover:text-neutral-600 sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-black bg-black text-white"
                        : "border-neutral-300 bg-white text-black group-hover:border-black"
                    }`}
                  >
                    <FaChevronDown
                      className={`text-sm transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </span>
                </button>

                <div
                  id={`faq-answer-${faq.id}`}
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pb-7 pr-12 text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
