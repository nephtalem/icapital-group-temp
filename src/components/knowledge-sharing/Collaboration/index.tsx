import { MainText } from "@/components/shared/MainText";
import {
  StyledCollaboration,
  StyledCollaborationItem,
  StyledCollaborationTitle,
} from "./styles";

export const Collaboration = () => {
  return (
    <StyledCollaboration>
      <StyledCollaborationTitle>
        <MainText title={"Platforms"} />
      </StyledCollaborationTitle>
      <CollaborationItem
        banner={"/images/eafs.ng"}
        title={""}
        description={""}
        toParticipate={""}
        toSponsor={""}
      />
    </StyledCollaboration>
  );
};

const CollaborationItem = ({}: {
  banner: string;
  title: string;
  description: string;
  toParticipate: string;
  toSponsor: string;
}) => {
  return <StyledCollaborationItem></StyledCollaborationItem>;
};
