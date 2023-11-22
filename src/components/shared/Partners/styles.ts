import { breakingPoints } from "@/styles/breaking.points";
import styled from "styled-components";

export const StyledPartners = styled.div`
  display: grid;
  width: 100vw;
  padding: 16rem 10rem;
  ${breakingPoints.mobile} {
    padding: 16rem 4rem;
  }
`;

export const StyledPartnersTitle = styled.div`
  display: grid;
  margin: 6rem 0;
  justify-items: center;
  justify-self: center;
  max-width: 90rem;
  text-align: center;
  p {
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.5rem;
    margin-top: 4rem;
    color: #000000;
  }
`;

export const StyledPartnerList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  grid-gap: 6rem;

  ${breakingPoints.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const StyledPartner = styled.div`
  display: grid;
  position: relative;
  height: 20rem;
  width: 100%;
  img {
    object-fit: contain;
    object-position: left;
  }
`;
