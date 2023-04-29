import Link from "next/link";
import { StyledFooter } from "./styles";
import TechawksLogo from "@/assets/icons/logo.svg";
export const Footer = () => {
  return (
    <StyledFooter>
      <p>Copyright {new Date().getFullYear()}, All right reserved</p>
      <div>
        Made by
        <Link href={"https://techawks.io/"} target={"_blank"}>
          <TechawksLogo />
          Techawks
        </Link>
      </div>
    </StyledFooter>
  );
};
