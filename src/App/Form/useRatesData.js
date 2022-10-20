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
                const { date, rates } = response.data;
                setRatesData({
                    state: "succes",
                    date,
                    rates,
                });
            } catch (error) {
                setRatesData({
                    state: "error",
                });
            }
        };

        setTimeout(getData, 1000);
    }, []);

    return ratesData;
};