import { Theme } from "@/styles/theme";
import styled from "styled-components";

export const StyledCallToAction = styled.div`
  display: grid;
  justify-items: center;
  margin: 20rem 20rem;
  p {
    font-size: 4.8rem;
    line-height: 8rem;
    font-weight: 600;
    color: ${Theme.colors.text};
    text-align: center;
  }
`;
