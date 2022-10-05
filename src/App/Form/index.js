import InputContainer from "./InputContainer";
import CurrencySelect from "./CurrencySelect";
import Clock from "./Clock";
import { useState } from "react";
import { StyledForm, Fieldset, Legend, Input, Button } from "./styled";
import { useRatesData } from "./useRatesData";

const Form = ({ legend }) => {

    const ratesData = useRatesData();

    const [currency, setCurrency] = useState("");
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult();
    };

    const calculateResult = () => {
        console.log(ratesData.rates[currency])
        const rate = ratesData.rates[currency];
        setResult({
            amount,
            finalResult: (+amount / rate).toFixed(2),
            currency: currency,
        });
    };

    return (
        <>
            {ratesData.state === "pending" ? <div></div>
                :
                <StyledForm
                    onSubmit={onFormSubmit}
                >
                    <Fieldset>
                        <Legend>{legend}</Legend>

                        <Clock />

                        <InputContainer label="WYBIERZ WALUTE">
                            <CurrencySelect
                                ratesData={ratesData}
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
            }

        </>
    );
};

export default Form;