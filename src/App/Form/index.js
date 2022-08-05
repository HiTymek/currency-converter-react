import "./style.css";

const Form = ({ legend }) => {
    return (
        <form className="form">

            <fieldset className="form__fieldset">

                <legend className="form__legend">{legend}</legend>

                <p className="form__paragraph">
                    <label className="form__label">WYBIERZ WALUTE</label>
                    <select className="form__field">
                        <option>EUR</option>
                        <option>USD</option>
                        <option>GBP</option>
                        <option>CHF</option>
                        <option>UAH</option>
                    </select>
                </p>

                <p className="form__paragraph">
                    <label className="form__label">WPISZ KWOTĘ W PLN</label>
                    <input className="form__field" type="number" id="amount" min="1" step="0.1"
                        placeholder="Kwotę podaj w PLN" />
                </p>

                <p className="form__paragraph">WYNIK : <strong></strong></p>

                <p className="form__paragraph">
                    <button className="form__button">PRZELICZ</button>
                </p>

            </fieldset>

        </form>
    );
};

export default Form;