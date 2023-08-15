import { Swiper, SwiperSlide } from "swiper/react";
import { StyledWord, StyledWordAnimation, StyledWordList } from "./styles";
import { Autoplay, FreeMode } from "swiper";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

export const WordAnimation = () => {
  return (
    <StyledWordAnimation>
      <h2>Co-creating solutions to help businesses connect to the future!</h2>
      <StyledWordList>
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
      </StyledWordList>
    </StyledWordAnimation>
  );
};

const Word = ({ title, words }: { title: string; words: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <StyledWord>
      <h3>{title}</h3>
      <div>
        <TextTransition springConfig={presets.wobbly}>
          {words[index % words.length]}
        </TextTransition>
      </div>
    </StyledWord>
  );
};
