import AboutUsImg from "@/assets/about-us.png";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="bg-[#253E5E] px-6 py-16 md:px-12">
      <div className="container mx-auto flex flex-col items-center gap-12 md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <div className="relative h-[400px] w-full">
            <Image
              src={AboutUsImg}
              alt="About Us"
              layout="fill"
              objectFit="cover"
              className="rounded-tl-[70px] shadow-xl"
            />
          </div>
        </div>
        {/* Text Content */}
        <div className="w-full text-left md:w-1/2">
          <span className="rounded-md bg-orange-100 px-3 py-1 text-sm font-semibold uppercase tracking-widest text-orange-400">
            About Us
          </span>
          <h2 className="mt-4 text-xl  font-bold leading-snug text-white md:text-4xl">
            The Company with Multi Purposes Lorem Consectetur. Metus Faucibus
            Paculis.
          </h2>
          <p className="mt-4  text-xs leading-relaxed text-gray-300 md:text-lg">
            Lorem ipsum dolor sit amet consectetur. Arcu eu at tellus velit ac
            vitae. Morbi sem volutpat sed a tincidunt ante vitae. Pellentesque`
            ` mi nibh tempor justo arcu tempus ac. Nisl porttitor eros dui amet
            id vitae elit. Libero turpis duis nunc viver...
          </p>

          {/* Learn More Button */}
          <div className="mt-6">
            <button className="font flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-sm text-white shadow-md transition-all duration-300 hover:bg-orange-600 md:px-6 md:py-3 md:text-lg">
              Learn More <FaArrowDown className="text-xl " />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
