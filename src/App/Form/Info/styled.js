import styled from "styled-components";

export const StyledInfoContainer = styled.div`
    text-align:center;
`;

export const StyledInfo = styled.p`
    color: ${({ theme }) => theme.colors.mineShaft};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
      font-size: 12px;  
    };
`;