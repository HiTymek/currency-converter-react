import "./style.css";

const AmountInput = () => (
    <input
        className="form__field"
        type="number"
        min="1"
        step="0.1"
        placeholder="Kwotę podaj w PLN"
    />
);

export default AmountInput;