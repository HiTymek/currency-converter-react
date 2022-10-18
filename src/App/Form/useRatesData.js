import { useState, useEffect } from 'react';
import axios from "axios";

export const useRatesData = () => {

    const [ratesData, setRatesData] = useState({
        state: "pending",
    });

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");
                const date = response.data.date;
                const rates = response.data.rates;
                setRatesData({
                    state: "succes",
                    date,
                    rates,
                });
            } catch (error) {
                setRatesData({
                    state: "error",
                });
                console.error("Something went wrong!", error);
            }
        };

        setTimeout(getData, 100000);
    }, []);

    return ratesData;
};