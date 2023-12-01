"use client";

import { socials } from "@/components/home/Header/Socials";
import { StyledSocial, StyledSocials, StyledSocialsList } from "./styles";
import Link from "next/link";
import { ReactNode } from "react";

export const Socials = () => {
  return (
    <StyledSocials>
      <StyledSocialsList>
        {socials.map((social, index) => (
          <Social
            key={index}
            to={social.to}
            title={social.title}
            icon={social.icon}
          />
        ))}
      </StyledSocialsList>
      <p>Copyright {new Date().getFullYear()}, All right reserved</p>
    </StyledSocials>
  );
};

const Social = ({
  to,
  title,
  icon,
}: {
  to: string;
  icon: (style: string) => ReactNode;
  title: string;
}) => {
  return (
    <Link href={to} target="_blank">
      <StyledSocial title={title}>{icon("")}</StyledSocial>
    </Link>
  );
};
