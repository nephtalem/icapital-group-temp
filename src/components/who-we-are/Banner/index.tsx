import Image from "next/image";
import { StyledBanner } from "./styles";

export const Banner = () => {
  return (
    <StyledBanner>
      <Image src={"/images/who-we-are.png"} alt={""} fill={true} priority />
    </StyledBanner>
  );
};
