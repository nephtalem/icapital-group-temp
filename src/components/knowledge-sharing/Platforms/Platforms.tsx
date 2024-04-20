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
    <div className="mb-[10rem] grid px-5 md:p-[2.5rem]">
      <div className="my-[3rem] grid">
        <MainText title={"Platforms"} />
      </div>
      <div className="grid gap-20">
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
      </div>

      <div className="mt-20 grid w-full items-center justify-self-center text-center md:max-w-[80%]">
        <div className="my-6 md:my-[3rem] grid">
          <MainText title={"Open to Collaboration"} />
        </div>
        <p className="text-center text-[1rem] text-sm font-medium md:font-bold">
          The platform for sharing knowledge is constantly open to collaboration
          and aims to create avenues for hosting summits and conferences to
          drive policy changes and foster innovation.
        </p>
        <div className="mt-[2.4rem] flex items-center justify-center gap-[.5rem]">
          <h6 className="text-sm font-medium text-text md:text-[1rem] md:font-bold">
            Contact us at:
          </h6>
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
