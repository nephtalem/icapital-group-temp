import styled from "styled-components";
export const StyledIntro = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  margin: 7rem 5rem;
  grid-column-gap: 10rem;
`;

export const StyledIntroContent = styled.div`
  p {
    font-size: 2.4rem;
    line-height: 4.4rem;
    font-weight: 600;
    color: #1a2b42;
    text-align: justify;
    span {
      font-size: 3.2rem;
      color: #f58016;
    }
  }
`;

export const StyledIntroImage = styled.div`
  position: relative;
  height: 45rem;
  img {
    object-fit: contain;
  }
`;
