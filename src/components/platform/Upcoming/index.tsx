"use client";

import DownloadIcon from "@/assets/icons/download.svg";
import { Social } from "@/components/home/Header/Social";
import { socials } from "@/components/home/Header/Socials";
import { MainText } from "@/components/shared/MainText";
import { ActionButton } from "@/components/shared/buttons/ActionButton";
import {
  ComponentOrganizerOrganizer,
  ComponentPersonPerson,
  ComponentSponsorSponsor,
  UpcomingChcdaEntity,
  UpcomingEacmsEntity,
  UpcomingEafsEntity,
} from "@/gql/graphql";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Banner } from "./Banner";
import { Guests } from "./Guests";
import { Landing } from "./Landing";
import {
  StyledConnect,
  StyledConnectBackground,
  StyledConnectContent,
  StyledConnectLinks,
  StyledConnectLogo,
  StyledOrganizer,
  StyledOrganizerList,
  StyledOrganizers,
  StyledOrganizersTitle,
  StyledSocials,
  StyledSponsors,
  StyledSponsorsCategory,
  StyledSponsorsCategoryItem,
  StyledSponsorsList,
  StyledSponsorsTitle,
  StyledVideoContainer,
} from "./styles";
import { Sessions } from "./Sessions";
export const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: false,
});

export const Upcoming = ({
  upcoming,
  base,
}: {
  base: string;
  upcoming: UpcomingEafsEntity;
}) => {
  return (
    <div className="grid">
      <Landing upcoming={upcoming} base={base} />
      <Banner upcoming={upcoming} />
      <Guests upcoming={upcoming} />
      <Sessions upcoming={upcoming} />
      <Sponsors
        sponsor={upcoming.attributes!.content!.sponsor!.map(
          (sponsor) => sponsor!,
        )}
        sponsorIntro={upcoming.attributes!.content!.sponsorIntro!}
      />
      {/* <Organizers
        organizer={upcoming.attributes!.exhibitor!.map(
          (organizer) => organizer!,
        )}
        organizerIntro={""}
        title="Exhibitors"
      />
      <Organizers
        organizer={upcoming.attributes!.content!.organizer!.map(
          (organizer) => organizer!,
        )}
        organizerIntro={upcoming.attributes!.content!.organizerIntro!}
        title="Organizers"
      />
      <Organizers
        organizer={upcoming.attributes!.strategicPartner!.map(
          (organizer) => organizer!,
        )}
        organizerIntro={""}
        title="Strategic Partners"
      />  */}

      {/* <StyledSponsorApply>
        <h2>SPONSORSHIP AND EXHIBITION</h2>
        <Link href={`${base}/apply`}>
          <StyledApply>
            <div>APPLY HERE</div>
          </StyledApply>
        </Link>
      </StyledSponsorApply> */}
      {/* <VideoContainer upcoming={upcoming} />
      <Connect upcoming={upcoming} />*/}
    </div>
  );
};

export const Speaker = ({ speaker }: { speaker: ComponentPersonPerson }) => {
  return (
    <div className="grid justify-items-center">
      <div className="relative grid h-[15rem] w-full">
        <Image
          src={`${process.env.NEXT_PUBLIC_DATA}${speaker?.picture?.data?.attributes?.url}`}
          alt={""}
          fill={true}
          className="object-contain"
        />
      </div>
      <h4 className="mt-[2rem] text-[1.2rem]">{speaker.name}</h4>
      <p className="mb-[1.5rem] mt-[.5rem] text-[.8rem] font-semibold">
        {speaker.position}
      </p>
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
    </div>
  );
};

export const Moderator = ({ speaker }: { speaker: ComponentPersonPerson }) => {
  return (
    <div className="grid justify-items-center">
      <div className="relative grid h-[15rem] w-full">
        <Image
          src={`${process.env.NEXT_PUBLIC_DATA}${speaker?.picture?.data?.attributes?.url}`}
          alt={""}
          fill={true}
          className="object-contain"
        />
        <span>Moderator</span>
      </div>
      <h4 className="mt-[2rem] text-[1.2rem]">{speaker.name}</h4>
      <p className="mb-[1.5rem] mt-[.5rem] text-[.8rem] font-semibold">
        {speaker.position}
      </p>

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
    </div>
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
