import { StyledHeader } from "@/components/shared/Header/styles";
import styled from "styled-components";
export const StyledContent = styled.div<{ $scrollable: boolean }>`
  display: grid;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;

  ${StyledHeader} {
    position: ${({ $scrollable }) => ($scrollable ? "relative" : "sticky")};
  }
`;
