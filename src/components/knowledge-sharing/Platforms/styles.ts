import styled from "@emotion/styled";

export const StyledPlatforms = styled.div`
  display: grid;
  padding: 5rem;
  margin-bottom: 20rem;
`;

export const StyledPlatformsTitle = styled.div`
  display: grid;
  margin: 6rem 0;
`;

export const StyledPlatformsItem = styled.div<{
  color: string;
}>`
  display: grid;
  background: #fafafa;
  border-bottom: 10px solid ${({ color }) => color};
  border-radius: 8px;
  text-align: center;
  margin-bottom: 20rem;
  justify-items: center;

  h2 {
    font-weight: 700;
    font-size: 4rem;
    line-height: 5rem;
    color: ${({ color }) => color};
    margin-top: 8rem;
  }

  h5 {
    max-width: 70%;
    margin-top: 3.5rem;
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.5rem;
    margin-bottom: 4.6rem;

    color: #333333;
  }
`;

export const StyledActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  margin-bottom: 6.8rem;
  width: 60%;
`;

export const StyledAction = styled.div`
  display: grid;
  justify-items: center;
  gap: 2.2rem;
  h6 {
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 3rem;
    color: #000000;
  }
`;

export const StyledBanner = styled.div`
  display: grid;
  position: relative;
  height: 56rem;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  img {
    object-fit: cover;
  }
`;

export const StyledCollaborations = styled.div`
  display: grid;
  justify-items: center;
  max-width: 80%;
  text-align: center;
  justify-self: center;
  p {
    font-size: 2rem;
    font-weight: bold;
    line-height: 2.5rem;
  }
`;

export const StyledContact = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4.8rem;
  gap: 1rem;
  h6 {
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.5rem;
    color: #000000;
  }
  a {
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.5rem;
    color: #f58016;
  }
`;
