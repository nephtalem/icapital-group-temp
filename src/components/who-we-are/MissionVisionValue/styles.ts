import styled from "styled-components";import { breakingPoints } from "@/styles/breaking.points";

export const StyledMissionVisionValue = styled.div`
  display: grid;
  position: relative;
  height: 67rem;
  margin: 20rem 0;

  img {
    object-fit: cover;
  }
  ${breakingPoints.mobile} {
    height: max-content;
  }
`;

export const StyledBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(26, 43, 66, 0.7);
`;

export const StyledList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: relative;
  justify-items: center;
  grid-column-gap: 12rem;
  padding: 8rem;
  align-content: center;

  ${breakingPoints.mobile} {
    grid-template-columns: 1fr;
    grid-row-gap: 10rem;
  }
`;

export const StyledListItem = styled.div`
  display: grid;
  justify-items: center;
  grid-auto-rows: max-content;
  svg {
    width: 20rem;
    height: 15rem;
  }

  h2 {
    color: #fff;
    text-align: center;
    font-size: 6rem;
    margin-top: 6rem;
    font-weight: 700;
  }
  p {
    color: #fff;
    text-align: center;
    font-size: 2rem;
    margin-top: 3rem;
    font-weight: 500;
    line-height: 2.8rem;
  }

  ${breakingPoints.mobile} {
    svg {
      width: 16rem;
    }
    h2 {
      font-size: 4rem;
      margin-top: 4rem;
    }
  }
`;
