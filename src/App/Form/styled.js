import styled from "styled-components";

export const StyledForm = styled.form`
    max-width: 700px;
    margin: 0 auto;
`;

export const Fieldset = styled.fieldset`
    border: 3px solid ${({ theme }) => theme.colors.teal};
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 0px 10px 1px hsl(180, 100%, 30%);
`;

export const Legend = styled.legend`
    background-color: ${({ theme }) => theme.colors.teal};
    color: ${({ theme }) => theme.colors.gallery};
    border-radius: 5px;
    padding: 15px;
    margin: 0 auto;
    font-size: 18px;
`;

export const Input = styled.input`
    border: 1px solid ${({ theme }) => theme.colors.teal};
    width: 230px;
    border-radius: 5px;
    padding: 3px;
`;

export const Button = styled.button`
    width: 180px;
    background-color: ${({ theme }) => theme.colors.teal};
    color: ${({ theme }) => theme.colors.gallery};
    border-radius: 5px;
    padding: 15px;
    border: none;

    &:hover{
        background-color: ${({ theme }) => theme.colors.blueStone};
        cursor: pointer;
    }
`;
