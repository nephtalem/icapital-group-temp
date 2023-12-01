"use client";

import Image from "next/image";
import { Organizers, Sponsors } from "../Upcoming";
import {
  StyledIntro,
  StyledIntroContent,
  StyledIntroVideo,
  StyledLanding,
  StyledLandingContent,
  StyledRemark,
  StyledRemarkActions,
  StyledRemarkContent,
  StyledRemarkPerson,
  StyledRemarkPersonImage,
  StyledSession,
  StyledSessionIntro,
  StyledSessionItem,
  StyledSessionList,
  StyledSessionVideo,
  StyledSummitDetail,
  StyledSummits,
} from "./styles";
import { Button } from "@/components/shared/buttons/Button";
import { ActionButton } from "@/components/shared/buttons/ActionButton";
import dynamic from "next/dynamic";
import DownloadIcon from "@/assets/icons/download.svg";
import WatchIcon from "@/assets/icons/watch.svg";
import { MainText } from "@/components/shared/MainText";
import {
  ComponentSessionSession,
  ComponentSessionVideoVideo,
  SummitEntity,
} from "@/gql/graphql";
import { Interweave } from "interweave";
import Link from "next/link";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export const SummitDetail = ({ summit }: { summit: SummitEntity }) => {
  return (
    <StyledSummitDetail>
      <Landing summit={summit} />
      {summit.attributes?.intro ? <Intro summit={summit} /> : <></>}
      {summit.attributes?.openingRemark ? <Remark summit={summit} /> : <></>}

      <Summits summit={summit} />
      <Organizers
        organizer={summit.attributes!.organizer!.map((organizer) => organizer!)}
        organizerIntro={summit.attributes!.organizerIntro!}
        title={""}
      />
      <Sponsors
        sponsor={summit.attributes!.sponsor!.map((sponsor) => sponsor!)}
        sponsorIntro={summit.attributes!.sponsorIntro!}
      />
    </StyledSummitDetail>
  );
};

const Landing = ({ summit }: { summit: SummitEntity }) => {
  return (
    <StyledLanding>
      <Image
        src={`${process.env.NEXT_PUBLIC_DATA}${summit.attributes?.background?.data?.attributes?.url}`}
        alt={""}
        fill={true}
      />
      <StyledLandingContent>
        <h1>{summit.attributes?.name}</h1>
        <p>&quot;{summit.attributes?.slogan}&quot;</p>
        <h3>{summit.attributes?.date}</h3>
        <h6>{summit.attributes?.status}</h6>
      </StyledLandingContent>
    </StyledLanding>
  );
};

const Intro = ({ summit }: { summit: SummitEntity }) => {
  return (
    <StyledIntro>
      <StyledIntroContent>
        <h2>{summit.attributes?.intro?.title}</h2>
        <p>{summit.attributes?.intro?.shortDescription}</p>
        <Button label={"Read More"} onClick={(): void => {}} />
      </StyledIntroContent>
      <StyledIntroVideo>
        <ReactPlayer
          url={summit.attributes!.intro!.youtubeUrl!}
          width="100%"
          height="100%"
          playing={true}
          muted={true}
          controls={true}
        />
      </StyledIntroVideo>
    </StyledIntro>
  );
};

const Remark = ({ summit }: { summit: SummitEntity }) => {
  return (
    <StyledRemark>
      <StyledRemarkContent>
        <h2>Opening Remark</h2>
        <Interweave content={summit.attributes!.openingRemark!.remark!} />
        <StyledRemarkActions>
          <Link
            href={`${process.env.NEXT_PUBLIC_DATA}${
              summit.attributes!.openingRemark?.speechFile?.data?.attributes
                ?.url
            }`}
            target={"_blank"}
            download
          >
            <ActionButton
              label={"Download Full Speech"}
              color={"#F07709"}
              border={"#9F4E03"}
              icon={<DownloadIcon />}
              onClick={(): void => {}}
            />
          </Link>

          <Link
            href={summit.attributes!.openingRemark!.youtubeUrl ?? ""}
            target={"_blank"}
          >
            <ActionButton
              label={"Watch the Video"}
              color={"#243B7E"}
              border={"#0D2056"}
              icon={<WatchIcon />}
              onClick={(): void => {}}
            />
          </Link>
        </StyledRemarkActions>
      </StyledRemarkContent>
      <StyledRemarkPerson>
        <StyledRemarkPersonImage>
          <Image
            src={`${process.env.NEXT_PUBLIC_DATA}${summit.attributes?.openingRemark?.picture?.data?.attributes?.url}`}
            alt={""}
            fill={true}
          />
        </StyledRemarkPersonImage>
        <h3>{summit.attributes?.openingRemark?.name}</h3>
        <p>{summit.attributes?.openingRemark?.position}</p>
      </StyledRemarkPerson>
    </StyledRemark>
  );
};

const Summits = ({ summit }: { summit: SummitEntity }) => {
  return (
    <StyledSummits>
      <MainText title={"Proceedings of the Summit"} />
      {summit.attributes?.session?.map((session, index) => (
        <Session key={index} session={session!} />
      ))}
    </StyledSummits>
  );
};

const Session = ({ session }: { session: ComponentSessionSession }) => {
  return (
    <StyledSession>
      <StyledSessionIntro>
        <h3>{session.title}</h3>
        <p>{session.description}</p>
      </StyledSessionIntro>
      <StyledSessionList>
        {session.sessionVideo?.map((video, index) => (
          <SessionItem key={index} video={video!} />
        ))}
      </StyledSessionList>
    </StyledSession>
  );
};

const SessionItem = ({ video }: { video: ComponentSessionVideoVideo }) => {
  return (
    <StyledSessionItem>
      <StyledSessionVideo>
        <ReactPlayer
          url={video.youtubeUrl!}
          width="100%"
          height="100%"
          controls={true}
        />
      </StyledSessionVideo>
      <h4>{video.title}</h4>
      <p>{video.description}</p>
    </StyledSessionItem>
  );
};
