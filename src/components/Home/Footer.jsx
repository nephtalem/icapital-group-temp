"use client"

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import IcapitalLogo from "@/assets/icapital-logo-img.png";

const Footer = () => {
  return (
    <footer className="bg-[#1D3656] px-4 py-10 text-white md:px-12">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Logo and About */}
        <div>
          <Image
            src={IcapitalLogo}
            alt="Icapital Logo"
            width={120}
            height={60}
            className="mb-4 object-contain"
          />
          <p className="max-w-xs text-sm">
            To become a Go-to Partner for HR and Development partnership
            solution in East Africa
          </p>
          <div className="mt-4 flex space-x-4">
            <Link href="#" className="text-white hover:text-gray-400">
              <FaLinkedin size={18} />
            </Link>
            <Link href="#" className="text-white hover:text-gray-400">
              <FaFacebook size={18} />
            </Link>
            <Link href="#" className="text-white hover:text-gray-400">
              <FaTwitter size={18} />
            </Link>
            <Link href="#" className="text-white hover:text-gray-400">
              <FaInstagram size={18} />
            </Link>
            <Link href="#" className="text-white hover:text-gray-400">
              <FaTelegram size={18} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-gray-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <MdPhone size={18} />
              <span>+251 1108080</span>
            </li>
            <li className="flex items-center gap-2">
              <MdEmail size={18} />
              <span>contact@icapitalafrica.org</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 flex items-center justify-between border-t border-gray-600 pt-6">
        {/* Copyright Text (Left) */}
        <p className="text-sm">&copy; Copyrights © iCapital Africa 2025</p>

        {/* Scroll to Top Button (Right) */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2D496E] transition duration-300 hover:bg-gray-400"
          aria-label="Scroll to Top"
        >
          <IoIosArrowUp className="text-xl text-white" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
