"use client";
import { MainText } from "@/components/shared/MainText";
import { KnowledgeSharingEntity } from "@/gql/graphql";
import Link from "next/link";
import { PlatformsItem } from "./PlatformsItem";

export const Platforms = ({
  knowledgeSharing,
}: {
  knowledgeSharing: KnowledgeSharingEntity;
}) => {
  return (
    <div className="mb-[10rem] grid px-[8rem] py-[2.5rem]">
      <div className="my-[3rem] grid">
        <MainText title={"Platforms"} />
      </div>
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

      <div className="grid max-w-[80%] items-center justify-self-center text-center">
        <div className="my-[3rem] grid">
          <MainText title={"Open to Collaboration"} />
        </div>
        <p className="text-[1rem] font-bold">
          The platform for sharing knowledge is constantly open to collaboration
          and aims to create avenues for hosting summits and conferences to
          drive policy changes and foster innovation.
        </p>
        <div className="mt-[2.4rem] justify-center flex items-center gap-[.5rem]">
          <h6 className="text-[1rem] font-bold text-text">Contact us at: </h6>
          <Link
            className="text-[1rem] font-bold text-accent"
            href={"mailto:info@icapitalafrica.org"}
          >
            info@icapitalafrica.org
          </Link>
        </div>
      </div>
    </div>
  );
};


