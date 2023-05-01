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
import { UpcomingEafsEntity } from "@/gql/graphql";
import { Interweave } from "interweave";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export const Upcoming = ({
  upcomingEafs,
}: {
  upcomingEafs: UpcomingEafsEntity;
}) => {
  return (
    <StyledUpcoming>
      <Landing upcomingEafs={upcomingEafs} />
      <Banner upcomingEafs={upcomingEafs} />
      <Organizers upcomingEafs={upcomingEafs} />
      <Sponsors upcomingEafs={upcomingEafs} />
      <StyledSponsorApply>
        <h2>SPONSORSHIP AND EXHIBITION</h2>
        <StyledApply>
          <div>APPLY HERE</div>
        </StyledApply>
      </StyledSponsorApply>
      <VideoContainer upcomingEafs={upcomingEafs} />
      <Connect upcomingEafs={upcomingEafs} />
    </StyledUpcoming>
  );
};

const Landing = ({ upcomingEafs }: { upcomingEafs: UpcomingEafsEntity }) => {
  return (
    <StyledLanding>
      <StyledLandingBackground>
        <Image
          src={`${process.env.NEXT_PUBLIC_DATA}${upcomingEafs.attributes?.content?.background?.data?.attributes?.url}`}
          alt={""}
          quality={100}
          fill={true}
          priority
        />
      </StyledLandingBackground>
      <StyledLandingContent>
        <StyledLandingLogo>
          <Image
            src={`${process.env.NEXT_PUBLIC_DATA}${upcomingEafs.attributes?.content?.logo?.data?.attributes?.url}`}
            alt={""}
            fill={true}
          />
        </StyledLandingLogo>
        <h1>{upcomingEafs.attributes?.content?.title}</h1>
        <p>&quot;{upcomingEafs.attributes?.content?.intro}&quot;</p>
        <StyledRegister>
          <div>REGISTER HERE</div>
        </StyledRegister>
      </StyledLandingContent>
    </StyledLanding>
  );
};

const Banner = ({ upcomingEafs }: { upcomingEafs: UpcomingEafsEntity }) => {
  return (
    <StyledBanner>
      <Interweave content={upcomingEafs.attributes?.content?.description} />
      <StyledBannerImage>
        <Image
          src={`${process.env.NEXT_PUBLIC_DATA}${upcomingEafs.attributes?.content?.banner?.data?.attributes?.url}`}
          alt={""}
          fill={true}
        />
      </StyledBannerImage>
    </StyledBanner>
  );
};

export const Organizers = ({
  upcomingEafs,
}: {
  upcomingEafs: UpcomingEafsEntity;
}) => {
  return (
    <StyledOrganizers>
      <StyledOrganizersTitle>
        <MainText title={"Co-Organizers"} />
        <p>{upcomingEafs.attributes?.content?.organizerIntro}</p>
      </StyledOrganizersTitle>
      <StyledOrganizerList>
        {upcomingEafs.attributes!.content!.organizer!.map(
          (organizer, index) => (
            <Organizer
              key={index}
              to={organizer!.url!}
              image={`${process.env.NEXT_PUBLIC_DATA}${organizer?.logo?.data?.attributes?.url}`}
            />
          )
        )}
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
  upcomingEafs,
}: {
  upcomingEafs: UpcomingEafsEntity;
}) => {
  return (
    <StyledSponsors>
      <StyledSponsorsTitle>
        <MainText title={"Sponsors"} />
        <p>{upcomingEafs.attributes?.content?.sponsorIntro}</p>
      </StyledSponsorsTitle>
      <StyledSponsorsList>
        {upcomingEafs.attributes?.content?.sponsor?.map((sponsor, index) => (
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
  upcomingEafs,
}: {
  upcomingEafs: UpcomingEafsEntity;
}) => {
  return (
    <StyledVideoContainer>
      <ReactPlayer
        url={`${upcomingEafs.attributes?.content?.youtubeUrl}`}
        width="100%"
        height="100%"
        playing={true}
        muted={true}
        controls={true}
      />
    </StyledVideoContainer>
  );
};

const Connect = ({ upcomingEafs }: { upcomingEafs: UpcomingEafsEntity }) => {
  return (
    <StyledConnect>
      <StyledConnectBackground>
        <Image
          src={`${process.env.NEXT_PUBLIC_DATA}${upcomingEafs.attributes?.content?.background?.data?.attributes?.url}`}
          alt={""}
          quality={100}
          fill={true}
        />
      </StyledConnectBackground>
      <StyledConnectContent>
        <StyledConnectLogo>
          <Image
            src={`${process.env.NEXT_PUBLIC_DATA}${upcomingEafs.attributes?.content?.logo?.data?.attributes?.url}`}
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
