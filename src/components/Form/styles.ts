import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    flex-wrap: wrap;
    max-width: 72rem;
    width: 100%;
    margin: auto;
    padding: 0 1rem;
    gap: 1.5rem;

    > div > span {
        font-family: "Baloo 2", sans-serif;
        font-size: 1.25rem;
        font-weight: bold;
    }
`

export const AddressContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 40rem;
    width: 100%;
    padding: 2rem;
    gap: 1rem;
    background-color: ${({ theme }) => theme.colors['gray-200']};
    border-radius: 6px;
`

export const AddressHeadingContainer = styled.div`
    display: flex;
    gap: 1rem;
    line-height: 1.5rem;

    p {
        font-size: 0.875rem;
    }
`

export const AddressForm = styled.div`
    .cep {
        grid-area: cep;
    }

    .rua {
        grid-area: rua;
    }

    .numero {
        grid-area: numero;
    }

    .complemento {
        grid-area: complemento;
    }

    .bairro {
        grid-area: bairro;
    }

    .cidade {
        grid-area: cidade;
    }

    .uf {
        grid-area: uf;
    }



    display: grid;
    grid-template-areas:
        'cep . . '
        'rua rua rua'
        'numero complemento complemento'
        'bairro cidade uf';
    grid-template-columns: 12.5rem 1fr 3.5rem;
    grid-gap: 1rem 0.875rem;
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