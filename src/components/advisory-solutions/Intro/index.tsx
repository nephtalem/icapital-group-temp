"use client";

import Image from "next/image";
import { StyledIntro, StyledIntroContent, StyledIntroImage } from "./styles";

export const Intro = () => {
  return (
    <StyledIntro>
      <StyledIntroContent>
        <p>
          <span>Consultancy</span> services tailor-made for individual client
          organizations. Our solutions are geared towards enhancing
          enterprises&apos; ability to prepare for the fast changing business
          world and become successful. The foundation of the Institute is our
          understanding of the significant gaps that are limiting innovativeness
          and competitiveness of African enterprises both at regional and global
          levels. We have specific tools and proven, robust methodologies for
          our client&apos;s effort to provide practical learning solutions. We
          will work in a collaborative and pragmatic manner, with as many joint
          working sessions as required to get our client to the right answer
          faster. Some of our Advisory Solution packages are Human Resources
          Transformation, Organizational Transformation and Workforce Solutions
        </p>
      </StyledIntroContent>
      <StyledIntroImage>
        <Image src={"/images/as.intro.png"} alt={""} fill={true} />
      </StyledIntroImage>
    </StyledIntro>
  );
};
