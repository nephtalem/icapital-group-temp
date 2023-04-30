import { StyledButton } from "@/components/shared/Button/styles";
import styled from "@emotion/styled";

export const StyledSummitDetail = styled.div`
  display: grid;
`;

export const StyledLanding = styled.div`
  display: grid;
  width: 100vw;
  height: 70rem;
  position: relative;

  img {
    object-fit: cover;
  }
`;

export const StyledLandingContent = styled.div`
  display: grid;
  position: absolute;
  align-self: center;
  justify-items: center;
  justify-self: center;

  h1 {
    font-weight: 800;
    font-size: 6rem;
    line-height: 7.5rem;
    color: #ffffff;
    text-align: center;
  }
  p {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 3rem;
    color: #ffffff;
    margin-top: 4rem;
  }

  h3 {
    font-weight: 700;
    font-size: 4rem;
    line-height: 5rem;
    color: #ffffff;
    margin-top: 6rem;
  }
  h6 {
    font-style: italic;
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 3rem;
    color: #ffffff;
    margin-top: 4rem;
  }
`;

export const StyledIntro = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 8rem;
  grid-column-gap: 6rem;
`;

export const StyledIntroContent = styled.div`
  display: grid;
  h2 {
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 4rem;
    color: #000000;
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.5rem;
    text-align: justify;
    color: #000000;
    margin-top: 2.8rem;
    margin-bottom: 2rem;
  }

  ${StyledButton} {
    justify-self: right;
  }
`;

export const StyledIntroVideo = styled.div`
  display: grid;
  width: 100%; 
  height: 100%;
`;
