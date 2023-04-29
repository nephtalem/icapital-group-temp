import lodash from "lodash";
import { useSwiper } from "swiper/react";
import { StyledNav, StyledNavItem, StyledNavWrapper } from "./styles";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

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
    <StyledNavWrapper>
      <StyledNav>
        {lodash.range(0, length).map((value) => (
          <StyledNavItem
            key={value}
            active={active == value}
            onClick={() => swiper.slideTo(value)}
          >
            <span />
          </StyledNavItem>
        ))}
      </StyledNav>
    </StyledNavWrapper>
  );
};
