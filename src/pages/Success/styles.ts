import styled from "styled-components"

export const SuccessContainer = styled.main`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 72rem;
    margin: auto;
    padding: 6rem 1rem;
    gap: 2rem;

    section {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    img {
        width: 100%;
        max-width: 30rem;
    }

    @media (max-width: 980px) {
        flex-wrap: wrap;
        justify-content: center;
    }
    `

export const HeadingContainer = styled.article`
    display: flex;
    flex-direction: column;

    h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors['yellow-900']};
    }

    p {
        font-size: 1.25rem;
    }
`

export const CheckContainer = styled.article`
    display: flex;
    gap: 2rem;
    flex-direction: column;
    padding: 2.5rem;
    max-width: 34.5rem;
    font-size: 0.875rem;
    border-radius: 8px 36px;
    background: linear-gradient(to right, #DBAC2C, #8047F8);
    padding: 2.5rem;

    position: relative;
    z-index: 1;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 2px;
        left: 2px;
        right: 2px;
        bottom: 2px;
        border-radius: 6px 34px;
        padding: 1px;
        background: #fff;
        z-index: -1;
    }

    > div {
        display: flex;
        gap: 0.5rem;
        align-items: center;

        svg {
            border-radius: 100%;
            padding: 0.5rem;
        }

        div {
            display: flex;
            flex-direction: column;
        }
    }

    span {
        font-weight: bold;
    }

    @media (max-width: 580px) {
        gap: 1rem;
        padding: 1.75rem;
    }
`