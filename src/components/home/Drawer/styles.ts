import { breakingPoints } from "@/styles/breaking.points";
import { Theme } from "@/styles/theme";
import styled from "styled-components";
export const StyledDrawer = styled.div`
  display: grid;
  height: 100vh;
  width: 50rem;
  background: linear-gradient(158.71deg, #253e5e 1.17%, #1a4a87 97.75%);
  grid-auto-rows: max-content;
  padding: 8rem 5rem;
  justify-items: left;
  grid-row-gap: 4rem;
  h1 {
    font-size: 3.2rem;
    font-weight: bold;
    color: white;
    margin-bottom: 4rem;
  }

  ${breakingPoints.mobile} {
    width: 80vw;
  }
`;

export const StyledDrawerItem = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  grid-column-gap: 2.8rem;
  position: relative;
  transition: all 0.3s ease-in-out;
  span {
    position: absolute;
    height: 0.2rem;
    width: 0;
    background-color: ${Theme.colors.accent};
    bottom: -1rem;
    left: 0;
  }

  p {
    font-size: 2.4rem;
    font-weight: 500;
    color: white;
    transition: all 0.3s;
  }
  svg {
    height: 1.6rem;
  }
  &:hover {
    p {
      color: ${Theme.colors.accent};
    }
    svg {
      path {
        fill: ${Theme.colors.accent};
      }
    }
  }
`;
