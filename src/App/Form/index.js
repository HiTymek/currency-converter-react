import "./style.css";
import InputContainer from "./InputContainer";
import CurrencySelect from "./CurrencySelect";
import { currencies } from "../currencies";
import { useState } from "react";


const Form = ({ legend }) => {
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
        <form
            className="form"
            onSubmit={onFormSubmit}
        >

            <fieldset className="form__fieldset">
                <legend className="form__legend">{legend}</legend>

                <InputContainer label="WYBIERZ WALUTE">
                    <CurrencySelect
                        currencies={currencies}
                        currency={currency}
                        setCurrency={setCurrency}
                    />
                </InputContainer>

                <InputContainer label="WPISZ KWOTĘ W PLN">
                    <input
                        className="form__field"
                        type="number"
                        min="1"
                        step="0.1"
                        placeholder="Kwotę podaj w PLN"
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                    />
                </InputContainer>

                <InputContainer label="WYNIK : ">
                    <strong>
                        {result && `${result.amount} PLN = ${result.finalResult} ${result.currency}`}
                    </strong>
                </InputContainer>

                <p className="form__paragraph form__paragraph--centred">
                    <button className="form__button">PRZELICZ</button>
                </p>

            </fieldset>

        </form>
    );
};

export default Form;