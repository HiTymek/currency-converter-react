import { useEffect, useState } from 'react';
import { StyledClock } from "./styled";

const Clock = () => {

    const formatDate = (clock) => clock.toLocaleDateString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    const [clock, setClock] = useState(new Date());

    useEffect(() => {

        const intervalId = setInterval(() => {
            setClock(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };

    }, []);

    return (
        <StyledClock className="form__clock">
            Dzisiaj jest {formatDate(clock)}
        </StyledClock>
    );
};

export default Clock;