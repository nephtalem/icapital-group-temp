import styled from "styled-components";

export const StyledBanner = styled.div`
  display: grid;
  justify-items: center;
  gap: 4.8rem;
  margin: 20rem 0;
`;

export const StyledBannerImage = styled.div`
  display: grid;
  height: 40rem;
  width: 100%;
  position: relative;

  img {
    object-fit: contain;
  }
`;
