import styled from 'styled-components';

interface IStepsProps {
  step: number;
}

export const Steps = styled.div<IStepsProps>`
  display: flex;
  justify-content: center;
  width: 100%;

  div {
    width: 12px;
    height: 12px;
    background-color: #fff;
    margin: 5px;
    border-radius: 50%;
  }

  div:nth-child(${({ step }) => step}) {
    background-color: var(--color-primary);
  }
`;
