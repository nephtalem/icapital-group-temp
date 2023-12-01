"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Word } from "./Word";

export const WordAnimation = () => {
  return (
    <div className="grid">
      <h2 className="max-w-[90%] justify-self-center text-center text-[1.6rem] font-bold  leading-[2rem] text-accent md:max-w-[70%] md:text-[3rem] md:leading-[4rem]">
        Co-creating solutions to help businesses connect to the future!
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
            {
              title: "Agile",
              words: ["Flexibility", "Brainstorming", "Movement", "Freedom"],
            },
            {
              title: "Persistence",
              words: ["Team Work", "Consulting", "Forward Thinking"],
            },
            {
              title: "Co-Creation",
              words: ["Youth"],
            },
            {
              title: "Client- Centered",
              words: ["Visionary", "Growing", "Training"],
            },
            {
              title: "Trusted",
              words: ["Orange", "Coffee", "Business"],
            },
            {
              title: "Transforming",
              words: ["People"],
            },
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
