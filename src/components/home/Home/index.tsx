import { useRef } from "react";
import { Keyboard, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Landing } from "../Landing";
import { Nav } from "../Nav";
import { Slide } from "../Slide";
import { StyledHome } from "./styles";

export const Home = () => {
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
        <SwiperSlide>
          <Slide
            title={"Knowledge Sharing Platforms"}
            description={
              "Our platforms enable key players from selected industries of various scopes to discuss challenges, share experiences, network, and form sustainable business relationships at national, regional, and continental levels, through summits, conferences, and forums, which drive policies and bring changes at a national, regional, and continental level."
            }
            image={"/images/ksp.png"}
            link={{
              to: "/knowledge-sharing",
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
              to: "/advisory-solutions",
              label: "Visit Advisory Solutions",
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            title={"Learning Solutions"}
            description={
              "Our Learning Solutions are Human Capital Development programs that come in standard packages, tailored packages, and certification programs offered as skill seminars and training, customized to meet the unique needs through co-creation and partnerships with companies, and institutions."
            }
            image={"/images/ls.png"}
            link={{
              to: "/learning-solutions",
              label: "Visit Learning Solutions",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            title={"Cross Border Solutions"}
            description={
              "Our Cross Border Solutions offers individuals and organizations programs that develop skills and competencies through exposure to global best practices and experiences, including international certifications, exposure-based learning, education programs, and advisory services in collaboration with international partners."
            }
            image={"/images/cbs.png"}
            link={{
              to: "/cross-border-solutions",
              label: "Visit Cross Border Solutions",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Footer />
        </SwiperSlide>
        <Nav length={5} />
      </Swiper>
    </StyledHome>
  );
};
