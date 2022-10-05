import { StyledCurrencySelect } from "./styled";

const CurrencySelect = ({ ratesData, currency, setCurrency }) => {

    return (
        <StyledCurrencySelect
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
        >
            {
                Object.keys(ratesData.rates).map(currency => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))
            }
        </StyledCurrencySelect>
    );
};



export default CurrencySelect;
