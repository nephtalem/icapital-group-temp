import { breakingPoints } from "@/styles/breaking.points";
import { Theme } from "@/styles/theme";
import styled from "styled-components";

export const StyledHtml = styled.div`
  strong,
  a {
    color: ${Theme.colors.accent};
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }
`;

export const StyledHtmlTitle = styled.div`
  font-size: 4rem;
  font-weight: 900;
  color: ${Theme.colors.text};
  strong {
    color: ${Theme.colors.accent};
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }

  ${breakingPoints.mobile} {
    font-size: 2.8rem;
  }
`;
