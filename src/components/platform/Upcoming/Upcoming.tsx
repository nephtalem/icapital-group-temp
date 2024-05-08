"use client";

import { UpcomingEafsEntity } from "@/gql/graphql";
import dynamic from "next/dynamic";
import { Banner } from "./Banner";
import { Guests } from "./Guests";
import { Landing } from "./Landing";
import { Organizers } from "./Organizers";
import { Sessions, Speakers } from "./Sessions";
import { Sponsors } from "./Sponsors";
import { VideoContainer } from "./VideoContainer";
import Link from "next/link";
import { Button, OutlineButton } from "@/components/shared/buttons/Button";
import { Connect } from "./Connect";
import { Hero } from "./Hero";
import { LogoSlider } from "./LogoSlider";
import { Statistics } from "./Statistics";
import Image from "next/image";
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
        <Speakers
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
    <div className="grid bg-[#FEF4EA]">
      <Hero upcoming={upcoming} base={base} />
      <Statistics upcoming={upcoming} base={base} />
      <LogoSlider upcoming={upcoming} base={base} />
      <Banner upcoming={upcoming} base={base} />
      <Guests
        upcoming={upcoming}
        title={
          upcoming.attributes?.eafsSetting?.find(
            (s) => s?.sectionName === "guestOfHonour",
          )?.title ?? ""
        }
      />
      <Speakers
        upcoming={upcoming}
        title={
          upcoming.attributes?.eafsSetting?.find(
            (s) => s?.sectionName === "session",
          )?.title ?? ""
        }
      />
      <Sessions 
        upcoming={upcoming}
      />
      <div className="relative mb-[10rem] grid justify-items-center py-20">
        <Image
          src={"/images/apply.bg.png"}
          alt={""}
          fill
          className={"object-cover"}
          loading={"eager"}
        />
        <div
          className={"absolute left-0 top-0 z-10 h-full w-full bg-black/50"}
        />
        <div
          className={
            "relative z-20 grid auto-rows-max content-center items-center justify-items-center gap-16 md:w-1/2"
          }
        >
          <p
            className={
              "text-center text-lg font-extrabold text-white md:text-4xl"
            }
          >
            Become a Sponsor or Exhibitor at EAFS 2024 and Get your Products &
            Services Promoted!
          </p>
          <Link href={`${base}/apply`}>
            <OutlineButton label={"APPLY HERE"} onClick={(): void => {}} />
          </Link>
        </div>
      </div>
      <VideoContainer upcoming={upcoming} />
      <Connect upcoming={upcoming} />
    </div>
  );
};
