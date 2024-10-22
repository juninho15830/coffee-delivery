import styled from "styled-components";

export const HeroContainer = styled.section`
    position: relative;

    img#hero-bg {
        inset: 0px;
        position: absolute;
        background: fixed;
        width: 100vw;
        object-fit: cover;
        height: 40rem;
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
        display: flex;
        margin-top: 4rem;
        max-width: 36rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.25rem 2.5rem;

        div {
            display: flex;
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
`