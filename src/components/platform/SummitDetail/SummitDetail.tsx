"use client";

import { SummitEntity } from "@/gql/graphql";
import dynamic from "next/dynamic";
import { Organizers } from "../Upcoming/Organizers";
import { Sponsors } from "../Upcoming/Sponsors";
import { Landing } from "./Landing";
import { Intro } from "./Intro";
import { Remark } from "./Remark";
import { Summits } from "./Summits";

export const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: false,
});

export const SummitDetail = ({ summit }: { summit: SummitEntity }) => {
  return (
    <div className="grid">
      <Landing summit={summit} />
      {summit.attributes?.intro ? <Intro summit={summit} /> : <></>}
      {summit.attributes?.openingRemark ? <Remark summit={summit} /> : <></>}

      <Summits summit={summit} />
      <Organizers
        organizer={summit.attributes!.organizer!.map((organizer) => organizer!)}
        organizerIntro={summit.attributes!.organizerIntro!}
        title={"Organizers"}
      />
      <Sponsors
        sponsor={summit.attributes!.sponsor!.map((sponsor) => sponsor!)}
        sponsorIntro={summit.attributes!.sponsorIntro!}
      />
    </div>
  );
};
