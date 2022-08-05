import "./style.css";
import Paragraph from "./Paragraph";
import CurrencySelect from "./CurrencySelect";
import AmountInput from "./AmountInput";
import CountButton from "./CountButton";
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
            currency,
        });
    };

    return (
        <form
            className="form"
            onSubmit={onFormSubmit}
        >

            <fieldset className="form__fieldset">

                <legend className="form__legend">{legend}</legend>

                <Paragraph
                    label="WYBIERZ WALUTE"
                >
                    <CurrencySelect
                        currencies={currencies}
                        currency={currency}
                        setCurrency={setCurrency}
                    />
                </Paragraph>

                <Paragraph
                    label="WPISZ KWOTĘ W PLN"
                >
                    <AmountInput amount={amount} setAmount={setAmount} />
                </Paragraph>

                <Paragraph
                    label="WYNIK : "
                >
                    <strong></strong>
                </Paragraph>

                <Paragraph>
                    <CountButton />
                </Paragraph>

            </fieldset>

        </form>
    );
};

export default Form;