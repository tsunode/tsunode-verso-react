import styled, { css } from "styled-components";

const ButtonStyled = {
    primary: css` 
        background: var(--color-primary);
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

export const Button = styled.button`
    ${({ variant }) => ButtonStyled[variant]}

    border: none;
    min-height: 48px;
    padding: 0 15px;
    border-radius: 6px;
    font-weight: 500;
`;