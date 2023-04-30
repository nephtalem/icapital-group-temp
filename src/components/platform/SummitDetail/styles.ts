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

export const StyledRemark = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  padding: 8rem;
  grid-column-gap: 6rem;
`;

export const StyledRemarkContent = styled.div`
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
`;

export const StyledRemarkActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 4rem;
  margin-top: 5rem;
`;

export const StyledRemarkPerson = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  justify-items: center;

  h3 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3rem;
    color: #000000;
    margin-top: 3.2rem;
  }
  p {
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.5rem;
    color: #000000;
    margin-top: 2rem;
  }
`;

export const StyledRemarkPersonImage = styled.div`
  display: grid;
  position: relative;
  height: 57rem;
  width: 100%;
  img {
    object-fit: cover;
  }
`;

export const StyledSummits = styled.div`
  display: grid;
  margin-top: 20rem;
  padding: 7rem;
`;

export const StyledSession = styled.div`
  display: grid;
`;

export const StyledSessionIntro = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-column-gap: 6rem;
  margin-top: 10rem;
  h3 {
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 4rem;

    color: #000000;
  }
  p {
    font-weight: 500;
    font-size: 2rem;
    line-height: 3.2rem;

    color: #000000;
  }
`;

export const StyledSessionList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin-top: 6rem;
`;

export const StyledSessionItem = styled.div`
  display: grid;
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 1rem;
  padding: 2.4rem;

  h4 {
    font-weight: 700;
    font-size: 2rem;
    line-height: 3.2rem;
    color: #000000;
    margin-top: 2.8rem;
  }
  p {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: #000000;
    margin-top: 1.6rem;
  }
`;

export const StyledSessionVideo = styled.div`
  display: grid;
  width: 100%;
  height: 24rem;
`;
