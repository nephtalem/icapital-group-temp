import Link from "next/link";
import {
  StyledHeader,
  StyledMenu,
  StyledSocial,
  StyledSocials,
} from "./styles";
import LinkedinIcon from "@/assets/icons/linkedin.w.svg";
import FacebookIcon from "@/assets/icons/facebook.w.svg";
import TwitterIcon from "@/assets/icons/twitter.w.svg";
import TelegramIcon from "@/assets/icons/telegram.w.svg";
import YoutubeIcon from "@/assets/icons/youtube.w.svg";
import MenuIcon from "@/assets/icons/menu.svg";
const socials = [
  {
    title: "Linkedin",
    to: "https://et.linkedin.com/company/icapitalafrica",
    icon: <LinkedinIcon />,
  },
  {
    title: "Facebook",
    to: "https://www.facebook.com/icapitalafrica",
    icon: <FacebookIcon />,
  },
  {
    title: "Twitter",
    to: "https://mobile.twitter.com/icapitalafrica",
    icon: <TwitterIcon />,
  },
  {
    title: "Telegram",
    to: "https://t.me/iCapita1",
    icon: <TelegramIcon />,
  },
  {
    title: "Youtube",
    to: "https://www.youtube.com/channel/UCyLhYZK8LkBfOax31Ttc8HA",
    icon: <YoutubeIcon />,
  },
];
export const Header = () => {
  return (
    <StyledHeader>
      <StyledSocials>
        {socials.map((social, index) => (
          <Social
            key={index}
            to={social.to}
            title={social.title}
            icon={social.icon}
          />
        ))}
      </StyledSocials>
      <StyledMenu>
        <h3>Get acquainted</h3>
        <button>
          <MenuIcon />
        </button>
      </StyledMenu>
    </StyledHeader>
  );
};

const Social = ({
  to,
  title,
  icon,
}: {
  to: string;
  icon: JSX.Element;
  title: string;
}) => {
  return (
    <Link href={to} target="_blank">
      <StyledSocial title={title}>{icon}</StyledSocial>
    </Link>
  );
};
