import styled from "styled-components";

export const GRID_SECTION_ROW_SIZE = 15;

export const Section = styled.section`
    ul {
        display: grid;
        grid-template-columns: repeat(auto-fill, 245px);
        grid-auto-rows: auto;
        grid-gap: 8px;

        list-style: none;
        justify-content: center;
    }
`;