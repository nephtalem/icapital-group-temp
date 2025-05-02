"use client";

import { FC, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface HeaderProps {
  logo?: string | StaticImageData;
  linkColor?: string;
  linkActiveColor?: string;
  buttonBorderColor?: string;
  buttonTextColor?: string;
}

const Header: FC<HeaderProps> = ({
  logo = "/images/eafs-logo.png",
  linkColor = "#FFFFFF",
  linkActiveColor = "#FFFFFF",
  buttonBorderColor = "#FFFFFF",
  buttonTextColor = "#FFFFFF",
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [pathname, setPathname] = useState("");

  const navLinks = [
    { name: "Previous Summits", href: "/previous-summits" },
    { name: "Upcoming Summits", href: "/upcoming-summits" },
    { name: "Summit Documents", href: "/summit-documents" },
    { name: "Photo Gallery", href: "/photo-gallery" },
  ];

  useEffect(() => {
    setMounted(true);
    setPathname(window.location.pathname);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => {
    if (!mounted) return false;
    return pathname === path;
  };

  if (!mounted) {
    return null; // Return nothing on the server side
  }

  return (
    <header
      className={`w-full bg-transparent py-4 transition-all duration-300`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="transition-opacity duration-300 hover:opacity-80"
            >
              <Image
                src={logo}
                alt="East African Finance Summit"
                width={150}
                height={90}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-2 text-base font-medium transition-all duration-300 ${active ? "font-semibold" : ""} group`}
                  style={{
                    color: active ? linkActiveColor : linkColor,
                  }}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 w-full transform transition-all duration-300 group-hover:scale-x-100 ${active ? "scale-x-100" : "scale-x-0"}`}
                    style={{
                      backgroundColor: linkActiveColor,
                      transformOrigin: "center",
                    }}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="rounded-full border-2 px-6 py-2 text-sm font-medium transition-all duration-300 hover:bg-white hover:text-blue-900"
              style={{
                borderColor: buttonBorderColor,
                color: buttonTextColor,
              }}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex items-center p-2 transition-opacity duration-300 hover:opacity-80 md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            style={{ color: linkColor }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="mt-4 rounded-lg bg-blue-900 bg-opacity-90 py-4 md:hidden">
            <nav className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`py-2 text-base font-medium transition-colors duration-300 ${active ? "font-semibold" : ""}`}
                    style={{
                      color: active ? linkActiveColor : linkColor,
                      borderLeft: active
                        ? `3px solid ${linkActiveColor}`
                        : "none",
                      paddingLeft: active ? "8px" : "0",
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="w-full rounded-full border-2 px-6 py-2 text-center text-sm font-medium transition-all duration-300 hover:bg-white hover:text-blue-900"
                style={{
                  borderColor: buttonBorderColor,
                  color: buttonTextColor,
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
