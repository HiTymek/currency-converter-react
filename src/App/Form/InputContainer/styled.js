import styled from "styled-components";

export const StyledInputContainer = styled.p`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    padding: 10px;
    text-align: center;
    font-weight: 700;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
      margin: 8px 0;  
    };
`;

export const Label = styled.label`
    align-self: center;
    justify-self: left;
    text-align: left;
    color:${({ theme }) => theme.colors.mineShaft};
    font-weight: 700;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
      font-size: 12px;  
    };
`;