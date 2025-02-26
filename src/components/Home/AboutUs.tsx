import AboutUsImg from "@/assets/about-us.png";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import Link from "next/link";
import Tag from "@/ui/Tag";

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
          <Tag
            title="About Us"
            titleColor="text-[#F78019]"
            bgColor="bg-[#F7801926]"
          />
          <h2 className="mt-4 text-xl  font-bold leading-snug text-white md:text-4xl">
            The i-Capital Africa Institute: A Leading Business Consulting &
            Services Company
          </h2>
          <p className="mt-4  text-xs leading-relaxed text-gray-300 md:text-lg">
            The i-Capital Africa Institute is a professional service firm.
            Founded in 2015, we offer a full range of Human Capital Development
            solutions to clients in various sectors. Our approach is
            business-driven and we work to co-create innovative...
          </p>

          {/* Learn More Button */}
          <div className="mt-6">
            <Link href="/who-we-are">
              <button className="font flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-sm text-white shadow-md transition-all duration-300 hover:bg-orange-600 md:px-6 md:py-3 md:text-lg">
                Learn More <FaArrowDown className="text-xl " />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
