import Image from "next/image";
import {
  StyledHeader,
  StyledHeaderAlt,
  StyledLogo,
  StyledMenu,
  StyledOption,
  StyledOptions,
} from "./styles";
import Link from "next/link";
import { Button } from "../Button";
import { useRouter } from "next/navigation";import MenuIcon from "@/assets/icons/menu.svg";
import gsap from "gsap";
import { useRef } from "react";
import { StyledDrawerWrapper } from "@/components/home/Header/styles";
import { Drawer } from "@/components/home/Drawer";

export const Header = ({
  options,
}: {
  options: {
    label: string;
    to: string;
    base: string;
  }[];
}) => {
  return (
    <StyledHeader>
      <Link href={"/"}>
        <StyledLogo>
          <Image src={"/images/logo.png"} alt={""} fill={true} />
        </StyledLogo>
      </Link>
      <StyledOptions>
        {options.map((option, index) => (
          <Option
            key={index}
            label={option.label}
            to={option.to}
            base={option.base}
          />
        ))}
      </StyledOptions>
      <Link href={"/contact-us"}>
        <Button label={"Contact Us"} onClick={(): void => {}} />
      </Link>
    </StyledHeader>
  );
};

export const HeaderAlt = () => {
  const drawer = useRef(null);

  return (
    <>
      <StyledHeaderAlt>
        <Link href={"/"}>
          <StyledLogo>
            <Image src={"/images/logo.png"} alt={""} fill={true} />
          </StyledLogo>
        </Link>

        <StyledMenu>
          <button
            onMouseOver={() => {
              gsap.to(drawer.current, { right: 0 });
            }}
          >
            <MenuIcon />
          </button>
        </StyledMenu>
      </StyledHeaderAlt>
      <StyledDrawerWrapper
        ref={drawer}
        onMouseLeave={() => {
          gsap.to(drawer.current, { right: "-50rem" });
        }}
      >
        <Drawer />
        <span
          className="cover"
          onClick={() => {
            gsap.to(drawer.current, { right: "-50rem" });
          }}
        />
      </StyledDrawerWrapper>
    </>
  );
};

const Option = ({
  label,
  to,
  base,
}: {
  label: string;
  to: string;
  base: string;
}) => {
  const router = useRouter();
  return (
    <Link href={to}>
      <StyledOption
        active={
          base === to
            ? router.pathname == to
            : router.pathname.search(base) !== -1
        }
      >
        {label}
      </StyledOption>
    </Link>
  );
};
