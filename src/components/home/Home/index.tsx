import { useRef } from "react";
import { Keyboard, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Landing } from "../Landing";
import { Nav } from "../Nav";
import { Slide } from "../Slide";
import { StyledHome } from "./styles";
import { HomeEntity } from "@/gql/graphql";

export const Home = ({ home }: { home: HomeEntity }) => {
  return (
    <StyledHome>
      <Header />
      <Swiper
        direction={"vertical"}
        slidesPerView={"auto"}
        keyboard={{
          enabled: true,
        }}
        mousewheel={{
          sensitivity: 0.1,
        }}
        speed={600}
        modules={[Mousewheel, Keyboard]}
        onSlideChange={(s) => {}}
        onSwiper={(s) => {}}
      >
        <SwiperSlide>
          <Landing />
        </SwiperSlide>
        {home.attributes?.slides?.map((slide, index) => (
          <SwiperSlide key={index}>
            <Slide
              title={slide!.title!}
              description={slide!.description!}
              image={slide!.background!.data!.attributes!.url!}
              link={{
                to: slide!.ctaLink!,
                label: slide!.cta!,
              }}
            />
          </SwiperSlide>
        ))}

        <SwiperSlide>
          <Footer />
        </SwiperSlide>
        <Nav length={5} />
      </Swiper>
    </StyledHome>
  );
};
