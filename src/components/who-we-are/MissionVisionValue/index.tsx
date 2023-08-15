import Image from "next/image";
import {
  StyledBg,
  StyledList,
  StyledListItem,
  StyledMissionVisionValue,
} from "./styles";
import { ReactNode } from "react";
import VisionIcon from "@/assets/icons/vision.icon.svg";
import MissionIcon from "@/assets/icons/mission.icon.svg";
import CoreValuesIcon from "@/assets/icons/core.values.icon.svg";
export const MissionVisionValue = () => {
  return (
    <StyledMissionVisionValue>
      <Image src={"/images/addis.bg.jpg"} alt={""} fill={true} />
      <StyledBg />
      <StyledList>
        <ListItem
          icon={<VisionIcon />}
          title={"Vision"}
          value={"To see people transformed in every industry we serve."}
        />
        <ListItem
          icon={<MissionIcon />}
          title={"Mission"}
          value={
            "Making an impact that matters to our clients by providing co-created, disruptive and practical people transformation solutions through talented and trusted professionals."
          }
        />
        <ListItem icon={<CoreValuesIcon />} title={"Core Values"} value={""}>
          <p>
            Thought leadership
            <br />
            Professionalism
            <br />
            Client centricity
            <br />
            Result-orientation
            <br />
            Connectedness
            <br />
            Disruption
          </p>
        </ListItem>
      </StyledList>
    </StyledMissionVisionValue>
  );
};

const ListItem = ({
  icon,
  title,
  value,
  children,
}: {
  icon: ReactNode;
  title: string;
  value: string;
  children?: ReactNode;
}) => {
  return (
    <StyledListItem>
      {icon}
      <h2>{title}</h2>
      {children ?? <p>{value}</p>}
    </StyledListItem>
  );
};
