import Image from "next/image";
import {
  StyledApply,
  StyledBanner,
  StyledBannerImage,
  StyledConnect,
  StyledConnectBackground,
  StyledConnectContent,
  StyledConnectLinks,
  StyledConnectLogo,
  StyledLanding,
  StyledLandingBackground,
  StyledLandingContent,
  StyledLandingLogo,
  StyledOrganizer,
  StyledOrganizerList,
  StyledOrganizers,
  StyledOrganizersTitle,
  StyledRegister,
  StyledSocials,
  StyledSponsorApply,
  StyledSponsors,
  StyledSponsorsList,
  StyledSponsorsTitle,
  StyledUpcoming,
  StyledVideoContainer,
} from "./styles";
import { MainText } from "@/components/shared/MainText";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Social, socials } from "@/components/home/Header";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export const Upcoming = () => {
  return (
    <StyledUpcoming>
      <Landing />
      <Banner />
      <Organizers />
      <Sponsors />
      <StyledSponsorApply>
        <h2>SPONSORSHIP AND EXHIBITION</h2>
        <StyledApply>
          <div>APPLY HERE</div>
        </StyledApply>
      </StyledSponsorApply>
      <VideoContainer />
      <Connect />
    </StyledUpcoming>
  );
};

const Landing = () => {
  return (
    <StyledLanding>
      <StyledLandingBackground>
        <Image
          src={"/images/upcoming.background.png"}
          alt={""}
          quality={100}
          fill={true}
        />
      </StyledLandingBackground>
      <StyledLandingContent>
        <StyledLandingLogo>
          <Image src={"/images/upcoming.logo.png"} alt={""} fill={true} />
        </StyledLandingLogo>
        <h1>THE 6TH ANNUAL EAST AFRICA FINANCE SUMMIT</h1>
        <p>
          &quot;Emerging Frontiers in Africa&apos;s Finance Sector: Regional
          integration, innovation, and Access to finance&quot;
        </p>
        <StyledRegister>
          <div>REGISTER HERE</div>
        </StyledRegister>
      </StyledLandingContent>
    </StyledLanding>
  );
};

const Banner = () => {
  return (
    <StyledBanner>
      <p>
        The East Africa Finance Summit (EAFS) is a multilateral dialogue among
        leading industry experts, researchers, bankers, executives,
        entrepreneurs, fintech providers, policymakers, and government officials
        from across the value chain to foster collaboration, discuss current
        challenges, explore business opportunities, develop market strategies,
        share knowledge, and identify solutions aimed at shaping the future of
        the finance sector.
        <br />
        <br />
        This summit will feature an expansive line-up of stellar speakers with
        unique presentations and case studies, engaging panel discussions,
        providing access to a wealth of industry-leading knowledge, sharing best
        practices & experiences, and outlooks with actionable takeaways.
        <br />
        <br />
        At the EAFS, you will meet people who are prominent in the finance
        sector from across East Africa & beyond; and with over 400 participants
        in attendance.
        <br />
        <br />
        There is a multitude of opportunities for you to connect and collaborate
        with key stakeholders and industry leaders under one roof. The Event
        will facilitate unparalleled networking and business matching, providing
        a catalyst for investment partnerships, business growth, and development
        in the East African finance sector.
      </p>
      <StyledBannerImage>
        <Image src={"/images/upcoming.banner.png"} alt={""} fill={true} />
      </StyledBannerImage>
    </StyledBanner>
  );
};

export const Organizers = () => {
  return (
    <StyledOrganizers>
      <StyledOrganizersTitle>
        <MainText title={"Co-Organizers"} />
        <p>
          The platform for sharing knowledge is constantly open to collaboration
          and aims to create avenues for hosting summits and conferences to
          drive policy changes and foster innovation.
        </p>
      </StyledOrganizersTitle>
      <StyledOrganizerList>
        <Organizer image={"/images/organizer.png"} />
        <Organizer image={"/images/organizer-2.png"} />
        <Organizer image={"/images/organizer-1.png"} />
      </StyledOrganizerList>
    </StyledOrganizers>
  );
};

const Organizer = ({ image }: { image: string }) => {
  return (
    <Link href={"/"}>
      <StyledOrganizer>
        <Image src={image} alt={""} fill={true} />
      </StyledOrganizer>
    </Link>
  );
};

export const Sponsors = () => {
  return (
    <StyledSponsors>
      <StyledSponsorsTitle>
        <MainText title={"Sponsors"} />
        <p>
          The platform for sharing knowledge is constantly open to collaboration
          and aims to create avenues for hosting summits and conferences to
          drive policy changes and foster innovation.
        </p>
      </StyledSponsorsTitle>
      <StyledSponsorsList>
        <Sponsor image={"/images/sponsor.1.png"} />
        <Sponsor image={"/images/sponsor.2.png"} />
        <Sponsor image={"/images/sponsor.3.png"} />
      </StyledSponsorsList>
    </StyledSponsors>
  );
};

const Sponsor = ({ image }: { image: string }) => {
  return (
    <Link href={"/"}>
      <StyledOrganizer>
        <Image src={image} alt={""} fill={true} />
      </StyledOrganizer>
    </Link>
  );
};

const VideoContainer = () => {
  return (
    <StyledVideoContainer>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=JqcncLPi9zw"
        width="100%"
        height="100%"
        playing={true}
        muted={true}
        controls={true}
      />
    </StyledVideoContainer>
  );
};

const Connect = () => {
  return (
    <StyledConnect>
      <StyledConnectBackground>
        <Image
          src={"/images/upcoming.background.png"}
          alt={""}
          quality={100}
          fill={true}
        />
      </StyledConnectBackground>
      <StyledConnectContent>
        <StyledConnectLogo>
          <Image
            src={"/images/upcoming.logo.png"}
            alt={""}
            quality={100}
            fill={true}
          />
        </StyledConnectLogo>
        <StyledConnectLinks>
          <h1>Connect with us</h1>
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
        </StyledConnectLinks>
      </StyledConnectContent>
    </StyledConnect>
  );
};
