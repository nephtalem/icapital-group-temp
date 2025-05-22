"use client";

import Image from "next/image";
import IcapitalLogo from "@/assets/i-logo.png";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

type HeaderProps = {
  iconColor?: string; // Optional prop for icon color (e.g., "text-black", "text-red-500")
};

const Header = ({ iconColor = "text-white" }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const mainLinks = [
    { name: "Group Sectors", href: "/#sectors" },
    { name: "About Group", href: "/#about" },
    { name: "Features", href: "/#features" },
    { name: "News and Updates", href: "/news" },
    { name: "Our Journey", href: "/#journey" },
    { name: "Portfolio", href: "/#portfolio" },
  ];
  const contactLink = { name: "Contact Us", href: "/#contact" };

  // Framer Motion variants for nav links
  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.08 * i, duration: 0.4, ease: "easeOut" },
    }),
  };

  const pulseAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <header
      className="absolute left-0 top-0 z-50 w-full px-4 py-4 md:px-12"
      style={{
        background: "rgba(37, 62, 94, 0.32)",
        backdropFilter: "blur(4px)",
      }}
    >
      <div className="flex w-full items-center justify-between">
        {/* Logo */}
        <div className="relative h-14 w-40 flex-shrink-0">
          <Link href="/">
            <Image
              src={IcapitalLogo}
              alt="Capital Institute Logo"
              layout="fill"
              objectFit="contain"
            />
          </Link>
        </div>
        {/* Centered Nav Links with animation */}
        <nav
          className={`hidden flex-1 items-center justify-center space-x-8 text-lg font-medium md:flex ${iconColor}`}
        >
          {mainLinks.map((link, i) => (
            <motion.div
              key={link.name}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={navVariants}
            >
              <Link
                href={link.href}
                className="group relative px-2 py-1 transition-colors duration-300 hover:text-orange-300"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange-300 transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </nav>
        {/* Contact Us - right aligned with animation */}
        <div className="hidden flex-shrink-0 items-center justify-end md:flex">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
          >
            <motion.div
              initial="initial"
              animate="animate"
              variants={pulseAnimation}
            >
              <Link
                href={contactLink.href}
                className="ml-6 rounded-full bg-gradient-to-r from-orange-400 to-orange-300 px-6 py-2 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-orange-300/30"
              >
                {contactLink.name}
              </Link>
            </motion.div>
          </motion.div>
        </div>
        {/* Mobile menu button */}
        <button
          className="ml-auto text-white md:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-[200] flex flex-col md:hidden">
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/80" />
            <div className="relative flex h-full min-h-screen flex-col bg-[#253E5E]/90 shadow-2xl">
              <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="flex h-full min-h-screen flex-col">
                  <div className="flex items-center justify-between px-4 py-4">
                    <div className="relative h-10 w-32">
                      <Image
                        src={IcapitalLogo}
                        alt="Capital Institute Logo"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <button
                      onClick={() => setMenuOpen(false)}
                      aria-label="Close menu"
                    >
                      <svg
                        className="h-7 w-7 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <nav className="flex flex-1 flex-col items-center justify-center space-y-4 text-lg font-semibold">
                    {mainLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="group relative w-full px-4 py-3 text-center text-white transition-colors duration-300 hover:text-orange-300"
                      >
                        {link.name}
                        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange-300 transition-all duration-300 group-hover:w-full" />
                      </Link>
                    ))}
                    <motion.div
                      initial="initial"
                      animate="animate"
                      variants={pulseAnimation}
                    >
                      <Link
                        href={contactLink.href}
                        onClick={() => setMenuOpen(false)}
                        className="w-full rounded-full bg-gradient-to-r from-orange-400 to-orange-300 px-4 py-3 text-center font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-orange-300/30"
                      >
                        {contactLink.name}
                      </Link>
                    </motion.div>
                  </nav>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
