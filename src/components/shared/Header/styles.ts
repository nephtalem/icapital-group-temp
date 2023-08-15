import { breakingPoints } from "@/styles/breaking.points";
import styled from "@emotion/styled";

export const StyledHeader = styled.header`
  display: grid;
  height: 12rem;
  border-bottom: 1px solid #eee;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;
  padding: 0 5rem;
  position: sticky;
  top: 0;
  background: white;
  z-index: 100;

  ${breakingPoints.mobile} {
    grid-template-columns: 1fr max-content;
    grid-template-rows: max-content max-content;
    grid-row-gap: 2rem;
    height: max-content;
    padding-bottom: 2rem;
  }
`;
export const StyledHeaderAlt = styled.header`
  display: flex;
  height: 12rem;
  border-bottom: 1px solid #eee;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  position: sticky;
  top: 0;
  background: white;
  z-index: 100;
`;

export const StyledMenu = styled.div`
  display: flex;
  gap: 4rem;

  button {
    background-color: transparent;
    cursor: pointer;
    border: none;
    outline: none;
    svg {
      width: 6rem;
      path {
        fill: #1a2b42;
      }
    }
  }

  ${breakingPoints.mobile} {
    button {
      svg {
        width: 3rem;
      }
    }
  }
`;

export const StyledLogo = styled.div`
  display: grid;
  position: relative;
  width: 16rem;
  height: 8rem;
  cursor: pointer;
  img {
    object-fit: contain;
  }

  ${breakingPoints.mobile} {
    width: 12rem;
  }
`;

export const StyledOptions = styled.div`
  display: flex;
  justify-self: center;
  gap: 4rem;

  ${breakingPoints.mobile} {
    gap: 0;
    grid-row: 2;
    grid-column: 1/-1;
  }
`;

export const StyledOption = styled.div<{
  active: boolean;
}>`
  display: grid;

  font-size: 2rem;
  line-height: 3rem;
  font-weight: 600;
  padding: 0.4rem 2.4rem;
  border-radius: 0.8rem;
  color: ${({ active }) => (active ? "#f58016" : "black")};
  border: 2px solid ${({ active }) => (active ? "#f58016" : "transparent")};
`;
