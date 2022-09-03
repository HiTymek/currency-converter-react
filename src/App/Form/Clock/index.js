import { useEffect, useState } from 'react';

const Clock = () => {

    const currentTime = new Date();
    const currentTimeString = currentTime.toLocaleDateString("pl",
        {
            weekday: "long",
            day: "numeric",
            month: "long",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        }
    );

    const [clock, setClock] = useState(currentTimeString);

    useEffect(() => {

        const intervalId = setInterval(() => {
            setClock(clock => clock + 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };

    }, [clock]);

    return (
        <div className="form__clock">Dzisiaj jest {currentTimeString}</div>
    );
};

export default Clock;