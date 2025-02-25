import Image from "next/image";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import IcapitalLogo from "@/assets/i-logo.png";

const Header = () => {
  return (
    <header className="absolute left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-4 md:px-12 ">
      <div className="relative h-12 w-32">
        <Image
          src={IcapitalLogo}
          alt="Capital Institute Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex items-center space-x-4 text-white">
        <FaEnvelope className="text-lg" />
        <FaPhone className="text-lg" />
      </div>
    </header>
  );
};

export default Header;
