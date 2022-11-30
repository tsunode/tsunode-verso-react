import styled from "styled-components";

interface IContainerProps {
  size: number;
}

export const Container = styled.figure<IContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  min-width: ${({ size }) => size}px;
  min-height: ${({ size }) => size}px;

  background-image: linear-gradient(to right, #02fe50, #49b866, #b1ffc6);
  
  img {
    width: ${({ size }) => size - 4}px;
    height: ${({ size }) => size - 4}px;
    border-radius: 50%;
  }
`