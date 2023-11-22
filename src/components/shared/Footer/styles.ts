import { breakingPoints } from "@/styles/breaking.points";
import styled from "styled-components";
export const StyledFooter = styled.footer`
  background-color: #1a2b42;
`;

export const StyledFooterContent = styled.div`
  display: grid;
  padding: 5rem;

  ${breakingPoints.mobile} {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
`;
export const StyledFooterMain = styled.div`
  display: grid;

  p {
    font-size: 1.4rem;
    font-weight: 400;
    color: white;
    line-height: 2.2rem;
    text-align: justify;
  }
  span {
    height: 1px;
    width: 100%;
    background-color: white;
    margin: 4rem 0;
  }
`;

export const StyledContact = styled.div`
  display: grid;
  grid-row-gap: 3.2rem;
`;
export const StyledContactRow = styled.div`
  display: flex;
  gap: 5rem;
  ${breakingPoints.mobile} {
    gap: 2rem;
  }
`;
export const StyledContactMultiple = styled.div`
  display: grid;
  grid-template-columns: 1.6rem max-content max-content;
  grid-column-gap: 2rem;
  align-items: center;
  svg {
    height: 1.6rem;
    widows: 1.6rem;
  }

  h4 {
    font-size: 1.4rem;
    font-weight: 400;
    color: white;
  }
`;
export const StyledContactItem = styled.div`
  display: grid;
  grid-template-columns: 1.6rem max-content;
  grid-column-gap: 2rem;
  align-items: center;
  svg {
    height: 1.6rem;
    widows: 1.6rem;
  }

  h4 {
    font-size: 1.4rem;
    font-weight: 400;
    color: white;
  }
`;
export const StyledFooterLogo = styled.div`
  display: grid;
  position: relative;
  width: 20rem;
  height: 12rem;
  margin-bottom: 3rem;
  img {
    object-fit: contain;
  }

  ${breakingPoints.mobile} {
    width: 12rem;
    height: 8rem;
  }
`;

export const StyledFooterBottom = styled.div`
  display: flex;
  width: 100vw;
  height: 12rem;
  background-color: black;
  position: relative;
  justify-content: space-between;
  color: white;
  align-items: center;
  padding: 0 6rem;
  p {
    font-size: 1.4rem;
    font-weight: 500;
  }
  div {
    font-size: 1.4rem;
    font-weight: 500;
    display: flex;
    gap: 0.8rem;
    align-items: center;
    align-content: center;
    a {
      display: flex;
      align-items: center;
      align-content: center;
      gap: 0.4rem;

      svg {
        height: 1.4rem;
      }
    }
  }
`;

export const StyledFooterSocials = styled.div`
  grid-column: 1/-1;
  justify-self: right;
  margin-top: 8rem;
`;

export const StyledFooterLinks = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  justify-self: right;
  align-self: end;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 9rem;

  ${breakingPoints.mobile} {
    grid-template-columns: repeat(2, 1fr);
    justify-self: left;
    margin-top: 4rem;
    grid-row-gap: 4rem;
  }
`;

export const StyledFooterLink = styled.div`
  display: grid;
  grid-row-gap: 3.2rem;
  h3 {
    font-size: 2rem;
    font-weight: bold;
    color: white;
    margin-bottom: 0.8rem;
    :hover {
      text-decoration: underline;
    }
  }

  p {
    font-size: 1.6rem;
    font-weight: 400;
    color: white;
    :hover {
      text-decoration: underline;
    }
  }
`;
