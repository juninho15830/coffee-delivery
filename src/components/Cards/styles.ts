import styled from "styled-components"

export const CardContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    text-align: center;
    padding: 8rem 1rem 1rem;
    height: 20rem;
    width: 16rem;
    background-color: ${props =>props.theme.colors['gray-200']};
    border-radius: 8px 30px 8px 30px;
    
    > img {
        position: absolute;
        top: -5%;
    }

    > span {
        font-size: 0.625rem;
        color: ${props =>props.theme.colors['yellow-900']};
        background-color: ${props =>props.theme.colors['yellow-100']};
        padding: 0.25rem 0.5rem ;
        border-radius: 0.6rem;
    }

    h3 {
        font-family: "Baloo 2", sans-serif;
        font-size: 1.25rem;
    }

    p {
        font-size: 0.875rem;
        color: ${props =>props.theme.colors['gray-600']};
    }
`

export const ControlContainer = styled.div`
    display: flex;
    gap: 0.5rem;

    p > span {
        font-family: "Baloo 2", sans-serif;
        font-weight: bolder;
        font-size: 1.5rem;
        color: ${props =>props.theme.colors['gray-700']};
    }

    div {
        display: flex;
        gap: 0.5rem;
    }

    input {
        width: 5.5rem;
    }

    div > button {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${props =>props.theme.colors.white};
        background-color: ${props =>props.theme.colors['purple-900']};
        padding: 0.5rem;
        border-radius: 6px;
        height: 2.5rem;
        border: none;
    }

    div > button:hover {
        cursor: pointer;

    }
` 