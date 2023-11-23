import styled from "styled-components";

export const StyledDrawerItem = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  grid-column-gap: 2.8rem;
  position: relative;
  transition: all 0.3s ease-in-out;
  span {
    position: absolute;
    height: 0.2rem;
    width: 0;
    bottom: -1rem;
    left: 0;
  }

  p {
    font-size: 2.4rem;
    font-weight: 500;
    color: white;
  }
  svg {
    height: 1.6rem;
  }
  :hover {
    p {
      color: #f07709;
    }
    span {
      background-color: #f07709;
    }
    svg {
      path {
        fill: #f07709;
      }
    }
  }
`;
