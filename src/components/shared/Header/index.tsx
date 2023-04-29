import Image from "next/image";
import {
  StyledHeader,
  StyledLogo,
  StyledOption,
  StyledOptions,
} from "./styles";
import Link from "next/link";
import { Button } from "../Button";
import { useRouter } from "next/router";

export const Header = ({
  options,
}: {
  options: {
    label: string;
    to: string;
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
          <Option key={index} label={option.label} to={option.to} />
        ))}
      </StyledOptions>
      <Link href={"/contact-us"}>
        <Button label={"Contact Us"} onClick={(): void => {}} />
      </Link>
    </StyledHeader>
  );
};

const Option = ({ label, to }: { label: string; to: string }) => {
  const router = useRouter();
  return (
    <Link href={to}>
      <StyledOption active={router.pathname === to}>{label}</StyledOption>
    </Link>
  );
};
