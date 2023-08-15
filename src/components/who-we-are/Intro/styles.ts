import { StyledMainText } from "@/components/shared/MainText/styles";
import { breakingPoints } from "@/styles/breaking.points";
import styled from "@emotion/styled";

export const StyledIntro = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  margin: 20rem 5rem;
  grid-gap: 8rem;
  position: relative;
  ${breakingPoints.mobile} {
    grid-template-columns: 1fr;
  }
`;
export const StyledIntroContent = styled.div`
  display: grid;

  ${StyledMainText} {
    justify-self: left;
  }

  p {
    color: #1a2b42;
    font-size: 3.2rem;
    line-height: 4.8rem;
    font-weight: 500;
    margin-top: 4.8rem;
    text-align: justify;
  }

  h3 {
    color: #1a2b42;
    font-size: 4rem;
    font-weight: 600;
    margin-top: 4rem;
  }

  h5 {
    color: #1a2b42;
    font-size: 2.8rem;
    font-weight: 500;
    margin-top: 1.2rem;
  }

  ${breakingPoints.mobile} {
    p {
      font-size: 2.4rem;
      line-height: 3.2rem;
      margin-top: 3rem;
    }

    h3 {
      font-size: 2rem;
    }

    h5 {
      font-size: 1.6rem;
    }
  }
`;

export const StyledIntroPicture = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    object-fit: cover;
  }

  ${breakingPoints.mobile} {
    height: 40rem;
  }
`;
