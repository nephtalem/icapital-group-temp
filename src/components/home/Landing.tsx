import ArrowDownIcon from "@/assets/icons/arrow.down.svg";
import localFont from "next/font/local";
import Image from "next/image";
import { useSwiper } from "swiper/react";
const nanumBrushScript = localFont({
  src: "./brush_script_mt_kursiv.woff2",
});

export const Landing = () => {
  const swiper = useSwiper();
  return (
    <div className="relative grid">
      <div className="relative h-dvh w-screen">
        <Image
          src={"/images/home.bg.png"}
          alt={"background"}
          fill={true}
          quality={100}
          priority
        />
      </div>
      <div className="absolute h-dvh w-screen bg-black opacity-30" />
      <div className="absolute max-w-[96vw] grid gap-10 md:gap-0 self-center justify-self-center md:max-w-none">
        <div className="relative grid h-[8rem] w-full md:h-[20rem]">
          <Image
            src={"/images/white.logo.png"}
            alt={"background"}
            fill={true}
            quality={100}
            priority
            className="object-contain"
          />
        </div>
        <h1
          className={`${nanumBrushScript.className} w-full text-center content-center text-xl text-white md:text-4xl`}
        >
          ...in the business of transforming people...
        </h1>
      </div>
      <div
        className="animate-scrollDown absolute bottom-6 cursor-pointer justify-self-center "
        onClick={() => swiper.slideTo(1)}
      >
        <ArrowDownIcon className={"h-8"} />
      </div>
    </div>
  );
};
