import { StyledInputContainer, Label } from "./styled";

const InputContainer = ({ label, children }) => (
    <StyledInputContainer>
        <Label>{label}</Label>
        {children}
    </StyledInputContainer>
);

export default InputContainer;