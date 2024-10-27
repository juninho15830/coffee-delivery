import styled from "styled-components";

export const FormContainer = styled.form`

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