import styled from "@emotion/styled";
import { breakingPoints } from "@/styles/breaking.points";

export const StyledWordAnimation = styled.div`
  display: grid;

  h2 {
    background: linear-gradient(133deg, #f58016 0%, #f58016 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    font-size: 6rem;
    font-weight: 700;
    line-height: 8rem;
    max-width: 70%;
    justify-self: center;
  }

  ${breakingPoints.mobile} {
    h2 {
      font-size: 3.2rem;
      line-height: 4rem;
      max-width: 90%;
    }
  }
`;

export const StyledWordList = styled.div`
  position: relative;
  height: 10rem;
  width: 100vw;
  margin: 14rem 0;
  .swiper-slide {
    width: fit-content !important;
  }
`;

export const StyledWord = styled.div`
  display: grid;
  margin: 0 12rem;
  grid-row-gap: 1.6rem;
  justify-items: left;
  h3 {
    color: #1a2b42;
    font-size: 4rem;
    font-weight: 700;
  }
  div {
    color: #1a2b42;
    font-size: 3.2rem;
    font-weight: 500;
  }

  ${breakingPoints.mobile} {
    margin: 0 4rem;

    h3 {
      font-size: 3.2rem;
    }
    div {
      font-size: 2.4rem;
    }
  }
`;
