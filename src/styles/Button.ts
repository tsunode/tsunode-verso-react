import styled, { css } from "styled-components";
import { Link as LinkRouter } from 'react-router-dom'


interface IButtonProps {
    variant: 'primary' | 'error' | 'inline';
}

const ButtonStyled = {
    primary: css` 
        background: var(--color-primary);
        color: #000;
        padding: 0 15px;
    `,
    error: css`
        background: var(--color-error);
    `,
    inline: css`
        background: none;
        color: var(--color-text);
        text-decoration: underline;
    `,
}

const ButtonStyledDefault = css`
    min-height: 48px;
    padding: 0 15px;
    border-radius: 6px;
    font-weight: 500;
`

export const Button = styled.button<IButtonProps>`
    ${({ variant }) => ButtonStyled[variant]}
    ${ButtonStyledDefault}

    width: 100%;

    border: none;
`;

export const Link = styled(LinkRouter)<IButtonProps>`
   text-decoration: none;
   ${({ variant }) => ButtonStyled[variant]}
   ${ButtonStyledDefault}

   display: flex;
   justify-content: center;
   align-items: center;

`