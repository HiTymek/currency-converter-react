import InputContainer from "./InputContainer";
import CurrencySelect from "./CurrencySelect";
import Clock from "./Clock";
import { currencies } from "../currencies";
import { useState, useEffect } from "react";
import { StyledForm, Fieldset, Legend, Input, Button } from "./styled";
import axios from "axios";

const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "pending",
    });

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("https://api.exchangerate.host/latest");
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
                console.log("Something went wrong", error);
            }
        };

        setTimeout(getData, 1000);

    }, []);

    return ratesData;
};


const Form = ({ legend }) => {

    const ratesData = useRatesData();

    const [currency, setCurrency] = useState(currencies[0].name);
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult();
    };

    const calculateResult = () => {
        const rate = currencies.find(({ name }) => name === currency).exchangeRate;
        setResult({
            amount,
            finalResult: (+amount / rate).toFixed(2),
            currency: currencies.find(({ name }) => name === currency).code,
        });
    };

    return (
        <StyledForm
            onSubmit={onFormSubmit}
        >

            <Fieldset>
                <Legend>{legend}</Legend>

                <Clock />

                <InputContainer label="WYBIERZ WALUTE">
                    <CurrencySelect
                        currencies={currencies}
                        currency={currency}
                        setCurrency={setCurrency}
                    />
                </InputContainer>

                <InputContainer label="WPISZ KWOTĘ W PLN">
                    <Input
                        type="number"
                        min="1"
                        step="0.01"
                        placeholder="Kwotę podaj w PLN"
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                    />
                </InputContainer>

                <InputContainer label="WYNIK">
                    <strong>
                        {result && `${result.amount} PLN = ${result.finalResult} ${result.currency}`}
                    </strong>
                </InputContainer>

                <InputContainer label="PRZELICZ ILE DOSTANIESZ">
                    <Button>PRZELICZ</Button>
                </InputContainer>

            </Fieldset>

        </StyledForm>
    );
};

export default Form;