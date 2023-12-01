"use client";

import Image from "next/image";
import {
  StyledApply,
  StyledBanner,
  StyledBannerImage,
  StyledBannerWrapper,
  StyledConnect,
  StyledConnectBackground,
  StyledConnectContent,
  StyledConnectLinks,
  StyledConnectLogo,
  StyledGuest,
  StyledGuestImage,
  StyledGuests,
  StyledGuestsList,
  StyledLanding,
  StyledLandingBackground,
  StyledLandingContent,
  StyledLandingLogo,
  StyledOrganizer,
  StyledOrganizerList,
  StyledOrganizers,
  StyledOrganizersTitle,
  StyledRegister,
  StyledSession,
  StyledSessionItem,
  StyledSessionItemImage,
  StyledSessionWrapper,
  StyledSessions,
  StyledSessionsList,
  StyledSocials,
  StyledSponsorApply,
  StyledSponsors,
  StyledSponsorsCategory,
  StyledSponsorsCategoryItem,
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
  ComponentEafsSessionEafsSession,
  ComponentOrganizerOrganizer,
  ComponentPersonPerson,
  ComponentSponsorSponsor,
  UpcomingChcdaEntity,
  UpcomingEacmsEntity,
  UpcomingEafsEntity,
} from "@/gql/graphql";
import { Interweave } from "interweave";
import { ActionButton } from "@/components/shared/buttons/ActionButton";
import DownloadIcon from "@/assets/icons/download.svg";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export const Upcoming = ({
  upcoming,
  base,
}: {
  base: string;
  upcoming: UpcomingEafsEntity;
}) => {
  return (
    <StyledUpcoming>
      <Landing upcoming={upcoming} base={base} />
      <Banner upcoming={upcoming} />
      <Guests upcoming={upcoming} />
      <Sessions upcoming={upcoming} />
      <Sponsors
        sponsor={upcoming.attributes!.content!.sponsor!.map(
          (sponsor) => sponsor!
        )}
        sponsorIntro={upcoming.attributes!.content!.sponsorIntro!}
      />
      <Organizers
        organizer={upcoming.attributes!.exhibitor!.map(
          (organizer) => organizer!
        )}
        organizerIntro={""}
        title="Exhibitors"
      />
      <Organizers
        organizer={upcoming.attributes!.content!.organizer!.map(
          (organizer) => organizer!
        )}
        organizerIntro={upcoming.attributes!.content!.organizerIntro!}
        title="Organizers"
      />
      <Organizers
        organizer={upcoming.attributes!.strategicPartner!.map(
          (organizer) => organizer!
        )}
        organizerIntro={""}
        title="Strategic Partners"
      />

      {/* <StyledSponsorApply>
        <h2>SPONSORSHIP AND EXHIBITION</h2>
        <Link href={`${base}/apply`}>
          <StyledApply>
            <div>APPLY HERE</div>
          </StyledApply>
        </Link>
      </StyledSponsorApply> */}
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

const Banner = ({ upcoming }: { upcoming: UpcomingEafsEntity }) => {
  return (
    <StyledBanner>
      <StyledBannerWrapper>
        <Interweave content={upcoming.attributes?.content?.description} />
        {upcoming.attributes?.introDocument?.data?.attributes?.url ? (
          <Link
            href={`${process.env.NEXT_PUBLIC_DATA}${upcoming.attributes
              ?.introDocument!.data!.attributes!.url!}`}
            target={"_blank"}
            download
          >
            <ActionButton
              label={"Download Document"}
              color={"#F07709"}
              border={"#9F4E03"}
              icon={<DownloadIcon />}
              onClick={(): void => {}}
            />
          </Link>
        ) : (
          <></>
        )}
      </StyledBannerWrapper>

      <StyledBannerImage>
        {upcoming.attributes?.introVideo ? (
          <ReactPlayer
            url={`${upcoming.attributes?.introVideo}`}
            width="100%"
            height="100%"
            playing={true}
            muted={true}
            controls={true}
          />
        ) : (
          <Image
            src={`${process.env.NEXT_PUBLIC_DATA}${upcoming.attributes?.content?.banner?.data?.attributes?.url}`}
            alt={""}
            fill={true}
          />
        )}
      </StyledBannerImage>
    </StyledBanner>
  );
};

const Guests = ({ upcoming }: { upcoming: UpcomingEafsEntity }) => {
  return (
    <StyledGuests>
      <MainText title={"Guest of Honours"} />
      <StyledGuestsList>
        {upcoming.attributes?.guestOfHonour?.map((guest, index) => (
          <Guest guest={guest!} key={index} />
        ))}
      </StyledGuestsList>
    </StyledGuests>
  );
};

const Guest = ({ guest }: { guest: ComponentPersonPerson }) => {
  return (
    <StyledGuest>
      <StyledGuestImage>
        <Image
          src={`${process.env.NEXT_PUBLIC_DATA}${guest?.picture?.data?.attributes?.url}`}
          alt={""}
          fill={true}
        />
      </StyledGuestImage>
      <h4>{guest.name}</h4>
      <p>{guest.position}</p>
    </StyledGuest>
  );
};

const Sessions = ({ upcoming }: { upcoming: UpcomingEafsEntity }) => {
  return (
    <StyledSessions>
      <MainText title={"Proceedings of the Summit"} />
      {upcoming.attributes?.session?.map((session, index) => (
        <Session key={index} session={session!} />
      ))}
    </StyledSessions>
  );
};

const Session = ({ session }: { session: ComponentEafsSessionEafsSession }) => {
  return (
    <StyledSession>
      <h3>{session.title}</h3>
      <StyledSessionWrapper>
        <StyledSessionsList>
          {session.speaker?.map((speaker, index) => (
            <Speaker speaker={speaker!} key={index} />
          ))}
        </StyledSessionsList>
        {session.moderator ? <Moderator speaker={session.moderator!} /> : <></>}
      </StyledSessionWrapper>
    </StyledSession>
  );
};

const Speaker = ({ speaker }: { speaker: ComponentPersonPerson }) => {
  return (
    <StyledSessionItem>
      <StyledSessionItemImage>
        <Image
          src={`${process.env.NEXT_PUBLIC_DATA}${speaker?.picture?.data?.attributes?.url}`}
          alt={""}
          fill={true}
        />
      </StyledSessionItemImage>
      <h4>{speaker.name}</h4>
      <p>{speaker.position}</p>
      {speaker.document?.data?.attributes?.url ? (
        <Link
          href={`${process.env.NEXT_PUBLIC_DATA}${speaker.document.data!
            .attributes!.url!}`}
          target={"_blank"}
          download
        >
          <ActionButton
            label={"Download Abstract"}
            color={"#F07709"}
            border={"#9F4E03"}
            icon={<DownloadIcon />}
            onClick={(): void => {}}
          />
        </Link>
      ) : (
        <></>
      )}
    </StyledSessionItem>
  );
};

const Moderator = ({ speaker }: { speaker: ComponentPersonPerson }) => {
  return (
    <StyledSessionItem>
      <StyledSessionItemImage>
        <Image
          src={`${process.env.NEXT_PUBLIC_DATA}${speaker?.picture?.data?.attributes?.url}`}
          alt={""}
          fill={true}
        />
        <span>Moderator</span>
      </StyledSessionItemImage>
      <h4>{speaker.name}</h4>
      <p>{speaker.position}</p>
      {speaker.document?.data?.attributes?.url ? (
        <Link
          href={`${process.env.NEXT_PUBLIC_DATA}${speaker.document.data!
            .attributes!.url!}`}
          target={"_blank"}
          download
        >
          <ActionButton
            label={"Download Abstract"}
            color={"#F07709"}
            border={"#9F4E03"}
            icon={<DownloadIcon />}
            onClick={(): void => {}}
          />
        </Link>
      ) : (
        <></>
      )}
    </StyledSessionItem>
  );
};

export const Organizers = ({
  organizer,
  organizerIntro,
  title,
}: {
  title: string;
  organizerIntro: string;
  organizer: ComponentOrganizerOrganizer[];
}) => {
  return (
    <StyledOrganizers>
      <StyledOrganizersTitle>
        <MainText title={title} />
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
    <Link href={to ?? "/"} target={"_blank"}>
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
      <StyledSponsorsCategory>
        <StyledSponsorsCategoryItem>
          <h3>Platinum</h3>
          <StyledSponsorsList>
            {sponsor
              .filter((sponsor) => sponsor.level?.toString() === "Platinum")
              .map((sponsor, index) => (
                <Sponsor
                  key={index}
                  to={sponsor!.url!}
                  image={`${process.env.NEXT_PUBLIC_DATA}${sponsor?.logo?.data?.attributes?.url}`}
                />
              ))}
          </StyledSponsorsList>
        </StyledSponsorsCategoryItem>

        <StyledSponsorsCategoryItem>
          <h3>Gold</h3>
          <StyledSponsorsList>
            {sponsor
              .filter((sponsor) => sponsor.level?.toString() === "Gold")
              .map((sponsor, index) => (
                <Sponsor
                  key={index}
                  to={sponsor!.url!}
                  image={`${process.env.NEXT_PUBLIC_DATA}${sponsor?.logo?.data?.attributes?.url}`}
                />
              ))}
          </StyledSponsorsList>
        </StyledSponsorsCategoryItem>

        <StyledSponsorsCategoryItem>
          <h3>Silver</h3>
          <StyledSponsorsList>
            {sponsor
              .filter((sponsor) => sponsor.level?.toString() === "Silver")
              .map((sponsor, index) => (
                <Sponsor
                  key={index}
                  to={sponsor!.url!}
                  image={`${process.env.NEXT_PUBLIC_DATA}${sponsor?.logo?.data?.attributes?.url}`}
                />
              ))}
          </StyledSponsorsList>
        </StyledSponsorsCategoryItem>
      </StyledSponsorsCategory>
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
