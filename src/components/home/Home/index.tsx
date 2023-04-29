import { Header } from "../Header";
import { Landing } from "../Landing";
import { Slide } from "../Slide";
import { StyledHome } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, EffectCube, Pagination, Keyboard } from "swiper";

export const Home = () => {
  return (
    <StyledHome>
      <Header />
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={0}
        keyboard={{
          enabled: true,
        }}
        mousewheel={true}
        speed={800}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Mousewheel, Keyboard, Pagination]}
      >
        <SwiperSlide>
          <Landing />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            title={"Knowledge Sharing Platforms"}
            description={
              "Our platforms enable key players from selected industries of various scopes to discuss challenges, share experiences, network, and form sustainable business relationships at national, regional, and continental levels, through summits, conferences, and forums, which drive policies and bring changes at a national, regional, and continental level."
            }
            image={"/images/ksp.png"}
            link={{
              to: "/ksp",
              label: "Visit Our Knowledge Sharing Platforms",
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            title={"Advisory Solutions"}
            description={
              "Our Advisory Solutions are tailor-made consultancy services for individual client organizations that offer specific tools, proven methodologies, such as Human Resources Transformation, Organizational Transformation, and Workforce Solutions, and valuable advice and recommendations based on our extensive experience and industry expertise."
            }
            image={"/images/as.png"}
            link={{
              to: "/as",
              label: "Visit Advisory Solutions",
            }}
          />
        </SwiperSlide>
      </Swiper>
    </StyledHome>
  );
};
