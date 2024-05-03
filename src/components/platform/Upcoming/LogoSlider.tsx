import { Sponsor } from "@/components/platform/Upcoming/Sponsor";
import { UpcomingEafsEntity } from "@/gql/graphql";
import { useRef, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { twMerge } from "tailwind-merge";
import { Organizer } from "./Organizer";
export const LogoSlider = ({
  upcoming,
  base,
  className,
}: {
  base: string;
  upcoming: UpcomingEafsEntity;
  className?: string;
}) => {
  const [current, setCurrent] = useState(0);
  const swiper = useRef<any>();
  return (
    <div className={"grid gap-5 py-20 md:gap-10"}>
      <div className={"flex gap-2 justify-self-center md:gap-6"}>
        <Indicator
          text={"Co - Organizers"}
          active={current === 0}
          onClick={(): void => {
            swiper.current.slideToLoop(0);
          }}
        />
        <Indicator
          text={"Partners"}
          active={current === 1}
          onClick={(): void => {
            swiper.current.slideToLoop(1);
          }}
        />
        <Indicator
          text={"Sponsors"}
          active={current === 2}
          onClick={(): void => {
            swiper.current.slideToLoop(2);
          }}
        />
      </div>
      <div className={"w-screen"}>
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          speed={600}
          modules={[Autoplay]}
          onSlideChange={(s) => {
            setCurrent(s.realIndex);
          }}
          onSwiper={(s) => {
            swiper.current = s;
          }}
        >
          <SwiperSlide>
            <div className="flex h-80 w-screen flex-wrap items-start justify-center gap-10 md:h-auto">
              {(upcoming.attributes!.content!.organizer ?? [])
                .map((organizer) => organizer!)
                .map((organizer, index) => (
                  <Organizer
                    key={index}
                    to={organizer!.url!}
                    image={`${organizer?.logo?.data?.attributes?.url}`}
                    width={organizer?.logo?.data?.attributes?.width ?? 0}
                    height={organizer?.logo?.data?.attributes?.height ?? 1}
                  />
                ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex h-80 w-screen flex-wrap items-start justify-center gap-10 md:h-auto ">
              {(upcoming.attributes!.strategicPartner ?? [])
                .map((organizer) => organizer!)!
                .map((organizer, index) => (
                  <Organizer
                    key={index}
                    to={organizer!.url!}
                    image={`${organizer?.logo?.data?.attributes?.url}`}
                    width={organizer?.logo?.data?.attributes?.width ?? 0}
                    height={organizer?.logo?.data?.attributes?.height ?? 1}
                  />
                ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex h-80 w-screen flex-wrap items-start justify-center gap-10 md:h-auto">
              {(upcoming.attributes!.content!.sponsor ?? [])
                .map((sponsor) => sponsor!)
                .map((sponsor, index) => (
                  <Sponsor
                    key={index}
                    to={sponsor!.url!}
                    image={`${sponsor?.logo?.data?.attributes?.url}`}
                    width={sponsor?.logo?.data?.attributes?.width ?? 0}
                    height={sponsor?.logo?.data?.attributes?.height ?? 1}
                    level={sponsor?.level ?? ""}
                  />
                ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

const Indicator = ({
  text,
  active,
  onClick,
}: {
  text: string;
  active: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={twMerge(
        "relative grid cursor-pointer rounded-full border-2 border-transparent px-3 md:px-6 py-2 text-sm md:text-2xl",
        active ? "border-accent font-semibold bg-accent text-white" : "text-neutral-400",
      )}
      onClick={onClick}
    >
      {text}
    </div>
  );
};
