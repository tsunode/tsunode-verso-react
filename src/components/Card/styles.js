import styled from "styled-components";

export const Container = styled.li`
    grid-row-end: span ${({ size }) => size};
    width: 230px;

    background: linear-gradient(
        180deg,
        rgba(255,255,255, 0.1) -6%,
        rgba(255, 255, 255, 0) 115%
    );
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 8px;

    > a {
        text-decoration: none;
        color: #fff;
    }
    
    > a > div:nth-of-type(1) {
        position: relative;
        
        p {
            position: absolute;
            bottom: 0;
            padding: 16px 12px;
        }
        
        img {
            border-radius: 16px;
            width: 100%;
        }

        ::before {
            content: '';
            position: absolute;
            height: 100%;
            width: 100%;
            border-radius: 16px;

            background: linear-gradient(180deg, rgba(31, 31, 31, 0.05) -32%, rgba(0, 0, 0, 0.96) 92%);
        }
    }

    > a > div:nth-of-type(2) { 
        display: flex;
        align-items: center;
        gap: 6px;
        
        margin-top: 8px;

        span {
            font-family: 'Inter';
        }
    }
`