import styled, { css } from "styled-components";
import { Link as LinkRouter } from 'react-router-dom'

interface IButtonProps {
    variant: 'primary' | 'error' | 'inline' | 'icon';
    width?: string;
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
    icon: css`
        width: 50px;
        height: 50px;

        background: rgba(255,255,255, 0.1);
        box-shadow: 0px 4px 4px rgba(0,0,0, 0.1);
        border-radius: 50%;

        color: var(--color-text);
        font-size: 20px;
    `
}

const ButtonStyledDefault = css`
    min-height: 48px;
    padding: 0 15px;
    font-weight: 500;
`

export const Button = styled.button<IButtonProps>`
    ${({ variant }) => ButtonStyled[variant]}
    ${ButtonStyledDefault}

    width: ${({ width }) => width || '100%' } ;

    border-radius: 6px;
    border: none;
`;

export const Link = styled(LinkRouter)<IButtonProps>`
   text-decoration: none;
   border-radius: 6px;

   ${({ variant }) => ButtonStyled[variant]}
   ${ButtonStyledDefault}

   display: flex;
   justify-content: center;
   align-items: center;
`