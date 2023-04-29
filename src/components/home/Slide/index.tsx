import { SwiperSlide } from "swiper/react";
import {
  StyledBackground,
  StyledContent,
  StyledCover,
  StyledLogo,
  StyledSlide,
} from "./styles";
import Image from "next/image";
import { title } from "process";
import Link from "next/link";

export const Slide = ({
  title,
  description,
  image,
  link,
}: {
  title: string;
  description: string;
  image: string;
  link: {
    to: string;
    label: string;
  };
}) => {
  return (
    <StyledSlide>
      <StyledBackground>
        <Image src={image} alt={title} fill={true} quality={100} priority />
      </StyledBackground>
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
        <h2>{title}</h2>
        <p>{description}</p>
        <Link href={link.to}>{link.label}</Link>
      </StyledContent>
    </StyledSlide>
  );
};
