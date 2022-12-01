import styled from "styled-components";

interface IFormStepProps {
    step: number
}


export const FormStep = styled.form<IFormStepProps>`
    --selected-item: ${({ step }) => step - 1};
    --total-items: 2;

    max-width: 400px;

    fieldset {
        position: relative;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        margin: 25px auto;
        overflow: hidden;

        legend {
            float: left;
            font-size: 20px;
            margin: 20px 0;
            width: 100%;
            text-align: center;
        }

        > div.steps-container {
            margin: 10px 0;

            position: relative;
            display: grid;
            grid-auto-flow: column;
            grid-auto-columns: 1fr;
            left: calc(var(--selected-item) * -100%);
            width: calc(100% * var(--total-items));
            transition: left 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);

            > div {
                padding: 0 32px;
                margin-right: 30px;
                width: 100%;
                
                > button {
                    margin-top: 15px;
                }
            }
        }

    }

    p {
        text-align: center;
        margin: 18px 0;
    }
`