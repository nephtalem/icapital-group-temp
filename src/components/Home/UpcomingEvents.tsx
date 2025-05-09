import Image from "next/image";
import RegisterImg from "@/assets/register-img.png";
import Tag from "@/ui/Tag";

const UpcomingEvents = () => {
  return (
    <section className="w-full bg-orange-500 px-2 md:px-8">
      <div className="relative w-full">
        {/* Content Container */}
        <div className="container mx-auto px-4 py-10 md:py-16 md:pl-6 md:pr-0 md:pr-[40%]">
          <div className="max-w-xl">
            {/* Tag */}
            <div className="inline-block rounded-full bg-white/20 px-4 py-1">
              <span className="text-sm font-medium text-white">
                News and Updates
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Register for the 10<sup>th</sup> East Africa Finance Summit
            </h2>

            {/* Description */}
            <p className="mt-3 text-base text-white">
              Unlocking Opportunities: Navigating the Forces Shaping the Future
              of Finance in East Africa
            </p>

            {/* Buttons */}
            <div className="mt-8 flex space-x-4">
              <a
                href="#"
                className="flex items-center rounded-full bg-white px-5 py-2.5 md:px-6 md:py-3"
              >
                <span className="font-medium text-orange-500">
                  Register Now
                </span>
                <span className="ml-2 text-orange-500">→</span>
              </a>

              <a
                href="#"
                className="px-4 py-2.5 font-medium text-white md:px-6 md:py-3"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Image - Touching bottom of section */}
        <div className="mt-8 w-full px-4 md:hidden">
          <div className="relative h-[250px] w-full overflow-hidden rounded-tr-[40px]">
            <Image
              src={RegisterImg}
              alt="East Africa Finance Summit"
              fill
              className="object-cover"
              style={{ objectPosition: "center center" }}
            />
          </div>
        </div>

        {/* Desktop Image Container - Positioned absolutely on larger screens */}
        <div
          className="absolute right-0 top-0 hidden h-full md:block"
          style={{
            width: "42%",
            right: "30px",
            top: "30px",
            bottom: "0",
            height: "calc(100% - 30px)",
          }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-tr-[60px]">
            <Image
              src={RegisterImg}
              alt="East Africa Finance Summit"
              fill
              className="object-cover"
              style={{ objectPosition: "center center" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
