import ArrowDownIcon from "@/assets/icons/arrow.down.svg";
import localFont from "next/font/local";
import Image from "next/image";
import { useSwiper } from "swiper/react";
import {
  StyledScrollDown
} from "./styles";
const nanumBrushScript = localFont({
  src: "../../../fonts/brush_script_mt_kursiv.woff2",
});

export const Landing = () => {
  const swiper = useSwiper();
  return (
    <div className="relative grid">
      <div className="relative h-screen w-screen">
        <Image
          src={"/images/home.bg.png"}
          alt={"background"}
          fill={true}
          quality={100}
          priority
        />
      </div>
      <div className="absolute h-screen w-screen bg-black opacity-30" />
      <div className="absolute max-w-[90vw] self-center justify-self-center md:max-w-none">
        <div className="relative grid h-[280px] w-full md:h-[400px]">
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
          className={`${nanumBrushScript.className} w-full content-center text-3xl text-white md:text-4xl`}
        >
          ...in the business of transforming people...
        </h1>
      </div>
      <StyledScrollDown onClick={() => swiper.slideTo(1)}>
        <ArrowDownIcon />
      </StyledScrollDown>
    </div>
  );
};
