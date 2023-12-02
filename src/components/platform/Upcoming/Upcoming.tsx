"use client";

import {
  UpcomingEafsEntity,
} from "@/gql/graphql";
import dynamic from "next/dynamic";
import { Banner } from "./Banner";
import { Guests } from "./Guests";
import { Landing } from "./Landing";
import { Organizers } from "./Organizers";
import { Sessions } from "./Sessions";
import { Sponsors } from "./Sponsors";
import { VideoContainer } from "./VideoContainer";
import Link from "next/link";
import { Button } from "@/components/shared/buttons/Button";
import { Connect } from "./Connect";
export const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: false,
});

export const Upcoming = ({
  upcoming,
  base,
}: {
  base: string;
  upcoming: UpcomingEafsEntity;
}) => {
  return (
    <div className="grid">
      <Landing upcoming={upcoming} base={base} />
      <Banner upcoming={upcoming} />
      <Guests upcoming={upcoming} />
      <Sessions upcoming={upcoming} />
      <Sponsors
        sponsor={upcoming.attributes!.content!.sponsor!.map(
          (sponsor) => sponsor!,
        )}
        sponsorIntro={upcoming.attributes!.content!.sponsorIntro!}
      />
      <Organizers
        organizer={upcoming.attributes!.exhibitor!.map(
          (organizer) => organizer!,
        )}
        organizerIntro={""}
        title="Exhibitors"
      />
      <Organizers
        organizer={upcoming.attributes!.content!.organizer!.map(
          (organizer) => organizer!,
        )}
        organizerIntro={upcoming.attributes!.content!.organizerIntro!}
        title="Organizers"
      />
      <Organizers
        organizer={upcoming.attributes!.strategicPartner!.map(
          (organizer) => organizer!,
        )}
        organizerIntro={""}
        title="Strategic Partners"
      />

      <div className="mb-[10rem] mt-[6rem] grid justify-items-center">
        <h2 className="text-[1.8rem] mb-[3rem] font-extrabold text-background">
          SPONSORSHIP AND EXHIBITION
        </h2>
        <Link href={`${base}/apply`}>
          <Button label={"APPLY HERE"} onClick={(): void => {}} />
        </Link>
      </div>
      <VideoContainer upcoming={upcoming} />
      <Connect upcoming={upcoming} />
    </div>
  );
};


