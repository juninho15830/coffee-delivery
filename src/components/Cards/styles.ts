import styled from "styled-components"

export const CardContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    text-align: center;
    padding: 7rem 1rem 1rem;
    height: 19rem;
    width: 16rem;
    background-color: ${props =>props.theme.colors['gray-200']};
    border-radius: 8px 30px 8px 30px;
    
    > img {
        position: absolute;
        top: -6%;
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
    padding-top: 0.5rem;
    display: flex;
    margin-top: 1rem;
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

    > div > button {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${props =>props.theme.colors.white};
        background-color: ${props =>props.theme.colors['purple-900']};
        padding: 0.5rem;
        border-radius: 6px;
        border: none;


        &:hover {
            cursor: pointer;
            background-color: ${props =>props.theme.colors['purple-500']};
            transition: 0.2s;
        }
    }
` 

export const CounterContainer = styled.div`
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.colors['gray-500']};
    border-radius: 6px;
    margin-left: 1.5rem;
    display: flex;
    gap: 0.25rem;

    button {
        background-color: transparent;
        display: flex;
        align-items: center;
        border: none;
    }

    button {
        color: ${({ theme }) => theme.colors['purple-500']};

        transition: all 0.2s;

        &:hover {
        color: ${({ theme }) => theme.colors['purple-900']};
        cursor: pointer;
        }
    }

    span {
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.colors['gray-800']};
    }
`