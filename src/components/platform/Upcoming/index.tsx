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
import {
  ComponentOrganizerOrganizer,
  ComponentSponsorSponsor,
  UpcomingChcdaEntity,
  UpcomingEacmsEntity,
  UpcomingEafsEntity,
} from "@/gql/graphql";
import { Interweave } from "interweave";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export const Upcoming = ({
  upcoming,
  base,
}: {
  base: string;
  upcoming: UpcomingEafsEntity | UpcomingEacmsEntity | UpcomingChcdaEntity;
}) => {
  return (
    <StyledUpcoming>
      <Landing upcoming={upcoming} base={base} />
      <Banner upcoming={upcoming} />
      <Organizers
        organizer={upcoming.attributes!.content!.organizer!.map(
          (organizer) => organizer!
        )}
        organizerIntro={upcoming.attributes!.content!.organizerIntro!}
      />
      <Sponsors
        sponsor={upcoming.attributes!.content!.sponsor!.map(
          (sponsor) => sponsor!
        )}
        sponsorIntro={upcoming.attributes!.content!.sponsorIntro!}
      />
      <StyledSponsorApply>
        <h2>SPONSORSHIP AND EXHIBITION</h2>
        <Link href={`${base}/apply`}>
          <StyledApply>
            <div>APPLY HERE</div>
          </StyledApply>
        </Link>
      </StyledSponsorApply>
      <VideoContainer upcoming={upcoming} />
      <Connect upcoming={upcoming} />
    </StyledUpcoming>
  );
};

const Landing = ({
  upcoming,
  base,
}: {
  base: string;

  upcoming: UpcomingEafsEntity | UpcomingEacmsEntity | UpcomingChcdaEntity;
}) => {
  return (
    <StyledLanding>
      <StyledLandingBackground>
        <Image
          src={`${process.env.NEXT_PUBLIC_DATA}${upcoming.attributes?.content?.background?.data?.attributes?.url}`}
          alt={""}
          quality={100}
          fill={true}
          priority
        />
      </StyledLandingBackground>
      <StyledLandingContent>
        <StyledLandingLogo>
          <Image
            src={`${process.env.NEXT_PUBLIC_DATA}${upcoming.attributes?.content?.logo?.data?.attributes?.url}`}
            alt={""}
            fill={true}
          />
        </StyledLandingLogo>
        <h1>{upcoming.attributes?.content?.title}</h1>
        <p>&quot;{upcoming.attributes?.content?.intro}&quot;</p>
        <Link href={`${base}/register`}>
          <StyledRegister>
            <div>REGISTER HERE</div>
          </StyledRegister>
        </Link>
      </StyledLandingContent>
    </StyledLanding>
  );
};

const Banner = ({
  upcoming,
}: {
  upcoming: UpcomingEafsEntity | UpcomingEacmsEntity | UpcomingChcdaEntity;
}) => {
  return (
    <StyledBanner>
      <Interweave content={upcoming.attributes?.content?.description} />
      <StyledBannerImage>
        <Image
          src={`${process.env.NEXT_PUBLIC_DATA}${upcoming.attributes?.content?.banner?.data?.attributes?.url}`}
          alt={""}
          fill={true}
        />
      </StyledBannerImage>
    </StyledBanner>
  );
};

export const Organizers = ({
  organizer,
  organizerIntro,
}: {
  organizerIntro: string;
  organizer: ComponentOrganizerOrganizer[];
}) => {
  return (
    <StyledOrganizers>
      <StyledOrganizersTitle>
        <MainText title={"Co-Organizers"} />
        <p>{organizerIntro}</p>
      </StyledOrganizersTitle>
      <StyledOrganizerList>
        {organizer!.map((organizer, index) => (
          <Organizer
            key={index}
            to={organizer!.url!}
            image={`${process.env.NEXT_PUBLIC_DATA}${organizer?.logo?.data?.attributes?.url}`}
          />
        ))}
      </StyledOrganizerList>
    </StyledOrganizers>
  );
};

const Organizer = ({ image, to }: { image: string; to: string }) => {
  return (
    <Link href={to} target={"_blank"}>
      <StyledOrganizer>
        <Image src={image} alt={""} fill={true} />
      </StyledOrganizer>
    </Link>
  );
};

export const Sponsors = ({
  sponsorIntro,
  sponsor,
}: {
  sponsorIntro: string;
  sponsor: ComponentSponsorSponsor[];
}) => {
  return (
    <StyledSponsors>
      <StyledSponsorsTitle>
        <MainText title={"Sponsors"} />
        <p>{sponsorIntro}</p>
      </StyledSponsorsTitle>
      <StyledSponsorsList>
        {sponsor.map((sponsor, index) => (
          <Sponsor
            key={index}
            to={sponsor!.url!}
            image={`${process.env.NEXT_PUBLIC_DATA}${sponsor?.logo?.data?.attributes?.url}`}
          />
        ))}
      </StyledSponsorsList>
    </StyledSponsors>
  );
};

const Sponsor = ({ image, to }: { image: string; to: string }) => {
  return (
    <Link href={to} target={"_blank"}>
      <StyledOrganizer>
        <Image src={image} alt={""} fill={true} />
      </StyledOrganizer>
    </Link>
  );
};

const VideoContainer = ({
  upcoming,
}: {
  upcoming: UpcomingEafsEntity | UpcomingEacmsEntity | UpcomingChcdaEntity;
}) => {
  return (
    <StyledVideoContainer>
      <ReactPlayer
        url={`${upcoming.attributes?.content?.youtubeUrl}`}
        width="100%"
        height="100%"
        playing={true}
        muted={true}
        controls={true}
      />
    </StyledVideoContainer>
  );
};

const Connect = ({
  upcoming,
}: {
  upcoming: UpcomingEafsEntity | UpcomingEacmsEntity | UpcomingChcdaEntity;
}) => {
  return (
    <StyledConnect>
      <StyledConnectBackground>
        <Image
          src={`${process.env.NEXT_PUBLIC_DATA}${upcoming.attributes?.content?.background?.data?.attributes?.url}`}
          alt={""}
          quality={100}
          fill={true}
        />
      </StyledConnectBackground>
      <StyledConnectContent>
        <StyledConnectLogo>
          <Image
            src={`${process.env.NEXT_PUBLIC_DATA}${upcoming.attributes?.content?.logo?.data?.attributes?.url}`}
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
