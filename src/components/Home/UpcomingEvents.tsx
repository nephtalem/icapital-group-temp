import Image from "next/image";
import RegisterImg from "@/assets/register-img.png";
import Tag from "@/ui/Tag";

const UpcomingEvents = () => {
  return (
    <section className="bg-orange-500 px-6 pb-9 pt-20 md:pl-20 md:pr-10">
      <div className="container relative mx-auto flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-8">
        <div className="w-full max-w-xl text-left text-white md:w-1/2 md:max-w-lg md:pl-[30px]">
          <Tag
            title="News and Updates"
            titleColor="text-white"
            bgColor="bg-[#FFFFFF33]"
          />
          <h2 className="mt-2 text-3xl font-bold leading-snug">
            Register for the 10<sup>th</sup> East Africa Finance Summit
          </h2>
          <p className="mt-4 leading-relaxed text-white/90">
            Unlocking Opportunities: Navigating the Forces Shaping the Future of
            Finance in East Africa
          </p>
          <div className="mt-6 flex gap-4">
            <button className="rounded-3xl bg-white px-6 py-3 font-semibold text-orange-500 shadow-md transition duration-300 hover:shadow-lg">
              Register Now →
            </button>
            <button className="rounded-lg px-6 py-3 font-semibold text-white transition duration-300 hover:bg-white/10">
              Learn More
            </button>
          </div>
        </div>
        <div className="mt-6 flex w-full justify-center md:ml-52 md:mt-0 md:block md:w-1/2 ">
          <Image
            src={RegisterImg}
            alt="East Africa Finance Summit"
            className="w-full rounded-tr-[60px] shadow-lg  md:max-w-[500px]"
            objectFit="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
