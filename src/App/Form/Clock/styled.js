import styled from "styled-components";

export const StyledClock = styled.div`
    padding: 10px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.doveGray};
    text-align: center;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
      font-size: 12px;
    };
`;