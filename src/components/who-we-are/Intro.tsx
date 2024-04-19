import { MainText } from "@/components/shared/MainText";
import Image from "next/image";
import { WhoWeAreEntity } from "@/gql/graphql";
import { Html } from "../shared/Html/Html";

export const Intro = ({ who }: { who: WhoWeAreEntity }) => {
  return (
    <div className="grid grid-cols-1 gap-16 px-[2.5rem] py-[10rem] md:grid-cols-[3fr,2fr]">
      <div className="grid">
        <MainText
          title={`${who.attributes?.Intro?.title}`}
          align="justify-self-start"
        />
        <Html
          className="mt-1.5rem text-justify text-[1.2rem] font-medium text-text md:mt-[2.4rem] md:text-[1.6rem]"
          content={`${who.attributes?.Intro?.description}`}
        />

        <h3 className="mt-8 text-base font-semibold text-text md:text-[2rem]">
          {who.attributes?.Intro?.fullName}
        </h3>
        <h5 className="mt-[.6rem] text-sm font-medium text-text md:text-[1.4rem]">
          {who.attributes?.Intro?.position}
        </h5>
      </div>
      <div className="relative h-full w-full">
        <Image
          className="object-cover"
          src={`${who.attributes?.Intro?.image?.data?.attributes?.url}`}
          alt={""}
          fill={true}
        />
      </div>
    </div>
  );
};
