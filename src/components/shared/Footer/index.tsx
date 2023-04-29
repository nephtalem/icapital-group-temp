import Link from "next/link";
import {
  StyledContact,
  StyledContactItem,
  StyledContactMultiple,
  StyledContactRow,
  StyledFooter,
  StyledFooterBottom,
  StyledFooterContent,
  StyledFooterLink,
  StyledFooterLinks,
  StyledFooterLogo,
  StyledFooterMain,
  StyledFooterSocials,
} from "./styles";
import TechawksLogo from "@/assets/icons/logo.svg";
import PhoneIcon from "@/assets/icons/phone.svg";
import EmailIcon from "@/assets/icons/email.svg";
import LocationIcon from "@/assets/icons/location.svg";
import PostIcon from "@/assets/icons/post.svg";
import Image from "next/image";
import { Socials } from "@/components/home/Header";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterContent>
        <StyledFooterMain>
          <StyledFooterLogo>
            <Image
              src={"/images/white.logo.png"}
              quality={100}
              alt={""}
              fill={true}
            />
          </StyledFooterLogo>
          <p>
            The i-Capital Africa Institute is a professional service firm.
            Founded in 2015, we offer a full range of Human Capital Development
            solutions to clients in various sectors. Our approach is
            business-driven and we work to co-create innovative, insightful
            solutions that are practical and commercially sound. We help
            companies, universities, public enterprises, and start-ups in areas
            of strategy, organizational transformation, & talent development.
          </p>
          <span />
          <StyledContact>
            <ContactItem
              icon={<LocationIcon />}
              label={"Arat-Killo, Elsabet Bldg #604, Arada Sub-City"}
            />
            <StyledContactMultiple>
              <PhoneIcon />
              <h4>Office Phone: +251 11 812 06 00</h4>
              <h4>Mobile Phone: +251 91 162 90 11</h4>
            </StyledContactMultiple>
            <StyledContactRow>
              <ContactItem icon={<PostIcon />} label={"P.O.Box: 80484"} />
              <StyledContactItem>
                <EmailIcon />
                <Link href={"mailto:info@icapitalafrica.org"}>
                  <h4>Email: info@icapitalafrica.org</h4>
                </Link>
              </StyledContactItem>
            </StyledContactRow>
          </StyledContact>
        </StyledFooterMain>
        <StyledFooterLinks>
          <FooterLink
            main={{
              label: "EAFS",
              to: "/knowledge-sharing/east-africa-finance-summit",
            }}
            links={[
              {
                label: "6th Summit",
                to: "/knowledge-sharing/east-africa-finance-summit/upcoming-summit",
              },
              {
                label: "Previous Summits",
                to: "/knowledge-sharing/east-africa-finance-summit/previous-summits",
              },
              {
                label: "Resource Center",
                to: "/knowledge-sharing/east-africa-finance-summit/summit-documents",
              },
              {
                label: "Contact Us",
                to: "/knowledge-sharing/east-africa-finance-summit/contact-us",
              },
            ]}
          />

          <FooterLink
            main={{
              label: "EACMS",
              to: "/knowledge-sharing/east-africa-finance-summit",
            }}
            links={[
              {
                label: "6th Summit",
                to: "/knowledge-sharing/east-africa-finance-summit/upcoming-summit",
              },
              {
                label: "Previous Summits",
                to: "/knowledge-sharing/east-africa-finance-summit/previous-summits",
              },
              {
                label: "Resource Center",
                to: "/knowledge-sharing/east-africa-finance-summit/summit-documents",
              },
              {
                label: "Contact Us",
                to: "/knowledge-sharing/east-africa-finance-summit/contact-us",
              },
            ]}
          />

          <FooterLink
            main={{
              label: "CHCDA",
              to: "/knowledge-sharing/east-africa-finance-summit",
            }}
            links={[
              {
                label: "6th Summit",
                to: "/knowledge-sharing/east-africa-finance-summit/upcoming-summit",
              },
              {
                label: "Previous Summits",
                to: "/knowledge-sharing/east-africa-finance-summit/previous-summits",
              },
              {
                label: "Resource Center",
                to: "/knowledge-sharing/east-africa-finance-summit/summit-documents",
              },
              {
                label: "Contact Us",
                to: "/knowledge-sharing/east-africa-finance-summit/contact-us",
              },
            ]}
          />
          <StyledFooterSocials>
            <Socials />
          </StyledFooterSocials>
        </StyledFooterLinks>
      </StyledFooterContent>
      <StyledFooterBottom>
        <p>Copyright {new Date().getFullYear()}, All right reserved</p>
        <div>
          Made by
          <Link href={"https://techawks.io/"} target={"_blank"}>
            <TechawksLogo />
            Techawks
          </Link>
        </div>
      </StyledFooterBottom>
    </StyledFooter>
  );
};

const FooterLink = ({
  main,
  links,
}: {
  main: {
    label: string;
    to: string;
  };
  links: {
    label: string;
    to: string;
  }[];
}) => {
  return (
    <StyledFooterLink>
      <Link href={main.to}>
        <h3>{main.label}</h3>
      </Link>
      {links.map((link, index) => (
        <Link key={index} href={link.to}>
          <p>{link.label}</p>
        </Link>
      ))}
    </StyledFooterLink>
  );
};

const ContactItem = ({ icon, label }: { label: string; icon: JSX.Element }) => {
  return (
    <StyledContactItem>
      {icon}
      <h4>{label}</h4>
    </StyledContactItem>
  );
};
