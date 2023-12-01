"use client";
import { ActionButton } from "@/components/shared/buttons/ActionButton";
import { MainText } from "@/components/shared/MainText";
import Image from "next/image";
import {
  StyledAction,
  StyledActions,
  StyledBanner,
  StyledCollaborations,
  StyledContact,
  StyledPlatforms,
  StyledPlatformsItem,
  StyledPlatformsTitle,
} from "./styles";
import Link from "next/link";
import { KnowledgeSharingEntity } from "@/gql/graphql";

export const Platforms = ({
  knowledgeSharing,
}: {
  knowledgeSharing: KnowledgeSharingEntity;
}) => {
  return (
    <StyledPlatforms>
      <StyledPlatformsTitle>
        <MainText title={"Platforms"} />
      </StyledPlatformsTitle>
      {knowledgeSharing.attributes?.platform?.map((platform, index) => (
        <PlatformsItem
          key={index}
          banner={platform!.banner!.data!.attributes!.url}
          title={platform!.title!}
          description={platform!.description!}
          toParticipate={platform!.enableRegistration!}
          toSponsor={platform!.enableApplication!}
          theme={platform!.themeColor!}
        />
      ))}

      <StyledCollaborations>
        <StyledPlatformsTitle>
          <MainText title={"Open to Collaboration"} />
        </StyledPlatformsTitle>
        <p>
          The platform for sharing knowledge is constantly open to collaboration
          and aims to create avenues for hosting summits and conferences to
          drive policy changes and foster innovation.
        </p>
        <StyledContact>
          <h6>Contact us at: </h6>
          <Link href={"mailto:info@icapitalafrica.org"}>
            info@icapitalafrica.org
          </Link>
        </StyledContact>
      </StyledCollaborations>
    </StyledPlatforms>
  );
};

const PlatformsItem = ({
  banner,
  title,
  description,
  toParticipate,
  toSponsor,
  theme,
}: {
  banner: string;
  title: string;
  description: string;
  toParticipate: boolean;
  toSponsor: boolean;
  theme: string;
}) => {
  return (
    <StyledPlatformsItem color={theme}>
      <StyledBanner>
        <Image
          src={`${process.env.NEXT_PUBLIC_DATA}${banner}`}
          alt={""}
          fill={true}
          quality={100}
        />
      </StyledBanner>
      <h2>{title}</h2>
      <h5>{description}</h5>
      <StyledActions>
        {toParticipate ? (
          <StyledAction>
            <h6>To Participate</h6>
            <Link
              href={"/knowledge-sharing/east-africa-finance-summit/register"}
            >
              <ActionButton
                label={"Register Here"}
                onClick={(): void => {}}
                color={"#F07709"}
                border={"#9F4E03"}
              />
            </Link>
          </StyledAction>
        ) : (
          <></>
        )}
        {toSponsor ? (
          <StyledAction>
            <h6>To Sponsor</h6>
            <Link href={"/knowledge-sharing/east-africa-finance-summit/apply"}>
              <ActionButton
                label={"Apply Here"}
                color={"#243B7E"}
                border={"#0D2056"}
                onClick={(): void => {}}
              />
            </Link>
          </StyledAction>
        ) : (
          <></>
        )}
      </StyledActions>
    </StyledPlatformsItem>
  );
};
