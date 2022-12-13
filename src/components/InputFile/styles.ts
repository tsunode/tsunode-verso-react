import styled, { css } from "styled-components";
import { IContainerProps } from './types';

export const Container = styled.div<IContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    min-width: 200px;
    min-height: 200px;

    position: relative;
    background: rgba(255,255,255,0.01);

    border: 1px dashed #524159;
    border-radius: 10px;
    margin: 30px 0;

    font-size: 18px;

    ${
        ({ isDragging }) => 
        isDragging && 
        css`
            border: 2px solid var(--color-primary);
            color: var(--color-primary);
        `
    }

    input {
        position: absolute;
        opacity: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    label {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    p {
        font-size: 14px;
        margin-top: 10px;
    }

    img {
        max-width: 80%;
        max-height: 80%;
    }
`