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
    <section className="relative grid h-screen w-screen">
      <div className="relative h-screen w-screen">
        <Image
          src={`${process.env.NEXT_PUBLIC_DATA}${image}`}
          alt={title}
          fill={true}
          quality={100}
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute h-screen w-screen bg-black opacity-30" />
      <div className="absolute grid justify-items-center self-center justify-self-center px-48">
        <div className="relative mt-24 grid h-32 w-[50vw] md:h-40 md:w-[400px]">
          <Image
            src={"/images/white.logo.png"}
            alt={"background"}
            fill={true}
            quality={100}
            priority
            className="object-contain"
          />
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link href={link.to}>{link.label}</Link>
      </div>
    </section>
  );
};
