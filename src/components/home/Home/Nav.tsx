import lodash from "lodash";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";

export const Nav = ({ length }: { length: number }) => {
  const swiper = useSwiper();
  const router = useRouter();
  const [active, setActive] = useState(0);
  useEffect(() => {
    swiper.onAny(() => {
      setActive(swiper.activeIndex);
    });
  }, [swiper]);

  return (
    <div className="fixed right-8 top-0 z-[100] hidden h-screen w-8 md:grid">
      <div className="grid items-center justify-items-center gap-7 self-center rounded-[5rem] border border-white px-1 py-6">
        {lodash.range(0, length).map((value) => (
          <div
            className={`h-3 w-3 `}
            key={value}
            onClick={() => swiper.slideTo(value)}
          >
            <div
              className={`grid h-3 w-3 cursor-pointer rounded-full border-2 border-white duration-300 ease-in-out ${
                active == value ? "bg-transparent" : "bg-white"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
