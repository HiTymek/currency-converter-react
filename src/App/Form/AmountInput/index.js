import "./style.css";

const AmountInput = ({ amount, setAmount }) => (
    <input
        className="form__field"
        type="number"
        min="1"
        step="0.1"
        placeholder="Kwotę podaj w PLN"
        value={amount}
        onChange={({ target }) => setAmount(target.value)}
    />
);

export default AmountInput;