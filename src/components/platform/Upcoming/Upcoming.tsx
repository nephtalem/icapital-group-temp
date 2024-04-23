"use client";

import { UpcomingEafsEntity } from "@/gql/graphql";
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
  const components = [
    {
      order: upcoming.attributes?.eafsSetting?.find(
        (s) => s?.sectionName === "organizer",
      )?.order,
      published: upcoming.attributes?.eafsSetting?.find(
        (s) => s?.sectionName === "organizer",
      )?.published,
      title: upcoming.attributes?.eafsSetting?.find(
        (s) => s?.sectionName === "organizer",
      )?.title,
      component: (
        <Organizers
          organizer={(upcoming.attributes!.content!.organizer ?? []).map(
            (organizer) => organizer!,
          )}
          organizerIntro={upcoming.attributes!.content!.organizerIntro!}
          title={
            upcoming.attributes?.eafsSetting?.find(
              (s) => s?.sectionName === "organizer",
            )?.title ?? "Organizers"
          }
        />
      ),
    },
    {
      order: upcoming.attributes?.eafsSetting?.find(
        (s) => s?.sectionName === "guestOfHonour",
      )?.order,
      published: upcoming.attributes?.eafsSetting?.find(
        (s) => s?.sectionName === "guestOfHonour",
      )?.published,
      title: upcoming.attributes?.eafsSetting?.find(
        (s) => s?.sectionName === "guestOfHonour",
      )?.title,
      component: (
        <Guests
          upcoming={upcoming}
          title={
            upcoming.attributes?.eafsSetting?.find(
              (s) => s?.sectionName === "guestOfHonour",
            )?.title ?? ""
          }
        />
      ),
    },
    {
      order: upcoming.attributes?.eafsSetting?.find(
        (s) => s?.sectionName === "sponsor",
      )?.order,
      published: upcoming.attributes?.eafsSetting?.find(
        (s) => s?.sectionName === "sponsor",
      )?.published,
      title: upcoming.attributes?.eafsSetting?.find(
        (s) => s?.sectionName === "sponsor",
      )?.title,
      component: (
        <Sponsors
          sponsor={(upcoming.attributes!.content!.sponsor ?? []).map(
            (sponsor) => sponsor!,
          )}
          sponsorIntro={upcoming.attributes!.content!.sponsorIntro!}
          title={
            upcoming.attributes?.eafsSetting?.find(
              (s) => s?.sectionName === "sponsor",
            )?.title ?? ""
          }
        />
      ),
    },
    {
      order: upcoming.attributes?.eafsSetting?.find(
        (s) => s?.sectionName === "session",
      )?.order,
      published: upcoming.attributes?.eafsSetting?.find(
        (s) => s?.sectionName === "session",
      )?.published,
      title: upcoming.attributes?.eafsSetting?.find(
        (s) => s?.sectionName === "session",
      )?.title,
      component: (
        <Sessions
          upcoming={upcoming}
          title={
            upcoming.attributes?.eafsSetting?.find(
              (s) => s?.sectionName === "session",
            )?.title ?? ""
          }
        />
      ),
    },
    {
      order: upcoming.attributes?.eafsSetting?.find(
        (s) => s?.sectionName === "strategicPartner",
      )?.order,
      published: upcoming.attributes?.eafsSetting?.find(
        (s) => s?.sectionName === "strategicPartner",
      )?.published,
      title: upcoming.attributes?.eafsSetting?.find(
        (s) => s?.sectionName === "strategicPartner",
      )?.title,
      component: (
        <Organizers
          organizer={(upcoming.attributes!.strategicPartner ?? []).map(
            (organizer) => organizer!,
          )}
          organizerIntro={""}
          title={
            upcoming.attributes?.eafsSetting?.find(
              (s) => s?.sectionName === "strategicPartner",
            )?.title ?? "Strategic Partners"
          }
        />
      ),
    },
    {
      order: upcoming.attributes?.eafsSetting?.find(
        (s) => s?.sectionName === "exhibitor",
      )?.order,
      published: upcoming.attributes?.eafsSetting?.find(
        (s) => s?.sectionName === "exhibitor",
      )?.published,
      title: upcoming.attributes?.eafsSetting?.find(
        (s) => s?.sectionName === "exhibitor",
      )?.title,
      component: (
        <Organizers
          organizer={(upcoming.attributes!.exhibitor ?? []).map(
            (organizer) => organizer!,
          )}
          organizerIntro={""}
          title={
            upcoming.attributes?.eafsSetting?.find(
              (s) => s?.sectionName === "exhibitor",
            )?.title ?? "Exhibitors"
          }
        />
      ),
    },
  ];

  console.log(upcoming.attributes?.eafsSetting);
  return (
    <div className="grid">
      {/* <Landing upcoming={upcoming} base={base} /> */}
      <Banner upcoming={upcoming} base={base} />
      {components
        .sort((a, b) => a.order! - b.order!)
        .map((component) => {
          if (component.published) {
            return component.component;
          }
        })}

      <div className="mb-[10rem] mt-[6rem] grid justify-items-center">
        <h2 className="mb-[3rem] text-center text-lg font-extrabold text-background md:text-[1.8rem]">
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
