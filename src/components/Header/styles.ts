import styled from "styled-components";

export const Container = styled.header`
    max-height: 120px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: sticky;
    top: 0;
    z-index: 1001;
    padding: 24px 18px 20px 18px;

    background: linear-gradient(
        250deg,
        var(--color-secondary) -12%,
        var(--color-tertiary) 114%
    );
    box-shadow: 0px 4px 29px rgba(0, 0, 0, 0.16);

    img {
       max-height: 60px;
    }

    form {
        width: 45%;
    }

    > div:nth-last-of-type(1) {
        display: flex;
        align-items: center;
        
        figure {
            margin-left: 16px;
        }
    }
`;