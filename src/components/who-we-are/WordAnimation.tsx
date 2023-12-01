import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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

const Word = ({ title, words }: { title: string; words: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div className="mx-[2rem] grid justify-items-start gap-x-[.8rem] md:mx-[6rem]">
      <h3 className="text-[1.6rem] font-bold text-text md:text-[2rem]">
        {title}
      </h3>
      <div className="text-[1.2rem] font-medium text-text md:text-[1.6rem]">
        <TextTransition springConfig={presets.wobbly}>
          {words[index % words.length]}
        </TextTransition>
      </div>
    </div>
  );
};
