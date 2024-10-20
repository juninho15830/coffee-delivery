import { styled } from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 6.5rem;
    max-width: 72rem;
    margin: auto;
    padding: 0 1rem;

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
            color: ${props =>props.theme['purple-500']};
            background-color: ${props =>props.theme['purple-100']};
            border: none;
            border-radius: 6px;
            height: 2.5rem;
        }

        button:hover {
            cursor: pointer;
        }
    }
`
export const CartContainer = styled.a`
    color: ${props =>props.theme['yellow-900']};
            background-color: ${props =>props.theme['yellow-100']};
            padding: 0.5rem;
            border-radius: 6px;
            height: 2.5rem;
            position: relative;

            span {
                display: flex;
                position: absolute;
                top: -0.5rem;
                right: -0.5rem;
                color:  ${props =>props.theme.white};
                background-color: ${props =>props.theme['yellow-900']};
                padding: 0.25rem;
                border-radius: 100%;
                font-size: 0.75rem;
                width: 1.25rem;
                height: 1.25rem;
                align-items: center;
                justify-content: center;
                font-weight: bold;
            }
`