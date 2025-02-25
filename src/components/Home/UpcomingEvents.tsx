import Image from "next/image";
import RegisterImg from "@/assets/register-img.png";

const UpcomingEvents = () => {
  return (
    <section className="pb-9 pt-20 bg-orange-500 px-6 md:pl-20 md:pr-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-center gap-8 md:gap-8 relative">
        <div className="w-full md:w-1/2 text-left text-white max-w-xl md:max-w-lg md:pl-[30px]">
          <span className="text-white text-sm font-medium uppercase tracking-wide bg-white/20 px-3 py-1 rounded-lg">
            Upcoming Event
          </span>
          <h2 className="mt-2 text-3xl font-bold leading-snug">
            Register for the 10<sup>th</sup> East Africa Finance Summit
          </h2>
          <p className="mt-4 text-white/90 leading-relaxed">
            Unlocking Opportunities: Navigating the Forces Shaping the Future of
            Finance in East Africa
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-white text-orange-500 px-6 py-3 rounded-3xl font-semibold shadow-md hover:shadow-lg transition duration-300">
              Register Now →
            </button>
            <button className="text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:block mt-6 md:mt-0 md:ml-52 ">
          <Image
            src={RegisterImg}
            alt="East Africa Finance Summit"
            className="rounded-tr-[60px] shadow-lg w-full  md:max-w-[500px]"
            objectFit="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
