import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
    const formatDate = (date) => date.toLocaleDateString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    const date = useCurrentDate();

    return (
        <StyledClock>
            Dzisiaj jest {formatDate(date)}
        </StyledClock>
    );
};

export default Clock;