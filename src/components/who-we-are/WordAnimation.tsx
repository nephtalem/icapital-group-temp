"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Word } from "./Word";
import { WhoWeAreEntity } from "@/gql/graphql";
import "swiper/css";

export const WordAnimation = ({ who }: { who: WhoWeAreEntity }) => {
  return (
    <div className="grid">
      <h2 className="max-w-[90%] justify-self-center text-center text-[1.6rem] font-bold leading-[2rem] text-accent md:max-w-[70%] md:text-[3rem] md:leading-[4rem]">
        {who.attributes?.WordAnimation?.title}
      </h2>

      <div className="relative my-[7rem] h-[5rem] w-screen [&>.swiper-slide]:w-fit">
        <Swiper
          spaceBetween={80}
          slidesPerView="auto"
          loop
          freeMode
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          onSlideChange={() => console.log("slide change")}
          modules={[Autoplay]}
        >
          {who.attributes?.WordAnimation?.WordAnimationItem?.map(
            (word, index) => (
              <SwiperSlide key={index}>
                <Word
                  title={word?.title ?? ""}
                  words={word?.words?.split(",") ?? []}
                />
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </div>
    </div>
  );
};
