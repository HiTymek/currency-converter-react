import styled from "styled-components";

export const StyledCurrencySelect = styled.select`
    border: 1px solid ${({ theme }) => theme.colors.teal};
    width: 230px;
    border-radius: 5px;
    padding: 3px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
      padding: 1px;
      width: 200px;
    };
`;