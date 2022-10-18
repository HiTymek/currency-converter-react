import InputContainer from "./InputContainer";
import CurrencySelect from "./CurrencySelect";
import Clock from "./Clock";
import Info from "./Info";
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
                ratesData.state === "succes" ?
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
                                    {result && `${result.amount} ${result.currency} = ${result.finalResult} PLN`}
                                </strong>
                            </InputContainer>

                            <InputContainer label="PRZELICZ ILE DOSTANIESZ">
                                <Button>PRZELICZ</Button>
                            </InputContainer>

                            <Info updateDate={ratesData.date}></Info>

                        </Fieldset>

                    </StyledForm>
                    : <div></div>

            }



        </>
    );
};

export default Form;