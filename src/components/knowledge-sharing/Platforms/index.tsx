import { ActionButton } from "@/components/shared/Button";
import { MainText } from "@/components/shared/MainText";
import Image from "next/image";
import {
  StyledAction,
  StyledActions,
  StyledBanner,
  StyledPlatforms,
  StyledPlatformsItem,
  StyledPlatformsTitle,
} from "./styles";

export const Platforms = () => {
  return (
    <StyledPlatforms>
      <StyledPlatformsTitle>
        <MainText title={"Platforms"} />
      </StyledPlatformsTitle>
      <PlatformsItem
        banner={"/images/eafs.png"}
        title={"East Africa Finance Summit"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper mauris vitae ornare ullamcorper. Vivamus vel ex eu dui aliquet commodo vitae vitae tortor. Morbi vitae risus sit amet magna efficitur posuere at sollicitudin elit. Donec gravida justo non ornare blandit. Mauris feugiat blandit quam, sed sagittis quam auctor egestas. Fusce luctus risus commodo lorem rutrum, vel pretium purus interdum. Lorem ipsum dolor sit amet, "
        }
        toParticipate={"/"}
        toSponsor={"/"}
        theme={"#F27623"}
      />

      <PlatformsItem
        banner={"/images/eacms.png"}
        title={"East Africa Finance Summit"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper mauris vitae ornare ullamcorper. Vivamus vel ex eu dui aliquet commodo vitae vitae tortor. Morbi vitae risus sit amet magna efficitur posuere at sollicitudin elit. Donec gravida justo non ornare blandit. Mauris feugiat blandit quam, sed sagittis quam auctor egestas. Fusce luctus risus commodo lorem rutrum, vel pretium purus interdum. Lorem ipsum dolor sit amet, "
        }
        toParticipate={""}
        toSponsor={""}
        theme={"#00B823"}
      />

      <PlatformsItem
        banner={"/images/chcda.png"}
        title={"East Africa Finance Summit"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper mauris vitae ornare ullamcorper. Vivamus vel ex eu dui aliquet commodo vitae vitae tortor. Morbi vitae risus sit amet magna efficitur posuere at sollicitudin elit. Donec gravida justo non ornare blandit. Mauris feugiat blandit quam, sed sagittis quam auctor egestas. Fusce luctus risus commodo lorem rutrum, vel pretium purus interdum. Lorem ipsum dolor sit amet, "
        }
        toParticipate={""}
        toSponsor={""}
        theme={"#3F60B8"}
      />
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
  toParticipate: string;
  toSponsor: string;
  theme: string;
}) => {
  return (
    <StyledPlatformsItem color={theme}>
      <StyledBanner>
        <Image src={banner} alt={""} fill={true} quality={100} />
      </StyledBanner>
      <h2>{title}</h2>
      <h5>{description}</h5>
      {toParticipate !== "" && toSponsor !== "" ? (
        <StyledActions>
          <StyledAction>
            <h6>To Participate</h6>
            <ActionButton
              label={"Register Here"}
              onClick={(): void => {}}
              color={"#F07709"}
              border={"#9F4E03"}
            />
          </StyledAction>
          <StyledAction>
            <h6>To Sponsor</h6>
            <ActionButton
              label={"Apply Here"}
              color={"#243B7E"}
              border={"#0D2056"}
              onClick={(): void => {}}
            />
          </StyledAction>
        </StyledActions>
      ) : (
        <></>
      )}
    </StyledPlatformsItem>
  );
};
