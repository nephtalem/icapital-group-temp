import styled from "@emotion/styled";

export const StyledButton = styled.button`
  border: none;
  outline: none;
  background: #f07709;
  border-bottom: 4px solid #9f4e03;
  border-radius: 8px;
  font-weight: 600;
  font-size: 2rem;
  line-height: 3rem;
  color: #ffffff;
  padding: 1.6rem 4rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  
  :disabled {
    opacity: 0.5;
  }
`;

export const StyledActionButton = styled.button<{
  color: string;
  border: string;
}>`
  border: none;
  outline: none;
  background: ${({ color }) => color};
  border-bottom: 4px solid ${({ border }) => border};
  border-radius: 8px;
  font-weight: 600;
  font-size: 2rem;
  line-height: 3rem;
  color: #ffffff;
  padding: 1.6rem 3rem;
  cursor: pointer;
  justify-items: center;
  justify-content: center;
  display: flex;
  align-items: center;
  gap: 2rem;

  svg {
    height: 2rem;
  }
`;
