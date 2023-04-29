import localFont from "next/font/local";
import Image from "next/image";
import {
  StyledContent,
  StyledCover,
  StyledImage,
  StyledLanding,
  StyledLogo,
  StyledScrollDown,
} from "./styles";
import ArrowDownIcon from "@/assets/icons/arrow.down.svg";
const nanumBrushScript = localFont({
  src: "../../../fonts/brush_script_mt_kursiv.woff2",
});

export const Landing = () => {
  return (
    <StyledLanding>
      <StyledImage>
        <Image
          src={"/images/home.bg.png"}
          alt={"background"}
          fill={true}
          priority
        />
      </StyledImage>
      <StyledCover />
      <StyledContent>
        <StyledLogo>
          <Image
            src={"/images/white.logo.png"}
            alt={"background"}
            fill={true}
            quality={100}
            priority
          />
        </StyledLogo>
        <h1 className={nanumBrushScript.className}>
          ...in the business of transforming people...
        </h1>
      </StyledContent>
      <StyledScrollDown>
        <ArrowDownIcon />
      </StyledScrollDown>
    </StyledLanding>
  );
};
