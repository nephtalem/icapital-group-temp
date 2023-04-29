import ArrowDownIcon from "@/assets/icons/arrow.down.svg";
import localFont from "next/font/local";
import Image from "next/image";
import { useSwiper } from "swiper/react";
import {
  StyledContent,
  StyledCover,
  StyledImage,
  StyledLanding,
  StyledLogo,
  StyledScrollDown,
} from "./styles";
const nanumBrushScript = localFont({
  src: "../../../fonts/brush_script_mt_kursiv.woff2",
});

export const Landing = () => {
  const swiper = useSwiper();
  return (
    <StyledLanding>
      <StyledImage>
        <Image
          src={"/images/home.bg.png"}
          alt={"background"}
          fill={true}
          quality={100}
          priority
        />
      </StyledImage>
      <StyledCover />
      <StyledContent>
        <StyledLogo>
          <Image
            src={"/images/white.logo.png"}
            alt={"background"}
            fill={true}
            quality={100}
            priority
          />
        </StyledLogo>
        <h1 className={nanumBrushScript.className}>
          ...in the business of transforming people...
        </h1>
      </StyledContent>
      <StyledScrollDown onClick={() => swiper.slideTo(1)}>
        <ArrowDownIcon />
      </StyledScrollDown>
    </StyledLanding>
  );
};
