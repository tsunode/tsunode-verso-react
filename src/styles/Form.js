import styled from "styled-components";

export const Form = styled.form`
    width: 400px;

    fieldset {
        position: relative;
        border-radius: 10px;
        padding: 32px 56px;
        border: 1px solid rgba(255, 255, 255, 0.2);

        legend {
            float: left;
            font-size: 20px;
            margin-bottom: 20px;
            width: 100%;
            text-align: center;

            display: flex;
            flex-direction: column;
            align-items: center;
        }

        button {
            margin-top: 15px;
        }

        div {
            /* width: 100% */
        }
    }
`