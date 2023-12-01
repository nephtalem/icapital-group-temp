import FacebookIcon from "@/assets/icons/facebook.w.svg";
import LinkedinIcon from "@/assets/icons/linkedin.w.svg";
import TelegramIcon from "@/assets/icons/telegram.w.svg";
import TwitterIcon from "@/assets/icons/twitter.w.svg";
import YoutubeIcon from "@/assets/icons/youtube.w.svg";
import { Social } from "./Social";

export const socials = [
  {
    title: "Linkedin",
    to: "https://et.linkedin.com/company/icapitalafrica",
    icon: (style: string) => <LinkedinIcon className={style} />,
  },
  {
    title: "Facebook",
    to: "https://www.facebook.com/icapitalafrica",
    icon: (style: string) => <FacebookIcon className={style} />,
  },
  {
    title: "Twitter",
    to: "https://mobile.twitter.com/icapitalafrica",
    icon: (style: string) => <TwitterIcon className={style} />,
  },
  {
    title: "Telegram",
    to: "https://t.me/iCapita1",
    icon: (style: string) => <TelegramIcon className={style} />,
  },
  {
    title: "Youtube",
    to: "https://www.youtube.com/channel/UCyLhYZK8LkBfOax31Ttc8HA",
    icon: (style: string) => <YoutubeIcon className={style} />,
  },
];
export const Socials = () => {
  return (
    <div className="flex gap-4 md:gap-[1.6rem]">
      {socials.map((social, index) => (
        <Social
          key={index}
          to={social.to}
          title={social.title}
          icon={social.icon}
        />
      ))}
    </div>
  );
};
