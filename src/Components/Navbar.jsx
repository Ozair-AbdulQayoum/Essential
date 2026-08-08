import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

import Logo from "../assets/Main-Page-imgs/Logo.jpg";
import icon from "../assets/Main-Page-imgs/Victor.svg";

const navLinks = [
  { name: "Store", path: "/store" },
  { name: "Blog", path: "/blog" },
  { name: "Our-methods", path: "/our-methods" },
  { name: "Support", path: "/support" },
];

const mobileMenuVariants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
      when: "afterChildren",
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },

  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const mobileLinkVariants = {
  hidden: {
    opacity: 0,
    x: -24,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 24,
    },
  },
};

const overlayVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.25,
    },
  },
};

const flipTextVariants = {
  initial: {
    y: "0%",
    rotateX: 0,
  },

  hover: {
    y: "-100%",
    rotateX: 90,
  },
};

const secondFlipTextVariants = {
  initial: {
    y: "0%",
    rotateX: -90,
  },

  hover: {
    y: "-100%",
    rotateX: 0,
  },
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((previousState) => !previousState);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.button
            type="button"
            aria-label="Close navigation menu"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={closeMenu}
            className="fixed inset-x-0 bottom-0 top-[76px] z-40 cursor-default bg-black/35 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      <motion.header
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="sticky top-0 z-50 w-full bg-white/90 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl"
      >
        <nav className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* Logo */}
          <NavLink
            to="/"
            onClick={closeMenu}
            aria-label="Go to home page"
            className="shrink-0"
          >
            <motion.img
              src={Logo}
              alt="Company Logo"
              whileHover={{
                scale: 1.06,
                rotate: -1,
              }}
              whileTap={{
                scale: 0.96,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 18,
              }}
              className="h-11 w-auto max-w-[150px] object-contain"
            />
          </NavLink>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <DesktopNavLink key={link.path} link={link} />
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Desktop Shop button */}
            <NavLink to="/store" className="hidden sm:block">
              <motion.div
                whileHover={{
                  y: -3,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 18,
                }}
                className="group flex items-center gap-3 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-[0_10px_25px_rgba(0,0,0,0.16)] transition-colors duration-300 hover:bg-black hover:text-white"
              >
                <span>Shop</span>

                <motion.span
                  whileHover={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-black transition-colors duration-300 group-hover:bg-white"
                >
                  <img
                    src={icon}
                    alt=""
                    aria-hidden="true"
                    className="h-3.5 w-3.5 object-contain invert transition duration-300 group-hover:invert-0"
                  />
                </motion.span>
              </motion.div>
            </NavLink>

            {/* Mobile menu button */}
            <motion.button
              type="button"
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={toggleMenu}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.9,
              }}
              className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl text-black shadow-sm transition-colors duration-300 hover:bg-black hover:text-white lg:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.span
                    key="close-icon"
                    initial={{
                      opacity: 0,
                      rotate: -90,
                      scale: 0.6,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 90,
                      scale: 0.6,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <HiOutlineX />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu-icon"
                    initial={{
                      opacity: 0,
                      rotate: 90,
                      scale: 0.6,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: -90,
                      scale: 0.6,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <HiOutlineMenuAlt3 />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>

        {/* Mobile navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-navigation"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute left-0 right-0 top-full z-50 overflow-hidden bg-white shadow-[0_20px_40px_rgba(0,0,0,0.12)] lg:hidden"
            >
              <div className="mx-auto flex max-w-[1440px] flex-col gap-1 px-5 py-6 sm:px-8">
                {navLinks.map((link) => (
                  <motion.div key={link.path} variants={mobileLinkVariants}>
                    <NavLink
                      to={link.path}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `block px-1 py-4 text-base font-semibold transition-colors duration-300 ${
                          isActive
                            ? "text-black"
                            : "text-neutral-500 hover:text-black"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}

                {/* Mobile Shop button */}
                <motion.div variants={mobileLinkVariants} className="sm:hidden">
                  <NavLink
                    to="/store"
                    onClick={closeMenu}
                    className="group mt-3 flex items-center justify-center gap-3 rounded-2xl border border-neutral-200 bg-white px-5 py-4 font-semibold text-black"
                  >
                    <span>Shop</span>

                    <motion.span
                      animate={{
                        rotate: [0, 12, -12, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "easeInOut",
                      }}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white"
                    >
                      <img
                        src={icon}
                        alt=""
                        aria-hidden="true"
                        className="h-4 w-4 object-contain"
                      />
                    </motion.span>
                  </NavLink>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

function DesktopNavLink({ link }) {
  return (
    <NavLink
      to={link.path}
      className={({ isActive }) =>
        `relative text-[15px] font-semibold transition-colors duration-300 ${
          isActive ? "text-black" : "text-neutral-500 hover:text-black"
        }`
      }
    >
      <motion.span
        initial="initial"
        whileHover="hover"
        className="relative block h-6 overflow-hidden [perspective:600px]"
      >
        <motion.span
          variants={flipTextVariants}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex h-6 origin-bottom items-center justify-center whitespace-nowrap [backface-visibility:hidden]"
        >
          {link.name}
        </motion.span>

        <motion.span
          variants={secondFlipTextVariants}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex h-6 origin-top items-center justify-center whitespace-nowrap [backface-visibility:hidden]"
        >
          {link.name}
        </motion.span>
      </motion.span>
    </NavLink>
  );
}
