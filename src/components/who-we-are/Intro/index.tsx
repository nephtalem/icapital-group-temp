"use client";

import Image from "next/image";
import { StyledIntro, StyledIntroContent, StyledIntroPicture } from "./styles";
import { MainText } from "@/components/shared/MainText";

export const Intro = () => {
  return (
    <StyledIntro>
      <StyledIntroContent>
        <MainText title={"i-Capital at a Glance"} />
        <p>
          &quot;Since its inception, our goal has been to create a linkage
          between academia/ research and businesses. We work to solve the real
          problems that are faced by businesses and organizations; most stem
          from the inability or gap in unlocking and utilizing human resources.
          That&apos;s why our solutions have always been people-centered.&quot;
        </p>
        <h3>Gemechu Waktola, (PhD)</h3>
        <h5>Founder & CEO</h5>
      </StyledIntroContent>
      <StyledIntroPicture>
        <Image src={"/images/drphoto.png"} alt={""} fill={true} />
      </StyledIntroPicture>
    </StyledIntro>
  );
};
