import { StyledCurrencySelect } from "./styled";

const CurrencySelect = ({ currencies, currency, setCurrency }) => (
    <StyledCurrencySelect
        value={currency}
        onChange={({ target }) => setCurrency(target.value)}
    >
        {currencies.map(currency => (
            <option
                key={currency.code}
                value={currency.name}
            >
                {currency.name}
            </option>
        ))}
    </StyledCurrencySelect>
);

export default CurrencySelect;