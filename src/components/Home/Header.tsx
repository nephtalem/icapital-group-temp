import Image from "next/image";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import IcapitalLogo from "@/assets/i-logo.png";
import Link from "next/link";

type HeaderProps = {
  iconColor?: string; // Optional prop for icon color (e.g., "text-black", "text-red-500")
};

const Header = ({ iconColor = "text-white" }: HeaderProps) => {
  return (
    <header className="absolute left-0 top-0 z-50 flex w-full items-center justify-between px-4 py-4 md:px-12">
      <div className="relative h-12 w-32">
        <Link href="/">
          <Image
            src={IcapitalLogo}
            alt="Capital Institute Logo"
            layout="fill"
            objectFit="contain"
          />
        </Link>
      </div>
      <div className={`flex items-center space-x-4 md:space-x-8 ${iconColor}`}>
        <FaEnvelope className="text-lg" />
        <FaPhone className="text-lg" />
      </div>
    </header>
  );
};

export default Header;
