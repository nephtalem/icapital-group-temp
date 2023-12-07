"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Word } from "./Word";
import { WhoWeAreEntity } from "@/gql/graphql";

export const WordAnimation = ({ who }: { who: WhoWeAreEntity }) => {
  return (
    <div className="grid">
      <h2 className="max-w-[90%] justify-self-center text-center text-[1.6rem] font-bold  leading-[2rem] text-accent md:max-w-[70%] md:text-[3rem] md:leading-[4rem]">
        {who.attributes?.WordAnimation?.title}
      </h2>
      <div className="relative my-[7rem] h-[5rem] w-screen [&>.swiper-slide]:w-fit ">
        <Swiper
          spaceBetween={80}
          slidesPerView={"auto"}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Autoplay]}
        >
          {[
            ...who.attributes!.WordAnimation!.WordAnimationItem!.map(
              (word) => ({
                title: word!.title!,
                words: word!.words!.split(","),
              }),
            ),
          ].map((slide, index) => (
            <SwiperSlide key={index}>
              <Word title={slide.title} words={slide.words} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
