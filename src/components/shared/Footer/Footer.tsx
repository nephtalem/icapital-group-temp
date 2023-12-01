import EmailIcon from "@/assets/icons/email.svg";
import LocationIcon from "@/assets/icons/location.svg";
import TechawksLogo from "@/assets/icons/logo.svg";
import PhoneIcon from "@/assets/icons/phone.svg";
import PostIcon from "@/assets/icons/post.svg";
import { Socials } from "@/components/home/Header/Socials.1";
import Image from "next/image";
import Link from "next/link";
import { FooterLink } from "./FooterLink";
import { ContactItem } from "./ContactItem";

export const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="grid p-6 md:p-12">
        <div className="grid">
          <div className="relative mb-8 grid h-28 w-48 ">
            <Image
              src={"/images/white.logo.png"}
              quality={100}
              alt={""}
              fill={true}
              className="object-contain"
            />
          </div>
          <p className="text-justify text-base text-white">
            The i-Capital Africa Institute is a professional service firm.
            Founded in 2015, we offer a full range of Human Capital Development
            solutions to clients in various sectors. Our approach is
            business-driven and we work to co-create innovative, insightful
            solutions that are practical and commercially sound. We help
            companies, universities, public enterprises, and start-ups in areas
            of strategy, organizational transformation, & talent development.
          </p>
          <span className="my-10 h-[1px] w-full bg-white" />
          <div className="grid gap-y-8">
            <ContactItem
              icon={(style) => <LocationIcon className={style} />}
              label={"Arat-Killo, Elsabet Bldg #604, Arada Sub-City"}
            />
            <div className="flex gap-5">
              <PhoneIcon className={"h-4 w-4"} />
              <h4 className="text-sm text-white">
                Office Phone: +251 11 812 06 00
              </h4>
              <h4 className="text-sm text-white">
                Mobile Phone: +251 91 162 90 11
              </h4>
            </div>
            <div className="flex gap-5 md:gap-12">
              <ContactItem
                icon={(style) => <PostIcon className={style} />}
                label={"P.O.Box: 80484"}
              />
              <div className="flex gap-5">
                <EmailIcon className={"h-4 w-4"} />
                <Link href={"mailto:info@icapitalafrica.org"}>
                  <h4 className="text-sm text-white">
                    Email: info@icapitalafrica.org
                  </h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 grid auto-rows-max grid-cols-2 gap-10 self-end md:mt-0 md:grid-cols-3 md:gap-24 md:justify-self-end">
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
          <div className="col-start-1 col-end-[-1] justify-self-center my-10 flex md:justify-self-end">
            <Socials />
          </div>
        </div>
      </div>
      <div className="relative flex h-32 w-screen items-center justify-between bg-black px-16 text-white">
        <p className="text-base font-medium">
          Copyright {new Date().getFullYear()}, All right reserved
        </p>
        <div className="flex h-3 content-center items-center gap-2 text-base font-medium">
          Made by
          <Link
            className="flex content-center items-center gap-2"
            href={"https://techawks.io/"}
            target={"_blank"}
          >
            <TechawksLogo className={"h-4"} />
            Techawks
          </Link>
        </div>
      </div>
    </footer>
  );
};
