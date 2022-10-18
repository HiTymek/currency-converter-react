import { StyledInfoContainer, StyledInfo } from "./styled";

const Info = ({ updateDate }) => {
    return (
        <StyledInfoContainer>
            <StyledInfo>
                Kursy walut pobierane są z Europejskiego Banku Centralnego
                <br></br>Aktualne na dzień: <strong>{updateDate}</strong>
            </StyledInfo>
        </StyledInfoContainer>
    );
};

export default Info;