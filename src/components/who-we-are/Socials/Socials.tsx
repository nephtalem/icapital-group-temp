import { socials } from "@/components/home/Header/Socials";
import { Social } from "./Social";

export const Socials = () => {
  return (
    <div className="my-[4rem] grid gap-y-[4rem]">
      <div className="flex gap-[2rem] justify-self-center">
        {socials.map((social, index) => (
          <Social
            key={index}
            to={social.to}
            title={social.title}
            icon={social.icon}
          />
        ))}
      </div>
      <p className="justify-self-center text-center text-sm font-medium text-text">
        Copyright {new Date().getFullYear()}, All right reserved
      </p>
    </div>
  );
};
