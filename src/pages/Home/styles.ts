import styled from "styled-components";

export const HeroContainer = styled.section`
    position: relative;

    img#hero-bg {
        inset: 0px;
        position: absolute;
        background: fixed;
        width: 100vw;
        object-fit: cover;
        height: 36rem;
        z-index: -20;
    }
`

export const HeroContent = styled.article`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 72rem;
    margin: auto;
    padding: 6rem 1rem 6rem;

    h1 {
        font-size: 3rem;
        font-family: "Baloo 2", sans-serif;
        line-height: 3.75rem;
    }

    p {
        font-size: 1.25rem;
        line-height: 1.75rem;
        margin-top: 1rem;
    }

    article > div:last-child {
        margin-top: 4rem;
        max-width: 36rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.25rem 2.5rem;

        div {
            display: flex;
        }
    }

    @media (max-width: 1151px) {
        display: flex;
        flex-direction: column;
        padding-bottom: 3rem;

        h1 {
            font-size: 3rem;
            font-family: "Baloo 2", sans-serif;
            line-height: 3.75rem;
            max-width: 30rem;
        }

        img {
            margin-top: 3rem;
        }
    }

    @media (max-width: 480px) {
        > img {
            margin-top: 3rem;
            width: 40rem;
            max-width: 20rem;
        }
    }
`

export const InfoContainer = styled.div`
    display: flex;
    margin-top: 4rem;
    max-width: 36rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem 2.5rem;

    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    svg {
        border-radius: 100%;
        padding: 0.5rem;
    }

    @media (max-width: 480px) {
        display: flex;
        flex-wrap: wrap;
    }
`
export const CardsContainer = styled.section`
    margin: 2rem auto;
    max-width: 72rem;
    padding: 0 1rem;

    h2 {
        font-family: "Baloo 2", sans-serif;
        font-size: 2rem;
        margin-bottom: 3rem;
    }

    article {
        display: flex;
        flex-wrap: wrap;
        row-gap: 5rem;
        column-gap: 2rem;
        max-width: 72rem;
    }
`