import styled from "@emotion/styled";

export const StyledUpcoming = styled.div`
  display: grid;
`;

export const StyledLanding = styled.div`
  display: grid;
  height: 80rem;
  width: 100vw;
`;
export const StyledLandingContent = styled.div`
  display: grid;
  position: absolute;
  width: 100%;
  height: 100%;
  grid-auto-rows: max-content;
  justify-items: center;

  h1 {
    font-weight: 700;
    font-size: 3rem;
    line-height: 3rem;
    color: #ffffff;
    margin-top: 3.2rem;
  }
  p {
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 3rem;
    color: #ffffff;
    margin-top: 3.2rem;
    max-width: 50%;
    text-align: center;
  }
`;

export const StyledRegister = styled.div`
  display: grid;
  padding: 0.8rem;
  background: linear-gradient(180deg, #fe6602 0%, #cc5300 100%);
  border-radius: 4.8rem;
  cursor: pointer;
  margin-top: 6rem;

  div {
    background: linear-gradient(180deg, #cd5400 0%, #fe6602 100%);
    border-radius: 4rem;
    padding: 2rem 4rem;
    font-weight: 800;
    font-size: 3rem;
    line-height: 3rem;
    color: #14203a;
  }
`;

export const StyledLandingLogo = styled.div`
  height: 32rem;
  width: 31rem;
  position: relative;
  margin-top: 4.8rem;
  img {
    object-fit: contain;
  }
`;

export const StyledLandingBackground = styled.div`
  display: grid;
  height: 80rem;
  width: 100vw;
  position: relative;
  img {
    object-fit: cover;
  }
`;

export const StyledBanner = styled.div`
  width: 100vw;
  background-color: #01102f;
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-column-gap: 10rem;
  padding: 15rem 7rem;
  p {
    font-weight: 600;
    font-size: 2rem;
    line-height: 3.2rem;
    text-align: justify;
    color: #ffffff;
  }
`;

export const StyledBannerImage = styled.div`
  width: 50rem;
  height: 100%;
  position: relative;
  img {
    object-fit: contain;
  }
`;

export const StyledOrganizers = styled.div`
  display: grid;
  width: 100vw;
  padding: 16rem 10rem;
`;

export const StyledOrganizersTitle = styled.div`
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

export const StyledOrganizerList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  grid-gap: 6rem;
`;

export const StyledOrganizer = styled.div`
  display: grid;
  position: relative;
  height: 20rem;
  width: 100%;
  img {
    object-fit: contain;
  }
`;

export const StyledSponsors = styled.div`
  display: grid;
  width: 100vw;
  padding: 16rem 10rem;
`;

export const StyledSponsorsTitle = styled.div`
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

export const StyledSponsorsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  grid-gap: 6rem;
`;

export const StyledSponsor = styled.div`
  display: grid;
  position: relative;
  height: 20rem;
  width: 100%;
  img {
    object-fit: contain;
  }
`;

export const StyledSponsorApply = styled.div`
  display: grid;
  justify-items: center;
  margin-top: 13rem;
  margin-bottom: 20rem;
  h2 {
    font-weight: 800;
    font-size: 3.7rem;
    line-height: 4.6rem;
    color: #1d2f75;
  }
`;

export const StyledApply = styled.div`
  display: grid;
  padding: 0.8rem;
  background: linear-gradient(180deg, #fe6602 0%, #cc5300 100%);
  border-radius: 4.8rem;
  cursor: pointer;
  margin-top: 6rem;

  div {
    background: linear-gradient(180deg, #cd5400 0%, #fe6602 100%);
    border-radius: 4rem;
    padding: 2rem 4rem;
    font-weight: 800;
    font-size: 3rem;
    line-height: 3rem;
    color: white;
  }
`;
