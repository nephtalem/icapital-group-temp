import { WhoWeAreEntity } from "@/gql/graphql";
import Image from "next/image";
import { ReactNode } from "react";
import { Html } from "../shared/Html/Html";
export const MissionVisionValue = ({ who }: { who: WhoWeAreEntity }) => {
  return (
    <div className="relative my-[10rem] grid h-max md:h-[33rem]">
      <Image
        src={`${process.env.NEXT_PUBLIC_DATA}${who.attributes?.visionMissionValueBackground?.data?.attributes?.url}`}
        alt={""}
        fill={true}
      />
      <div className="absolute h-full w-full bg-[rgba(26,43,66,0.7)]" />
      <div className="relative grid grid-cols-1 content-center justify-items-center gap-[6rem] p-[4rem] md:grid-cols-3">
        {who.attributes?.VisionMissionValue?.map((item) => (
          <ListItem
            key={item?.id}
            icon={`${item?.icon?.data?.attributes?.url}`}
            title={`${item?.title}`}
          >
            <Html
              content={`${item?.description}`}
              className="mt-[1.5rem] text-center text-base font-medium leading-[1.4rem] text-white"
            />
          </ListItem>
        ))}
      </div>
    </div>
  );
};

const ListItem = ({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="grid auto-rows-max justify-items-center">
      <div className="relative h-[7.5rem] w-[8rem] object-cover md:w-[10rem]">
        <Image
          className="object-contain"
          src={`${process.env.NEXT_PUBLIC_DATA}${icon}`}
          alt={""}
          fill={true}
        />
      </div>

      <h2 className="mt-[2rem] text-center text-[2rem] font-bold text-white md:mt-[3rem] md:text-[3rem]">
        {title}
      </h2>
      {children}
    </div>
  );
};
