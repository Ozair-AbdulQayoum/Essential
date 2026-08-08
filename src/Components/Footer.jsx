import React from "react";
import { motion } from "framer-motion";

import Logo from "../assets/Main-Page-imgs/Logo.jpg";
import XIcon from "../assets/Main-Page-imgs/X.svg";
import InstagramIcon from "../assets/Main-Page-imgs/inst.svg";
import TikTokIcon from "../assets/Main-Page-imgs/tik.svg";

const footerColumns = [
  {
    id: 1,
    title: "Main Pages",
    links: [
      { name: "Home", href: "/" },
      { name: "Store", href: "/store" },
      { name: "Blog", href: "/blog" },
      { name: "Our Methods", href: "/methods" },
      { name: "Support", href: "/support" },
    ],
  },
  {
    id: 2,
    title: "Other Pages",
    links: [
      { name: "Product", href: "/product" },
      { name: "Blog", href: "/blog" },
      { name: "Expert", href: "/expert" },
    ],
  },
  {
    id: 3,
    title: "Information",
    links: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms & Conditions", href: "/terms-conditions" },
      { name: "Return Policy", href: "/return-policy" },
    ],
  },
];

const socialLinks = [
  {
    id: 1,
    name: "X",
    icon: XIcon,
    href: "https://x.com",
  },
  {
    id: 2,
    name: "Instagram",
    icon: InstagramIcon,
    href: "https://instagram.com",
  },
  {
    id: 3,
    name: "TikTok",
    icon: TikTokIcon,
    href: "https://tiktok.com",
  },
];

const containerAnimation = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const itemAnimation = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-white px-5 pt-16 text-black sm:px-8 lg:pt-20">
      <motion.div
        variants={containerAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto max-w-[1500px]"
      >
        {/* Main Footer Content */}
        <div className="grid gap-14 pb-14 md:grid-cols-[1.3fr_2fr] lg:gap-24 lg:pb-20">
          {/* Left Side */}
          <motion.div variants={itemAnimation} className="max-w-md">
            <a href="/" aria-label="Go to homepage" className="inline-flex">
              <img
                src={Logo}
                alt="Essential logo"
                className="h-12 w-auto rounded-md object-contain sm:h-14"
              />
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-neutral-600 sm:text-base">
              Framer template crafted for eCommerce brands ready to elevate
              their online presence and drive more sales.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white transition-all duration-300 hover:border-black hover:bg-black"
                >
                  <img
                    src={social.icon}
                    alt=""
                    className="h-4 w-4 object-contain transition duration-300 group-hover:invert"
                  />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Footer Columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <motion.div key={column.id} variants={itemAnimation}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.13em] text-black">
                  {column.title}
                </h3>

                <ul className="mt-6 space-y-4">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="group relative block h-6 w-fit overflow-hidden text-sm text-neutral-600 sm:text-base"
                      >
                        {/* Normal Text */}
                        <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                          {link.name}
                        </span>

                        {/* Hover Text */}
                        <span className="absolute left-0 top-full block font-medium text-black transition-transform duration-300 ease-out group-hover:-translate-y-full">
                          {link.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Information */}
        <motion.div
          variants={itemAnimation}
          className="flex flex-col gap-4 border-t border-neutral-200 py-7 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between sm:text-base"
        >
          <p>Copyright © {new Date().getFullYear()} All rights reserved</p>

          <p className="flex items-center gap-1">
            Design by
            <a
              href="#"
              className="group relative inline-block h-6 overflow-hidden font-medium text-black"
            >
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                Ozair Noori
              </span>

              <span className="absolute left-0 top-full block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                Ozair Noori
              </span>
            </a>
          </p>
        </motion.div>

        {/* Large Essential Text */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative flex h-[150px] items-end justify-center overflow-hidden sm:h-[220px] lg:h-[300px]"
        >
          <h2
            className="
              translate-y-[18%]
              whitespace-nowrap
              text-center
              text-[19vw]
              font-semibold
              uppercase
              leading-none
              tracking-[-0.07em]
              text-transparent
              sm:text-[18vw]
              lg:text-[17vw]
            "
            style={{
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              backgroundImage:
                "linear-gradient(to bottom, #737373 0%, #a3a3a3 38%, #d4d4d4 68%, rgba(255,255,255,0) 100%)",
            }}
          >
            Essential
          </h2>
        </motion.div>
      </motion.div>
    </footer>
  );
}
