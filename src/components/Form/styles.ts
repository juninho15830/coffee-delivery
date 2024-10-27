import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    flex-wrap: wrap;
    max-width: 72rem;
    margin: auto;
    padding: 0 1rem;
    gap: 1.5rem;

    > div > span {
        font-family: "Baloo 2", sans-serif;
        font-size: 1.25rem;
        font-weight: bold;
    }
`
export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 40rem;
`

export const CampInputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 40rem;
    padding: 2rem;
    background-color: ${({ theme }) => theme.colors['gray-200']};
    border-radius: 6px;

    > div {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 0.75rem;
    }

    > div:last-child {
        margin-bottom: 0;
    }

    > div > div {
        display: flex;
        flex-direction: column;
        padding-top: 0.25rem;
        gap: 0.5rem;
    }

    span {
        color: ${({ theme }) => theme.colors['gray-800']};
    }

    p {
        font-size: 0.875rem;
    }

    button {
        padding: 1rem;
        font-size: 0.875rem;
        border-radius: 6px;
        border: none;
        background-color: ${({ theme }) => theme.colors['gray-400']};
    }
`

export const CounterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.colors['gray-500']};
    border-radius: 6px;
    margin-left: 1.5rem;
    display: flex;
    gap: 0.25rem;
    width: 4.5rem;

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