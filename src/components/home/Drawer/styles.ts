import styled from "@emotion/styled";

export const StyledDrawer = styled.div`
  display: grid;
  height: 100vh;
  width: 50rem;
  background: linear-gradient(158.71deg, #253e5e 1.17%, #1a4a87 97.75%);
  grid-auto-rows: max-content;
  padding: 8rem 5rem;
  justify-items: left;
  grid-row-gap: 4rem;
  h1 {
    font-size: 3.2rem;
    font-weight: bold;
    color: white;
    margin-bottom: 4rem;
  }
`;

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
    background-color: white;
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
