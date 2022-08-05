import "./style.css";
import Paragraph from "./Paragraph";
import CurrencySelect from "./CurrencySelect";
import AmountInput from "./AmountInput";
import CountButton from "./CountButton";
import { currencies } from "../currencies";
import { useState } from "react";


const Form = ({ legend }) => {
    const [currency, setCurrency] = useState("");

    return (
        <form className="form">

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
                    <AmountInput />
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