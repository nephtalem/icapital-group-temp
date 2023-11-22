import styled from "styled-components";import { breakingPoints } from "@/styles/breaking.points";

export const StyledWork = styled.div`
  display: grid;
  height: 45rem;
  background: linear-gradient(133deg, #f58016 0%, rgba(245, 128, 22, 0.8) 100%);
  grid-auto-rows: max-content;
  align-content: center;
  grid-row-gap: 8rem;
  margin: 12rem 0;
  h2 {
    color: #fff;
    text-align: center;
    font-size: 6rem;
    font-weight: 700;
  }
  ${breakingPoints.mobile} {
    height: max-content;
    padding: 4rem 0;

    h2 {
      font-size: 4rem;
    }
  }
`;

export const StyledWorkList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;

  grid-auto-rows: max-content;
  align-content: center;
  ${breakingPoints.mobile} {
    grid-template-columns: max-content max-content;
    justify-content: space-around;
    justify-items: left;
    grid-row-gap: 6rem;
  }
`;
export const StyledWorkItem = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  align-content: center;
  justify-items: start;
  grid-gap: 0.4rem;
  span {
    color: #fff;
    text-align: center;
    font-size: 6rem;
    font-weight: 700;
    ::before {
      content: "+";
    }
  }
  p {
    color: #fff;
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
  }
  ${breakingPoints.mobile} {
    span {
      font-size: 4rem;
    }
    p {
      font-size: 2rem;
    }
  }
`;
