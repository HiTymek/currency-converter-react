import { StyledInformationWindowHeader, StyledInformationWindowContent } from "./styled";

const InformationWindow = ({ header, content }) => {
    return (
        <>
            <StyledInformationWindowHeader>{header}</StyledInformationWindowHeader>
            <StyledInformationWindowContent>{content}</StyledInformationWindowContent>
        </>
    );
};

export default InformationWindow;