import { styled } from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 6.5rem;
    max-width: 72rem;
    margin: auto;
    padding: 0 1rem;

    > a {
        transition-duration: 0.3s;
    }

    > a:hover {
        transform: scale(110%);

    }

    div {
        display: flex;
        align-items: center;
        gap: .75rem;
        

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            gap: 0.25rem;
            color: ${props =>props.theme.colors['purple-500']};
            background-color: ${props =>props.theme.colors['purple-100']};
            border: none;
            border-radius: 6px;
            height: 2.5rem;
            transition: 0.4s;

            &:hover {
                cursor: pointer;
                background-color: ${props =>props.theme.colors['purple-500']};
                color: ${props =>props.theme.colors['purple-100']};
            }
        }
    }
`
export const CartContainer = styled.a`
    color: ${props =>props.theme.colors['yellow-900']};
    background-color: ${props =>props.theme.colors['yellow-100']};
    padding: 0.5rem;
    border-radius: 6px;
    height: 2.5rem;
    position: relative;
    transition: 0.4s;

    &:hover {
        background-color: ${props =>props.theme.colors['yellow-900']};
        color: ${props =>props.theme.colors['yellow-100']};

        span {
            color: ${props =>props.theme.colors['yellow-900']};
            background-color: ${props =>props.theme.colors['yellow-100']};
            transition: 0.4s;
            border: solid 1px;
            border-color:  ${props =>props.theme.colors['yellow-900']};;
        }
    }

    span {
        display: flex;
        position: absolute;
        top: -0.5rem;
        right: -0.5rem;
        color:  ${props =>props.theme.colors.white};
        background-color: ${props =>props.theme.colors['yellow-900']};
        padding: 0.25rem;
        border-radius: 100%;
        font-size: 0.75rem;
        width: 1.25rem;
        height: 1.25rem;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        transition: 0.4s;
    }
`