import CoreValuesIcon from "@/assets/icons/core.values.icon.svg";
import MissionIcon from "@/assets/icons/mission.icon.svg";
import VisionIcon from "@/assets/icons/vision.icon.svg";
import Image from "next/image";
import { ReactNode } from "react";
export const MissionVisionValue = () => {
  return (
    <div className="relative my-[10rem] grid h-max md:h-[33rem]">
      <Image src={"/images/addis.bg.jpg"} alt={""} fill={true} />
      <div className="absolute h-full w-full bg-[rgba(26,43,66,0.7)]" />
      <div className="relative grid grid-cols-1 content-center justify-items-center gap-[6rem] p-[4rem] md:grid-cols-3">
        <ListItem
          icon={(className) => <VisionIcon className={className} />}
          title={"Vision"}
          value={"To see people transformed in every industry we serve."}
        />
        <ListItem
          icon={(className) => <MissionIcon className={className} />}
          title={"Mission"}
          value={
            "Making an impact that matters to our clients by providing co-created, disruptive and practical people transformation solutions through talented and trusted professionals."
          }
        />
        <ListItem
          icon={(className) => <CoreValuesIcon className={className} />}
          title={"Core Values"}
          value={""}
        >
          <p className="mt-[1.5rem] text-center text-base font-medium text-white ">
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
      </div>
    </div>
  );
};

const ListItem = ({
  icon,
  title,
  value,
  children,
}: {
  icon: (className: string) => ReactNode;
  title: string;
  value: string;
  children?: ReactNode;
}) => {
  return (
    <div className="grid auto-rows-max justify-items-center">
      {icon("w-[8rem] md:w-[10rem] h-[7.5rem]")}
      <h2 className="mt-[2rem] text-center text-[2rem] font-bold text-white md:mt-[3rem] md:text-[3rem]">
        {title}
      </h2>
      {children ?? (
        <p className="mt-[1.5rem] text-center text-base font-medium leading-[1.4rem] text-white ">
          {value}
        </p>
      )}
    </div>
  );
};
