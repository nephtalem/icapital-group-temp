import Image from "next/image";
import {
  StyledLogo,
  StyledOption,
  StyledOptions,
  StyledPlatformHeader,
} from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";

export const PlatformHeader = () => {
  return (
    <StyledPlatformHeader>
      <StyledLogo>
        <Image src={"/images/eafs.logo.png"} alt={""} fill={true} />
      </StyledLogo>
      <StyledOptions>
        <Option
          label={"6th Summit"}
          to={"/knowledge-sharing/east-africa-finance-summit/upcoming"}
        />
        <Option
          label={"Previous Summits"}
          to={"/knowledge-sharing/east-africa-finance-summit/previous-summits"}
        />
        <Option
          label={"Summit Documents"}
          to={"/knowledge-sharing/east-africa-finance-summit/summit-documents"}
        />
      </StyledOptions>
    </StyledPlatformHeader>
  );
};

const Option = ({ label, to }: { label: string; to: string }) => {
  const router = useRouter();
  return (
    <Link href={to}>
      <StyledOption active={to === router.pathname}>{label}</StyledOption>
    </Link>
  );
};
