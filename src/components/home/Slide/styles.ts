import { breakingPoints } from "@/styles/breaking.points";
import styled from "styled-components";
export const StyledSlide = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  position: relative;
`;

export const StyledBackground = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  img {
    object-fit: cover;
  }
`;

export const StyledCover = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  opacity: 0.3;
  position: absolute;
`;

export const StyledContent = styled.div`
  justify-self: center;
  position: absolute;
  align-self: center;
  display: grid;
  justify-items: center;
  padding: 0 20rem;

  h2 {
    font-size: 4.8rem;
    color: white;
    font-weight: bold;
    margin-top: 6rem;
  }
  p {
    text-align: center;
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: 400;
    color: white;
    margin-top: 4rem;
  }

  a {
    font-size: 2rem;
    line-height: 3rem;
    color: white;
    font-weight: 500;
    height: 7.2rem;
    display: flex;
    align-items: center;
    border: 2px solid white;
    padding: 0 3rem;
    margin-top: 10rem;
    cursor: pointer;
  }

  ${breakingPoints.mobile} {
    padding: 0 4vw;

    h2 {
      font-size: 3rem;
      margin-top: 3rem;
    }
    p {
      font-size: 1.6rem;
      line-height: 2.4rem;
      text-align: justify;
      margin-top: 2rem;
    }
    a {
      font-size: 1.6rem;
      line-height: 2.4rem;
      height: 6rem;
      margin-top: 4rem;
      cursor: pointer;
    }
  }
`;

export const StyledLogo = styled.div`
  display: grid;
  height: 16rem;
  width: 40rem;
  position: relative;
  margin-top: 10rem;

  img {
    object-fit: contain;
  }

  ${breakingPoints.mobile} {
    width: 50vw;
    height: 12rem;
  }
`;
