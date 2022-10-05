import axios from "axios";
import { useState, useEffect } from 'react';

export const useRatesData = () => {

    const [ratesData, setRatesData] = useState({
        state: "pending",
    });

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");
                const rates = response.data.rates;
                const date = response.data.date;
                setRatesData({
                    state: "succes",
                    rates,
                    date,
                });
            } catch (error) {
                setRatesData({
                    state: "error",
                });
                console.error("Something went wrong!", error);
            }
        };

        setTimeout(getData, 1000);
    }, []);

    return ratesData;
};