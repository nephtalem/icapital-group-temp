"use client";

import { MainText } from "@/components/shared/MainText";
import Image from "next/image";

export const Intro = () => {
  return (
    <div className="grid grid-cols-1 gap-16 px-[2.5rem] py-[10rem] md:grid-cols-[3fr,2fr]">
      <div className="grid">
        <MainText title={"i-Capital at a Glance"} align="justify-self-start" />
        <p className="mt-1.5rem text-justify text-[1.2rem] font-medium text-text md:mt-[2.4rem] md:text-[1.6rem]">
          &quot;Since its inception, our goal has been to create a linkage
          between academia/ research and businesses. We work to solve the real
          problems that are faced by businesses and organizations; most stem
          from the inability or gap in unlocking and utilizing human resources.
          That&apos;s why our solutions have always been people-centered.&quot;
        </p>
        <h3 className="mt-8 text-base font-semibold text-text md:text-[2rem]">
          Gemechu Waktola, (PhD)
        </h3>
        <h5 className="mt-[.6rem] text-sm font-medium text-text md:text-[1.4rem]">
          Founder & CEO
        </h5>
      </div>
      <div className="relative h-full w-full">
        <Image
          className="object-cover"
          src={"/images/drphoto.png"}
          alt={""}
          fill={true}
        />
      </div>
    </div>
  );
};
