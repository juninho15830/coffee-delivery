import styled from "styled-components";

export const CheckoutContainer = styled.section`
    margin: auto;
    max-width: 72rem;
    margin-bottom: 2rem;
`

export const FormContainer = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: auto;
    padding: 0 1rem;
    gap: 2rem;

    > div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    > div > span {
        font-family: "Baloo 2", sans-serif;
        font-size: 1.25rem;
        font-weight: bold;
    }
`

export const AddressContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 40rem;
    padding: 2.5rem;
    gap: 2rem;
    background-color: ${({ theme }) => theme.colors['gray-200']};
    border-radius: 6px;

    @media (max-width: 680px) {
        padding: 1.5rem;
    }
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
  display: grid;
  grid-template-areas:
    "cep . ."
    "rua rua rua"
    "numero complemento complemento"
    "bairro cidade uf";
  grid-template-columns: 14rem 15rem 3.5rem;
  gap: 1rem 1rem;

  #cep {
    grid-area: cep;
    width: 100%;
  }

  #road {
    grid-area: rua;
    width: 100%;
  }

  #number {
    grid-area: numero;
    width: 100%;
  }

  #complement {
    grid-area: complemento;
    width: 100%;
  }

  #neighborhood {
    grid-area: bairro;
    width: 100%;
  }

  #city {
    grid-area: cidade;
    width: 100%;
  }

  #state {
    grid-area: uf;
    width: 100%;
  }

  input {
    width: 100%;
    padding: 0.75rem;
    font-size: 0.75rem;
    border: 1px solid ${({ theme }) => theme.colors['gray-400']};
    background-color: ${({ theme }) => theme.colors['gray-300']};

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors['purple-500']};
    }
  }

  @media (max-width: 680px) {
    display: grid;
    grid-template-areas:
        "cep uf"
        "rua rua"
        "numero complemento"
        "bairro bairro"
        "cidade cidade"
        ;
    grid-template-columns: 12.5rem 1fr ;
    gap: 0.75rem 1rem;
  }

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`
export const ErrorMessage = styled.p`
  font-size: 0.75rem;
  color: red;
  margin: 0; 
`

export const PaymentContainer = styled(AddressContainer)``

export const PaymentHeadingContainer = styled(AddressHeadingContainer)``

export const PaymentButtonsContainer = styled.div`
    display: flex;
    gap: 0.5rem;

    input {
      display: none;
    }

    input:checked + label {
      background-color: ${({ theme }) => theme.colors['purple-100']};
      border-color: ${({ theme }) => theme.colors['purple-500']};
    }

    > label {
        display: flex;
        gap: 0.5rem;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 1rem;
        font-size: 0.75rem;
        border: solid 1px transparent;
        border-radius: 4px;
        background-color: ${({ theme }) => theme.colors['gray-400']};
        transition: all 0.2s;

        

        &:hover {
            cursor: pointer;
            border: solid 1px ${({ theme }) => theme.colors['purple-500']};
        }

        
    }
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 28rem;
    padding: 2.5rem;
    gap: 2rem;
    background-color: ${({ theme }) => theme.colors['gray-200']};
    border-radius: 6px 36px;

    @media (max-width: 1133px) {
        width: 100%;
        max-width: 40rem;
    }

    @media (max-width: 680px) {
        padding: 1.5rem;
    }
`

export const CheckContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: top;
    gap: 3rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors['gray-400']};
    padding-bottom: 2rem;

   > div {
    display: flex;
    gap: 1rem;
   }

   > div > div {
    display: flex;
    flex-direction: column;
    
    gap: 0.5rem;
   }

   > span {
    font-weight: bold;
   }
`

export const ButtonsCheckContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`

export const CounterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.colors['gray-400']};
    border-radius: 6px;
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

export const ButtonRemoverContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors['gray-400']};
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors['gray-500']};
  }
`

export const ConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > div {
    display: flex;
    justify-content: space-between;
  }

  > div > p {
    font-size: 0.875rem;
  }

  > div > span {
    font-size: 1.25rem;
    font-weight: bold;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 0.875rem;
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 4px;
    border: none;
    background-color: ${({ theme }) => theme.colors['yellow-500']};
    color: ${({ theme }) => theme.colors.white};
    transition: all 0.2s;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors['yellow-900']};
    }
  }
`

export const LayoutResponsiveContainer = styled.div`
  @media (max-width: 1133px) {
    width: 40rem;
  }
`