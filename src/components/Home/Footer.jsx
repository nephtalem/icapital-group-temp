import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#253E5E] py-10 text-white ">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-4">
        {/* Logo Section */}
        <div>
          <Image
            src="/icapital-logo.png"
            alt="Icapital Logo"
            width={80}
            height={60}
            className="mb-4 object-contain"
          />
          <p className="text-sm">
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
          <div className="mt-4 flex space-x-4 ">
            <Link href="#" className="text-white hover:text-gray-400">
              <FaFacebook />
            </Link>
            <Link href="#" className="text-white hover:text-gray-400">
              <FaLinkedin />
            </Link>
            <Link href="#" className="text-white hover:text-gray-400">
              <FaTwitter />
            </Link>
            <Link href="#" className="text-white hover:text-gray-400">
              <FaInstagram />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Pricing Plans
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                UI/UX Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Branding
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Illustration
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Design Concept
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                App Design
              </a>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Product</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                Figma
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Adobe
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Dribbble
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Behance
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Themeforest
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6">
        <div className="container mx-auto flex flex-col items-center justify-center gap-10 md:flex-row">
          <p className="text-sm">
            &copy; 2025 All Rights Reserved. The i-Capital Africa Institute
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
