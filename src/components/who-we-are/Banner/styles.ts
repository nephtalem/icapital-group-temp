import styled from "@emotion/styled";
import { breakingPoints } from "@/styles/breaking.points";

export const StyledBanner = styled.div`
  display: grid;
  height: 60rem;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  margin: 7rem 5rem;

  img {
    object-fit: cover;
  }
  ${breakingPoints.mobile} {
    height: 30rem;
    border-radius: 0;
    margin: 0;
    img {
      object-position: left;
    }
  }
`;
