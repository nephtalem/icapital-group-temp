import Image from "next/image";
import { Organizers, Sponsors } from "../Upcoming";
import {
  StyledIntro,
  StyledIntroContent,
  StyledIntroVideo,
  StyledLanding,
  StyledLandingContent,
  StyledRemark,
  StyledRemarkActions,
  StyledRemarkContent,
  StyledRemarkPerson,
  StyledRemarkPersonImage,
  StyledSession,
  StyledSessionIntro,
  StyledSessionItem,
  StyledSessionList,
  StyledSessionVideo,
  StyledSummitDetail,
  StyledSummits,
} from "./styles";
import { ActionButton, Button } from "@/components/shared/Button";
import dynamic from "next/dynamic";
import DownloadIcon from "@/assets/icons/download.svg";
import WatchIcon from "@/assets/icons/watch.svg";
import { MainText } from "@/components/shared/MainText";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export const SummitDetail = () => {
  return (
    <StyledSummitDetail>
      <Landing />
      <Intro />
      <Remark />
      <Summits />
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

const Remark = () => {
  return (
    <StyledRemark>
      <StyledRemarkContent>
        <h2>Opening Remark</h2>
        <p>
          Dr Eyob Tekalign, State Minister of Ministry of Finance, delivered the
          Opening Remark at the 4th Annual East Africa Finance Summit.
        </p>

        <p>
          The state minister, noted, &quot;a three-year Home-grown Economic
          Reform agenda has been launched to sustain the nation&apos;s rapid
          growth and attain a &apos;middle-income&apos; status economy&quot;,
          and this agenda serves as a blueprint for the immediate reform
          measures that must be taken to address new growth opportunities.
        </p>
        <p>
          With regards to the finance sector, he underlined the need to bring
          the sector up to par. &quot;In the next three years, the government
          will focus on strengthening the regulatory environment and putting in
          place a domestic system that is able to compete on international
          standards.&quot; He stressed that the financial sector reform will be
          at the backbone of the economic reform agenda and to meet the
          country&apos;s aspirations.
        </p>
        <p>
          Having outlined the existing capacity and regulatory drawbacks and the
          steps to be taken to rectify them, the state minister distinguished
          strides made. Furthermore, he stated the sector should also work to
          backstop the national development aspirations fully which primarily
          entails improving access to finance.
        </p>
        <p>
          In closing, he remarked on the government&quot;s keenness to work with
          all actors to deliver on shared development aspirations for a
          prosperous and inclusive Ethiopia and acknowledged the summit for
          facilitating the engagement.
        </p>
        <StyledRemarkActions>
          <ActionButton
            label={"Download Full Speech"}
            color={"#F07709"}
            border={"#9F4E03"}
            icon={<DownloadIcon />}
            onClick={(): void => {}}
          />
          <ActionButton
            label={"Watch the Video"}
            color={"#243B7E"}
            border={"#0D2056"}
            icon={<WatchIcon />}
            onClick={(): void => {}}
          />
        </StyledRemarkActions>
      </StyledRemarkContent>
      <StyledRemarkPerson>
        <StyledRemarkPersonImage>
          <Image src={"/images/Eyob-Tekalign.png"} alt={""} fill={true} />
        </StyledRemarkPersonImage>
        <h3>H.E. Eyob Tekalign, PhD</h3>
        <p>State Minister Ministry of Finance</p>
      </StyledRemarkPerson>
    </StyledRemark>
  );
};

const Summits = () => {
  return (
    <StyledSummits>
      <MainText title={"Proceedings of the Summit"} />
      <Session />
      <Session />
      <Session />
      <Session />
    </StyledSummits>
  );
};

const Session = () => {
  return (
    <StyledSession>
      <StyledSessionIntro>
        <h3>Opening Session</h3>
        <p>
          The welcoming speech was delivered by Gemechu Waktola (PhD), CEO of
          the i-Capital Africa Institute. Introductory Remarks were given by
          representatives of the summit co-organizers; Kenenisa Lemi, Jimma
          University; Yared Molla, Association of Ethiopian Insurers and Yodit
          Kassa, Association of Chartered Certified Accountants (ACCA). The
          summit was, then, officially opened by H.E. Ahmed Shide, Ministry of
          Finance.
        </p>
      </StyledSessionIntro>
      <StyledSessionList>
        <SessionItem />
        <SessionItem />
        <SessionItem />
      </StyledSessionList>
    </StyledSession>
  );
};

const SessionItem = () => {
  return (
    <StyledSessionItem>
      <StyledSessionVideo>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=JqcncLPi9zw"
          width="100%"
          height="100%"
          controls={true}
        />
      </StyledSessionVideo>
      <h4>Optional vide title: Welcoming Speech</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis,
        odio sint incidunt maxime amet commodi consequuntur voluptatibus illo
        quaerat recusandae explicabo distinctio quos earum dignissimos dolorem
        veniam quod sit?
      </p>
    </StyledSessionItem>
  );
};
