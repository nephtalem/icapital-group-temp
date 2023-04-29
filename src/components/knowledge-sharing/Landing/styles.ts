import styled from "@emotion/styled";

export const StyledLanding = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 5rem;
  grid-column-gap: 14rem;
`;
export const StyledContent = styled.div`
  display: grid;
  grid-auto-rows: max-content;

  h1 {
    font-weight: 700;
    font-size: 6.4rem;
    line-height: 8rem;
    color: #f58016;
  }
  h2 {
    font-weight: 700;
    font-size: 4rem;
    line-height: 5rem;
    color: #000000;
  }

  p {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 3.2rem;
    color: #000000;
    text-align: justify;
    margin-top: 4rem;
  }
`;

export const StyledQuote = styled.div`
  display: grid;
  grid-template-columns: 0.4rem 1fr;
  grid-template-rows: max-content max-content;
  background: #fafafa;
  border-radius: 0.8rem;
  padding: 4rem;
  justify-self: left;
  grid-column-gap: 1.6rem;
  grid-row-gap: 1rem;
  margin-top: 4rem;
  span {
    width: 0.8rem;
    height: 3.2rem;
    background-color: #f58016;
  }
  h3 {
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 3rem;
    color: #000000;
  }
  h5 {
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.5rem;
    color: #666666;
    grid-column: 1/-1;
    grid-row: 2;
    justify-self: right;
  }
`;
export const StyledLogo = styled.div`
  display: grid;
  position: relative;
  height: 40rem;
  width: 100%;
  align-self: center;

  img {
    object-fit: contain;
  }
`;
