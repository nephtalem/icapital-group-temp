import Image from "next/image";
import { Organizers, Sponsors } from "../Upcoming";
import {
  StyledIntro,
  StyledIntroContent,
  StyledIntroVideo,
  StyledLanding,
  StyledLandingContent,
  StyledSummitDetail,
} from "./styles";
import { Button } from "@/components/shared/Button";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export const SummitDetail = () => {
  return (
    <StyledSummitDetail>
      <Landing />
      <Intro />
      <Organizers />
      <Sponsors />
    </StyledSummitDetail>
  );
};

const Landing = () => {
  return (
    <StyledLanding>
      <Image src={"/images/summit.png"} alt={""} fill={true} />
      <StyledLandingContent>
        <h1>
          The 5th Edition
          <br /> East Africa Finance Summit
        </h1>
        <p>
          &quot;Reshaping the Future of Finance Sector in the Age of
          Disruption&quot;
        </p>
        <h3>May 10, 2022</h3>
        <h6>Successfully Completed</h6>
      </StyledLandingContent>
    </StyledLanding>
  );
};

const Intro = () => {
  return (
    <StyledIntro>
      <StyledIntroContent>
        <h2>The 5th EAFS Successfully Completed</h2>
        <p>
          The 5th Edition of the East Africa Finance Summit (EAFS) was held on
          May 11, 2022, at UN-ECA with the theme of Reshaping the Future of
          Finance Sector in the Age of Disruption. Considering the summit was
          held after 2 years of postponement due to COVID-19, it had a big
          engagement with more than 450 keen participants primarily from the
          financial sector Participants from the Ministry of Finance and
          National Bank of Ethiopia were also in attendance and they presented
          the existing and trending regulatory issues in the financial sector
          which makes the summit valuable and impactful.
        </p>
        <Button label={"Read More"} onClick={(): void => {}} />
      </StyledIntroContent>
      <StyledIntroVideo>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=JqcncLPi9zw"
          width="100%"
          height="100%"
          playing={true}
          muted={true}
          controls={true}
        />
      </StyledIntroVideo>
    </StyledIntro>
  );
};
