import styled, { css, keyframes } from "styled-components";
import { IContainerProps } from './types';

const ToastTypeVariations = {
    success: css`
        background-color: var(--color-success);
    `,
    error: css`
        background-color: var(--color-error);
    `,
    warning: css`
        background-color: var(--color-warning);
    `
}

const translateXAnimationFrom = keyframes`
    0% {
       background: transparent;
       transform: translateX(120%);
    }
    75% {
        transform: translateX(-20px);
    }
    100% {
        transform: translateX(0);
    }
`;

const translateXAnimationLeave = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        background: transparent;
        transform: translateX(120%);
    }
`;

export const Container = styled.div<IContainerProps>`
    display: flex;
    align-items: center;
    position: relative;

    width: 360px;

    
    ${({ type }) => ToastTypeVariations[type]}

    ${({ isLeave }) => 
        css`animation: ${isLeave ? translateXAnimationLeave : translateXAnimationFrom} 0.8s;`
    }

    animation-fill-mode: forwards;

    margin: 20px 22px 0;
    padding: 16px 30px 16px 16px;
    border-radius: 10px;
    color: #000;

    > svg {
        margin: 4px 12px 0 0;
    }

    ${({ hasDescription }) => 
        !hasDescription && 
        css`
            align-items: center;

            svg {
                margin-top: 0;
            }
        `
    }

    > div {
        strong {
            font-weight: bold;
        }

        p {
            margin-top: 4px;
            font-size: 14px;
        }
    }

    button {
        position: absolute;
        right: 10px;
        top: 10px;
        background: transparent;
        border: 0;
        color: inherit;
    }
`;